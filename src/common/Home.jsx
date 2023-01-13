import About from '../Pages/about/About';
import Banner from '../Pages/banner/Banner';
import Services from '../Pages/service/Services';
import Testimonial from '../Pages/testimonial/Testimonial';
export default function Home(){
    return(
        <div>
            <Banner/>
            <Services/>
            <About/>
            <Testimonial/>
        </div>

    )
}