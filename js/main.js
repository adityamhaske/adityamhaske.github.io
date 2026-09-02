/**
 * Progressive enhancement for adityamhaske.github.io.
 *
 * The project and research tables are static markup in index.html — a crawler
 * (or a browser with JS off) sees every row without running any of this. What
 * follows only filters what is already on the page.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Projects: filter the rows already in the document. Rebuilding them from
    // an array would make the markup a second copy of the data and hide the
    // whole list from anything that does not execute JavaScript.
    const projectRows = Array.prototype.slice.call(document.querySelectorAll('.project-row'));
    const searchInput = document.getElementById('project-search');
    const countBadge = document.getElementById('project-count-badge');
    const filterBtns = document.querySelectorAll('#filter-tags .filter-btn');
    const noResults = document.getElementById('no-results');
    const projectTable = document.querySelector('.project-table');

    let currentCategory = 'all';
    let currentSearch = '';

    function applyProjectFilters() {
        if (!projectRows.length) return;
        const needle = currentSearch.trim().toLowerCase();
        let visible = 0;

        projectRows.forEach(row => {
            const matchesCategory = currentCategory === 'all' || row.dataset.category === currentCategory;
            // data-search is built at authoring time from the name, summary,
            // domain badge and stack, so matching never walks the DOM.
            const matchesSearch = !needle || (row.dataset.search || '').includes(needle);
            const show = matchesCategory && matchesSearch;
            row.classList.toggle('hidden', !show);
            if (show) visible++;
        });

        if (countBadge) {
            countBadge.textContent = `Showing ${visible} system${visible !== 1 ? 's' : ''}`;
        }
        if (noResults) noResults.classList.toggle('hidden', visible !== 0);
        if (projectTable) projectTable.classList.toggle('hidden', visible === 0);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            applyProjectFilters();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            applyProjectFilters();
        });
    });

    // Research Filters
    const researchFilterBtns = document.querySelectorAll('#research-filters .filter-btn');
    const researchRows = document.querySelectorAll('.research-row');
    const researchNoResults = document.getElementById('research-no-results');
    const researchTable = document.querySelector('.research-table');

    researchFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            researchFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterType = btn.dataset.type;
            let visibleCount = 0;
            
            researchRows.forEach(row => {
                if (filterType === 'all' || row.dataset.type === filterType) {
                    row.classList.remove('hidden');
                    visibleCount++;
                } else {
                    row.classList.add('hidden');
                }
            });

            if (visibleCount === 0) {
                researchNoResults.classList.remove('hidden');
                researchTable.classList.add('hidden');
            } else {
                researchNoResults.classList.add('hidden');
                researchTable.classList.remove('hidden');
            }
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = themeToggle.querySelector('.theme-label');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Check local storage for theme preference, default to 'light' if none
    const currentTheme = localStorage.getItem("theme") || "light";
    
    if (currentTheme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        if(themeLabel) themeLabel.textContent = "Light";
    }

    themeToggle.addEventListener("click", function() {
        let theme = "light";
        if (document.documentElement.getAttribute("data-theme") != "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            if(themeLabel) themeLabel.textContent = "Light";
            theme = "dark";
        } else {
            document.documentElement.removeAttribute("data-theme");
            if(themeLabel) themeLabel.textContent = "Dark";
            theme = "light";
        }
        localStorage.setItem("theme", theme);
    });

    // GitHub Contributions Calendar
    async function initGitHubCalendar(username = 'adityamhaske', year = 2026) {
        const calendarEl = document.getElementById('github-calendar') || document.querySelector('.calendar');
        if (!calendarEl) return;

        const cacheKey = `github-contributions-${username}-${year}`;
        const cachedData = localStorage.getItem(cacheKey);

        function renderCalendar(data) {
            const contributions = data.contributions;
            if (!contributions || contributions.length === 0) return;

            const total = data.total && data.total[year] !== undefined
                ? data.total[year]
                : contributions.reduce((s, c) => s + (c.count || 0), 0);

            // Update live contributions count on the hero stat card
            const heroContribEl = document.getElementById('hero-stat-contributions');
            if (heroContribEl && total > 0) {
                heroContribEl.textContent = `${total.toLocaleString()}+`;
            }

            // Group into 7-day weeks (Sun=0 .. Sat=6)
            const weeks = [];
            let currentWeek = [];
            const firstDate = new Date(contributions[0].date + "T00:00:00Z");
            const firstDayOfWeek = firstDate.getUTCDay();

            for (let i = 0; i < firstDayOfWeek; i++) {
                currentWeek.push(null);
            }

            for (const day of contributions) {
                const d = new Date(day.date + "T00:00:00Z");
                if (d.getUTCDay() === 0 && currentWeek.length > 0) {
                    weeks.push(currentWeek);
                    currentWeek = [];
                }
                currentWeek.push(day);
            }
            if (currentWeek.length > 0) {
                while (currentWeek.length < 7) currentWeek.push(null);
                weeks.push(currentWeek);
            }

            // Determine month label positions
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthLabels = [];
            let lastMonth = -1;
            weeks.forEach((week, wIdx) => {
                const firstValidDay = week.find(d => d !== null);
                if (firstValidDay) {
                    const month = parseInt(firstValidDay.date.split("-")[1], 10) - 1;
                    if (month !== lastMonth) {
                        monthLabels.push({ name: monthNames[month], weekIndex: wIdx });
                        lastMonth = month;
                    }
                }
            });

            // Build SVG markup
            let svg = `<div class="calendar-graph"><svg class="js-calendar-graph-svg" width="100%" viewBox="0 0 740 125" style="overflow: visible;">\n`;
            svg += `  <g transform="translate(26, 20)">\n`;

            // Month headers
            monthLabels.forEach(m => {
                const x = m.weekIndex * 13;
                svg += `    <text x="${x}" y="-7" class="ContributionCalendar-label">${m.name}</text>\n`;
            });

            // Day labels (Mon, Wed, Fri)
            svg += `    <text text-anchor="start" class="ContributionCalendar-label" x="-24" y="22">Mon</text>\n`;
            svg += `    <text text-anchor="start" class="ContributionCalendar-label" x="-24" y="48">Wed</text>\n`;
            svg += `    <text text-anchor="start" class="ContributionCalendar-label" x="-24" y="74">Fri</text>\n`;

            // Days grid
            weeks.forEach((week, wIdx) => {
                const gx = wIdx * 13;
                svg += `    <g transform="translate(${gx}, 0)">\n`;
                week.forEach((day, dIdx) => {
                    if (!day) return;
                    const gy = dIdx * 13;
                    const dateObj = new Date(day.date + "T00:00:00Z");
                    const formattedDate = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
                    const countText = day.count === 0 ? "No contributions" : `${day.count} contribution${day.count > 1 ? "s" : ""}`;
                    const title = `${countText} on ${formattedDate}`;
                    svg += `      <rect class="ContributionCalendar-day" width="10" height="10" x="0" y="${gy}" rx="2" ry="2" data-date="${day.date}" data-level="${day.level}" data-count="${day.count}"><title>${title}</title></rect>\n`;
                });
                svg += `    </g>\n`;
            });

            svg += `  </g>\n</svg></div>\n`;

            // Summary Footer & Legend
            const footer = `
                <div class="calendar-footer">
                    <span class="calendar-summary"><strong>${total.toLocaleString()}</strong> contributions in ${year}</span>
                    <div class="calendar-legend">
                        <span>Less</span>
                        <span class="legend-box" data-level="0"></span>
                        <span class="legend-box" data-level="1"></span>
                        <span class="legend-box" data-level="2"></span>
                        <span class="legend-box" data-level="3"></span>
                        <span class="legend-box" data-level="4"></span>
                        <span>More</span>
                    </div>
                </div>
            `;

            calendarEl.innerHTML = svg + footer;
        }

        // Render from cache immediately if present
        if (cachedData) {
            try {
                renderCalendar(JSON.parse(cachedData));
            } catch (e) {
                console.error("Failed to parse cached contribution data", e);
            }
        }

        try {
            const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            localStorage.setItem(cacheKey, JSON.stringify(data));
            renderCalendar(data);
        } catch (err) {
            console.error("Failed to fetch GitHub contributions:", err);
            if (!cachedData) {
                calendarEl.innerHTML = `
                    <div style="text-align: center; padding: 1.5rem; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem;">
                        Unable to load live contribution graph. 
                        <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color); text-decoration: underline;">View on GitHub ↗</a>
                    </div>
                `;
            }
        }
    }

    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Back to top smooth scroll
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Nothing to render — the rows are already in the document. This one call
    // just recomputes the count badge from the DOM, so the number stays right
    // when a row is added without touching the hardcoded fallback.
    applyProjectFilters();
    initGitHubCalendar('adityamhaske', 2026);
});
