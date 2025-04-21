import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/Courses" className="btn btn-success btn-lg">
        Ver Cursos
          </Link>
          </div>
        </div>
      </section>

      {/* SOBRE O REUSA */}
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="animate-on-scroll">Sobre o Reusa</h2>
              <p className="animate-on-scroll">
                   Na plataforma Reusa, oferecemos cursos online gratuitos que ensinam a transformar materiais recicláveis em peças criativas, úteis e até comercializáveis. São aulas práticas de artesanato, design sustentável, upcycling e educação ambiental, pensadas para todos os níveis — do iniciante ao avançado. Além disso, nossos cursos são desenvolvidos em parceria com especialistas e instituições comprometidas com a sustentabilidade, garantindo conteúdo de qualidade e com aplicação no dia a dia. Ao aprender com o Reusa, o aluno não apenas adquire habilidades manuais, mas também amplia suas oportunidades profissionais e contribui ativamente para um mundo mais consciente.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/About.png"
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
            <h1 className="animate-on-scroll">Veja sobre os cursos</h1>
            <h6 className="animate-on-scroll">
              Descubra as técnicas e práticas que irão transformar o modo como você lida com o consumo e a reciclagem. Nossos cursos unem teoria e prática para capacitar você a fazer a diferença.
            </h6>
          </div>
          {/* Imagem à direita */}
          <div className="about-courses-image">
            <img src="/images/Recycle.jpg" alt="Imagem sobre cursos" />
          </div>
        </div>
      </section>


      <div>
    <h1 id="courses-benefits-text" className="animate-on-scroll">O que nossos cursos oferecem?</h1>
    </div>
    <section class="facts-about">
     
      <div class="card animate-on-scroll">
        <a class="card1" href="#">
          <p>Aprenda de forma prática e acessível</p>
          <p class="small" >
            Nossos cursos são 100% online, gratuitos e pensados para o dia a dia. Com materiais simples e técnicas criativas, você aprende a reutilizar, criar e transformar, mesmo sem experiência prévia.
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>

     
      <div class="card animate-on-scroll">
        <a class="card1" href="#">
          <p>Ganhe pontos e troque por recompensas</p>
          <p class="small">
            Ao concluir cursos, você acumula pontos que podem ser trocados por descontos em cursos pagos e produtos de empresas parceiras. Aprender no Reusa também é ser recompensado por suas conquistas!
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>

    
      <div class="card animate-on-scroll">
        <a class="card1" href="#">
          <p> Transforme lixo em oportunidade</p>
          <p class="small">
            Com o que seria descartado, você pode construir um novo futuro. Os cursos do Reusa mostram como gerar renda, desenvolver novas habilidades e ainda cuidar do planeta com cada criação.
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>
      </div>
    </section>

    <section id="partners">
  <div className="container d-flex flex-column align-items-center">
    <h2 className="text-center mb-5 animate-on-scroll">Empresas Parceiras</h2>
    <div className="row justify-content-center" style={{ maxWidth: '800px' }}>
      <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
        <img src="/images/ParceiraMockup.png" className="img-fluid" alt="Parceira 1" />
      </div>
      <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
        <img src="/images/ParceiraMockup.png" className="img-fluid" alt="Parceira 2" />
      </div>
      <div className="col-6 col-md-4 mb-4 d-flex justify-content-center">
        <img src="/images/ParceiraMockup.png" className="img-fluid" alt="Parceira 3" />
      </div>
    </div>
  </div>
</section>


<section id="testimonials">
  <div className="container">
    <h2 className="text-center mb-5 animate-on-scroll">O que dizem nossos usuários</h2>
    <div className="row justify-content-center">
      {/* Depoimento 1 */}
      <div className="col-12 col-md-4 mb-2 d-flex animate-on-scroll">
        <div className="card p-4 shadow-sm w-100 h-100 d-flex flex-column justify-content-between">
          <p className="flex-grow-1">"O Reusa me ajudou a transformar hábitos e enxergar o lixo de forma diferente. Recomendo a todos!"</p>
          <h6 className="text-end mt-3 mb-0">- João Silva</h6>
        </div>
      </div>
      {/* Depoimento 2 */}
      <div className="col-12 col-md-4 mb-2 d-flex animate-on-scroll">
        <div className="card p-4 shadow-sm w-100 h-100 d-flex flex-column justify-content-between">
          <p className="flex-grow-4">"Cursos bem estruturados e uma ideia inovadora de incentivar a reciclagem. Muito bacana!"</p>
          <h6 className="text-end mt-3 mb-0">- Maria Oliveira</h6>
        </div>
      </div>
      {/* Depoimento 3 */}
      <div className="col-12 col-md-4 mb-2 d-flex animate-on-scroll">
        <div className="card p-4 shadow-sm w-100 h-100 d-flex flex-column justify-content-between">
          <p className="flex-grow-1">"Agora vejo que pequenas atitudes podem transformar o mundo. O Reusa é inspiração!"</p>
          <h6 className="text-end mt-3 mb-0">- Carlos Pereira</h6>
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
