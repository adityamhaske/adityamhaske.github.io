/**
 * Hardcoded project data.
 * Categorized into 6 broad engineering domains.
 */
const projectsData = [
    {
        "name": "Multi-Agent-Research-Assistant",
        "category": "agents-llm",
        "domainBadge": "AGENTIC DAG",
        "badgeClass": "badge-agent",
        "description": "Open-source multi-agent research platform with Planner, Researcher, Critic, and Synthesizer agents, human-in-the-loop validation, and per-claim citations.",
        "stack": ["LangGraph", "FastAPI", "Next.js"],
        "url": "https://github.com/adityamhaske/Multi-Agent-Research-Assistant",
        "docsUrl": "https://adityamhaske.github.io/Multi-Agent-Research-Assistant/",
        "isCoursework": false
    },
    {
        "name": "agent-arena",
        "category": "agents-llm",
        "domainBadge": "EVALS & TRACING",
        "badgeClass": "badge-agent",
        "description": "Evaluation harness to empirically benchmark multi-agent topologies (Single-Agent, Supervisor-Worker, Peer-to-Peer, Debate) with structured telemetry.",
        "stack": ["LangGraph", "LLM Evals", "Python"],
        "url": "https://github.com/adityamhaske/agent-arena",
        "isCoursework": false
    },
    {
        "name": "AI-Co-Pilot-for-SaaS-Analytics-Platform",
        "category": "agents-llm",
        "domainBadge": "NATURAL LANGUAGE AI",
        "badgeClass": "badge-agent",
        "description": "Natural-language AI co-pilot translating conversational analytics queries into structured backend API calls via Anthropic function calling.",
        "stack": ["Anthropic API", "FastAPI", "Python"],
        "url": "https://github.com/adityamhaske/AI-Co-Pilot-for-SaaS-Analytics-Platform",
        "isCoursework": false
    },
    {
        "name": "IndusAI",
        "category": "agents-llm",
        "domainBadge": "INDUSTRIAL RAG",
        "badgeClass": "badge-agent",
        "description": "Industrial AI assistant for PLC fault log analysis and diagnostics; architected GCP cloud migration with sub-second vector matching.",
        "stack": ["Gemini Flash", "Qdrant", "Cloud Run"],
        "url": "https://github.com/adityamhaske/IndusAI",
        "isCoursework": false
    },
    {
        "name": "Kelley-LLM-NLP-Cross-Classified",
        "category": "agents-llm",
        "domainBadge": "NLP & LLM",
        "badgeClass": "badge-agent",
        "description": "Data science and NLP research with Kelley School of Business, analyzing political Twitter text, customer intent models, and cross-classified tracking.",
        "stack": ["LLM / NLP", "Python", "Jupyter"],
        "url": "https://github.com/adityamhaske/Kelley-LLM-NLP-Cross-Classified",
        "isCoursework": false
    },
    {
        "name": "AffectiSense",
        "category": "vision-multimodal",
        "domainBadge": "MULTIMODAL AI",
        "badgeClass": "",
        "description": "NeuroSense AI — Multimodal mental health assessment platform fusing neurophysiological (EEG), vocal acoustic biomarker, and facial signals.",
        "stack": ["PyTorch", "EEG Processing", "Python"],
        "url": "https://github.com/adityamhaske/AffectiSense",
        "isCoursework": false
    },
    {
        "name": "Multimodal_Depression_Analysis",
        "category": "vision-multimodal",
        "domainBadge": "MULTIMODAL AI",
        "badgeClass": "",
        "description": "Multimodal behavioral analysis platform combining facial micro-expression telemetry and acoustic signal processing for mental health markers.",
        "stack": ["Multimodal AI", "Signal Proc", "Python"],
        "url": "https://github.com/adityamhaske/Multimodal_Depression_Analysis",
        "isCoursework": false
    },
    {
        "name": "Object-Detection-and-Localization",
        "category": "vision-multimodal",
        "domainBadge": "COMPUTER VISION",
        "badgeClass": "",
        "description": "Real-time object detection and spatial localization pipeline utilizing custom YOLO models and low-latency computer vision routines.",
        "stack": ["YOLO", "OpenCV", "Python"],
        "url": "https://github.com/adityamhaske/Object-Detection-and-Localization",
        "isCoursework": false
    },
    {
        "name": "BMR-ML-Pipeline_DBMS",
        "category": "ml-data",
        "domainBadge": "DATA PIPELINE",
        "badgeClass": "",
        "description": "End-to-end ML data pipelines, relational database architecture in Oracle SQL, and business intelligence dashboards in Tableau.",
        "stack": ["Oracle SQL", "Python", "Tableau"],
        "url": "https://github.com/adityamhaske/BMR-ML-Pipeline_DBMS",
        "isCoursework": false
    },
    {
        "name": "Cardiovascular_disease_prediction",
        "category": "ml-data",
        "domainBadge": "PREDICTIVE ML",
        "badgeClass": "",
        "description": "Supervised machine learning pipeline evaluating classification model ensembles for high-sensitivity cardiovascular disease risk prediction.",
        "stack": ["Scikit-Learn", "Python", "Jupyter"],
        "url": "https://github.com/adityamhaske/Cardiovascular_disease_prediction",
        "isCoursework": false
    },
    {
        "name": "Stock-Prediction-of-Deutsche-Borse-Using-AWS",
        "category": "ml-data",
        "domainBadge": "CLOUD ML",
        "badgeClass": "",
        "description": "Distributed data preprocessing, wrangling, and financial forecasting pipeline for Deutsche Börse stock data deployed on AWS.",
        "stack": ["AWS", "Time-Series ML", "Python"],
        "url": "https://github.com/adityamhaske/Stock-Prediction-of-Deutsche-Borse-Using-AWS",
        "isCoursework": false
    },
    {
        "name": "Business-Location-Recommendation-System",
        "category": "ml-data",
        "domainBadge": "SPATIAL ML",
        "badgeClass": "",
        "description": "Spatial clustering and location recommendation system using Foursquare venue telemetry and exploratory geospatial data analysis.",
        "stack": ["Geospatial ML", "Python", "Jupyter"],
        "url": "https://github.com/adityamhaske/Business-Location-Recommendation-System",
        "isCoursework": false
    },
    {
        "name": "Medical-Dashboard",
        "category": "systems-edge",
        "domainBadge": "FULL STACK",
        "badgeClass": "",
        "description": "Modular hospital management system and medical dashboard providing central administrative tools for doctors, patients, and clinical staff.",
        "stack": ["TypeScript", "React", "Node.js"],
        "url": "https://github.com/adityamhaske/Medical-Dashboard",
        "isCoursework": false
    },
    {
        "name": "Green-house",
        "category": "systems-edge",
        "domainBadge": "IOT & EMBEDDED",
        "badgeClass": "",
        "description": "Embedded IoT greenhouse monitoring system integrating gas detectors, temperature/light sensors, water level probes, and an LCD warning panel.",
        "stack": ["C++", "Arduino", "Sensors"],
        "url": "https://github.com/adityamhaske/Green-house",
        "isCoursework": false
    },
    {
        "name": "MSDS-Applied-Machine-Learning",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "MS Data Science Applied Machine Learning assignments and capstone project (Achieved Top 3 model accuracy in a class of 250).",
        "stack": ["Python", "Machine Learning"],
        "url": "https://github.com/adityamhaske/MSDS-Applied-Machine-Learning",
        "isCoursework": true
    },
    {
        "name": "MSDS-Data-Visualization",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "DSCI 590 Data Visualization course assignments and network visualizations, taught by Prof. Yong-Yeol (YY) Ahn.",
        "stack": ["Python", "D3 / Network Viz"],
        "url": "https://github.com/adityamhaske/MSDS-Data-Visualization",
        "isCoursework": true
    },
    {
        "name": "MSDS-Elements-of-AI",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "Graduate coursework covering core search algorithms, heuristic state exploration, and probabilistic reasoning.",
        "stack": ["Python", "AI Algorithms"],
        "url": "https://github.com/adityamhaske/MSDS-Elements-of-AI",
        "isCoursework": true
    },
    {
        "name": "MSDS-Financial-Econometrics",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "Financial forecasting and predictive regression modeling, multi-horizon econometric models, and out-of-sample statistical analysis.",
        "stack": ["Python", "Econometrics"],
        "url": "https://github.com/adityamhaske/MSDS-Financial-Econometrics",
        "isCoursework": true
    },
    {
        "name": "MSDS-Introduction-to-statistics",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "Graduate statistics coursework covering hypothesis testing, Bayesian inference, confidence intervals, and regression analysis.",
        "stack": ["Python", "Statistics"],
        "url": "https://github.com/adityamhaske/MSDS-Introduction-to-statistics",
        "isCoursework": true
    },
    {
        "name": "MSDS-MGMT-ACCESS-USE-BIG-DATA",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "Big Data architecture, distributed storage, and analytics assignments covering large-scale enterprise data workflows.",
        "stack": ["Big Data", "Python", "SQL"],
        "url": "https://github.com/adityamhaske/MSDS-MGMT-ACCESS-USE-BIG-DATA",
        "isCoursework": true
    },
    {
        "name": "MSDS-Microeconomics-Theory-II",
        "category": "coursework",
        "domainBadge": "ACADEMIC",
        "badgeClass": "",
        "description": "Microeconomic theory problem sets, game-theoretic modeling, and equilibrium computational models.",
        "stack": ["Python", "Economics"],
        "url": "https://github.com/adityamhaske/MSDS-Microeconomics-Theory-II",
        "isCoursework": true
    }
];

const projectCategories = [
    { id: 'all', label: 'All' },
    { id: 'agents-llm', label: 'Multi-Agent & LLMs' },
    { id: 'vision-multimodal', label: 'Vision & Multimodal' },
    { id: 'ml-data', label: 'ML & Data Systems' },
    { id: 'systems-edge', label: 'Software & Edge' },
    { id: 'coursework', label: 'Academic & Coursework' }
];

document.addEventListener('DOMContentLoaded', () => {
    // Render 6 broad category filter buttons with live counts
    const filterContainer = document.getElementById('filter-tags');
    if (filterContainer) {
        filterContainer.innerHTML = '';
        projectCategories.forEach(cat => {
            const count = cat.id === 'all'
                ? projectsData.length
                : projectsData.filter(p => p.category === cat.id).length;

            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat.id === 'all' ? 'active' : ''}`;
            btn.dataset.category = cat.id;
            btn.innerHTML = `${cat.label} <span class="btn-count">(${count})</span>`;
            filterContainer.appendChild(btn);
        });
    }

    const tbody = document.getElementById('project-list-body');
    const searchInput = document.getElementById('project-search');
    const countBadge = document.getElementById('project-count-badge');
    const filterBtns = document.querySelectorAll('#filter-tags .filter-btn');
    const noResults = document.getElementById('no-results');
    
    let currentCategory = 'all';
    let currentSearch = '';

    // Render table rows
    function renderProjects() {
        if (!tbody) return;
        tbody.innerHTML = '';
        
        const filtered = projectsData.filter(p => {
            const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
            const searchLower = currentSearch.toLowerCase();
            const matchesSearch = p.name.toLowerCase().includes(searchLower) || 
                                  p.description.toLowerCase().includes(searchLower) ||
                                  p.domainBadge.toLowerCase().includes(searchLower) ||
                                  p.stack.some(s => s.toLowerCase().includes(searchLower));
            return matchesCategory && matchesSearch;
        });

        if (countBadge) {
            countBadge.textContent = `Showing ${filtered.length} system${filtered.length !== 1 ? 's' : ''}`;
        }

        if (filtered.length === 0) {
            noResults.classList.remove('hidden');
            tbody.parentElement.classList.add('hidden');
        } else {
            noResults.classList.add('hidden');
            tbody.parentElement.classList.remove('hidden');
            
            filtered.forEach(p => {
                const tr = document.createElement('tr');
                const linkUrl = p.docsUrl ? p.docsUrl : p.url;
                const stackHtml = p.stack.map(s => `<span class="table-stack-item">${s}</span>`).join('<span class="stack-dot">·</span>');
                const docsLinkHtml = p.docsUrl ? `<a href="${p.docsUrl}" target="_blank" rel="noopener noreferrer" class="table-action-btn docs-btn">Docs ↗</a>` : '';

                tr.innerHTML = `
                    <td class="repo-name-col">
                        <div class="table-repo-header">
                            <span class="table-domain-badge ${p.badgeClass}">${p.domainBadge}</span>
                            <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="table-repo-link">${p.name}</a>
                        </div>
                    </td>
                    <td class="repo-desc-col">${p.description}</td>
                    <td class="repo-stack-col">
                        <div class="table-stack-list">${stackHtml}</div>
                    </td>
                    <td class="repo-link-col">
                        <div class="table-actions">
                            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="table-action-btn">Repo ↗</a>
                            ${docsLinkHtml}
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    }

    // Event Listeners for search & filters
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProjects();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProjects();
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

    // Initial render
    renderProjects();
    initGitHubCalendar('adityamhaske', 2026);
});
