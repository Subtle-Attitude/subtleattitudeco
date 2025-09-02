document.addEventListener('DOMContentLoaded', function() {
    console.log('Subtle Attitude LLC website loaded');

    const artistBtn = document.getElementById('artist-signature-btn');
    if (!artistBtn) {
        console.error('Artist signature button not found');
        return;
    }

    function showInfoModal() {
        try {
            console.log('Attempting to show info modal');
            const modal = document.createElement('div');
            modal.className = 'info-modal';
            modal.style.display = 'flex';
            modal.style.visibility = 'visible';
            modal.style.opacity = '1';
            document.body.classList.add('modal-open');

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
                    <button class="close-btn" aria-label="Close info modal">Close</button>
                </div>
            `;
            document.body.appendChild(modal);
            console.log('Modal appended to body');

            const closeBtn = modal.querySelector('.close-btn');
            if (!closeBtn) {
                throw new Error('Close button not found in modal');
            }
            closeBtn.addEventListener('click', () => {
                console.log('Closing info modal');
                modal.remove();
                document.body.classList.remove('modal-open');
            });
        } catch (error) {
            console.error('Failed to show info modal:', error.message, error.stack);
            alert('Error displaying artist memo. Please try again or check the console for details.');
        }
    }

    artistBtn.addEventListener('click', showInfoModal);
});