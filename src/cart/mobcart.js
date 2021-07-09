import './cart.css'
import { Row, Container } from 'react-bootstrap'
import { Plus, Dash, X } from 'react-bootstrap-icons'
import axios from 'axios'

const MobCart = (props) => {
    return ( 
        <Row>
            <Container className="mob-cart-product">
                <X size={30} color="#FF6875" style={{cursor:"pointer"}} onClick={(e)=>{
                    e.preventDefault()
                    props.dispatch({type:'delete',payload:props.item._id})
                    axios.post('https://ishopbackend.herokuapp.com/delete/cart',props.item)
                    .then((response)=>{
                        console.log("ok")
                    })
                    .catch((err)=>{
                        alert(err)
                    })
                }
                }/>
                <img src={props.item.image} className="mob-cart-img" alt={props.item.name}/>
                <Container className="mob-cart-text-container">
                    <p className="mob-cart-name">
                        {props.item.name}
                    </p>
                    <Container className="mob-cart-text">
                        <Plus size={20} 
                        onClick={(e)=>{
                            e.preventDefault()
                            props.dispatch({type:'increment',payload:props.item._id})
                        }} 
                        color="#33A0FF"
                        style={{cursor:'pointer',marginTop:"5px"}}
                        />
                        <p className="mob-cart-text">{'\t\t'}{props.item.quantity}{'\t\t'}</p>
                        <Dash size={20} 
                        onClick={(e)=>{
                            e.preventDefault()
                            props.dispatch({type:'decrement',payload:props.item._id})
                        } }
                        color="#33A0FF"
                        style={{cursor:'pointer',marginTop:"5px"}}
                        />
                        <p className="mob-cart-text">$  {props.item.actualPrice*props.item.quantity}</p>
                    </Container>
                </Container>
            </Container>
        </Row>
     );
}
 
export default MobCart;