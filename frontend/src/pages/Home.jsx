import React, { useEffect, useRef } from 'react';

export default function Home() {

    const typingRef = useRef(null);

    useEffect(() => {

        if (!typingRef.current) return; 
    
      const words = ['Reutilização', 'Criatividade', 'Sustentabilidade', 'Transformação'];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let timeoutId;
  
      const typeEffect = () => {
        const currentWord = words[wordIndex];
  
        if (!isDeleting) {
          typingRef.current.textContent = currentWord.substring(0, charIndex);
          charIndex++;
          if (charIndex > currentWord.length) {
            isDeleting = true;
            timeoutId = setTimeout(typeEffect, 1000);
            return;
          }
        } else {
          typingRef.current.textContent = currentWord.substring(0, charIndex);
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
    }, []);


  return (
    <>
      {/* HERO SECTION */}
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
              <h1  ref={typingRef} className="display-6 text-success typing-text"></h1>
            </div>
            <div className="col-12">
              <h1 className="display-6">dá nova vida ao que seria descartado.</h1>
            </div>
          </div>
          <p className="lead text-center mt-4">
            Aprenda, recicle e ganhe recompensas com o Reusa
          </p>
          <div className="text-center">
            <a href="courses.html" className="btn btn-success btn-lg">
              Ver Cursos
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE O REUSA */}
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Sobre o Reusa</h2>
              <p>
                O Reusa é uma plataforma de reciclagem que oferece cursos educativos
                para promover a reciclagem e a redução de consumo. Além disso,
                empresas parceiras oferecem pontos de desconto aos usuários,
                incentivando práticas sustentáveis e o reaproveitamento de materiais.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/about-image.jpg"
                alt="Sobre o Reusa"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: "Veja sobre os cursos" */}
      <section className="about-courses">
        <div className="container about-courses-container">
          {/* Texto à esquerda */}
          <div className="about-courses-text">
            <h1>Veja sobre os cursos</h1>
            <h6>
              Descubra as técnicas e práticas que irão transformar o modo como você lida com o consumo e a reciclagem. Nossos cursos unem teoria e prática para capacitar você a fazer a diferença.
            </h6>
          </div>
          {/* Imagem à direita */}
          <div className="about-courses-image">
            <img src="/images/Comece%20por%20aqui.png" alt="Imagem sobre cursos" />
          </div>
        </div>
      </section>

      {/* SEÇÃO: "O que nossos cursos oferecem?" com cards */}
      <div className="container">
        <h1 id="courses-benefits-text">O que nossos cursos oferecem?</h1>
      </div>
      <section className="container facts-about">
        {/* Card 1 */}
        <div className="card">
          <a className="card1" href="#">
            <h3>This is heading</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        {/* Card 2 */}
        <div className="card">
          <a className="card1" href="#">
            <h3>This is heading</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        {/* Card 3 */}
        <div className="card">
          <a className="card1" href="#">
            <h3>This is heading</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
      </section>

      {/* CATÁLOGO DE CURSOS */}
      <section id="courses">
        <div className="container">
          <h2 className="mb-5">Catálogo de Cursos</h2>
          <div className="row">
            {/* Curso 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/images/course1.jpg" className="card-img-top" alt="Curso 1" />
                <div className="card-body">
                  <h5 className="card-title">Reciclagem Básica</h5>
                  <p className="card-text">Aprenda as técnicas essenciais para reciclar e transformar resíduos em novos produtos.</p>
                  <a href="#" className="btn btn-primary">Ver Curso</a>
                </div>
              </div>
            </div>
            {/* Curso 2 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/images/course2.jpg" className="card-img-top" alt="Curso 2" />
                <div className="card-body">
                  <h5 className="card-title">Reciclagem Avançada</h5>
                  <p className="card-text">Técnicas avançadas para maximizar o reaproveitamento e minimizar desperdícios.</p>
                  <a href="#" className="btn btn-primary">Ver Curso</a>
                </div>
              </div>
            </div>
            {/* Curso 3 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/images/course3.jpg" className="card-img-top" alt="Curso 3" />
                <div className="card-body">
                  <h5 className="card-title">Empreendedorismo Sustentável</h5>
                  <p className="card-text">Descubra como criar oportunidades de negócio através da sustentabilidade.</p>
                  <a href="#" className="btn btn-primary">Ver Curso</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPRESAS PARCEIRAS */}
      <section id="partners">
        <div className="container">
          <h2 className="text-center mb-5">Empresas Parceiras</h2>
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <img src="/images/partner1.png" className="img-fluid" alt="Parceira 1" />
            </div>
            <div className="col-md-3 col-6 mb-4">
              <img src="/images/partner2.png" className="img-fluid" alt="Parceira 2" />
            </div>
            <div className="col-md-3 col-6 mb-4">
              <img src="/images/partner3.png" className="img-fluid" alt="Parceira 3" />
            </div>
            <div className="col-md-3 col-6 mb-4">
              <img src="/images/partner4.png" className="img-fluid" alt="Parceira 4" />
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="testimonials">
        <div className="container">
          <h2 className="mb-5">O que dizem nossos usuários</h2>
          <div className="row">
            {/* Depoimento 1 */}
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <p>"O Reusa me ajudou a transformar hábitos e enxergar o lixo de forma diferente. Recomendo a todos!"</p>
                <h6 className="text-end">- João Silva</h6>
              </div>
            </div>
            {/* Depoimento 2 */}
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <p>"Cursos bem estruturados e uma idéia inovadora de incentivar a reciclagem. Muito bacana!"</p>
                <h6 className="text-end">- Maria Oliveira</h6>
              </div>
            </div>
            {/* Depoimento 3 */}
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <p>"Agora vejo que pequenas atitudes podem transformar o mundo. O Reusa é inspiração!"</p>
                <h6 className="text-end">- Carlos Pereira</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact">
        <div className="container">
          <h2 className="text-center mb-5">Contato</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome:</label>
                  <input type="text" className="form-control" id="name" placeholder="Seu nome" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Seu email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensagem:</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Sua mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
