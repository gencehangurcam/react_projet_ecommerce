import Navigation from "../../components/navigation/navigation"
import Card from "../../components/Card/Card"
import Footer from "../../components/footer/footer"
import ProductSlider from "../../components/product-slider/product-slider"
import Banner from "../../components/banner/banner"
import "./Home.scss"

const Home = () => {

    return(
        <div className="home">
            <Navigation/>
            <div className="g-container">
                <Banner title="Discover" span1="make your life a real sense" span2="discover"/>
            </div>
            <Card />
            <h1 className="text-center">Our Product</h1>
            <ProductSlider data={[]} />
            <div className="g-container-2">
                <Banner title="Discover" span1="you can make your real sense of you life" span2="discover"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home