import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';
class App extends Component {
  constructor() {
    super()
    this.state = {
      inventoryList: [],
      editProductInfo: {}
      }
    }
    componentDidMount = () => {
    axios.get('/api/inventory')
    .then((res) => {
      this.setState({
        inventoryList: res.data
        })
      })
    }
    
    getInventory = () => {
      axios.get('/api/inventory')
    .then((res) => {
      this.setState({
        inventoryList: res.data
        })
      })
    }

    editProduct = (product) => {
      this.setState({
        editProductInfo:product
      })
    }
    
    

  render() {
      return (
        <body>
          <Header />

          <main>
              <div className='mainContainer'>
                  <Dashboard 
                      inventoryList={this.state.inventoryList}
                      getInventory={this.getInventory}
                      editProduct={this.editProduct}/>
                      
                  <Form 
                      getInventory={this.getInventory}
                      editProductInfo={this.state.editProductInfo}/>
              </div>
          </main>
        </body>
      );
    }
  }

export default App;
