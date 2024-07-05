const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInUp");
      observer.unobserve(entry.target);
    }
  });
});
