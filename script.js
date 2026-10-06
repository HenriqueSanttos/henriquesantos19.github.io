const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Fechar' : 'Menu'; });
links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { links.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu'; }));
const tabs = document.querySelectorAll('.project-tab');
const projects = document.querySelectorAll('.project');
tabs.forEach((tab) => tab.addEventListener('click', () => { const filter = tab.dataset.filter; tabs.forEach((item) => { const active = item === tab; item.classList.toggle('active', active); item.setAttribute('aria-selected', String(active)); }); projects.forEach((project) => project.classList.toggle('is-hidden', !project.classList.contains(filter))); }));
