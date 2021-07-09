import './advertisement.css'

const Advert =()=>{
    return(
        <div className="blue-mob-img">
            <div className="blue-mob-txt">
                <h3 className="display-4 blue-mob-header">iPhone 12 Pro Max</h3>
                <h5>Performance and design. Taken right to the edge.</h5>
                <h5 className="blue-mob-load-more">SHOP NOW</h5>
            </div>
            <img src='https://res.cloudinary.com/kunalbarve/image/upload/v1624777570/ishop/iPhone-12-Pro-Max_qkrx7g.png' alt="" className="blue-mob-image"/>
        </div>
    )
}

export default Advert