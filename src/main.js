let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menuIcon");
let navbar = document.getElementById("navbar");
let mobileview = document.getElementById("mobileview")

menuIcon.onclick = function() {
      // Check if the menu currently has the 'hidden' class
    if(menu.classList.contains('hidden')){
          // If it does, remove the 'hidden' class to show the menu
        menu.classList.remove('hidden')
    }else{
          // If it doesn't, add the 'hidden' class to hide the menu
        menu.classList.add('hidden')
    }
};

// on scroll navbar
window.onscroll = function() {
    if (window.scrollY > 550) {
        navbar.classList.add('fixed-nav', 'scrolled',);
    } 
    else if(window.scrollY > 50){
        mobileview.classList.add('mobile')
    }
    else {
        navbar.classList.remove('fixed-nav', 'scrolled');
    }
};

 // Select all elements with the class 'number'
 const counters = document.querySelectorAll('.number');
 // Speed of the counting animation
 const speed = 120;

 // Function to update the count
 counters.forEach(counter => {
   const updateCount = () => {
     // Get the target number from the data-target attribute
     const target = +counter.getAttribute('data-target');
     // Get the current number displayed in the element
     const count = +counter.innerText;
     // Calculate the increment for each step
     const increment = target / speed;

     // If the current count is less than the target, update the count
     if (count < target) {
       counter.innerText = Math.ceil(count + increment);
       // Call the updateCount function again after 20 milliseconds
       setTimeout(updateCount, 20);
     } else {
       // Ensure the final count is exactly the target
       counter.innerText = target;
     }
   };

   // Call the updateCount function to start the animation
   updateCount();
 });

 

  // JavaScript for image carousel functionality
    document.addEventListener("DOMContentLoaded", () => {
      const imageContainer = document.getElementById('image-container');
      const progressBar = document.querySelector('.progress-bar div');
      const imageSets = [
        [
          'image/land1.jpg',
          'image/land2.jpg',
          'image/land3.jpg'
        ],
        [
          'image/land4.jpg',
          'image/land5.jpg',
          'image/land1.jpg'
        ],
        // Add more sets if needed
      ];
      let currentSetIndex = 0;

      function nextImageSet() {
        // Increment the index
        currentSetIndex = (currentSetIndex + 1) % imageSets.length;
        // Get the new set of images
        const newSet = imageSets[currentSetIndex];
        // Update the images
        const imageElements = imageContainer.querySelectorAll('img');
        imageElements.forEach((img, index) => {
          img.src = newSet[index];
        });
        // Update progress bar
        progressBar.style.width = `${(currentSetIndex + 1) / imageSets.length * 100}%`;
      }

      // Adding click event to the images
      imageContainer.querySelectorAll('img').forEach(image => {
        image.addEventListener('click', nextImageSet);
      });
    });

    let openIcon = document.getElementById("openIcon")
    let closeIcon = document.getElementById("closeIcon")
    let boxo = document.getElementById("boxo")
    openIcon.onclick = function(){
     boxo.classList.remove('hidden')

    }
    closeIcon.onclick = function(){
      boxo.classList.add('hidden')
    }


    document.addEventListener('DOMContentLoaded', function() {
      const imageContainers = document.querySelectorAll('.image-container');
      let currentIndex = 0;

      function showImage(index) {
        imageContainers.forEach((container, i) => {
          container.classList.toggle('hidden', i !== index);
        });
      }

      document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageContainers.length - 1;
        showImage(currentIndex);
      });

      document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex < imageContainers.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
      });

      // Initialize slider
      showImage(currentIndex);
    });
    // Image Slider

    