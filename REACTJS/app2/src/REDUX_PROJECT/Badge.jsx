//this component is for showing a number of products
// (Starting total products enni cart lo add chesam ani total chupistundhi)
//e component lo only supposed to have only batch component
import React from 'react';
import { connect } from 'react-redux';

const Badge = ({products}) => {
    return (
        <div style={{"margin":"80px 0px10px 0px"}}>
            <center>
                <button type="button" className="btn btn-primary position-relative" style={{"background": "blue"}}>
                    Total Products
                    {/* <span class="position-absoluate top-0 start-100 translate-middle badge rounded-pill "> */}
                    <span className="position-absoluate top-0 start-100 translate-middle badge rounded-pill badge-primary bg-colr">
                        {products.length}
                    </span>
                </button>
            </center>

        </div>
    )
}
const mapStateToPrps=state=>({
products:state
})
export default connect (mapStateToPrps)(Badge)