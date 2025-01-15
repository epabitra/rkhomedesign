// Define the links array for the navbar
const links = [
    { name: "Home", href: "index.html", active: true },
    // { name: "About", href: "about.html" },
    { name: "About", href: "about.html" },
    // {
    //   name: "Property",
    //   dropdown: true,
    //   items: [
    //     { name: "Property List", href: "property-list.html" },
    //     { name: "Property Type", href: "property-type.html" },
    //     { name: "Property Agent", href: "property-agent.html" },
    //   ],
    // },
    // {
    //   name: "Pages",
    //   dropdown: true,
    //   items: [
    //     { name: "Testimonial", href: "testimonial.html" },
    //     { name: "404 Error", href: "404.html" },
    //   ],
    // },
    // { name: "Contact", href: "contact.html" },
    { name: "Contact", href: "contact.html" },
  ];
  
  function buildNavbar() {  
    // Create the navbar element
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg bg-white navbar-light py-0 px-4";
  
    // Brand section
    navbar.innerHTML = `
      <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
        <div class="icon p-0 me-2 border border-2">
          <img class="img-fluid rounded-circle" src="img/logo.jpg" alt="Icon" style="width: 60px; height: 60px" />
        </div>
        <h1 class="m-0 text-primary nameLogo">${brandName}</h1>
      </a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
    `;
  
    // Collapse container
    const collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse navbar-collapse";
    collapseDiv.id = "navbarCollapse";
  
    // Navbar links
    const nav = document.createElement("div");
    nav.className = "navbar-nav ms-auto";
  
    links.forEach((link) => {
      if (link.dropdown) {
        // Dropdown
        const dropdown = document.createElement("div");
        dropdown.className = "nav-item dropdown";
  
        const dropdownToggle = document.createElement("a");
        dropdownToggle.href = "#";
        dropdownToggle.className = "nav-link dropdown-toggle";
        dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
        dropdownToggle.textContent = link.name;
  
        const dropdownMenu = document.createElement("div");
        dropdownMenu.className = "dropdown-menu rounded-0 m-0";
  
        link.items.forEach((item) => {
          const dropdownItem = document.createElement("a");
          dropdownItem.className = "dropdown-item";
          dropdownItem.href = item.href;
          dropdownItem.textContent = item.name;
          dropdownMenu.appendChild(dropdownItem);
        });
  
        dropdown.appendChild(dropdownToggle);
        dropdown.appendChild(dropdownMenu);
        nav.appendChild(dropdown);
      } else {
        // Regular link
        const navLink = document.createElement("a");
        navLink.href = link.href;
        navLink.className = `nav-item nav-link ${link.active ? "active" : ""}`;
        navLink.textContent = link.name;
        nav.appendChild(navLink);
      }
    });
  
    // Append the nav links to collapseDiv
    collapseDiv.appendChild(nav);
  
    // Add button (optional)
    const addButton = document.createElement("a");
    addButton.href = "";
    addButton.className = "btn btn-primary px-3 d-none d-lg-flex";
    addButton.textContent = "Book A Appointment";
    collapseDiv.appendChild(addButton);
  
    // Append collapseDiv to navbar
    navbar.appendChild(collapseDiv);
  
    // Insert into the nav-bar-container
    const navBarContainer = document.getElementById("nav-bar-container");
    navBarContainer.innerHTML = ""; // Clear any existing content
    navBarContainer.appendChild(navbar);
  }
  
  // Call the buildNavbar function
  document.addEventListener("DOMContentLoaded", buildNavbar);
  