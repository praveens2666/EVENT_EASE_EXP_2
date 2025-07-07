// Hamburger toggle
document.getElementById('hamburger').onclick = function() {
  const ul = document.querySelector('nav ul');
  ul.style.display = (ul.style.display === 'flex') ? 'none' : 'flex';
}

// Modal functions (no Bootstrap)
function openModal(title, desc, videoUrl) {
  let modal = document.getElementById('videoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'custom-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h3 id="videoModalLabel"></h3>
        <div class="video-wrapper">
          <video id="modalVideo" controls style="width:100%;border-radius:1rem;"></video>
        </div>
        <p id="videoModalDesc"></p>
      </div>`;
    document.body.appendChild(modal);
  }
  document.getElementById('videoModalLabel').innerText = title;
  document.getElementById('videoModalDesc').innerText = desc;
  const video = document.getElementById('modalVideo');
  video.src = videoUrl;
  video.currentTime = 0;
  video.play();
  modal.style.display = 'flex';
  modal.onclick = function(e) { if(e.target === modal) closeModal(); };
}
function closeModal() {
  const modal = document.getElementById('videoModal');
  if (modal) {
    const video = document.getElementById('modalVideo');
    if (video) { video.pause(); video.currentTime = 0; }
    modal.style.display = 'none';
  }
}

// Gallery filter
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return false;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return false;
  }
  alert('Message sent successfully!');
  return false; // prevent real submit for demo
}

