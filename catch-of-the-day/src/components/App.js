import React from 'react';
import Header from './Header.js';
import Inventory from './Inventory.js';
import Order from './Order.js';

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menue">
                <Header></Header>
                </div>
                <Inventory></Inventory>
                <Order></Order>
                <p>hello</p>
            </div>
        );
    };

} 

export default App;
