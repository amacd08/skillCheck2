import React, {Component} from 'react'
import './Product.css'

class Product extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div className='productBox'>
                <img src={`${this.props.inventory.image_url}`} alt='' ></img>
                <div className="productInfo">
                    <h3>{this.props.inventory.name}</h3>
                    <h3>{this.props.inventory.price}</h3>
                </div>           
            </div>
        )
    }
}

export default Product