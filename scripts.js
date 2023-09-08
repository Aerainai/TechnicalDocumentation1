const searchInput = document.getElementById('searchInput');
const sections = document.querySelectorAll('section');

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        const isVisible = sectionText.includes(searchTerm);

        section.style.display = isVisible ? 'block' : 'none';
    });
});

