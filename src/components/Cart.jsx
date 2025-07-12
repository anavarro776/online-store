import "./Cart.css";
import DataContext from "../state/DataContext";
import { useContext } from "react";


function Cart(){
const cart =useContext(DataContext).cart;
 



return(
   
    <div className="cart page ">
        <h1>Your Items</h1>
        <div className="parent">
        
        
            
        <div className="products-class">
            <h3>  Products  </h3>
            {cart.map(prod => 
            <div className= " prod-cart">
                <img src={"./images/"+props.data.image}></img>
                <h6> {prod.title}</h6>
                 <label>Price $:{prod.price}</label>
                 <label className="class=badge rounded-pill text-bg-info">QTY:{prod.quantity}</label>
                 <button className="btn btn-sm btn-outline-danger"> Remove</button>
            </div>)}
        </div>

        <div className="total">
            <h3>Total </h3>
            <h4> Price : </h4>
            <h5>Are You Ready to Create Order</h5>
            <h5> We Have {cart.length}  </h5>
            <button   className="btn btn-primary">Pay</button>
        </div>

        </div>
    </div>

 
);

}







export default Cart;