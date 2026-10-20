/**
 * AYAN A. — PORTFOLIO JAVASCRIPT
 * High-performance, clean vanilla JS for video previews, cinema modal, poster inspector,
 * filters, and direct commission interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     PROJECT DATA ARCHIVE (8 AI Motion Works & 4 Posters)
     ========================================================================== */
  const videoWorksData = {
    1: {
      title: "Neo-Genesis: Chronos & Form",
      category: "Cinematic & Narrative",
      tags: ["AI Direction", "Runway Gen-3", "DaVinci Resolve"],
      src: "assets/videos/work_01.mp4",
      excerpt: "Cinematic exploration of sculptural light, fluid atmosphere, and generative world-building.",
      description: "Directed with precise camera tracking prompts using Runway Gen-3 Alpha, followed by secondary stabilization, color separation in DaVinci Resolve Studio, and custom cinematic audio design. Engineered to demonstrate that AI video can hold emotional stillness and cinematic weight without unnatural morphing.",
      tools: "Runway Gen-3 Alpha • DaVinci Resolve • After Effects",
      resolution: "4K DCI Remaster",
      audio: "Spatial Cinematic Sub-Bass Master"
    },
    2: {
      title: "Organic Synapse",
      category: "Surreal & Experimental",
      tags: ["Surreal Motion", "Midjourney v6", "After Effects"],
      src: "assets/videos/work_02.mp4",
      excerpt: "Biological rhythm visualizer blending cellular metamorphosis with synchronized sound design.",
      description: "A deep dive into abstract microscopic textures and bio-mechanical transitions. Frame-interpolated and color-graded to emphasize tactile organic membranes and fluid velocity.",
      tools: "Midjourney v6 • Topaz Video AI • After Effects",
      resolution: "4K Ultra HD",
      audio: "Granular Foley & Micro-Sound Design"
    },
    3: {
      title: "Hyperreal Kinetics",
      category: "High-Energy & Motion",
      tags: ["Kinetic Cut", "Kling AI", "Sound Master"],
      src: "assets/videos/work_03.mp4",
      excerpt: "High-speed dynamic perspective shifts engineered with precise motion prompts and fast-paced cut transitions.",
      description: "Showcasing commercial edit pacing with razor-sharp match cuts. Built for high-tempo promotional campaigns where visual momentum and audio impact must sync to millisecond accuracy.",
      tools: "Kling AI Studio • Premiere Pro CC • Sound FX",
      resolution: "4K Master Delivery",
      audio: "High-Impact Commercial Bass & Beat Sync"
    },
    4: {
      title: "Solitude in Orbit",
      category: "Cinematic & Narrative",
      tags: ["Atmospheric", "Luma Dream", "Color Grading"],
      src: "assets/videos/work_04.mp4",
      excerpt: "Contemplative sci-fi narrative sequence focusing on cosmic depth, gentle camera panning, and emotive grade.",
      description: "An intentional study in slow cinema. Using Luma Dream Machine's coherent physics modeling to simulate planetary orbit lighting, backed by rich analog film grain emulation.",
      tools: "Luma Dream Machine • DaVinci Fairlight • Film Grain",
      resolution: "4K 2.39:1 Anamorphic Aspect",
      audio: "Atmospheric Ambient Drone Master"
    },
    5: {
      title: "Metamorphosis V",
      category: "Surreal & Experimental",
      tags: ["High-Fashion", "Runway Gen-3", "Premiere Pro"],
      src: "assets/videos/work_05.mp4",
      excerpt: "Avant-garde fashion editorial visual portraying evolving textile textures, structural shadows, and modern drape.",
      description: "Created as an haute-couture digital lookbook film. Focused on realistic fabric tension, high-contrast chiaroscuro lighting, and editorial fashion montage cuts.",
      tools: "Runway Gen-3 • Photoshop • Premiere Pro",
      resolution: "4K Vertical & 16:9 Master",
      audio: "Bespoke Runway Electronic Score"
    },
    6: {
      title: "Urban Artifacts",
      category: "High-Energy & Motion",
      tags: ["Cyber-Brutalist", "Topaz 4K", "VFX Pipeline"],
      src: "assets/videos/work_06.mp4",
      excerpt: "Subterranean architectural exploration merging gritty industrial concrete textures with futuristic holographic light.",
      description: "Industrial visual poetry exploring raw concrete forms, neon reflections in rainwater, and sudden rhythmic speed transitions. Upscaled with Topaz Video AI for razor-sharp edge fidelity.",
      tools: "Runway Gen-3 • Topaz Video AI • After Effects",
      resolution: "4K High Frame Fidelity",
      audio: "Industrial Techno & Concrete Echo Foley"
    },
    7: {
      title: "Ethereal Memoirs",
      category: "Cinematic & Narrative",
      tags: ["Mood Film", "Slow Burn", "Foley Audio"],
      src: "assets/videos/work_07.mp4",
      excerpt: "Poetic visual essay balancing analog nostalgia, subtle grain emulation, and dreamlike memory fragments.",
      description: "Tackling the nuance of vintage 16mm archival texture inside generative AI pipelines. Halation, gate weave, and warm tonal rolloff were applied in post-production to create an authentic human feeling.",
      tools: "Generative AI Video • Dehancer Pro • DaVinci Color",
      resolution: "4K Vintage 16mm Emulation",
      audio: "Analog Tape Flutter & Ambient Foley"
    },
    8: {
      title: "Velocity Matrix",
      category: "High-Energy & Motion",
      tags: ["Commercial Cut", "High-Octane", "Full Pipeline"],
      src: "assets/videos/work_08.mp4",
      excerpt: "Commercial-tier visual pacing combining mechanical design cues, kinetic typography, and pulse-driven editing.",
      description: "The capstone commercial reel blending 3D camera kinetics, generative environments, and intense editorial cuts. Engineered to hold viewer retention from first second to last.",
      tools: "Runway Gen-3 • Kling AI • Premiere Pro • DaVinci",
      resolution: "4K Commercial Broadcast Master",
      audio: "Multi-Track Trailer Sound Master"
    }
  };

  const postersData = {
    1: {
      title: "Chroma & Form",
      category: "Exhibition Poster Design",
      src: "assets/images/poster_01.jpg",
      desc: "An exploration of colour and geometry in contemporary art designed for Kunsthalle Basel. Strict adherence to Swiss modernist grid systems, balanced negative space, and refined geometric harmonies.",
      specs: [
        { label: "Client / Context", value: "Kunsthalle Basel Exhibition" },
        { label: "Dimensions", value: "70 × 100 cm (Screenprint Edition)" },
        { label: "Typography", value: "Syne & Neue Haas Grotesk" },
        { label: "Color Space", value: "Warm Ochre, Terracotta, Ivory" }
      ]
    },
    2: {
      title: "Echoes of Tomorrow",
      category: "Theatrical Cinema One-Sheet",
      src: "assets/images/poster_02.jpg",
      desc: "Theatrical key art for an independent narrative feature, inspired by classic A24 cinematic releases. Balancing emotional solitude with breathtaking golden-hour mountain atmosphere and classical serif title hierarchy.",
      specs: [
        { label: "Film Festival", value: "Official Selection & Sundance Honoree" },
        { label: "Dimensions", value: "27 × 40 in (Theatrical Standard)" },
        { label: "Typography", value: "Custom Editorial Serif & Grotesk Block" },
        { label: "Finish", value: "Vintage Film Grain & Halation" }
      ]
    },
    3: {
      title: "Sonic Resonance Tokyo",
      category: "Music & Visual Arts Festival",
      src: "assets/images/poster_03.jpg",
      desc: "Underground electronic music festival key art in Shibuya, Tokyo. Features brutalist typographic distortion, audio waveform abstractions, barcode elements, and micro-grid scheduling layout.",
      specs: [
        { label: "Venue & City", value: "Shibuya O-East, Tokyo" },
        { label: "Dimensions", value: "B1 Print (728 × 1030 mm)" },
        { label: "Typography", value: "Custom Brutalist Kinetic Grotesk" },
        { label: "Palette", value: "Monochrome Black & Warm Cream" }
      ]
    },
    4: {
      title: "Archetype Studio",
      category: "Brand Identity & Design System",
      src: "assets/images/poster_04.jpg",
      desc: "Comprehensive brand identity system for a Scandinavian architectural firm. Encompasses monogram geometry, letterhead stationery, typographic hierarchy standards, and tactile earth-tone color palettes.",
      specs: [
        { label: "Client Sector", value: "Minimalist Scandinavian Architecture" },
        { label: "Deliverable", value: "Full Brand Guidelines & Print Assets" },
        { label: "Monogram", value: "Architectural 'A' Monogram" },
        { label: "Color Swatches", value: "#A1674C Terracotta, #E2DDD6 Stone" }
      ]
    }
  };

  /* ==========================================================================
     VIDEO CARD HOVER & INTERSECTION OBSERVER
     ========================================================================== */
  const workCards = document.querySelectorAll('.work-card');

  // Video hover previews (desktop)
  workCards.forEach(card => {
    const video = card.querySelector('.work-video');
    const workId = card.getAttribute('data-work-id');

    if (video) {
      // Play on hover
      card.addEventListener('mouseenter', () => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented; fallback gracefully
          });
        }
      });

      // Pause and reset on mouse leave
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });

      // Click card to open modal lightbox
      card.addEventListener('click', (e) => {
        e.preventDefault();
        openVideoModal(workId);
      });
    }
  });

  /* ==========================================================================
     CINEMA VIDEO MODAL LIGHTBOX
     ========================================================================== */
  const videoModal = document.getElementById('videoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalWorkTitle = document.getElementById('modalWorkTitle');
  const modalWorkExcerpt = document.getElementById('modalWorkExcerpt');
  const modalWorkTag = document.getElementById('modalWorkTag');
  const modalWorkTools = document.getElementById('modalWorkTools');
  const modalResolution = document.getElementById('modalResolution');
  const modalAudio = document.getElementById('modalAudio');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function openVideoModal(id) {
    const data = videoWorksData[id];
    if (!data || !videoModal) return;

    modalWorkTitle.textContent = data.title;
    modalWorkExcerpt.textContent = data.description;
    modalWorkTag.textContent = data.category;
    modalWorkTools.textContent = data.tools;
    modalResolution.textContent = data.resolution;
    modalAudio.textContent = data.audio;

    modalVideoPlayer.src = data.src;
    modalVideoPlayer.currentTime = 0;

    // Show native modal
    if (typeof videoModal.showModal === 'function') {
      videoModal.showModal();
    } else {
      videoModal.setAttribute('open', '');
    }

    // Attempt video playback
    modalVideoPlayer.play().catch(() => {});
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal) return;
    modalVideoPlayer.pause();
    modalVideoPlayer.currentTime = 0;
    modalVideoPlayer.src = "";

    if (typeof videoModal.close === 'function') {
      videoModal.close();
    } else {
      videoModal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeVideoModal);
  }

  // Close modal when clicking backdrop
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });

    // Handle ESC key
    videoModal.addEventListener('cancel', () => {
      closeVideoModal();
    });
  }

  /* ==========================================================================
     POSTER INSPECTOR MODAL
     ========================================================================== */
  const posterModal = document.getElementById('posterModal');
  const posterModalImg = document.getElementById('posterModalImg');
  const posterModalTitle = document.getElementById('posterModalTitle');
  const posterModalDesc = document.getElementById('posterModalDesc');
  const posterModalCategory = document.getElementById('posterModalCategory');
  const posterModalSpecs = document.getElementById('posterModalSpecs');
  const closePosterBtn = document.getElementById('closePosterBtn');
  const posterCards = document.querySelectorAll('.poster-card');

  function openPosterModal(id) {
    const data = postersData[id];
    if (!data || !posterModal) return;

    posterModalImg.src = data.src;
    posterModalImg.alt = data.title;
    posterModalTitle.textContent = data.title;
    posterModalDesc.textContent = data.desc;
    posterModalCategory.textContent = data.category.toUpperCase();

    // Render specs
    posterModalSpecs.innerHTML = data.specs.map(s => `
      <div class="poster-spec-line">
        <span>${s.label}:</span>
        <span>${s.value}</span>
      </div>
    `).join('');

    if (typeof posterModal.showModal === 'function') {
      posterModal.showModal();
    } else {
      posterModal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closePosterModal() {
    if (!posterModal) return;
    if (typeof posterModal.close === 'function') {
      posterModal.close();
    } else {
      posterModal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  posterCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-poster-id');
      openPosterModal(id);
    });
  });

  if (closePosterBtn) {
    closePosterBtn.addEventListener('click', closePosterModal);
  }

  if (posterModal) {
    posterModal.addEventListener('click', (e) => {
      if (e.target === posterModal) {
        closePosterModal();
      }
    });
    posterModal.addEventListener('cancel', () => {
      closePosterModal();
    });
  }

  const commissionPosterBtn = document.getElementById('commissionPosterBtn');
  if (commissionPosterBtn) {
    commissionPosterBtn.addEventListener('click', () => {
      closePosterModal();
    });
  }

  /* ==========================================================================
     WORK FILTER TABS
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  /* ==========================================================================
     MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('nav-open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on navigation link click
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     COPY EMAIL TO CLIPBOARD WITH TOAST
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const copyBtnStatus = document.getElementById('copyBtnStatus');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toastNotification) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('visible');
    setTimeout(() => {
      toastNotification.classList.remove('visible');
    }, 2800);
  }

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        copyBtnStatus.textContent = "Copied!";
        showToast("Email address copied to clipboard!");
        setTimeout(() => {
          copyBtnStatus.textContent = "Copy";
        }, 2000);
      }).catch(() => {
        showToast("Direct: " + email);
      });
    });
  }

  /* ==========================================================================
     INTERACTIVE INQUIRY FORM
     ========================================================================== */
  const inquiryForm = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const message = document.getElementById('projectDetails').value.trim();
      
      const checkedServices = [];
      inquiryForm.querySelectorAll('input[name="services"]:checked').forEach(cb => {
        checkedServices.push(cb.value);
      });

      const servicesStr = checkedServices.length > 0 ? checkedServices.join(', ') : 'Creative Collaboration';

      // Compose mailto & WhatsApp links
      const subject = encodeURIComponent(`Project Inquiry: ${servicesStr} - ${name}`);
      const body = encodeURIComponent(`Hi Ayan,\n\nName: ${name}\nEmail: ${email}\nServices Needed: ${servicesStr}\n\nProject Brief:\n${message}\n\nLooking forward to hearing from you!`);
      
      const mailtoUrl = `mailto:ayancraft.studio@gmail.com?subject=${subject}&body=${body}`;
      
      // WhatsApp message text
      const waText = encodeURIComponent(`*New Project Inquiry*\n*Name:* ${name}\n*Email:* ${email}\n*Services:* ${servicesStr}\n*Brief:* ${message}`);
      const whatsappUrl = `https://wa.me/?text=${waText}`;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = `
          <span>Inquiry prepared! Opening your mail client or <a href="${whatsappUrl}" target="_blank" style="text-decoration:underline; font-weight:700;">send directly via WhatsApp →</a></span>
        `;
      }

      showToast("Preparing direct message to Ayan A...");

      // Automatically open mail client
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  /* ==========================================================================
     LOCAL STUDIO LIVE CLOCK
     ========================================================================== */
  const localClock = document.getElementById('localClock');
  function updateClock() {
    if (!localClock) return;
    const now = new Date();
    // Format in clean 24hr or 12hr with seconds
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    localClock.textContent = `${timeStr} (Studio Active)`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Update current year dynamically
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});
