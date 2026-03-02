gsap.registerPlugin(ScrollTrigger)

/* --- GET HTML ELEMENTS & VARS --- */
const coinGrid = document.getElementById("coin-grid")
const MOBILE_BREAKPOINT = 768
const SHUFFLE_DELAY_MIN_MS = 1000
const SHUFFLE_DELAY_MAX_MS = 5000

const COIN_LOGOS = [
  "/assets/coins/coin-1.png",
  "/assets/coins/coin-2.png",
  "/assets/coins/coin-3.png",
  "/assets/coins/coin-6.png",
  "/assets/coins/coin-7.png",
]

/* --- 2. HELPERS --- */
const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT
const getRandomIcon = () =>
  COIN_LOGOS[Math.floor(Math.random() * COIN_LOGOS.length)]

/** Returns a new array with shuffled order. Does not mutate original. */
function shuffleArray(arr) {
  const result = arr.slice()
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function getRandomShuffleDelay() {
  return (
    Math.floor(
      Math.random() * (SHUFFLE_DELAY_MAX_MS - SHUFFLE_DELAY_MIN_MS + 1)
    ) + SHUFFLE_DELAY_MIN_MS
  )
}

/* --- 3. DATA (fixed; only order is shuffled when displaying) --- */
const coins = [
  {
    id: 1,
    icon: "/assets/coins/coin-6.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+215%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 25,
  },
  {
    id: 2,
    icon: "/assets/coins/coin-7.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+231%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 73,
  },
  {
    id: 3,
    icon: "/assets/coins/coin-3.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+73%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 43,
  },
  {
    id: 4,
    icon: "/assets/coins/coin-2.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+146%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 37,
  },
  {
    id: 5,
    icon: "/assets/coins/coin-7.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+244%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 88,
  },
  {
    id: 6,
    icon: "/assets/coins/coin-1.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+125%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 25,
  },
  {
    id: 7,
    icon: "/assets/coins/coin-1.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+62%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 44,
  },
  {
    id: 8,
    icon: "/assets/coins/coin-2.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+77%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 74,
  },
  {
    id: 9,
    icon: "/assets/coins/coin-3.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+114%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 92,
  },
  {
    id: 10,
    icon: "/assets/coins/coin-7.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+180%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 76,
  },
  {
    id: 11,
    icon: "/assets/coins/coin-1.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+69%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 31,
  },
  {
    id: 12,
    icon: "/assets/coins/coin-1.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+139%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 61,
  },
  {
    id: 13,
    icon: "/assets/coins/coin-2.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+82%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 26,
  },
  {
    id: 14,
    icon: "/assets/coins/coin-3.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+209%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 14,
  },
  {
    id: 15,
    icon: "/assets/coins/coin-7.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+35%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 90,
  },
  {
    id: 16,
    icon: "/assets/coins/coin-2.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+86%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 58,
  },
  {
    id: 17,
    icon: "/assets/coins/coin-7.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+72%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 22,
  },
  {
    id: 18,
    icon: "/assets/coins/coin-3.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+77%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 34,
  },
  {
    id: 19,
    icon: "/assets/coins/coin-2.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+117%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 57,
  },
  {
    id: 20,
    icon: "/assets/coins/coin-7.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+169%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 76,
  },
  {
    id: 21,
    icon: "/assets/coins/coin-6.png",
    title: "The best memecoin",
    desc: "Launch with unstable beat",
    change: "+234%",
    creator: "Jackie Chan",
    marketCap: "$150k",
    progress: 85,
  },
]

const SLIDERS = [
  {
    id: 1,
    iconBox: "/assets/icons/play-1.svg",
    boxColor: "#AC6AFF",
    backgroundUrl: "/assets/sliders/slider-bg-1.svg",
    title: "Onmifun — Launch First. Everywhere.",
    description: `<p class="slider-item__description">Onmifun is a chain-agnostic launchpad designed for new and emerging blockchains.</p> <br /> <p class="slider-item__description">We help tokens launch before the hype, not after liquidity is exhausted.</p>`,
  },
  {
    id: 2,
    iconBox: "/assets/icons/play-2.svg",
    boxColor: "#FFC876",
    backgroundUrl: "/assets/sliders/slider-bg-2.svg",
    title: "First on New Chains",
    description: `<p class="slider-item__description">Onmifun partners with early-stage L1s & L2s to become their first meme & community launch layer.</p> <br /> <p class="slider-item__description">Projects get instant distribution. Chains get real users and real volume.</p>`,
  },
  {
    id: 3,
    iconBox: "/assets/icons/play-3.svg",
    boxColor: "#7ADB78",
    backgroundUrl: "/assets/sliders/slider-bg-3.svg",
    title: "Fair by Design",
    description: `<p class="slider-item__description">Every token launches through a transparent bonding curve.</p> <br /> 
      <p class="slider-item__description">No VC allocation. No private deals. No hidden supply.</p> <br /> 
      <p class="slider-item__description">Price moves only when people buy.</p>
    `,
  },
  {
    id: 4,
    iconBox: "/assets/icons/play-4.svg",
    boxColor: "#FF776F",
    backgroundUrl: "/assets/sliders/slider-bg-4.svg",
    title: "From Launch to Liquidity",
    description: `<p class="slider-item__description">When a token matures, liquidity is automatically deployed to DEXs.</p> <br /> <p class="slider-item__description">LP is burned. Ownership is clean.</p> <br /> <p class="slider-item__description">No manual ops. No rug vectors.</p>`,
  },
  {
    id: 5,
    iconBox: "/assets/icons/electrical.svg",
    boxColor: "#858DFF",
    backgroundUrl: "/assets/sliders/slider-bg-1.svg",
    title: "Social Is the Alpha",
    description:
      "<p class='slider-item__description'>Attention is liquidity.</p> <br /> <p class='slider-item__description'>Onmifun bakes Social-Fi directly into every launch — momentum, discovery, and community all in one place.</p>",
  },
  {
    id: 6,
    iconBox: "/assets/icons/play-6.svg",
    boxColor: "#AC6AFF",
    backgroundUrl: "/assets/sliders/slider-bg-5.svg",
    title: "Data That Matters",
    description:
      "<p class='slider-item__description'>On-chain analytics built for builders.</p> <br /> <p class='slider-item__description'>Track behavior, flows, and growth in real time.</p> <br /> <p class='slider-item__description'>Understand users. Scale smarter.</p>",
  },
]

/* ---RENDER HTML TEMPLATE --- */
const createCoinCard = (coin) => `
  <div class="card coin-card flex gap-10">
    <img class="coin-logo" src="${coin.icon}" alt="${coin.title}" />
    <div class="flex flex-column gap-10 w-100 coin-card__inner">
      <div class="coin-card__top flex gap-10 justify-space-between items-center">
        <div class="flex flex-column">
          <p class="fw--700 color-light">${coin.title}</p>
          <p class="fs--small">${coin.desc}</p>
        </div>
        <div class="flex fw--700 label coin-card__top-label">${coin.change}</div>
      </div>
      <div class="coin-card__bottom">
        <div class="flex flex-column gap-10">
          <div class="flex items-center justify-space-between coin-card__row">
            <p class="fs--small">Creator</p>
            <p class="fw--700 color-light">${coin.creator}</p>
          </div>
          <div class="flex items-center justify-space-between coin-card__row">
            <p class="fs--small">Market Cap:</p>
            <p class="fw--700 fs--medium color-light gradient-text">${coin.marketCap}</p>
          </div>
          <div class="progress-gradient__wrapper">
            <div class="progress-gradient__bg">
              <div class="progress-gradient__fill" style="width:${coin.progress}%"></div>
            </div>
            <span class="percentage">${coin.progress}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`
// FEATURES SLIDE
const createSliderItem = (item) => `
  <div class="swiper-slide">
    <div class="slider-item__wrapper" style="background: url('${item.backgroundUrl}');">
      
      <div class="flex flex-column slider-item__inner">
        <p class="slider-item__title mb-1">${item.title}</p>
        
        <div class="slider-item__description"></div>

        <div class="flex items-center slider-item__box mt-auto" style="background-color: ${item.boxColor};">
          <img src="${item.iconBox}" alt="icon" />
        </div>
      </div>

    </div>
  </div>
`

/* --- ANIMATION FUNCTION --- */
function animateCoinCards() {
  // Kill old ScrollTrigger if exist
  ScrollTrigger.getAll().forEach((t) => {
    if (t.trigger?.classList?.contains("coin-card")) {
      t.kill()
    }
  })

  //
  ScrollTrigger.batch(".coin-card", {
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      }),
    //
    once: true,
  })
}

/* --- 6. MAIN RENDER LOGIC --- */
let currentLimit = 0

function animateBuzzFirstCard() {
  const firstCard = coinGrid?.querySelector(".coin-card")
  if (!firstCard) return
  gsap.fromTo(
    firstCard,
    { scale: 1, rotation: 0 },
    {
      scale: 1.02,
      rotation: 0.5,
      duration: 0.06,
      yoyo: true,
      repeat: 2,
      ease: "power2.inOut",
    }
  )
}
function shuffleAndRerenderCoins() {
  if (!coinGrid) return
  const limit = isMobile() ? 6 : 21
  const ordered = coins.slice(0, limit)
  const shuffled = shuffleArray(ordered)
  coinGrid.innerHTML = shuffled.map(createCoinCard).join("")
  requestAnimationFrame(() => {
    const cards = coinGrid.querySelectorAll(".coin-card")
    gsap.set(cards, { opacity: 1, y: 0 })
    animateBuzzFirstCard()
    ScrollTrigger.refresh(true)
  })
}

function scheduleNextShuffle() {
  const delay = getRandomShuffleDelay()
  setTimeout(() => {
    shuffleAndRerenderCoins()
    scheduleNextShuffle()
  }, delay)
}

function renderCoins() {
  const limit = isMobile() ? 6 : 21

  if (limit === currentLimit) return

  currentLimit = limit

  if (coinGrid) {
    coinGrid.innerHTML = coins.slice(0, limit).map(createCoinCard).join("")

    requestAnimationFrame(() => {
      animateCoinCards()
      ScrollTrigger.refresh(true)
    })
  }
}

function animateActiveSlide(swiper) {
  swiper.slides.forEach((slide, index) => {
    const inner = slide.querySelector(".slider-item__inner")
    if (!inner) return

    if (index === swiper.activeIndex) {
      gsap.to(inner, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
    } else {
      gsap.set(inner, {
        y: 0,
      })
    }
  })
}

function initImageSlider() {
  const track = document.getElementById("image-track")
  if (!track) return

  // 1. Render HTML
  track.innerHTML = SLIDERS.map(createSliderItem).join("")

  // 2. Render description as HTML (not plain text)
  track.querySelectorAll(".slider-item__description").forEach((el, index) => {
    if (SLIDERS[index]?.description) {
      el.innerHTML = SLIDERS[index].description
    }
  })

  // 3. Init Swiper
  new Swiper(".image-swiper", {
    slidesPerView: 3, // Important for the "peek" effect
    centeredSlides: true, // Active image in center
    spaceBetween: 20, // Gap between images
    loop: true, // Infinite loop
    grabCursor: true, // Hand cursor on hover
    speed: 600,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },

    // Responsive Breakpoints
    breakpoints: {
      // Mobile: 1 item
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Tablet: 2 items
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Desktop: 3 items
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    on: {
      init: animateActiveSlide,
      slideChangeTransitionStart: animateActiveSlide,
    },
  })
}

function animateVisibleSlides(swiper) {
  swiper.slides.forEach((slide) => {
    const comment = slide.querySelector(".testimonials__comment")
    if (!comment) return

    const isVisible = slide.classList.contains("swiper-slide-visible")

    const wasVisible = comment.dataset.visible === "true"

    // IN VIEW
    if (isVisible && !wasVisible) {
      comment.dataset.visible = "true"

      gsap.killTweensOf(comment)
      gsap.fromTo(
        comment,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
        },
      )
    }

    // OUT VIEW
    if (!isVisible && wasVisible) {
      comment.dataset.visible = "false"

      gsap.killTweensOf(comment)
      gsap.to(comment, {
        x: 40,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  })
}

function initTestimonial() {
  new Swiper(".testimonials__slider", {
    //
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    speed: 600,
    watchSlidesProgress: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    //
    navigation: {
      nextEl: ".testimonials__btn--next",
      prevEl: ".testimonials__btn--prev",
    },

    on: {
      init: animateVisibleSlides,
      setTranslate: animateVisibleSlides,
    },
  })
}

/**
 * Function to initialize the infinite marquee effect
 * It duplicates the content inside .marquee-track to create a seamless loop
 */
function initPartnersMarquee() {
  const tracks = document.querySelectorAll(".marquee-track")

  // Safety check: if no tracks found, stop
  if (!tracks.length) return

  tracks.forEach((track) => {
    // Optional: Check if already cloned to prevent double duplication
    if (track.getAttribute("data-cloned") === "true") return

    // Duplicate content
    const content = track.innerHTML
    track.innerHTML = content + content

    // Mark as processed
    track.setAttribute("data-cloned", "true")
  })
}

/* --- 7. INIT & EVENTS --- */
document.addEventListener("DOMContentLoaded", () => {
  renderCoins()
  scheduleNextShuffle()
  // Init slider
  initImageSlider()
  // Init marquees
  initPartnersMarquee()
  // Init Testimonial
  initTestimonial()

  // Init Static Animations (Hero, Section...)
  initStaticAnimations()
})

let resizeTimer
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    renderCoins()
    ScrollTrigger.refresh()
  }, 500)
})

/* --- 8. STATIC ANIMATIONS (Hero, Features...) --- */
function initStaticAnimations() {
  gsap.from(".hero-content h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })

  gsap.from(".hero-card", {
    y: 80,
    opacity: 0,
    delay: 0.4,
    duration: 1,
    ease: "power3.out",
  })

  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    })
  })

  gsap.utils.toArray("[data-reveal]").forEach((item) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item.closest("section"),
        start: "top 80%",
        once: true,
      },
    })
  })

  gsap.fromTo(
    ".marquee-reveal",
    {
      opacity: 0,
      filter: "blur(12px)",
    },
    {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".partners-marquee-section",
        start: "top 60%",
        once: true,
      },
    },
  )
}
