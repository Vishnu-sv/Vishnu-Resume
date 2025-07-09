// Show a welcome alert when the page loads
window.addEventListener('load', () => {
  alert('Welcome to My Simple Webpage!');
});

// Change main content text when a nav link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
const mainContent = document.querySelector('main');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link jump
    const sectionName = link.textContent;
    mainContent.innerHTML = `
      <button id="toggleSidebar">Toggle Sidebar</button>
      <h2>${sectionName}</h2>
      <p>You clicked on the <strong>${sectionName}</strong> section.</p>
    `;
    attachToggleSidebar(); // Re-attach the toggle button handler
  });
});

// Toggle sidebar visibility
function attachToggleSidebar() {
  const toggleBtn = document.getElementById('toggleSidebar');
  const sidebar = document.querySelector('aside');
  if (toggleBtn) {
    toggleBtn.style.margin = '1rem';
    toggleBtn.style.padding = '0.5rem 1rem';
    toggleBtn.style.backgroundColor = '#4CAF50';
    toggleBtn.style.color = 'white';
    toggleBtn.style.border = 'none';
    toggleBtn.style.cursor = 'pointer';

    toggleBtn.addEventListener('click', () => {
      sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
    });
  }
}

// Initial sidebar toggle button
window.addEventListener('DOMContentLoaded', () => {
  const initialBtn = document.createElement('button');
  initialBtn.id = 'toggleSidebar';
  initialBtn.textContent = 'Toggle Sidebar';
  document.querySelector('main').prepend(initialBtn);
  attachToggleSidebar();
});
