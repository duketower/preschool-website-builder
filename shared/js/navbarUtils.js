/**
 * web/navbarUtils.js
 * ──────────────────
 * Four plug-and-play navbar utilities for sticky-nav websites.
 *
 * Functions:
 * initNavbarScroll(navbarId, threshold)
 * — Adds/removes `.scrolled` class on the navbar after scrolling past
 * `threshold` pixels (default 40). Style the `.scrolled` state in CSS
 * (e.g., add a shadow or background-blur).
 *
 * initHamburgerMenu(hamburgerId, navLinksId)
 * — Wires up a mobile hamburger button to toggle `.active` on the button
 * and `.open` on the nav links container. Also locks body scroll while
 * the menu is open, and closes the menu when any link is clicked.
 *
 * initDropdownNav()
 * — Desktop: JS mouseenter/mouseleave hover with a 150 ms close delay so
 * the cursor can travel from the trigger to the dropdown without it
 * closing. Mobile (≤900 px): click to toggle. Closes on outside click.
 * Requires `.has-dropdown` class on each nav item with a sub-menu.
 *
 * initActiveNavOnScroll()
 * — Highlights the nav link whose section is currently in view by adding
 * `.active` to matching `a[href^="#"]` elements in `.nav-links`.
 * Requires `section[id]` elements in the page.
 *
 * HTML shape expected:
 * <nav id="navbar">
 * <button id="hamburger">…</button>
 * <ul id="navLinks" class="nav-links">
 * <li class="has-dropdown">
 * <a href="#">Services</a>
 * <ul class="dropdown">…</ul>
 * </li>
 * <li><a href="#about">About</a></li>
 * </ul>
 * </nav>
 * <section id="about">…</section>
 *
 * Usage:
 * initNavbarScroll('navbar');
 * initHamburgerMenu('hamburger', 'navLinks');
 * initDropdownNav();
 * initActiveNavOnScroll();
 *
 * Source project: Binary Ventures — Website Startup
 */


/**
 * Adds `.scrolled` to the navbar element after the user scrolls past
 * `threshold` pixels. Remove it when back at the top.
 *
 * @param {string} navbarId — id of the <nav> element (default 'navbar')
 * @param {number} threshold — scroll distance in px before class is added (default 40)
 */
function initNavbarScroll(navbarId = 'navbar', threshold = 40) {
 const navbar = document.getElementById(navbarId);
 if (!navbar) return;

 window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > threshold);
 }, { passive: true });
}


/**
 * Wires a hamburger button to open/close a mobile nav menu.
 * - Toggles `.active` on the button and `.open` on the nav container.
 * - Locks `body` scroll while the menu is open.
 * - Closes the menu when any link inside it is clicked.
 *
 * @param {string} hamburgerId — id of the hamburger <button>
 * @param {string} navLinksId — id of the <ul> nav container
 */
function initHamburgerMenu(hamburgerId = 'hamburger', navLinksId = 'navLinks') {
 const hamburger = document.getElementById(hamburgerId);
 const navLinks = document.getElementById(navLinksId);
 if (!hamburger || !navLinks) return;

 hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
 });

 navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
   hamburger.classList.remove('active');
   navLinks.classList.remove('open');
   document.body.style.overflow = '';
  });
 });
}


/**
 * Desktop hover dropdowns with a grace-period close delay.
 * Mobile click-toggle.
 *
 * Requires `.has-dropdown` class on the parent <li> of each dropdown.
 * The dropdown visibility should be CSS-driven via `.has-dropdown.open`.
 *
 * @param {number} closeDelay — ms to wait before closing on mouseleave (default 150)
 * @param {number} breakpoint — px width below which to switch to click mode (default 900)
 */
function initDropdownNav(closeDelay = 150, breakpoint = 900) {
 document.querySelectorAll('.has-dropdown').forEach(item => {
  let closeTimer;

  if (window.innerWidth > breakpoint) {
   item.addEventListener('mouseenter', () => {
    clearTimeout(closeTimer);
    document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('open'));
    item.classList.add('open');
   });
   item.addEventListener('mouseleave', () => {
    closeTimer = setTimeout(() => item.classList.remove('open'), closeDelay);
   });
  } else {
   item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('open');
   });
  }
 });

 document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
   document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
  }
 });
}


/**
 * Adds `.active` to the nav link whose target section is currently in view.
 *
 * @param {number} offset — px offset from top to account for sticky navbar (default 100)
 */
function initActiveNavOnScroll(offset = 100) {
 const sections = document.querySelectorAll('section[id]');
 const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
 if (!sections.length || !navLinksAll.length) return;

 window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
   if (window.scrollY >= section.offsetTop - offset) {
    current = section.getAttribute('id');
   }
  });

  navLinksAll.forEach(link => {
   link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
 }, { passive: true });
}
