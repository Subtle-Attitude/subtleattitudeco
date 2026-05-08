document.addEventListener('DOMContentLoaded', () => {
    console.log('Subtle Attitude LLC website loaded');

    // Artist Signature Button
    const artistBtn = document.getElementById('artist-signature-btn');
    if (artistBtn) {
        artistBtn.addEventListener('click', () => openModal('artist'));
    } else {
        console.error('Artist signature button not found');
    }

    // Category Buttons in Theory
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalType = btn.dataset.modal;
            openModal(modalType);
        });
    });

    // Brand Buttons in Subtle Attitude (now also includes Legal policy buttons)
    document.querySelectorAll('.brand-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalType = btn.dataset.modal;
            openModal(modalType);
        });
    });

    function openModal(type) {
        const existing = document.querySelector('.info-modal, .category-modal, .brand-modal');
        if (existing) existing.remove();

        let title = '';
        let content = '';

        switch (type) {
            case 'artist':
                title = 'Artist Memo';
                content = `
                    <p>You are not lost, searching for the stars—<br>
                    you are made of them.<br>
                    Held by the gravity of your truth,<br>
                    guided by the light within,<br>
                    may you find rest in your own rhythm.<br>
                    You are not a stranger here—<br>
                    you are the echo of galaxies,<br>
                    the keeper of your own light.</p>
                    <p>If you need support, reach out to the <a href="tel:988" target="_blank">Suicide & Crisis Lifeline at 988</a>.</p>
                `;
                break;
            case 'envision':
                title = 'ENVISION';
                content = `
                    <p><strong>Perspective:</strong> Envision already having lived your most fulfilled life. From the future-self’s vantage point guiding the journey.</p>
                    <ul>
                        <li>Inspires gentle risk analysis</li>
                        <li>Supports destiny road mapping</li>
                        <li>Boosts situational resilience and decision-making</li>
                    </ul>
                    <p>Envision helps you align your present actions with your highest potential.</p>
                `;
                break;
            case 'your-atlas':
                title = 'YOUR ATLAS';
                content = `
                    <p><strong>Perspective:</strong> Self-mapping across time. The Inner Atlas lens that helps you understand your ethos — past, present, and future — so you can navigate your life with clarity and intention.</p>
                    <ul>
                        <li>Encourages subtle perspective shifts toward cosmic clarity</li>
                        <li>Strengthens emotional resilience</li>
                        <li>Supports subconscious integration and healing</li>
                    </ul>
                    <p>Your Atlas grounds the entire ecosystem in self-awareness and inner orientation.</p>
                `;
                break;
            case 'dreamcatcher':
                title = 'DREAMCATCHER';
                content = `
                    <p><strong>Perspective:</strong> Exploring the subconscious. Designed to activate dream recall, deepen intuition, and bridge waking insight with subconscious wisdom.</p>
                    <ul>
                        <li>Enhances dream-memory pathways</li>
                        <li>Encourages symbolic interpretation</li>
                        <li>Increases occurrence of lucid dreams</li>
                    </ul>
                    <p>Dreamcatcher opens the doorway between your outer world and the messages waiting beyond it.</p>
                `;
                break;
            case 'founder':
                title = 'Hi. I’m Kristin…';
                content = `
                    <p>You can call me Krissy if you’d like.</p>
                    <p>As long as I can remember, I’ve been chasing clarity through creativity. I truly don’t remember a time when using art wasn’t just another way for me to breathe, especially when life felt too loud or too big.</p>
                    <p>Drawing, writing, and making things became my way of stepping back, finding perspective, and reminding myself that even in chaos, there’s always a place inside that feels steady.</p>
                    <p>Over the years, that practice became a philosophy: with creativity, resilience, and small intentional steps, anything is possible. No situation is too overwhelming, no goal too far out of reach. Every shift begins with one gentle action.</p>
                    <p>So, when my last project came to a close, I knew it was time to begin the biggest creative work of my life — a project that brings together everything I’ve learned about emotional safety, perspective, and self-discovery.</p>
                    <p>That’s how Subtle Attitude LLC and the Inner Atlas guided journal series were born.</p>
                `;
                break;
            case 'brand':
                title = 'SUBTLE ATTITUDE LLC';
                content = `
                    <p>is my creative self-discovery design studio.</p>
                    <p>where I design emotionally safe, psychologically grounded tools for self-discovery. Through journals, guided sessions, and digital experiences, I help people make their inner world visible, nameable, and navigable — so they can understand their patterns, reclaim their story, and move toward a more fulfilled destiny with intention.</p>
                    <p>I call this ecosystem Your Inner Atlas — a framework I’ve built to help you orient yourself across time: honoring your past, grounding in your present, and envisioning the life you’re becoming.</p>
                    <p>My work blends expressive writing, subconscious exploration, dream-recall practices, and future-self mapping into a gentle, transformative journey.</p>
                    <p>I believe clarity isn’t a lightning strike. It’s a subtle shift — repeated with compassion — until your whole life begins to change.</p>
                `;
                break;

            // ==================== NEW: Return & Privacy Policies ====================
            case 'return-policy':
                title = 'Return & Refund Policy';
                content = `
                    <p><strong>Last Updated: May 2026</strong></p>
                    <p>Thank you for shopping with Subtle Attitude LLC. We want you to love your journals.</p>
                    
                    <strong>Returns Accepted For:</strong>
                    <ul>
                        <li>Damaged items upon arrival (torn cover, defective binding, printing errors)</li>
                        <li>Incorrect item sent (wrong design or version on our end)</li>
                    </ul>
                    
                    <strong>Timeframe:</strong>
                    <p>Contact us within <strong>14 days</strong> of delivery with photos of the issue and your order number.</p>
                    
                    <strong>Not Eligible:</strong>
                    <ul>
                        <li>Change of mind</li>
                        <li>Used or written-in journals</li>
                        <li>Items showing signs of wear</li>
                    </ul>
                    
                    <strong>Process:</strong>
                    <ol>
                        <li>Message us at contact@subtleattitude.co with order details + photos.</li>
                        <li>Do not ship back until we approve the return.</li>
                        <li>Return the item in original packaging (you are responsible for return shipping unless it is our error).</li>
                        <li>After we inspect the return, we will issue a refund to your original payment method within 5–7 business days (original shipping is non-refundable).</li>
                    </ol>
                    
                    <p>International orders: Buyer responsible for all return shipping and customs fees.</p>
                    <p>Questions? Email <a href="mailto:contact@subtleattitude.co">contact@subtleattitude.co</a></p>
                `;
                break;

            case 'privacy-policy':
                title = 'Privacy Policy';
                content = `
                    <p><strong>Last Updated: May 2026</strong></p>
                    <p>Subtle Attitude LLC (“we”, “us”, “our”) respects your privacy.</p>
                    
                    <strong>Information We Collect:</strong>
                    <ul>
                        <li>Contact information (name, email) when you reach out</li>
                        <li>Order information when purchasing through our partners (Lulu, etc.)</li>
                        <li>Basic website usage data</li>
                    </ul>
                    
                    <strong>How We Use It:</strong>
                    <ul>
                        <li>To respond to your inquiries</li>
                        <li>To process and fulfill orders</li>
                        <li>To improve our website and offerings</li>
                    </ul>
                    
                    <strong>Sharing:</strong>
                    <p>We do not sell your personal data. We only share information with fulfillment partners (e.g. Lulu) as needed to complete your order.</p>
                    
                    <strong>Your Rights:</strong>
                    <p>You can request access, correction, or deletion of your data by emailing contact@subtleattitude.co.</p>
                    
                    <strong>Cookies:</strong>
                    <p>We use only essential cookies for site functionality.</p>
                    
                    <p>For questions about this policy, please email <a href="mailto:contact@subtleattitude.co">contact@subtleattitude.co</a>.</p>
                `;
                break;
            // =====================================================================

            default:
                return;
        }

        const modal = document.createElement('div');
        modal.className = type === 'artist' ? 'info-modal' : (['envision','your-atlas','dreamcatcher'].includes(type) ? 'category-modal' : 'brand-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${title}</h2>
                ${content}
                <button class="close-modal-btn" aria-label="Close modal">Close</button>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.classList.add('modal-open');

        const closeBtn = modal.querySelector('.close-modal-btn');
        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        }, { once: true });

        function closeModal() {
            modal.remove();
            document.body.classList.remove('modal-open');
        }
    }

    // Fullscreen for Unfolding video on mobile
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const unfoldingVideo = document.getElementById('unfolding-video');

    if (fullscreenBtn && unfoldingVideo) {
        fullscreenBtn.addEventListener('click', () => {
            if (unfoldingVideo.requestFullscreen) {
                unfoldingVideo.requestFullscreen();
            } else if (unfoldingVideo.webkitRequestFullscreen) {
                unfoldingVideo.webkitRequestFullscreen();
            } else if (unfoldingVideo.msRequestFullscreen) {
                unfoldingVideo.msRequestFullscreen();
            }
        });
    }
});