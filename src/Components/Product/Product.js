import React, {Component} from 'react'
import './Product.css'

class Product extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    deleteProduct = () => {
        this.props.deleteProduct(this.props.inventory.id)
    }
    editProduct = (product) => {
        console.log(product)
        this.props.editProduct(this.props.inventory)
    }

    render() {
        return (
            <div className='productBox'>
                <img src={`${this.props.inventory.img}`} alt='' ></img>
                <div className="productInfoBox">
                    <div className="productInfo">
                        <h3>{this.props.inventory.name}</h3>
                        <h3>{this.props.inventory.price}</h3>
                    </div>
                    <div className="productButtonsBox">
                        <div 
                          className="productButton"
                          onClick={this.deleteProduct}>
                            <p>Delete</p>
                        </div>
                        <div 
                          className="productButton"
                          onClick={this.editProduct}>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>    

            </div>
        )
    }
}

export default Product