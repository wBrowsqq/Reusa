  
  export default function AboutSection(){
    return(
        <>
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
        </>
    )
}