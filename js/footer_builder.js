// Define the footer content data
const mobileNo = "+91 7328088547";
const emailAddress = "info@rkdesign.com";
const address = "Bus Stand, Digapahandi";

const footerData = {
    getInTouch: {
      title: "Get In Touch",
      address: address,
      phone: mobileNo,
      email: emailAddress,
      socialLinks: [
        { icon: "fab fa-twitter", href: "" },
        { icon: "fab fa-facebook-f", href: "" },
        { icon: "fab fa-youtube", href: "" },
        { icon: "fab fa-linkedin-in", href: "" },
      ],
    },
    quickLinks: [
      { name: "About", href: "404.html" },
      { name: "Contact", href: "404.html" },
    //   { name: "Our Services", href: "" },
    //   { name: "Privacy Policy", href: "" },
    //   { name: "Terms & Condition", href: "" },
    ],
    photoGallery: [
      "img/property-1.jpg",
      "img/property-2.jpg",
      "img/property-3.jpg",
      "img/property-4.jpg",
      "img/property-5.jpg",
      "img/property-6.jpg",
    ],
    newsletter: {
      description: "We’d love to hear from you! Feel free to reach out to us with any questions, feedback, or support requests.",
      placeholder: "Your email",
      buttonText: "Connect",
    },
    copyright: {
      siteName: "RK Design",
      designerName: "E Pabitra",
      designerLink: "https://epabitra.com",
      menuLinks: [
        { name: "Home", href: "index.html" },
        // { name: "Cookies", href: "" },
        { name: "Help", href: "404.html" },
        // { name: "FQAs", href: "" },
      ],
    },
  };
  
  function buildFooter() {
    const container = document.createElement("div");
    container.className = "container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn";
    container.setAttribute("data-wow-delay", "0.1s");
  
    const innerContainer = document.createElement("div");
    innerContainer.className = "container py-5";
  
    const row = document.createElement("div");
    row.className = "row g-5";
  
    // Get In Touch Section
    const getInTouchCol = document.createElement("div");
    getInTouchCol.className = "col-lg-3 col-md-6";
    getInTouchCol.innerHTML = `
      <h5 class="text-white mb-4">${footerData.getInTouch.title}</h5>
      <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>${footerData.getInTouch.address}</p>
      <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>${footerData.getInTouch.phone}</p>
      <p class="mb-2"><i class="fa fa-envelope me-3"></i>${footerData.getInTouch.email}</p>
      <div class="d-flex pt-2">
        ${footerData.getInTouch.socialLinks
          .map(
            (link) => `<a class="btn btn-outline-light btn-social" href="${link.href}"><i class="${link.icon}"></i></a>`
          )
          .join("")}
      </div>
    `;
  
    // Quick Links Section
    const quickLinksCol = document.createElement("div");
    quickLinksCol.className = "col-lg-3 col-md-6";
    quickLinksCol.innerHTML = `
      <h5 class="text-white mb-4">Quick Links</h5>
      ${footerData.quickLinks
        .map((link) => `<a class="btn btn-link text-white-50" href="${link.href}">${link.name}</a>`)
        .join("")}
    `;
  
    // Photo Gallery Section
    const photoGalleryCol = document.createElement("div");
    photoGalleryCol.className = "col-lg-3 col-md-6";
    photoGalleryCol.innerHTML = `
      <h5 class="text-white mb-4">Photo Gallery</h5>
      <div class="row g-2 pt-2">
        ${footerData.photoGallery
          .map(
            (img) => `
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="${img}" alt="">
            </div>`
          )
          .join("")}
      </div>
    `;
  
    // Newsletter Section
    const newsletterCol = document.createElement("div");
    newsletterCol.className = "col-lg-3 col-md-6";
    newsletterCol.innerHTML = `
      <h5 class="text-white mb-4">Connect Us</h5>
      <p>${footerData.newsletter.description}</p>
      <div class="position-relative mx-auto" style="max-width: 400px;">
        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="${footerData.newsletter.placeholder}">
        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">${footerData.newsletter.buttonText}</button>
      </div>
    `;
  
    // Append columns to row
    row.appendChild(getInTouchCol);
    row.appendChild(quickLinksCol);
    row.appendChild(photoGalleryCol);
    row.appendChild(newsletterCol);
  
    // Append row to inner container
    innerContainer.appendChild(row);
  
    // Copyright Section
    const copyrightDiv = document.createElement("div");
    copyrightDiv.className = "container";
    copyrightDiv.innerHTML = `
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">${footerData.copyright.siteName}</a>, All Right Reserved.
            Designed By <a class="border-bottom" href="${footerData.copyright.designerLink}">${footerData.copyright.designerName}</a>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              ${footerData.copyright.menuLinks
                .map((link) => `<a href="${link.href}">${link.name}</a>`)
                .join(" | ")}
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Append copyright to container
    container.appendChild(innerContainer);
    container.appendChild(copyrightDiv);
  
    // Insert into the footer container
    const footerContainer = document.getElementById("footer-container");
    footerContainer.innerHTML = ""; // Clear any existing content
    footerContainer.appendChild(container);
  }
  
  // Call the buildFooter function
  document.addEventListener("DOMContentLoaded", buildFooter);
  