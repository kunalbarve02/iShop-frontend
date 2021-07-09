import './mid section.css'
import CarouselComp from './carouselcomp'
import { Container, CardColumns, Nav, DropdownButton, Dropdown, Spinner} from 'react-bootstrap/'
import { Truck, CashCoin, Headset } from 'react-bootstrap-icons'
import Product from '../../product cards/product'
import Advert from './advertisement'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Midsection=()=>{
    
    const navList=[
        'All','Mac','iPhone','iPad','Accessories'
    ]

    const [filter,setFilter]=useState("All")
    const [products,setProducts]=useState([])
    const [spinner,setSpinner]=useState(false)
    const [navKey,setNavKey]=useState('All')

    const handledd=(e)=>{
        setFilter(e)
    }

    useEffect(()=>{
        axios.get('https://ishopbackend.herokuapp.com/get/homeall',{
            params: {
                navKey:navKey
            }
    })
        .then((res)=>{
            setProducts(res.data)
            console.log(products)
            setSpinner(false)
        })
        .catch((err)=>{
            alert(err)
        })
        setSpinner(true)
    },[navKey])

    return(
        <div className="mid-section-container mt-5">
            <p className="mid-section-heading">BEST SELLERS</p>
            <Nav
                className="justify-content-center nav-size"
                variant="pills"
                activeKey={navKey}
                onSelect={(key)=>{setNavKey(key)}}
            >
                {
                    navList.map((item)=>(
                        <Nav.Item>
                            <Nav.Link eventKey={item} style={{color:"#262626"}}>{item}</Nav.Link>
                        </Nav.Item>
                    ))
                }  
            </Nav>
            <DropdownButton 
            variant="transparent" 
            id="dropdown-basic-button" 
            title={filter}
            className="mx-auto drop"
            >
                {
                    navList.map((item)=>(
                        
                        <Dropdown.Item onSelect={handledd} eventKey={item}>
                            {item}
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton>
            <Container className="mt-5 mb-5">
                {
                    spinner?<Spinner className="ml-5" animation="border" variant="success" size="lg"/>:null
                }
                <CardColumns>
                    {
                        products.map((item)=>(
                            <Product item={item}/>
                        ))
                    }   
                </CardColumns>
            </Container>
                <p className="lead ml-5 mb-5 load-more">LOAD MORE</p>
            <Advert/>
            <Container className="d-flex flex-lg-row flex-md-row flex-column justify-content-around mt-5 mb-5">
                <Container className="d-flex flex-column justify-content-between mx-auto">
                    <Truck color="#FF6875" className="mx-auto" size={100}/>
                    <h5 className="features-txt text-center">
                        FREE SHIPPING
                    </h5>
                    <p className="features-txt text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </Container>
                <Container className="d-flex flex-column justify-content-between mx-auto">
                    <CashCoin color="#FF6875" className="mx-auto" size={100}/>
                    <h5 className="features-txt text-center">
                        100% REFUND
                    </h5>
                    <p className="features-txt text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </Container>
                <Container className="d-flex flex-column justify-content-between">
                    <Headset color="#FF6875" className="mx-auto" size={100}/>
                    <h5 className="features-txt text-center">
                        SUPPORT 24x7 
                    </h5>
                    <p className="features-txt text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </Container>
            </Container>
            <p className="mid-section-heading mb-5">FEATURED PRODUCTS</p>
            <CarouselComp/>
        </div>    
    )
}

export default Midsection;