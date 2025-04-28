export default function TestimonialsSection(){
    return(
        <>
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
        </>
    )
}