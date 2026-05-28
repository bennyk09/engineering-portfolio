// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    initializeSocials();
    initializeHero();
    initializeSkills();
    initializeProjects();
    initializeEducation();
    initializeAccreditation();
});

function initializeSocials() {
    const container = document.getElementById("nav-socials");
    const links = PORTFOLIO_DATA.socialLinks;
    
    container.innerHTML = `
        <a href="${links.instagram}" target="_blank" aria-label="Instagram">
            <svg class="social-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 0zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="${links.linkedin}" target="_blank" aria-label="LinkedIn">
            <svg class="social-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="${links.github}" target="_blank" aria-label="GitHub">
            <svg class="social-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="${links.x}" target="_blank" aria-label="X / Twitter">
            <svg class="social-icon" width="22" height="22" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
    `;
}

function initializeHero() {
    const section = document.getElementById("hero-section");
    const bio = PORTFOLIO_DATA.biography;
    
    section.innerHTML = `
        <h2>${bio.headline}</h2>
        <p>${bio.summary}</p>
        <div class="meta-contact">
            <span>📩 ${bio.email}</span>
            <span>📱 ${bio.phone}</span>
            <span>📍 ${bio.location}</span>
        </div>
        <a href="mailto:${bio.email}?subject=Technical%20Inquiry%20%2F%20Engineering%20Engagement&body=Hello%20Joseph%2C%0A%0AI%20have%20evaluated%20your%20computational%20portfolio%20and%20your%20demonstrated%20project%20execution.%20I%20would%20like%20to%20initiate%20communication%20regarding%20a%20technical%20opportunity.%0A%0ABest%20regards%2C" class="cta-button">
            <span>CONTACT ME</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
    `;
}

function initializeSkills() {
    const container = document.getElementById("skills-container");
    container.innerHTML = PORTFOLIO_DATA.technicalMatrix.map(cat => `
        <div class="skill-category">
            <h4>${cat.category}</h4>
            <ul class="skill-list">
                ${cat.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function initializeProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
        <div class="project-card">
            <div class="project-header">
                <h4 class="project-title">${proj.title}</h4>
                <div class="project-badges">
                    ${proj.badges.map((b, i) => `<span class="badge ${i===0 && b.includes('Patent') ? 'patent' : ''}">${b}</span>`).join('')}
                </div>
            </div>
            <p class="project-desc">${proj.desc}</p>
            <ul class="project-details-list">
                ${proj.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            ${proj.techTags.map(t => `<span class="badge">${t}</span>`).join(' ')}
            ${proj.link ? `<br><br><a href="${proj.link}" class="project-link" target="_blank"><span>View Codebase</span></a>` : ''}
        </div>
    `).join('');
}

function initializeEducation() {
    const container = document.getElementById("education-container");
    container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-date">${edu.timeline}</div>
            <div class="timeline-title">${edu.title}</div>
            <div class="timeline-sub">${edu.institution}</div>
        </div>
    `).join('');
}

function initializeAccreditation() {
    const container = document.getElementById("accreditation-container");
    container.innerHTML = PORTFOLIO_DATA.accreditation.map(acr => `
        <div class="timeline-item">
            <div class="timeline-date">${acr.timeline}</div>
            <div class="timeline-title">${acr.title}</div>
            <div class="timeline-sub">${acr.sub}</div>
        </div>
    `).join('');
}