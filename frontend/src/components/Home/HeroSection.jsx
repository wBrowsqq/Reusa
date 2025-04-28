import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useTypingEffect from '../../hooks/UseTypingEffect.js';

export default function HeroSection() {
  const typingRef = useRef(null);
  useTypingEffect(typingRef);

  return (
    <section id="hero" className="d-flex align-items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-100"
        style={{ objectFit: 'cover', zIndex: 0 }}
      >
        <source src="/videos/seuvideo.mp4" type="video/mp4" />
      </video>
      <div className="container hero-content">
        <div className="row flex-column text-center">
          <div className="col-12"><h1 className="display-6">No Reusa, a</h1></div>
          <div className="col-12">
            <h1 ref={typingRef} className="display-6 text-success typing-text"></h1>
          </div>
          <div className="col-12">
            <h1 className="display-6">dá nova vida ao que seria descartado.</h1>
          </div>
        </div>
        <p className="lead text-center mt-4">
          Aprenda, recicle e ganhe recompensas com o Reusa
        </p>
        <div className="text-center">
          <Link to="/Courses" className="btn btn-success btn-lg">
            Ver Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
