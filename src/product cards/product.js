import {Container,Card,Badge} from 'react-bootstrap/'
import {useState} from 'react'
import Rating from 'react-rating-stars-component'
import '../home/mid section/mid section.css'
import CardFace from '../product cards/cardface'
import './product.css'

const Product=(props)=>
{
    const [face,setFace]=useState(false)

    const handleEnter=()=>{
        setFace(true) 
    }
    const handleLeave=()=>{
        setFace(false)
    }

    return(
        <>
        <Card border="light" 
        className="mb-4 mr-4 card-div" 
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        >
            <Badge 
                variant="success"   
                className="py-1 px-1"
                style={{fontFamily: 'Noto Sans JP,sans-serif'}}>HOT</Badge>
            {face ? <CardFace width="280px" height="160px" item={props.item}/>:
                <Card.Img 
                variant="top" 
                className="rounded mx-auto d-block mt-4" 
                src={props.item.image} 
                style={{width:"250px",height:"160px"}}
                />
            }
            <Card.Body>
                <Card.Title className="text-center">
                        {props.item.name}
                </Card.Title>
                    <Container 
                    style={{marginLeft:"35%",marginBottom:"5%"}}>
                        <Rating 
                        value={props.item.ratingStars} 
                        color="#C1C8CE" activeColor="#FFC600"
                        edit={false}
                        isHalf={true}
                        />
                    </Container>
                    <Card.Text 
                    className="text-center">
                        <p className="price">
                            ${props.item.actualPrice}
                            <span className="actual-price">          ${props.item.price}</span>
                        </p>
                    </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Product