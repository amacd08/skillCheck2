import React, {Component} from 'react'
import Product from '../../Components/Product/Product'
import './Dashboard.css'
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editProduct: {}

        }
    }

    deleteProduct = (id) => {
        console.log(id)
        axios.delete(`/api/product/${id}`)
        .then(res => {
            this.props.getInventory()
        })
    }

    editProduct = (product) => {
        this.setState({
            editProduct: product
        })
        this.props.editProduct(this.state.editProduct)
    }

    render() {
        console.log(this.state.editProduct)
        const products = this.props.inventoryList.map((inventory,i) => {
            return (
                <div key={i} >
                    <Product
                    inventory={inventory} 
                    deleteProduct={this.deleteProduct}
                    editProduct={this.props.editProduct}/>
      
                </div>
                )
            })

        return (
            <div className='dashBoardContainer'>
                {products}
            </div>
        )
    }
}

export default Dashboard