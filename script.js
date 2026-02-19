document.addEventListener('DOMContentLoaded', () => {
    console.log('Subtle Attitude LLC website loaded');

    const artistBtn = document.getElementById('artist-signature-btn');
    if (!artistBtn) {
        console.error('Artist signature button not found – check HTML id="artist-signature-btn"');
        return;
    }

    function openModal() {
        console.log('Opening artist memo modal');

        // Remove any existing modal first (prevents duplicates)
        const existing = document.querySelector('.info-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'info-modal';
        modal.innerHTML = `
            <div class="info-modal-content">
                <p>You are not lost, searching for the stars—<br>
                you are made of them.<br>
                Held by the gravity of your truth,<br>
                guided by the light within,<br>
                may you find rest in your own rhythm.<br>
                You are not a stranger here—<br>
                you are the echo of galaxies,<br>
                the keeper of your own light.</p>
                <p>If you need support, reach out to the <a href="tel:988" target="_blank">Suicide & Crisis Lifeline at 988</a>.</p>
                <button class="close-btn" aria-label="Close artist memo">Close</button>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.classList.add('modal-open');

        // Focus close button for accessibility
        modal.querySelector('.close-btn').focus();

        // Close on click outside content or close button
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close-btn')) {
                closeModal(modal);
            }
        });

        // Close on Escape key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal(modal);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    function closeModal(modal) {
        console.log('Closing artist memo modal');
        modal.remove();
        document.body.classList.remove('modal-open');
    }

    artistBtn.addEventListener('click', openModal);
});