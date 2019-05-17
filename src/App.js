import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
class App extends Component {
  constructor() {
    super()
    this.state = {
      inventoryList: [
        {
          "name":'jacket',
          "price": 50,
          "image_url": 'https://hillcity.gap.com/webcontent/0016/660/330/cn16660330.jpg'
        },
        {
          "name":'shoes',
          "price": 75,
          "image_url": 'https://media03.toms.com/static/www/images/product/MENS/ATG/SIDE/10011588-GreyLinenMensPreston-P-1450x1015.jpg'
        },
        {
          "name":'shoes',
          "price": 75,
          "image_url": 'https://media03.toms.com/static/www/images/product/MENS/ATG/SIDE/10011588-GreyLinenMensPreston-P-1450x1015.jpg'
        }
      ]
      }
    }

  render() {
      return (
        <body>
          <Header />

          <main>
              <div className='mainContainer'>
                  <Dashboard 
                      inventoryList={this.state.inventoryList}
                      />
                  <Form />
              </div>
          </main>
        </body>
      );
    }
  }

export default App;
