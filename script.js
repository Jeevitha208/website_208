// Example: contact form submission message
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting EverGrowth! We will get back to you soon.');
    contactForm.reset();
  });
}