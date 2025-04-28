export default function PartnersSection(){
    return(
        <>
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
        </>
    )
}