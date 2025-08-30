// Tab switching functionality
document.addEventListener('DOMContentLoaded', function(){
    console.log('Tab functionality loading...'); // Debug line
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    console.log('Found tab buttons:', tabBtns.length); // Debug line
    console.log('Found tab contents:', tabContents.length); // Debug line
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            console.log('Tab clicked:', this.getAttribute('data-tab')); // Debug line
            
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetElement = document.getElementById(targetTab);
            if (targetElement) {
                targetElement.classList.add('active');
                console.log('Tab switched to:', targetTab); // Debug line
            } else {
                console.error('Target element not found:', targetTab); // Debug line
            }
        });
    });

    // Modal functionality for member cards
    document.querySelectorAll('.member-item').forEach(item => {
        item.addEventListener('click', function(e){
            e.stopPropagation();
            openMemberModal(this);
        });
    });
});

// Function to open member modal
function openMemberModal(memberItem) {
    const modal = document.getElementById('memberModal');
    const photo = memberItem.querySelector('.member-head img');
    const name = memberItem.querySelector('.member-name').textContent;
    const role = memberItem.querySelector('.member-role').textContent;
    const bioElement = memberItem.querySelector('.member-details p');
    const contactElements = memberItem.querySelectorAll('.contact-line');
    
    // Set modal content
    document.getElementById('modalPhoto').src = photo.src;
    document.getElementById('modalPhoto').alt = photo.alt;
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalRole').textContent = role;
    
    // Set bio content
    const bio = bioElement ? bioElement.textContent : 'Full bio information will be added soon.';
    document.getElementById('modalBio').textContent = bio;
    
    // Set contact information
    const contactContainer = document.getElementById('modalContact');
    contactContainer.innerHTML = '';
    contactElements.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'modal-contact-line';
        contactDiv.textContent = contact.textContent;
        contactContainer.appendChild(contactDiv);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close member modal
function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside or on close button
document.addEventListener('click', function(e) {
    const modal = document.getElementById('memberModal');
    if (e.target === modal || e.target.classList.contains('modal-close')) {
        closeMemberModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMemberModal();
    }
});
