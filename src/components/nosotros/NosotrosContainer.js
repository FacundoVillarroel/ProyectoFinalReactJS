import Carousel from "./CarouselNosotros"
import Information from "./Information"
import PhotosContainer from "./PhotosContainer"
import Form from "./Form"

const NosotrosContainer = () => {
    return(
        <main className="gridPadreNosotros">
        
        
        <section className="familia container">
            <h2 className="titular my-5">Esta es la familia Recreativo</h2>
            
            <Carousel/>
        </section>

        <Information/>

        <PhotosContainer/>

        <Form/>

    </main>
    )
}
export default NosotrosContainer