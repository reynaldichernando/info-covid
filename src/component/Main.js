import './Main.css';
import React from 'react';
import Card from './Card';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Wujudkan Indonesia Sehat, Aman, dan Produktif</h1>
                <h1>INDONESIA TANGGAP COVID-19</h1>

                <Card count={1234} info={"Total Case"} />

                <div>
                    <Card count={1234} info={"Positive"} />
                    <Card count={1234} info={"Recovered"} />
                    <Card count={1234} info={"Death"} />
                </div>
            </div>
        );
    }
}

export default Main;