import React, {Component} from 'react'
import './Form.css'
import defaultPicture from './default.jpg'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            url: defaultPicture,
            productName: '',
            price: 0,
            urlInput: ''

        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    cancel = () => {
        this.setState({
            url: '',
            productName: '',
            price: 0
        })
    }

    render() {
        return (
            <div className="formContainer">
                <img src={this.state.url}></img>
                <div className="formInfoBox">
                    <p>Image URL:</p>
                    <input 
                        type='text' 
                        value={this.state.urlInput}
                        name ='urlInput'
                        onChange={this.handleInput}>
                    </input>
                    <p>Product Name:</p>
                    <input 
                        type='text' 
                        value={this.state.productName}
                        name='productName'
                        onChange={this.handleInput}>    
                    </input>
                    <p>Price:</p>
                    <input 
                        type='text' 
                        value={this.state.price}
                        name='price'
                        onChange={this.handleInput}>
                    </input>
                    <div className="buttonBox">
                        <div 
                            className="cancelButton">
                                <p>Cancel</p>
                        </div>
                        <div 
                            className="addToInvenotry">
                                <p>Add to Inventory</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form