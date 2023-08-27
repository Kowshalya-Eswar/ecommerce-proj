import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {FaShopify} from 'react-icons/fa6';
import { useSelector} from 'react-redux'
import { useState } from 'react';
function NavBar() {
  const cartProducts = useSelector(state =>state.cart)
  const {search,setSearch} = useState('');
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Shopper stop</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value ={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
        </Form>
        <Nav className='justify-content-end'>
          <Nav.Link to="/cart" as ={Link}><FaShopify/>{cartProducts.length} </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;