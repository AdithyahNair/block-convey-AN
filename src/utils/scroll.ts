export const scrollToFeature = (featureId: string) => {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    const element = document.getElementById(featureId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};