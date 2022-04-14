import familia from "../../images/familia.jpg"
import familia2 from "../../images/familia2.jpg"
import familia3 from "../../images/familia3.jpg"
import Carousel from 'react-bootstrap/Carousel'

function CarouselNosotros () {

    return (

        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bordeRedondeado"
                        src={familia}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bordeRedondeado"
                        src={familia2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bordeRedondeado"
                        src={familia3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        
        

    )
}

export default CarouselNosotros


/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={familia} className="d-block w-100 bordeRedondeado" alt="La Familia Recreativo"/>
                </div>
                <div className="carousel-item">
                    <img src={familia2} className="d-block w-100 bordeRedondeado" alt="Recreativo y su primer festejo de campeones"/>
                </div>
                <div className="carousel-item">
                    <img src={familia3} className="d-block w-100 bordeRedondeado" alt="Recreativo corriendo y festejando su ascenso"/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon flechaCarousel" aria-hidden="true"> &lt;</span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon flechaCarousel" aria-hidden="true"> &gt;</span>
                <span className="visually-hidden">Next</span>
                </button>
            </div> */