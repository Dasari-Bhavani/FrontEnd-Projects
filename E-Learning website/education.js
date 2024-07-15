document.addEventListener("DOMContentLoaded", function() {
    const courses = document.querySelectorAll('.course');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Adjust trigger point

        courses.forEach(course => {
            const courseTop = course.getBoundingClientRect().top;

            if (courseTop < triggerBottom) {
                course.classList.add('visible');
            } else {
                course.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});