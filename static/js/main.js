const modal    = document.getElementById('video-modal');
const iframe   = document.getElementById('yt-iframe');
const openBtn  = document.getElementById('how-it-works-btn');
const closeBtn = document.getElementById('modal-close-btn');

if (openBtn) {
    function openModal() {
        iframe.src = iframe.dataset.src;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        iframe.src = '';
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}
