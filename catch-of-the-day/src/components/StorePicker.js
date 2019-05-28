import React from 'react';


class StorePicker extends React.Component {
    render () {
        return (
        <form className="store-selector">
            <h2>please enter a Store</h2>
            <input type="text" required placeholder="Store Name"></input>
            <button type="submit">visit Store -></button>
        </form>
        );
    };
}


export default StorePicker;
