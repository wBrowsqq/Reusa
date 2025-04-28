export default function BenefitsSection(){
return(
<>
<div>
<h1 id="courses-benefits-text" className="animate-on-scroll">O que nossos cursos oferecem?</h1>
</div>
<section className="facts-about">
 
  <div className="card animate-on-scroll">
    <a className="card1" href="#">
      <p>Aprenda de forma prática e acessível</p>
      <p className="small" >
        Nossos cursos são 100% online, gratuitos e pensados para o dia a dia. Com materiais simples e técnicas criativas, você aprende a reutilizar, criar e transformar, mesmo sem experiência prévia.
      </p>
      <div className="go-corner" href="#">
        <div className="go-arrow">→</div>
      </div>
    </a>
  </div>

 
  <div className="card animate-on-scroll">
    <a className="card1" href="#">
      <p>Ganhe pontos e troque por recompensas</p>
      <p className="small">
        Ao concluir cursos, você acumula pontos que podem ser trocados por descontos em cursos pagos e produtos de empresas parceiras. Aprender no Reusa também é ser recompensado por suas conquistas!
      </p>
      <div className="go-corner" href="#">
        <div className="go-arrow">→</div>
      </div>
    </a>
  </div>


  <div className="card animate-on-scroll">
    <a className="card1" href="#">
      <p> Transforme lixo em oportunidade</p>
      <p className="small">
        Com o que seria descartado, você pode construir um novo futuro. Os cursos do Reusa mostram como gerar renda, desenvolver novas habilidades e ainda cuidar do planeta com cada criação.
      </p>
      <div className="go-corner" href="#">
        <div className="go-arrow">→</div>
      </div>
    </a>
  </div>
</section>
</>
)
}