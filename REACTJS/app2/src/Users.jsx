//rcc-react clas component
import axios from "axios";
import React, { Component } from "react";
export class Users extends Component {
    //rcon
    constructor() {
        super();
        this.state = {
            users: [],
            products: [],
        }
    }
    componentDidMount() {
        let url =
            "https://filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";
        let FAKE_STORE_PRODUCTS_URL = "https://fakestoreapi.com/products";
        axios.get(FAKE_STORE_PRODUCTS_URL).then(res => {
            console.log(res.data)
            
            let newState={...this.state}
            newState['products']=res.data;
            // console.log(newState);
            // this.setState({})
            this.setState(newState);
        });
        // console.log("Component Mounted")
    }
    render() {
        return (
            <div>
                <h2>Welcome to Users Component</h2>
                <ul>
                    {this.state.products.map((product)=>{
                        // return <li>{product.title}</li>
                        return( 
                        <li>
                            <img src={product.image} alt=""/>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}