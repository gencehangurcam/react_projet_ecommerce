import Navigation from "../components/_Navigation"
import Card from "../components/Card/Card"

const Home = () => {
    return(
        <div className="home">
            <Navigation/>
            <div className="g-container">
                <div className="header-bloc text-center mt-5">
                    <h1>LEATHER BAGS</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, inventore?</p>
                    <button className="btn">Grand Tour</button>
                </div>
            </div>
            <Card />
        </div>
    )
}

export default Home