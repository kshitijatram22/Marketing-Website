document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".showNav");
    const hideButton = document.querySelector(".hideMe");
    const toggleButton = document.querySelector("#toggleNav"); 

    function showNav() {
        nav.style.right = "0"; 
    }

    function hideNav() {
        nav.style.right = "-100%"; 
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", showNav);
    }

    if (hideButton) {
        hideButton.addEventListener("click", hideNav);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animated-element');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
  
    elements.forEach(element => {
        observer.observe(element);
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelector(".photos");
    const images = Array.from(photos.children);
  
    // Duplicate images to ensure seamless scrolling
    images.forEach((img) => {
      const clone = img.cloneNode(true); // Clone each image
      photos.appendChild(clone); // Append the clone to the container
    });
  
    // Calculate the total width of the photos container
    const totalImages = photos.children.length; // Original + Duplicates
    const imageWidth = images[0].offsetWidth; // Width of one image
    photos.style.width = `${totalImages * imageWidth}px`; // Set container width dynamically
  });
  