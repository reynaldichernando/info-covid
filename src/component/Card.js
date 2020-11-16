import './Card.css'
import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div>{this.props.count}</div>
                <div>{this.props.info}</div>
            </div>
        );
    }
}

export default Card;