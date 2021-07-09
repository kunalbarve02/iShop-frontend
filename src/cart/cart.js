import { Col, Row, Container, Button, InputGroup, FormControl} from 'react-bootstrap'
import { Plus, Dash } from 'react-bootstrap-icons'
import './cart.css'
import CartProduct from './cartProduct'
import MobCart from './mobcart'
import { useEffect, useReducer} from 'react'
import axios from 'axios'


const reducer = (products,action)=>{
    switch (action.type) {
        case 'UPDATE_PRODUCTS':
            products=action.payload
            return products

        case 'increment':
            return products.map((item)=>{
                if(item._id===action.payload)
                    item.quantity+=1
                    return item
            })
        case 'decrement':
            return products.map((item)=>{
                if(item._id===action.payload)
                    item.quantity-=1
                    return item
            })
        case 'delete':
            return products.filter((item)=>{
                return item._id!==action.payload
            })
        case 'checkout':
            axios.get('https://ishopbackend.herokuapp.com/cart/co')
            .then((res)=>{
                
            })
            .catch((err)=>{
                alert(err)
            })
            alert("Thank you for Shopping with us!!")
            return products=[]
        default:
            return null
      }
}

const Cart =()=>{
    var subtotal=0
    const [cartProducts, dispatch] = useReducer(reducer, []);
    useEffect(()=>{
        axios.get('https://ishopbackend.herokuapp.com/get/cart')
        .then((res)=>{
            dispatch({type:"UPDATE_PRODUCTS",payload:res.data})
        })
        .catch((err)=>{
            alert(err)
        })
    },[])


    const updateSubtotal=()=>{
        subtotal=0
        cartProducts.map((item)=>{
            subtotal=subtotal+((item.actualPrice)*(item.quantity))
            return null
        })
    }
    updateSubtotal()
    
    return(
        <>
            <h1 className="cart-header mx-auto">
                Cart
            </h1>
            <Container className="cart-container mx-auto mt-5">
            { 
                cartProducts.length > 0 ?
                <Row>
                    <Col lg={6}>
                        <p className="cart-text">Product</p>
                    </Col>
                    <Col>
                        <p className="cart-text">Amount</p>
                    </Col>
                    <Col>
                        <p className="cart-text">Quantity</p>
                    </Col>
                    <Col>
                        <p className="cart-text">Price</p>
                    </Col>
                </Row>:null
            }
                {
                    cartProducts.length > 0 ?
                    cartProducts.map((item,index)=>(
                        <Row key={item._id}>
                            <Col lg={6}>
                                <CartProduct item={item} dispatch={dispatch}/>
                            </Col>
                            <Col>
                                <p className="cart-text">$ {'\t'}{item.actualPrice*item.quantity}</p>
                            </Col>
                            <Col className="d-flex justify-content-around">
                                <Plus size={25} 
                                color="#33A0FF"
                                style={{cursor:'pointer'}}
                                onClick={()=>{
                                    dispatch({type:'increment',payload:item._id})
                                }
                                }
                                />
                                <p className="cart-text">{'\t\t'}{item.quantity}{'\t\t'}</p>
                                <Dash size={25} 
                                onClick={(e)=>{
                                    e.preventDefault()
                                    dispatch({type:'decrement',payload:item._id})
                                }}
                                color="#33A0FF"
                                style={{cursor:'pointer'}}
                                />
                            </Col>  
                            <Col>
                                <p className="cart-text">$  {item.actualPrice}</p>
                            </Col>
                        </Row>
                    )):
                    <h1 className="cart-text mx-auto" style={{fontSize:"28px"}}>
                        Cart is Empty
                    </h1>
                            }
            </Container>
            <Container className="mob-cart-container">
                    {   
                        cartProducts.length>0?
                        cartProducts.map((item,index)=>(
                            <MobCart key={item._id} item={item} index={index} dispatch={dispatch}/>
                        )):
                        <h1 className="cart-text mx-auto" style={{fontSize:"20px"}}>
                            Cart is Empty
                        </h1>
                    }
            </Container>

            <Container className="mx-auto mt-5">
                {
                cartProducts.length > 0 ?
                <Row>
                    <Col>
                        <Container className="mx-auto mt-5">
                        <InputGroup className="mr-3">
                            <FormControl
                            placeholder="Voucher Code"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className="cart-voucher"
                            />
                            <InputGroup.Append>
                            <Button variant="dark" className="cart-voucher-btn">Apply</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        </Container>
                    </Col>
                    <Col className="ml-4">
                        <Row>
                            <Col>
                                <p className="co-txt">
                                    Subtotal
                                </p>
                            </Col>
                            <Col>
                                <p className="co-txt">
                                    {subtotal}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="co-txt">
                                    Shipping Fee
                                </p>
                            </Col>
                            <Col>
                                <p className="co-txt">
                                    $  20
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="co-txt">
                                    Coupon
                                </p>
                            </Col>
                            <Col>
                                <p className="co-txt">
                                    No
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="co-header">
                                    Total
                                </p>
                            </Col>
                            <Col>
                                <p className="co-header">
                                    $   {subtotal+20}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <Button className="co-btn"onClick={()=>{dispatch({type:'checkout'})}}>Check Out</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>:null
                }
            </Container>
        </>    
    )
}

export default Cart;