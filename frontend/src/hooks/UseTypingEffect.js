import { useEffect } from 'react';

export default function useTypingEffect(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const words = ['Reutilização', 'Criatividade', 'Sustentabilidade', 'Transformação'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        ref.current.textContent = currentWord.substring(0, charIndex);
        charIndex++;
        if (charIndex > currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeEffect, 1000);
          return;
        }
      } else {
        ref.current.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
        }
      }

      timeoutId = setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();
    return () => clearTimeout(timeoutId);
  }, [ref]);
}
