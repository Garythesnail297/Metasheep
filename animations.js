const team_title = document.querySelector('#team-title')

const logo = document.querySelector('#logo') 

/* Scroll Reveal */

// Home section
ScrollReveal().reveal('header', { distance: '-50px' })
ScrollReveal().reveal('#first-image', { distance: '-50px', delay: 250})
ScrollReveal().reveal('#second-image', { distance: '-50px', delay: 250 })
ScrollReveal().reveal('#home-title', { distance: '-50px', delay: 500 })
ScrollReveal().reveal('#home-description', { distance: '-50px', delay: 500 })

// About section
ScrollReveal().reveal('#about-title', { distance: '-50px', delay: 250})
ScrollReveal().reveal('#about-image', { distance: '-50px', delay: 250})
ScrollReveal().reveal('#about-description', { distance: '-50px', delay: 250})

// Roadmap
ScrollReveal().reveal('#roadmap', { distance: '-50px', delay: 250})

// Team
ScrollReveal().reveal('#team-title', { distance: '-50px'})

ScrollReveal().reveal('#team-1-img', { distance: '-50px', delay: 250})
ScrollReveal().reveal('#team-2-img', { distance: '-50px', delay: 250})
ScrollReveal().reveal('#team-3-img', { distance: '-50px', delay: 250})
ScrollReveal().reveal('#team-4-img', { distance: '-50px', delay: 250})

ScrollReveal().reveal('#team-description-1', { distance: '-50px', delay: 500})
ScrollReveal().reveal('#team-description-2', { distance: '-50px', delay: 500})
ScrollReveal().reveal('#team-description-3', { distance: '-50px', delay: 500})
ScrollReveal().reveal('#team-description-4', { distance: '-50px', delay: 500})

/* GSAP - Other animations */

logo.addEventListener('mouseover', () => {
	gsap.to('#logo', { scale: 1.2, ease: "sine.out" })
})

logo.addEventListener('mouseout', () => {
	gsap.to('#logo', { scale: 1.0, ease: "sine.out" })
})
