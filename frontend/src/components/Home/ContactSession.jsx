  export default function ContactSection(){
    return(
        <>
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
    )
  }