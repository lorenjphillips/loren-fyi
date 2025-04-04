document.addEventListener('DOMContentLoaded', function() {
    // Load the navigation
    fetch('/components/nav.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navigation into the wrapper
            const wrapper = document.getElementById('wrapper');
            wrapper.insertAdjacentHTML('afterbegin', data);
            
            // Set active class based on current page
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('#nav .links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.parentElement.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading navigation:', error));
}); 