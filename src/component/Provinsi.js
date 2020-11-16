import './Provinsi.css';
import React from 'react';
import Tile from './Tile';

class Provinsi extends React.Component {

    render() {
        /* TODO: map list provinsi from API */
        const item = [
            {
                id: 1,
                name: "DKI Jakarta",
                positive: 1000,
                recovered: 1234,
                death: 100
            },
            {
                id: 2,
                name: "Jawa Timur",
                positive: 5348,
                recovered: 432978,
                death: 342
            },
            {
                id: 3,
                name: "Jawa Barat",
                positive: 523,
                recovered: 8943,
                death: 328
            },
        ];
        return (
            <div className="provinsi">
                <input type="text" placeholder="Search"/>
                <Tile item={item[0]}/>
                <Tile item={item[1]}/>
                <Tile item={item[2]}/>
            </div>
        );
    }
}

export default Provinsi;