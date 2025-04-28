export default function CoursesOverview(){
    return(
        <>      
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
        </>
    )

}