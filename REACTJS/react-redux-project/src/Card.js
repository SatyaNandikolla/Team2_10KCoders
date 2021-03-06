import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {AddProduct} from './actions';
import { RemoveProduct } from './actions';
<style>

</style>

const Card = ({products,AddProduct,RemoveProduct}) => {
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await AddProduct({name:item});
            setItem("");
        }
        setItem("");
    }
    return (
        <div style={{"border":"1px solid gray","width":"300px", "margin":"0 auto"}}>
        <center>
            <div className="card" style={{"width": "18rem"}}>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Products" value={item} onChange={e => setItem(e.target.value)}/> <br />
                        <button type="submit" className="btn btn-success" style={{"background":"Green","color":"white"}}>
                        Add Product
                        </button> 
                    </form>
                    <br />
                    {products.map(product => {
                        return(
                            <div className="item" key={product}>{product.name} 
                            <span onClick={()=> RemoveProduct(product.name)} className="badge square-pill bg-danger" style={{"float": "right","padding":"6px 10px 6px 10px"}}>
                            X</span></div>
                        )
                    })}
                </div>
            </div>
        </center>
        </div>
    )
}

const mapStateToProps = (state) =>({
    products: state
})

export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Card);
