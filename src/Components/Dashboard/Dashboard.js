import React, {Component} from 'react'
import Product from '../../Components/Product/Product'
import './Dashboard.css'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventoryList: this.props.inventoryList

        }
    }

    render() {
        const products = this.state.inventoryList.map((inventory,i) => {
            return (
                <div key={i} >
                    <Product
                    inventory={inventory} />
      
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