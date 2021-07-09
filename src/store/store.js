import { Breadcrumb, Col, Nav, Row, NavDropdown, Container ,CardColumns, Pagination, Spinner} from "react-bootstrap";
import { useParams } from "react-router";
import { useState } from 'react'
import { List, Grid3x3GapFill, FunnelFill } from "react-bootstrap-icons";
import { Slider } from '@material-ui/core'
import Advert from '../home/mid section/advertisement'
import './store.css'
import Product from "../product cards/product";
import HorzProduct from "../product cards/productHorz";
import axios from "axios";
import { useEffect } from "react";

const Store = ()=>{



    const colors=[
        '#006CFF','#FC3E39','#171717','#FFF600','#FF00B4','#EFDFDF'
    ]

    const brands=[
        {
            name:"Apple",
            quantity:99
        },
        {
            name:"LG",
            quantity:48
        },
        {
            name:"Samsung",
            quantity:14
        },
        {
            name:"Siemens",
            quantity:15
        }
    ]

    let {category}=useParams()

    let[items,setItems]=useState([])
    let[spinner,setSpinner]=useState(false)
    let [show,setShow]=useState(0)

    useEffect(()=>{
        axios.get('https://ishopbackend.herokuapp.com/get/homeall',{
            params: {
                navKey:category
            }
        })
        .then((res)=>{
            setItems(res.data)
            setSpinner(false)
        })
        .catch((err)=>{
            alert(err)
        })
        setSpinner(true)
        console.log(category)
    },[category])

    category = category.charAt(0).toUpperCase() + category.slice(1);

    let [sort,setSort]=useState("Name")
    let [isRow,setIsRow]=useState(true)
    let [rowColor,setRowColor]=useState("#33A0FF")
    let [columnColor,setcolumnColor]=useState("black")
    let [rangerValue,setRangerValue]=useState([0,5000])

    const handleSort=(e)=>{
        setSort(e)
    }

    const handleShow=(e)=>{
        setShow(e)
    }

    const handleRow=()=>{
        setIsRow(false)
        setRowColor("black")
        setcolumnColor("#33A0FF")
    }

    const handleColumn=()=>{
        setIsRow(true)
        setRowColor("#33A0FF")
        setcolumnColor("black")
    }

    const handleRanger=(e,val)=>{
        setRangerValue(val)
        axios.get('https://ishopbackend.herokuapp.com/filter/price',{
            params: {
                category:category,
                low:val[0],
                high:val[1]
            }
        })
        .then((res)=>{
            setItems(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    return(
        <>
            <Breadcrumb className="breadcrumb-container">
                <Breadcrumb.Item href="/store">
                    Store
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/store/accessories">
                    {category}
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col lg={3} className="d-none d-lg-flex flex-column align-content-center justify-content-around" 
                style={{height:"1000px"}}>
                    
                    <Container>
                        <h4 className="left-col-header mb-3">
                            Prices
                        </h4>
                        <h5>
                            Ranger:{'\t\t'}${rangerValue[0]}-${rangerValue[1]}
                        </h5>
                        <Slider
                            value={rangerValue}
                            onChange={handleRanger}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={5000}
                        />
                    </Container>
                    <Container>
                        <h4 className="left-col-header mb-3">
                            COLORS
                        </h4>
                        <Container className="d-flex flex-row">
                            {colors.map((item)=>(
                                <div className="color-container" style={{backgroundColor:item}}>

                                </div>
                            ))}
                        </Container>
                    </Container>
                    <Container>
                        <h4 className="left-col-header mb-3">
                            Brands
                        </h4>
                        <ul style={{listStyleType:"none"}}>
                            {
                                brands.map((item,index)=>(
                                    <>
                                        <li className="left-col-item mb-3">
                                            {item.name}
                                            <span className="left-col-quantity">{item.quantity}</span>    
                                        </li>
                                    </>
                                ))
                            }
                        </ul>
                    </Container>
                    <h4 className="left-col-header mb-3 mx-auto">
                        MORE
                    </h4>
                </Col>
                <Col lg={9} sm={2} className="d-flex flex-column align-items-center justify-content-between">
                    <Advert/>
                    <Nav className="nav-font justify-content-around">
                        <Nav.Item className="mt-2 mob-dd">
                            {items.length} Items
                        </Nav.Item>
                        <Nav.Item className="mt-2">
                            Sort By
                        </Nav.Item>
                        <NavDropdown id="nav-dropdown" title={sort}>
                            <NavDropdown.Item onSelect={handleSort} eventKey="Name">Name</NavDropdown.Item>
                            <NavDropdown.Item onSelect={handleSort} eventKey="Price">Price</NavDropdown.Item>
                            <NavDropdown.Item onSelect={handleSort} eventKey="Rating">Rating</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="mt-2 mob-dd">
                            Show
                        </Nav.Item>
                        <NavDropdown className="mob-dd" id="nav-dropdown" title={show}>
                            <NavDropdown.Item onSelect={handleShow} eventKey={items.length-1}>{items.length-1}</NavDropdown.Item>
                            <NavDropdown.Item onSelect={handleShow} eventKey={items.length}>{items.length}</NavDropdown.Item>
                            <NavDropdown.Item onSelect={handleShow} eventKey={items.length+1}>{items.length+1}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="ml-4">
                            <List size={40} style={{cursor:"pointer"}} color={columnColor} onClick={handleRow}/>{'\t\t'}
                            <Grid3x3GapFill  style={{cursor:"pointer"}} color={rowColor} size={32} onClick={handleColumn}/>
                        </Nav.Item>
                        <Nav.Item className="mob-filter">
                            Filter    <FunnelFill size={30}/> 
                        </Nav.Item>
                    </Nav>
                    <Container className="mt-5 mb-5">
                        {
                            spinner?<Spinner className="ml-5" animation="border" variant="success" size="lg"/>:null
                        }
                        {
                            isRow ? <CardColumns>
                            {
                                items.map((item)=>(
                                    <Product item={item}/>
                                ))
                            }   
                            </CardColumns>:<Container>
                                {
                                    items.map((item)=>(
                                        <HorzProduct item={item}/>
                                    ))
                                }
                            </Container>
                        }
                    </Container>
                    <Pagination>
                        <Pagination.Item className="mr-3">
                            1
                        </Pagination.Item>
                        <Pagination.Item className="mr-3">
                            2
                        </Pagination.Item>
                        <Pagination.Item className="mr-3" active>
                            3
                        </Pagination.Item>
                        <Pagination.Item className="mr-3">
                            4
                        </Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
        </>
    )
}
export default Store;