import {Container,Card} from 'react-bootstrap/'
import CardFace from '../product cards/cardface'
import {useState} from 'react'
import Rating from 'react-rating-stars-component'
import '../home/mid section/mid section.css'
import './productHorz.css'

const HorzProduct =(props)=>{
    const [face,setFace]=useState(false)

    const handleEnter=()=>{
        setFace(true) 
        console.log(face)
    }
    const handleLeave=()=>{
        setFace(false)
        console.log(face)
    }
    return(
        <Card border="light" className="horz-card-div ml-4 mr-4" style={{cursor:"pointer"}}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <Container 
            className="d-flex justify-content-start" 
            style={{width:"320px",height:"212px"}}>
                {
                    face ? <CardFace width="120px" height="114px"/>:<Card.Img 
                    src={props.item.image} className="horz-product-card"/>
                }
                <Container style={{width:"132px"}}>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Container 
                        style={{marginLeft:"15%",marginBottom:"15%"}}>
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
                            ${props.item.price}
                            <span className="actual-price">      ${props.item.actualPrice}</span>
                        </p>
                    </Card.Text>
                </Container>
            </Container>
        </Card>
    )
}

export default HorzProduct 