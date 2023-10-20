import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../../context/Dataprovider'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;
    const [detail, setDetail] = useState([]);
    const params = useParams();
    
    useEffect(() =>{
        products.forEach(product =>{
            if(product.id === parseInt(params.id)){
                setDetail(product)
            }
        })
    }, [params.id, products])

  return (
    <>
        {
            <div className='details'>
                <h2>{detail.title}</h2>
                <p className='price'>${detail.price}</p>
                <div className='grid'>
                    <p className='new'>New</p>
                    <div className='size'>
                        <select placeholder='Size'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <p>Size</p>
                    </div>
                </div>
                <button onClick={()=>addCart(detail.id)}>Add to cart</button>
                <img src={detail.image} alt={detail.title}/>
                <div className='description'>
                    <p><b>Description:</b>lorem ipsum ahsdahgskd ba dskg  <br/>akgdkagd kagdkagdka gksdgakdgakgd kagd kagsdk agd <br/><br/>Lorem asd asd da sd asdasda da sd asd a sd as da d a sdasdasdasd asbd asd ag diasdigaisdgagd iagd iau</p>
                </div>
            </div>
        }
    </>
  )
}
