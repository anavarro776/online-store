import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {

    console.log(props);

    return (
        <div className="product">
            <span> ID: {props.data._id}</span>
            <img src={"./images/"+props.data.image} alt=""/>
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>Total: $0.00</label>
                    <label>Price: ${props.data.price}</label>
                </div>
                <div>
                    <QuantityPicker/>
                </div> 
            </div>
            <div className="add-button">
                <button className="btn btn-sm btn-success">Add</button>
            </div>
        </div>
    );
}

export default Product;