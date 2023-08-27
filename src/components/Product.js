import React, { useState,useEffect } from 'react'
import { Card,Button } from 'react-bootstrap';
import {add} from '../store/cartSlice'
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import { Alert } from 'react-bootstrap';
import StatusCode from '../utils/StatusCode';
const Product =()=> {
    const dispatch = useDispatch();
    const [searchResults,setSearchResults]= useState([]);

    const {data: products,status} = useSelector(state=>state.products)
    useEffect(()=>{
      dispatch(getProducts());
    },[]);

    useEffect(()=>{
      setSearchResults(products)
    },[products])
    
    if(status===StatusCode.LOADING){
      return <p>Loading...</p>;
    }

    if(status===StatusCode.ERROR){
      return <Alert key="danger" variant='danger'>something went wrong</Alert>
    }
    const addToCart= (product)=>{
      dispatch(add(product))
    }
   const cards= searchResults.map(product=>(
    <div key={product.id} className="col-md-3" style={{marginBottom:"10px"}}>
        <Card className='h-100'>
        <div className='text-center'>
            <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
        </div>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.price}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={()=>addToCart({product})}>Add to Cart</Button>
        </Card.Footer>
        </Card>
        
    </div>
   ))

  return (
    <>
       <h1>Products</h1>
       <div className='row'>
          {cards}
       </div>
    </>
  )
}
export default Product;