import './cardface.css'
import { Heart,Cart3 } from 'react-bootstrap-icons'
import axios from 'axios'

const CardFace=(props)=>{
    const addToCart=(e)=>{
        console.log(e)
        axios.post('https://ishopbackend.herokuapp.com/add/cart',props.item)
    }
    return(
        <div className="card-face-container" style={{width:props.width,height:props.height}}>
            
            <div className="card-face-item">
                <Heart size={24}/>
            </div>

            <div className="card-face-item">
                <Cart3 onClick={addToCart} size={24}/>
            </div>

        </div>
    )
}

export default CardFace;