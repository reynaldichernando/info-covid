import './Main.css';
import React from 'react';
import Card from './Card';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            positive: 0,
            recovered: 0,
            death: 0
        };
    }

    componentDidMount() {
        fetch("https://indonesia-covid-19.mathdro.id/api/")
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            this.setState({
                total: result.jumlahKasus,
                positive: result.perawatan,
                recovered: result.sembuh,
                death: result.meninggal
            })
        })
    }
    render() {
        const {total, positive, recovered, death} = this.state;

        return (
            <div className="main">
                <div className="heading">
                    <h1>Wujudkan Indonesia Sehat, Aman, dan Produktif</h1>
                    <h1>INDONESIA TANGGAP COVID-19</h1>
                </div>

                <div className="total-case">
                    <Card count={total} info={"Total Case"} />
                </div>

                <div className="info">
                    <Card count={positive} info={"Positive"} />
                    <Card count={recovered} info={"Recovered"} />
                    <Card count={death} info={"Death"} />
                </div>
            </div>
        );
    }
}

export default Main;