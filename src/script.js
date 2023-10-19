window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

gsap.to(".title", {
  y: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".title",
    start: "top 20%",
    end: "top",
    scrub: 1,
    toggleActions: "play none none none",
  },
});

gsap.to(".logo", {
  y: -250,
  duration: 2,
  scrollTrigger: {
    trigger: ".logo",
    start: "top 70%",
    end: "bottom",
    scrub: 0.5,
    toggleActions: "play none none none",
  },
});

gsap.to(".texts", {
  y: -400,
  duration: 2,
  scrollTrigger: {
    trigger: ".texts",
    start: "top 100%",
    end: "top -28%",
    scrub: 1,
    toggleActions: "play none none none",
  },
});
