import './carouselcomp.css'
import { Carousel, Container} from 'react-bootstrap/'
import HorzProduct from '../../product cards/productHorz'
import { useEffect, useState } from 'react'
import axios from 'axios'


const CarouselComp = ()=>
{
    //var string1,string2,string3
    let[string1,setString1]=useState([])
    let[string2,setString2]=useState([])
    let[string3,setString3]=useState([])

    useEffect(()=>{
        axios.get('https://ishopbackend.herokuapp.com/get/carousel')
        .then((res)=>{
            //console.log(res.data[0].string1)
            setString1(res.data[0].string1)
            setString2(res.data[0].string2)
            setString3(res.data[0].string3)
        })
    },[])
    
    return(
        <>
             <Carousel className="carousel-component">
                <Carousel.Item>
                    <Container className="d-flex justify-content-center">
                        {
                            string1.map((item)=>(
                                <HorzProduct item={item}/>
                            ))
                        }
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container className="d-flex justify-content-between">
                        {
                            string2.map((item)=>(
                                <HorzProduct item={item}/>
                            ))
                        }
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container className="d-flex justify-content-between">
                        {
                            string3.map((item)=>(
                                <HorzProduct item={item}/>
                            ))
                        }
                    </Container>
                </Carousel.Item>
            </Carousel>
            <Carousel className="mob-carousel">
                {
                    string3.map((item)=>(
                        <Carousel.Item>
                            <Container className="d-flex justify-content-between">   
                                <HorzProduct item={item}/>
                            </Container>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </>
    )
}

export default CarouselComp