import './Card.css'
import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.count}</h2>
                <h3>{this.props.info}</h3>
            </div>
        );
    }
}

export default Card;