import React, {Component} from 'react'
import './Form.css'
import defaultPicture from './default.jpg'
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            editProductId:null,
            url: defaultPicture,
            name: '',
            price: 0,

        }
    }

    componentDidUpdate(prevProps) {
            if (this.props.editProductInfo.id !== prevProps.editProductInfo.id) {
                this.setState({
                    editProductId:this.props.editProductInfo.id,
                    url: this.props.editProductInfo.img,
                    name: this.props.editProductInfo.name,
                    price: this.props.editProductInfo.price

                })
                this.editProductButton()
            }
          
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    clearInfo = () => {
        this.setState({
            url: defaultPicture,
            name: '',
            price: 0
        })
    }
    
    addToInventory = () => {
        let name = this.state.name
        let price = this.state.price
        let img = this.state.url
        axios.post('/api/product',{name,price,img})
        .then((res) => {
            console.log('api call made')
            this.props.getInventory()
            this.clearInfo()
        })
    }
    
    saveChanges = () => {
        console.log('tryingAPI')
        axios.put('api/product', 
        {
            "img": this.state.url,
            "price": this.state.price,
            "name": this.state.name,
            "id": this.state.editProductId
        })
        .then(() => {
            this.clearInfo()
            this.props.getInventory()
        })
        .catch(err => console.log(err))
    }

    editProductButton = () => {
        if (this.state.editProductId === null) {
            return(
                <div 
                className="addToInventory">
                    <p onClick={this.addToInventory}>Add to Inventory</p>
                </div>
            )
        } else {
            return( 
                <div 
                className="addToInventory">
                    <p onClick={this.saveChanges}>SaveChanges</p>
                </div>
            )
        }
    }
    
    

    render() {

        return (
            <div className="formContainer">
                <img src={this.state.url}></img>
                <div className="formInfoBox">
                    <p>Image URL:</p>
                    <input 
                        type='text' 
                        value={this.state.url} 
                        name ='url'
                        onChange={this.handleInput}>
                    </input>
                    <p>Product Name:</p>
                    <input 
                        type='text' 
                        value={this.state.name}
                        name='name'
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
                        {this.editProductButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Form