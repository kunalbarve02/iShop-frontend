import axios from "axios"
import { Container } from "react-bootstrap"
import { Trash } from "react-bootstrap-icons"
import './cart.css'

const CartProduct =(props)=>{
    const handleDelete=(e)=>{
        props.dispatch({type:'delete',payload:props.item._id})
        axios.post('https://ishopbackend.herokuapp.com/delete/cart',props.item)
        .then((response)=>{
            console.log("ok")
        })
        .catch((err)=>{
            alert(err)
        })
    }
    return(
        <Container className="cart-prod d-flex flex-row justify-content-around align-content-center w-100 mb-5">
            <Trash color="#FF4252" size={30} onClick={handleDelete} style={{cursor:"pointer"}}/>
            <img src={props.item.image} className="w-25 h-25" alt={props.item.name}/>
            <p  className="cart-text">
                {props.item.name}
            </p>
        </Container>
    )
}

export default CartProduct;