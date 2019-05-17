import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <header>
                <div className='logo'>
                    <img src={require('./shelfie_icon.png')}></img>
                    <h2>SHELFIE</h2>
                </div>

            
            </header>
        )
    }
}

export default Header