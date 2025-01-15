// Function to dynamically set the active page
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL (only the filename part)
    const currentPath = window.location.pathname.split('/').pop();
  
    // Select all nav links in the header
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach((link) => {
      // Get the href value of each link (e.g., 'index.html', 'projects.html')
      const linkHref = link.getAttribute('href');
  
      // Compare the current filename with the href value
      if (currentPath === linkHref) {
        // Add 'active' class to the current link
        link.classList.add('active');
  
        // Optionally, you can add a custom data attribute (if needed)
        link.dataset.active = 'true';
      } else {
        // Remove 'active' class if the link does not match
        link.classList.remove('active');
  
        // Remove custom data attribute if the link does not match
        link.removeAttribute('data-active');
      }
    });
  });