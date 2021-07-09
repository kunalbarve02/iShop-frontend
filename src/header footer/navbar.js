import './navbar.css'
import { useState } from 'react'
import { DropdownButton, Dropdown, Nav, Navbar, Badge, Container, Row, Col } from 'react-bootstrap/'
import { Person, Basket, Search } from 'react-bootstrap-icons';
import Menu from './menu';
import { Link } from 'react-router-dom';

const NavBar = ()=>
{
    const [showMenu,setShowMenu]=useState(false)

    const handleEnter=()=>{
        setShowMenu(true)
        console.log(showMenu)
    }
    const handleLeave=()=>{
        setShowMenu(false)
        console.log(showMenu)
    }
    const navList=[
        {
            name:"HOME",
            link:"/"
        },
        {
            name:"IPHONE",
            link:"/iphone"
        },
        {
            name:"IPAD",
            link:"/ipad"
        },
        {
            name:"MACBOOK",
            link:"/macbook"
        }
    ]
    return(
        <>
            <div className="navbar-master"  onMouseLeave={handleLeave}>
                <div className="top">
                    <div className="left">
                    <DropdownButton variant="transperent" navbar="true" id="dropdown-basic-button" title="EN">
                        <Dropdown.Item href="#">SP</Dropdown.Item>
                        <Dropdown.Item href="#">GR</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton variant="transperent" navbar="true" id="dropdown-basic-button" title="$">
                        <Dropdown.Item href="#/action-1">₹</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">€</Dropdown.Item>
                    </DropdownButton>
                    </div>
                    <div className="right">
                        <p className="top-text">
                            <Person size={20} cursor="pointer"/>
                            My Profile
                        </p>
                        <Link to="/cart" exact 
                        style={{textDecoration: 'none', color:"#262626"}}>
                            <p className="top-text">
                                <Basket size={20} cursor="pointer"/>
                                <Badge variant="success" pill="true" style={{fontSize:"8px"}}
                                >{3}</Badge>
                                {3} Items
                                <span className="cart-price">  $998</span>
                            </p>
                        </Link>
                        <Search size={20} cursor="pointer"/>
                    </div>
                </div>

                <p className="nav-title">iSHOP</p>

                <div className="nav-container">
                    <Navbar collapseOnSelect variant="light" expand="md" bg="transperent"
                    >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav activeKey={window.location.pathname}
                             className="justify-content-center"
                             style={{marginLeft:"34%"}}
                            >
                                {
                                    navList.map((item)=>(
                                        <Nav.Item key={item.name} to={item.link} className="nav-item" 
                                        >
                                            <Nav.Link href={item.link}>
                                                {item.name}
                                            </Nav.Link>
                                        </Nav.Item> 
                                    ))
                                }
                                    <Nav.Item to="/accessories/airport & wireless" className="nav-item" 
                                            onMouseEnter={handleEnter}
                                        >
                                        <Nav.Link href="/accessories/airport & wireless">
                                            ACCESSORIES
                                        </Nav.Link>
                                    </Nav.Item> 
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {showMenu ?<Menu/>:null}
                </div>
            </div>
            <Container className="mob-navbar">
                <Row>
                    <Col className="mr-5 ml-2">
                        <p className="mob-nav-title">iSHOP</p>
                    </Col>
                    <Col className="mt-2">
                        <Navbar collapseOnSelect variant="light" expand="md" bg="transperent">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav activeKey={window.location.pathname}
                                className="justify-content-center"
                                style={{marginLeft:"38%"}}
                                >
                                    {
                                        navList.map((item)=>(
                                            <Nav.Item key={item.name} to={item.link} className="nav-item" 
                                            onMouseEnter={handleEnter}
                                            >
                                                <Nav.Link href={item.link}>
                                                    {item.name}
                                                </Nav.Link>
                                            </Nav.Item> 
                                        ))
                                    }
                                    <Nav.Item to="/accessories/airport & wireless" className="nav-item" 
                                            onMouseEnter={handleEnter}
                                        >
                                        <Nav.Link href="/accessories/airport & wireless">
                                            ACCESSORIES
                                        </Nav.Link>
                                    </Nav.Item> 
                                    <Nav.Item to="/cart" className="nav-item" 
                                            onMouseEnter={handleEnter}
                                        >
                                            <Nav.Link href="/cart">
                                                Cart
                                            </Nav.Link>
                                        </Nav.Item> 
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <div onMouseLeave={handleLeave} className="mob-menu">
                {showMenu ?<Menu/>:null}
            </div>
        </>
    )
}

export default NavBar