import { useEffect } from 'react';

const useOnScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('hidden');
      observer.observe(el);
    });

    
    return () => {
      observer.disconnect();
    };
  }, []); // Executa apenas uma vez, quando o componente é montado
};

export default useOnScrollAnimation;