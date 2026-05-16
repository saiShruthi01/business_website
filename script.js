/* ── CONFIG ── */
const EMAILJS_PUBLIC_KEY  = 'ORJsfY97AYr05Vets';    // from EmailJS Account page
const EMAILJS_SERVICE_ID  = 'service_4papcmx';    // from EmailJS Services
const EMAILJS_TEMPLATE_ID = 'template_zm5troi';   // from EmailJS Templates
const SHEET_URL           = 'https://script.google.com/macros/s/AKfycbw0tR6uzI-SoE2IQi31tqIdeY9ToQfqNVDvd4UQk_gbOynr44J582ktLZWqvYW6BTQmIA/exec'; // from Step 2




const themeBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let isDark = false;

themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeIcon.innerHTML = isDark
    ? `<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`
    : `<circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
});



// ── SIDEBAR TOGGLE ── (GLOBAL SCOPE)
let hamburger, sidebar, sidebarOverlay;

function openSidebar() {
    hamburger.classList.add('open');
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    hamburger.classList.remove('open');
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

window.closeSidebar = closeSidebar;

const btn = document.getElementById('submitBtn');

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    /* ── THEME TOGGLE ── */
    const themeBtn  = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let isDark = false;

    themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeIcon.innerHTML = isDark
            ? `<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`
            : `<circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
    });

    /* ── SIDEBAR TOGGLE ── */
hamburger      = document.getElementById('hamburger');
sidebar        = document.getElementById('sidebar');
sidebarOverlay = document.getElementById('sidebarOverlay');

    hamburger.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    sidebarOverlay.addEventListener('click', closeSidebar);

    /* ── SIDEBAR LINKS (click for desktop) ── */
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            closeSidebar();
            if (href && href.startsWith('#')) {
                e.preventDefault();
                setTimeout(() => {
                    const target = document.querySelector(href);
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        });
    });
});





function toggleCategory(id) {
    const allLists = document.querySelectorAll('.pdf-list');
    allLists.forEach(list => {
    if (list.id !== id) {
        list.style.display = 'none';
        list.classList.remove('open');
    }
    });
    const selected = document.getElementById(id);
    if (selected.classList.contains('open')) {
    selected.classList.remove('open');
    setTimeout(() => { selected.style.display = 'none'; }, 300);
    } else {
    selected.style.display = 'flex';
    requestAnimationFrame(() => {
        selected.classList.add('open');
    });
    }
}

/* ── BIDIRECTIONAL REPEATING SCROLL REVEAL ── */
const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
const sectionTitles = document.querySelectorAll(".section-title");

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealTop = 100;
    const revealBottom = 100;

    revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isInView = rect.top < windowHeight - revealTop && rect.bottom > revealBottom;

    if (isInView) {
        el.classList.add("active");
    } else {
        el.classList.remove("active");
    }
    });

    sectionTitles.forEach(title => {
    const rect = title.getBoundingClientRect();
    const isInView = rect.top < windowHeight - revealTop && rect.bottom > revealBottom;

    if (isInView) {
        title.classList.add("line-active");
    } else {
        title.classList.remove("line-active");
    }
    });
}

window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal);
window.addEventListener("resize", checkReveal);

/* ── FLOATING PARTICLES ── */
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.height = Math.random() * 30 + 10 + 'px';
    particle.style.animationDuration = Math.random() * 15 + 10 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(particle);
    }
}
createParticles();

/* ── CURSOR GLOW ── */
const cursorGlow = document.getElementById('cursorGlow');
let glowTimeout;

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.classList.add('visible');

    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => {
    cursorGlow.classList.remove('visible');
    }, 2000);
});

document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('visible');
});


/* ── PHOTO UPLOAD ── */
// const uploadArea = document.getElementById('uploadArea');
// const photoUpload = document.getElementById('photoUpload');
// const previewGrid = document.getElementById('previewGrid');
// const uploadPlaceholder = document.getElementById('uploadPlaceholder');

// let uploadedFiles = [];

// /* Click to open file picker */
// uploadArea.addEventListener('click', (e) => {
//   if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) return;
//   photoUpload.click();
// });

// /* File selected via picker */
// photoUpload.addEventListener('change', (e) => {
//   handleFiles(Array.from(e.target.files));
//   photoUpload.value = '';
// });

// /* Drag over */
// uploadArea.addEventListener('dragover', (e) => {
//   e.preventDefault();
//   uploadArea.classList.add('drag-over');
// });

// uploadArea.addEventListener('dragleave', () => {
//   uploadArea.classList.remove('drag-over');
// });

// /* Drop */
// uploadArea.addEventListener('drop', (e) => {
//   e.preventDefault();
//   uploadArea.classList.remove('drag-over');
//   const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
//   handleFiles(files);
// });

// function handleFiles(files) {
//   /* Remove old error/count */
//   uploadArea.querySelectorAll('.upload-error, .upload-count').forEach(el => el.remove());

//   const maxSize = 5 * 1024 * 1024; /* 5MB */
//   const maxFiles = 5;
//   let errorMsg = '';

//   files.forEach(file => {
//     if (uploadedFiles.length >= maxFiles) {
//       errorMsg = `Max ${maxFiles} photos allowed`;
//       return;
//     }
//     if (!file.type.startsWith('image/')) return;
//     if (file.size > maxSize) {
//       errorMsg = `"${file.name}" is over 5MB`;
//       return;
//     }

//     uploadedFiles.push(file);

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const item = document.createElement('div');
//       item.classList.add('preview-item');
//       item.dataset.index = uploadedFiles.length - 1;

//       const img = document.createElement('img');
//       img.src = e.target.result;
//       img.alt = file.name;

//       const btn = document.createElement('button');
//       btn.classList.add('remove-btn');
//       btn.type = 'button';
//       btn.innerHTML = '×';
//       btn.title = 'Remove';
//       btn.addEventListener('click', (ev) => {
//         ev.stopPropagation();
//         removeFile(item);
//       });

//       item.appendChild(img);
//       item.appendChild(btn);
//       previewGrid.appendChild(item);

//       updatePlaceholder();
//     };
//     reader.readAsDataURL(file);
//   });

//   if (errorMsg) {
//     const err = document.createElement('p');
//     err.classList.add('upload-error');
//     err.textContent = errorMsg;
//     uploadArea.appendChild(err);
//   }

//   updatePlaceholder();
// }

// function removeFile(item) {
//   const index = parseInt(item.dataset.index);
//   uploadedFiles.splice(index, 1);

//   /* Re-index remaining items */
//   previewGrid.removeChild(item);
//   Array.from(previewGrid.children).forEach((el, i) => {
//     el.dataset.index = i;
//   });

//   uploadArea.querySelectorAll('.upload-error, .upload-count').forEach(el => el.remove());
//   updatePlaceholder();
// }

// function updatePlaceholder() {
//   const count = uploadedFiles.length;

//   /* Show/hide placeholder text */
//   uploadPlaceholder.style.display = count > 0 ? 'none' : 'flex';

//   /* Remove old count */
//   uploadArea.querySelectorAll('.upload-count').forEach(el => el.remove());

//   if (count > 0) {
//     const countEl = document.createElement('p');
//     countEl.classList.add('upload-count');
//     countEl.textContent = `${count} photo${count > 1 ? 's' : ''} added`;
//     uploadArea.appendChild(countEl);
//   }
// }




/* ── INITIALIZE EMAILJS ── */
emailjs.init(EMAILJS_PUBLIC_KEY);

/* ── SAVE TO SHEET via hidden form (bypasses CORS) ── */
function saveToSheet(payload) {
  return new Promise((resolve) => {
    const form    = document.createElement('form');
    form.method   = 'POST';
    form.action   = SHEET_URL;
    form.target   = 'hidden_iframe';
    form.style.display = 'none';

    // Add each field as hidden input
    Object.entries(payload).forEach(([key, value]) => {
      const input   = document.createElement('input');
      input.type    = 'hidden';
      input.name    = key;
      input.value   = value;
      form.appendChild(input);
    });

    // Hidden iframe to catch response (no page redirect)
    let iframe = document.getElementById('hidden_iframe');
    if (!iframe) {
      iframe        = document.createElement('iframe');
      iframe.name   = 'hidden_iframe';
      iframe.id     = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    iframe.onload = () => resolve({ success: true });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Resolve after timeout as fallback
    setTimeout(() => resolve({ success: true }), 3000);
  });
}

/* ── SUBMIT INQUIRY ── */
document.getElementById('submitBtn').addEventListener('click', async (e) => {
  e.preventDefault();

  const serviceType = document.querySelector('select').value;
  const quantity    = document.querySelectorAll('input[type="number"]')[0].value || '1';
  const name        = document.querySelectorAll('input[type="text"]')[0].value.trim();
  const phone       = document.querySelector('input[type="tel"]').value.trim();
  const notes       = document.querySelector('textarea').value.trim();
const photoStatus = 'Not Provided';

  if (!name)  { showToast('✕ Please enter your name', 'error');         return; }
  if (!phone) { showToast('✕ Please enter your phone number', 'error'); return; }

  const btn          = document.querySelector('.btn-primary[style]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML      = '<span class="btn-spinner"></span> Sending...';
  btn.disabled       = true;

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone:  'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  // Generate client-side Order ID immediately
  const orderId = generateClientOrderId();

  let emailSuccess = false;
  let sheetSuccess = false;

  // 1 — Save to Google Sheets
  try {
    await saveToSheet({
      name,
      phone,
      service:     serviceType,
      quantity,
      notes:       notes || 'No notes provided',
      photoStatus,
      orderId
    });
    sheetSuccess = true;
  } catch (err) {
    console.warn('Sheet save failed:', err);
  }

  // 2 — Send Email via EmailJS
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      order_id:       orderId,
      customer_name:  name,
      customer_phone: phone,
      service_type:   serviceType,
      quantity:       quantity,
      design_notes:   notes || 'No notes provided',
      photo_status:   photoStatus,
      submitted_at:   submittedAt
    });
    emailSuccess = true;
  } catch (err) {
    console.warn('Email failed:', err);
  }

  // 3 — Show result
  if (emailSuccess || sheetSuccess) {
    showSuccessModal(orderId, name);
  } else {
    showToast('✕ Submission failed. Please call +91 99590 36013', 'error');
  }

  // 4 — Reset form
  setTimeout(() => {
    document.querySelector('select').selectedIndex             = 0;
    document.querySelectorAll('input[type="number"]')[0].value = '';
    document.querySelectorAll('input[type="text"]')[0].value   = '';
    document.querySelector('input[type="tel"]').value          = '';
    document.querySelector('textarea').value                   = '';
    // if (typeof previewGrid !== 'undefined') {
    //   previewGrid.innerHTML = '';
    //   uploadedFiles         = [];
    //   updatePlaceholder();
    // }
    btn.innerHTML = originalHTML;
    btn.disabled  = false;
  }, 1500);
});

/* ── CLIENT SIDE ORDER ID ── */
function generateClientOrderId() {
  const now   = new Date();
  const year  = now.getFullYear().toString().slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day   = String(now.getDate()).padStart(2, '0');
  const rand  = String(Math.floor(Math.random() * 900) + 100);
  return `SE-${year}${month}${day}-${rand}`;
}

/* ── SUCCESS MODAL ── */
function showSuccessModal(orderId, name) {
  const existing = document.getElementById('successModal');
  if (existing) existing.remove();

  const modal  = document.createElement('div');
  modal.id     = 'successModal';
  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeSuccessModal()"></div>
    <div class="modal-box">
      <div class="modal-icon">✓</div>
      <h3 class="modal-title">Inquiry Submitted!</h3>
      <p class="modal-sub">Thank you, ${name}. We will contact you within 24 hours.</p>
      <div class="modal-order-id">
        <span class="modal-order-label">Your Order ID</span>
        <span class="modal-order-num">${orderId}</span>
        <button class="modal-copy-btn" onclick="copyOrderId('${orderId}')">Copy</button>
      </div>
      <p class="modal-note">Save this ID to track your order status.</p>
      <button class="btn btn-primary modal-close-btn" onclick="closeSuccessModal()">Done</button>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => modal.classList.add('modal-visible'));
  });
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal');
  if (!modal) return;
  modal.classList.remove('modal-visible');
  setTimeout(() => modal.remove(), 400);
}

function copyOrderId(id) {
  navigator.clipboard.writeText(id).then(() => {
    const btn = document.querySelector('.modal-copy-btn');
    if (btn) {
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    }
  });
}

/* ── TOAST ── */
function showToast(message, type) {
  const existing = document.querySelector('.form-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.classList.add('form-toast', type);
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}





/* ── TOUCH FEEDBACK ── */const TOUCH_SELECTOR = '.service-card, .catalog-card, .gallery-item, .sidebar a, .btn, .nav-links a, .footer-contact a';

document.addEventListener('touchstart', (e) => {
    const el = e.target.closest(TOUCH_SELECTOR);
    if (!el) return;
    el.classList.add('touch-active');
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const el = e.target.closest(TOUCH_SELECTOR);
    if (!el) return;

    if (el.matches('.sidebar a')) {
        const href = el.getAttribute('href');
        e.preventDefault(); // prevent ghost click
        setTimeout(() => {
            el.classList.remove('touch-active');
            closeSidebar(); // now works because closeSidebar is global
            setTimeout(() => {
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }, 150);
        return;
    }

if (el.matches('.btn') && el.tagName === 'A') {
    const href = el.getAttribute('href');
    e.preventDefault();  // prevent native anchor jump
    setTimeout(() => {
        el.classList.remove('touch-active');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 150);
    return;
}

    setTimeout(() => el.classList.remove('touch-active'), 800);
});

document.addEventListener('touchcancel', (e) => {
    const el = e.target.closest(TOUCH_SELECTOR);
    if (el) el.classList.remove('touch-active');
}, { passive: true });


// ── STAR RATING ──
// ── STAR RATING ──
const stars = document.querySelectorAll('#starRating span');
const ratingInput = document.getElementById('feedbackRating');

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const val = +star.dataset.value;
        stars.forEach(s => s.classList.toggle('active', +s.dataset.value <= val));
    });
    star.addEventListener('mouseleave', () => {
        const val = +ratingInput.value;
        stars.forEach(s => s.classList.toggle('active', +s.dataset.value <= val));
    });
    star.addEventListener('click', () => {
        ratingInput.value = star.dataset.value;
    });
});

// ── FEEDBACK DATA & RENDER ──
let feedbacks = [
    { name: "Lakshmi Devi", rating: 5, text: "Absolutely stunning maggam work on my bridal blouse! The zari detailing was perfect and delivered on time. Highly recommend S3 E&T!", time: "2 May, 09:30 AM" },
    { name: "Anitha Rao", rating: 4, text: "Beautiful floral aari work on my blouse sleeves. The colors matched exactly as I wanted. Will definitely order again.", time: "21 Apr, 03:45 PM" },
    { name: "Mounika Varma", rating: 4, text: "The heavy zardozi work on my lehenga blouse was exquisite. Takes time but the result is worth every penny.", time: "6 Apr, 02:20 PM" }
];

function renderFeedbacks() {
    const wall = document.getElementById('feedbackWall');
    const title = document.querySelector('.feedback-wall-title');
    if (!wall) return;

    if (feedbacks.length === 0) {
        wall.innerHTML = '';
        if (title) title.style.display = 'none';
        return;
    }

    if (title) title.style.display = 'block';

    wall.innerHTML = [...feedbacks].reverse().map(f => `
        <div class="feedback-card">
            <div class="fc-stars">${'★'.repeat(f.rating)}${'☆'.repeat(5 - f.rating)}</div>
            <p class="fc-text">${f.text}</p>
            <div class="fc-meta">
                <span>${f.name}</span>
                <span>${f.time}</span>
            </div>
        </div>
    `).join('');
}

renderFeedbacks(); // show on page load

// ── FEEDBACK SUBMIT ──
document.getElementById('feedbackBtn')?.addEventListener('click', () => {
    const name = document.getElementById('feedbackName').value.trim();
    const rating = +document.getElementById('feedbackRating').value;
    const text = document.getElementById('feedbackText').value.trim();

    if (!name || rating === 0 || !text) {
        alert('Please fill in all fields and select a rating.');
        return;
    }

    const now = new Date();
    const time = now.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

    feedbacks.push({ name, rating, text, time });
    renderFeedbacks();

    const successEl = document.getElementById('feedbackSuccess');
    successEl.style.display = 'block';
    setTimeout(() => { successEl.style.display = 'none'; }, 3000);

    document.getElementById('feedbackName').value = '';
    document.getElementById('feedbackText').value = '';
    ratingInput.value = '0';
    stars.forEach(s => s.classList.remove('active'));
});