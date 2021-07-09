import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import './menu.css'

const Menu =()=>{
const accessories = [
    'AirPort & Wireless',
    'Shells & Sleeves',
    'Home Security',
    'Cables & Docks',
    'Photography',
];
const category1 = [
    'Charging Devices',
    'Connected Home', 
    'Display & Mounts',
    'Fitness & Sport',
    'Headphones', 
]
const category2 =[
    'Mice & Keyboards',
    'Networking & Server'
]
    return(
        <div className="menu-container">
            <Row className="row-container">
                <Col style={{width:"314px",height:'240px'}}>
                    <ul  style={{listStyleType:"none"}}>
                        <p className="menu-list-header">Accessories</p>
                        {
                            accessories.map((item)=>(                        
                                <li key={item} className="menu-list-item">
                                    <Link 
                                    to={`/accessories/${item.toLowerCase()}`} 
                                    style={{ textDecoration: 'none', color:"black"}}
                                    replace
                                    >
                                        {item}
                                    </Link>
                                </li>            
                                ))
                        }
                    </ul>
                </Col>
                <Col  style={{width:"314px",height:'240px'}}>
                    <ul  style={{listStyleType:"none"}}>
                        <p className="menu-list-header">Connect</p>
                        {
                            category1.map((item)=>(
                                <li key={item} className="menu-list-item">
                                    <Link 
                                    to={`/accessories/${item.toLowerCase()}`} 
                                    style={{ textDecoration: 'none', color:"black"}}
                                    replace
                                    >
                                        {item}
                                    </Link>
                                </li>
                                ))
                        }
                    </ul>
                </Col>
                <Col style={{width:"314px",height:'240px'}}>
                    <ul  style={{listStyleType:"none"}}>
                        <p className="menu-list-header">Hardware</p>
                        {       
                            category2.map((item)=>(
                            <li  key={item}  className="menu-list-item">
                                <Link 
                                to={`/accessories/${item.toLowerCase()}`} 
                                style={{textDecoration: 'none', color:"black"}}
                                replace
                                >
                                    {item}
                                </Link>
                            </li>
                            ))
                        }   
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Menu