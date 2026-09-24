/* =========================================================
   RIKK — DATA ANALYST PORTFOLIO
   ===== EDIT YOUR INFORMATION HERE =====
   Everything you're likely to want to change lives in the
   objects and arrays below. The rest of this file just reads
   from them — you shouldn't need to touch anything past the
   "APP LOGIC" marker to update your content.
   ========================================================= */

const portfolioData = {
  name: "Ritik Kumar",
  shortName: "Rikk",
  role: "Data Analyst",
  location: "Delhi NCR, India",
  email: "kumarritik4154@gmail.com",
  github: "https://github.com/rikkhrx",
  linkedin: "https://www.linkedin.com/in/ritik-kumar-2b7868326/",
  resume: "assets/resume.pdf",
  profileImage: "assets/profile.png" // swap this one file to change the hero photo
};

// Skill badges. `color` is any CSS color and tints the dot + hover border.
const skills = [
  { name: "Python",       color: "#5EEAD4" },
  { name: "SQL",          color: "#A78BFA" },
  { name: "Power BI",     color: "#FBBF24" },
  { name: "Excel",        color: "#5EEAD4" },
  { name: "Pandas",       color: "#A78BFA" },
  { name: "NumPy",        color: "#FBBF24" },
  { name: "Streamlit",    color: "#5EEAD4" },
  { name: "Scikit-learn", color: "#A78BFA" }
];

// KPI dashboard strip — big number + label. `suffix` is appended after counting up.
const kpis = [
  { value: 3,   suffix: "",  label: "Projects completed" },
  { value: 8,   suffix: "",  label: "Core tools" },
  { value: 3,   suffix: "",  label: "Certifications" },
  { value: 37900, suffix: "+", label: "Data rows analyzed" }
];

// Points for the small animated line chart on the dashboard card.
// Values are relative (0-100); the chart auto-scales to the SVG viewBox.
const chartSeries = [22, 30, 26, 44, 38, 52, 47, 63, 58, 74, 69, 84];

// Portfolio projects. `details` is extra copy shown only inside the modal.
const projects = [
  {
    title: "Nassau Candy — Factory Reallocation & Shipping Optimization",
    tag: "Unified Mentor Data Analytics Fellowship",
    description: "Cleaned a 10,194-row factory shipping dataset and built a regression model to predict shipment lead time, then simulated reallocation scenarios.",
    details: "Cleaned a 10,194-row factory shipping dataset (18 columns) down to 9,783 modeling-ready records, then built and benchmarked three regression models to predict shipment lead time. Segmented shipping routes into 4 clusters via K-Means and built a scenario simulation engine, all presented in a 5-page Streamlit dashboard.",
    technologies: ["Python", "Pandas", "Scikit-learn", "K-Means"],
    problem: "Production was split across factories in a way that looked historical rather than deliberate, with shipping lead times nobody had modeled or could predict ahead of time.",
    result: "Random Forest was selected as the top performer, improving R² from 0.51 (baseline) to 0.59 and cutting MAE by 17%. The scenario simulation engine covers 93% of products.",
    github: "https://github.com/rikkhrx/nassau-candy-factory-optimization",
    demo: "https://dashboardsview.streamlit.app/"
  },
  {
    title: "Spotify Top 50 Spain — Song Lifecycle & Churn Analysis",
    tag: "Unified Mentor Data Analytics Fellowship",
    description: "A Python and Pandas pipeline that classifies chart entries into lifecycle stages and surfaces churn and popularity KPIs on an interactive dashboard.",
    details: "Built a Python and Pandas pipeline processing 27,750 daily chart entries covering 575 unique tracks and 303 artists across 555 days of Spotify Top 50 Spain data, classifying each entry into 5 lifecycle stages: New Entry, Growth, Peak, Decline and Mature Phase.",
    technologies: ["Python", "Pandas", "Streamlit"],
    problem: "Raw daily chart-position exports are long, messy event logs with no obvious story — the goal was to turn that log into something a stakeholder could actually read.",
    result: "Computed 12 KPIs, including a 3.52% average daily churn rate, 48.3 average days on playlist, and a 17-day average time to peak popularity, all surfaced through an interactive Streamlit dashboard.",
    github: "https://github.com/rikkhrx/spain-top50-lifecycle-analysis",
    demo: "https://spain-top50-lifecycle-analysis-esahakbriwdoyqndbcvxyy.streamlit.app/"
  },
  {
    title: "E-Commerce Sales Analysis & Dashboard",
    tag: "Personal project",
    description: "A SQL-driven analysis of e-commerce sales paired with an interactive Excel dashboard for tracking the same business metrics.",
    details: "Analyzed an e-commerce dataset using SQL — joins, aggregations and subqueries across sales, orders and customer data — then built a companion Excel dashboard using pivot tables, charts and slicers with KPI cards for the same metrics.",
    technologies: ["SQL", "Excel", "Data Analysis"],
    problem: "The business had raw sales, order and customer tables but no query-backed view of which trends were actually worth acting on.",
    result: "Delivered actionable, query-backed insights plus a dynamically filterable Excel dashboard, giving the business a faster way to track performance trends.",
    github: "https://github.com/rikkhrx",
    demo: "#"
  }
];

// "Currently learning" floating chips.
const learning = ["Advanced SQL", "Power BI", "Data Storytelling", "Advanced Excel", "Data Analytics"];

// Education / experience timeline, oldest or newest first — shown in this order.
const timeline = [
  { period: "2023 — 2026", title: "BBA", org: "APIIT SD India, affiliated to Kurukshetra University" },
  { period: "Jun — Sep 2026", title: "Data Analyst Intern", org: "Unified Mentor Pvt. Ltd." },
  { period: "Apr 2026", title: "Data Analytics Job Simulation", org: "Deloitte, via Forage" }
];

// Certification cards.
const certifications = [
  { title: "Certificate of Internship — Data Analyst Intern", issuer: "Unified Mentor Pvt. Ltd." },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte, via Forage" },
  { title: "30 Days AI-Powered Excel Micro Course", issuer: "SkillCourse" }
];


/* =========================================================
   APP LOGIC — you generally shouldn't need to edit below here
   ========================================================= */
(function(){
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Populate static personal info ---------- */
  function hydrateProfile(){
    $("#heroName").textContent = portfolioData.shortName;
    $("#heroRole").textContent = portfolioData.role;
    $("#footerName").textContent = portfolioData.name;
    document.title = `${portfolioData.shortName} — ${portfolioData.role} Portfolio`;

    $("#profileImg").src = portfolioData.profileImage;
    $("#profileImg").alt = `Portrait of ${portfolioData.name}`;

    const mailto = `mailto:${portfolioData.email}`;
    ["socialEmail", "contactEmail"].forEach(id => { $(`#${id}`).href = mailto; });

    $("#socialGithub").href = portfolioData.github;
    $("#socialLinkedin").href = portfolioData.linkedin;
    $("#contactGithub").href = portfolioData.github;
    $("#contactLinkedin").href = portfolioData.linkedin;

    $("#resumeBtn").href = portfolioData.resume;
    $("#navResumeLink").href = portfolioData.resume;
  }

  /* ---------- Skills ---------- */
  function renderSkills(){
    const field = $("#skillsField");
    field.innerHTML = skills.map((s, i) => `
      <span class="skill-badge" style="--skill-color:${s.color}; animation-delay:${(i % 5) * 0.4}s">
        <span class="skill-badge__dot"></span>${s.name}
      </span>
    `).join("");
  }

  /* ---------- KPI counters ---------- */
  function renderKpis(){
    const wrap = $("#kpiCards");
    wrap.innerHTML = kpis.map(k => `
      <div class="kpi-item">
        <span class="kpi-item__num" data-target="${k.value}" data-suffix="${k.suffix}">0${k.suffix}</span>
        <span class="kpi-item__label">${k.label}</span>
      </div>
    `).join("");
  }

  function animateCounters(){
    $$(".kpi-item__num").forEach(el => {
      const target = Number(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      if (prefersReducedMotion){ el.textContent = target.toLocaleString() + suffix; return; }
      const duration = 1400;
      const start = performance.now();
      function step(now){
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(eased * target);
        el.textContent = val.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + suffix;
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- Line chart ---------- */
  function renderChart(){
    const w = 320, h = 120, pad = 6;
    const max = Math.max(...chartSeries), min = Math.min(...chartSeries);
    const stepX = (w - pad * 2) / (chartSeries.length - 1);
    const points = chartSeries.map((v, i) => {
      const x = pad + i * stepX;
      const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
      return [x, y];
    });
    const linePath = points.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
    const areaPath = linePath + ` L${points[points.length-1][0].toFixed(1)},${h} L${points[0][0].toFixed(1)},${h} Z`;
    $("#chartLine").setAttribute("d", linePath);
    $("#chartArea").setAttribute("d", areaPath);
  }

  /* ---------- Projects ---------- */
  function renderProjects(){
    const grid = $("#projectsGrid");
    grid.innerHTML = projects.map((p, i) => `
      <button class="project-card card" data-index="${i}" aria-haspopup="dialog">
        <div class="project-card__top">
          <span class="project-card__index">${String(i + 1).padStart(2, "0")}</span>
          <span class="project-card__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-card__tags">
          ${p.technologies.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </button>
    `).join("");

    $$(".project-card").forEach(card => {
      card.addEventListener("click", () => openModal(projects[Number(card.dataset.index)]));
    });
  }

  function openModal(p){
    $("#modalTag").textContent = p.tag;
    $("#modalTitle").textContent = p.title;
    $("#modalDesc").textContent = p.details || p.description;
    $("#modalProblem").textContent = p.problem;
    $("#modalResult").textContent = p.result;
    $("#modalTools").innerHTML = p.technologies.map(t => `<span class="tag">${t}</span>`).join("");
    $("#modalGithub").href = p.github;
    $("#modalDemo").href = p.demo;

    const modal = $("#projectModal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#modalClose").focus();
  }

  function closeModal(){
    const modal = $("#projectModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function wireModal(){
    $("#modalClose").addEventListener("click", closeModal);
    $("#modalBackdrop").addEventListener("click", closeModal);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && $("#projectModal").classList.contains("is-open")) closeModal();
    });
  }

  /* ---------- Learning cloud ---------- */
  function renderLearning(){
    $("#learningCloud").innerHTML = learning.map((l, i) => `
      <span class="learning-chip" style="animation-delay:${(i % 5) * 0.5}s">${l}</span>
    `).join("");
  }

  /* ---------- Timeline ---------- */
  function renderTimeline(){
    $("#timelineList").innerHTML = timeline.map(t => `
      <li class="timeline-item">
        <p class="timeline-item__period">${t.period}</p>
        <p class="timeline-item__title">${t.title}</p>
        <p class="timeline-item__org">${t.org}</p>
      </li>
    `).join("");
  }

  /* ---------- Certifications ---------- */
  function renderCertifications(){
    $("#certGrid").innerHTML = certifications.map(c => `
      <div class="cert-card card">
        <span class="cert-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19l1-5.8-4.3-4.1 5.9-.8z"/></svg>
        </span>
        <div>
          <p class="cert-card__title">${c.title}</p>
          <p class="cert-card__issuer">${c.issuer}</p>
        </div>
      </div>
    `).join("");
  }

  /* ---------- Mobile nav ---------- */
  function wireNav(){
    const toggle = $("#navToggle");
    const menu = $("#navMenu");
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("#navMenu a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---------- Scroll reveal + counter/chart triggers ---------- */
  function wireReveal(){
    const targets = $$(".card, .section-head");
    targets.forEach(t => t.classList.add("reveal"));

    if (prefersReducedMotion){
      targets.forEach(t => t.classList.add("is-visible"));
      animateCounters();
      $(".card--chart").classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.id === "kpiCards") animateCounters();
        if (entry.target.classList.contains("card--chart")) entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -60px 0px" });

    targets.forEach(t => io.observe(t));
    // KPI numbers live inside .card--kpi, observe that card directly by id target too
    const kpiCard = $("#kpiCards");
    if (kpiCard) io.observe(kpiCard);
  }

  /* ---------- Hero cursor glow (desktop only, subtle) ---------- */
  function wireCursorGlow(){
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const hero = $("#heroMain");
    const glow = $(".hero__glow");
    hero.addEventListener("mousemove", e => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(94,234,212,0.18), transparent 55%)`;
    });
    hero.addEventListener("mouseleave", () => {
      glow.style.background = "radial-gradient(circle, rgba(94,234,212,0.16), transparent 65%)";
    });
  }

  /* ---------- Contact form validation ---------- */
  function wireForm(){
    const form = $("#contactForm");
    const status = $("#formStatus");

    function setError(inputId, errId, message){
      $(`#${inputId}`).setAttribute("aria-invalid", message ? "true" : "false");
      $(`#${errId}`).textContent = message || "";
    }

    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = $("#fName").value.trim();
      const email = $("#fEmail").value.trim();
      const message = $("#fMessage").value.trim();
      let valid = true;

      if (!name){ setError("fName", "errName", "Please enter your name."); valid = false; }
      else setError("fName", "errName", "");

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk){ setError("fEmail", "errEmail", "Please enter a valid email."); valid = false; }
      else setError("fEmail", "errEmail", "");

      if (!message){ setError("fMessage", "errMessage", "Please add a short message."); valid = false; }
      else setError("fMessage", "errMessage", "");

      if (!valid){ status.textContent = ""; return; }

      // No backend is wired up — hand off to the visitor's email client with the
      // message prefilled. Replace this block with a fetch() call if you add one.
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;

      status.textContent = "Opening your email client to send this…";
      form.reset();
    });

    [["fName","errName"],["fEmail","errEmail"],["fMessage","errMessage"]].forEach(([inputId, errId]) => {
      $(`#${inputId}`).addEventListener("input", () => setError(inputId, errId, ""));
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    hydrateProfile();
    renderSkills();
    renderKpis();
    renderChart();
    renderProjects();
    renderLearning();
    renderTimeline();
    renderCertifications();
    wireModal();
    wireNav();
    wireForm();
    wireCursorGlow();
    // Reveal wiring last, after all content exists in the DOM.
    requestAnimationFrame(wireReveal);
  });
})();
