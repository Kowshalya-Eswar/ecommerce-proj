import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Card,Button, Alert } from 'react-bootstrap';
import {remove} from '../store/cartSlice'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const dispatch = useDispatch();
  const productCart = useSelector(state=>state.cart)
  const navigate = useNavigate();
  const removeCart = (id) =>{
     console.log("remove")
     dispatch(remove(id));
     <Alert>Prouct Removed</Alert>
     navigate('/cart');
  }
  const cards= productCart.map((cartProduct)=>(
    <div key={cartProduct.product.id} className="col-md-12" style={{marginBottom:"10px"}}>
        <Card className='h-100'>
        <div className='text-center'>
            <Card.Img variant="top" src={cartProduct.product.image} style={{width:'100px',height:'130px'}} />
        </div>
        <Card.Body>
            <Card.Title>{cartProduct.product.title}</Card.Title>
            <Card.Text>
              {cartProduct.product.price}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" onClick={()=>removeCart(cartProduct.product.id)}>Remove Product</Button>
        </Card.Footer>
        </Card>
        
    </div>
   ))
  return (
    <div>
        <div className='row'>
           {cards}
        </div>
    </div>
  )
}

export default Cart
