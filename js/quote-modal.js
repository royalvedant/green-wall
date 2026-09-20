/* ==========================================================================
   THAT'S IT NURSERY - QUICK QUOTE MODAL & WHATSAPP TRIGGER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const quoteModal = document.getElementById('quote-modal');
  const openModalBtns = document.querySelectorAll('.open-quote-modal-btn');
  const closeModalBtns = document.querySelectorAll('.close-quote-modal-btn');
  const quoteForm = document.getElementById('quick-quote-form');

  function openModal() {
    if (quoteModal) {
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (quoteModal) {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  }));

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeModal();
      }
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quote-name').value.trim();
      const phone = document.getElementById('quote-phone').value.trim();
      const projectType = document.getElementById('quote-service').value;
      const dimensions = document.getElementById('quote-dimensions').value.trim();
      const notes = document.getElementById('quote-notes').value.trim();

      const message = `*New Inquiry via That's It Nursery Web App*%0A` +
        `👤 *Name*: ${encodeURIComponent(name)}%0A` +
        `📞 *Phone*: ${encodeURIComponent(phone)}%0A` +
        `🌿 *Service*: ${encodeURIComponent(projectType)}%0A` +
        `📐 *Dimensions / Approx Sq.Ft*: ${encodeURIComponent(dimensions || 'Not specified')}%0A` +
        `📝 *Details*: ${encodeURIComponent(notes || 'None')}`;

      // Trigger direct WhatsApp
      window.open(`https://wa.me/919921324365?text=${message}`, '_blank');
      closeModal();
    });
  }
});
