import './home.css'
import Midsection from './mid section/midsection'

const Home = () => 
{
    return(
        <div className="home-master-conatiner">
            <div className="gradient-container">
                <img src='https://res.cloudinary.com/kunalbarve/image/upload/v1624777079/ishop/iphone_12_PNG8_e4a222.png' alt="" className="gradient-image"/>
            </div>
            <div className="mob-gradient-container">
                <div>
                    <h2 className="mob-gradient-header">
                        iPhone X
                    </h2>
                    <p className="mob-gradient-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </p>
                    <p className="mob-load-more">MORE</p>
                </div>
                <img src='https://res.cloudinary.com/kunalbarve/image/upload/v1624777079/ishop/iphone_12_PNG8_e4a222.png' alt="" className="mob-gradient-image"/>
            </div>
            <Midsection/>
        </div>
    )
}

export default Home;