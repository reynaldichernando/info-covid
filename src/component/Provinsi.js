import './Provinsi.css';
import React from 'react';
import Tile from './Tile';

class Provinsi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchData: [],
        }
    }

    componentDidMount() {
        fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                this.setState({
                    data: result.data,
                    searchData: result.data,
                })
            })
    }

    handleChange = (event) => {
        let query = event.target.value;
        const {data, searchData} = this.state;
        if(query === '' || query === null) {
            this.setState({
                data: data,
                searchData: data
            })
        }
        else {
            let tempSearchData = searchData.filter(element => {
                return element.provinsi.toLowerCase().includes(query);
            })
            this.setState({
                data: data,
                searchData: tempSearchData
            })
        }
    }

    render() {
        const { searchData } = this.state;
        let i = 1;
        return (
            <>
                <div className="search-text">
                    <input id="search-provinsi" type="text" onChange={this.handleChange} />
                </div>
                <div className="provinsi">
                    {
                        searchData.map(element => {
                            let item = {
                                id: i,
                                name: element.provinsi,
                                positive: element.kasusPosi,
                                recovered: element.kasusSemb,
                                death: element.kasusMeni
                            }
                            // because Indonesia is not a provinsi
                            if(item.name === 'Indonesia') {
                                return null;
                            }
                            i++;
                            return (
                                <Tile key={i} item={item} />
                            )
                        })
                    }
                </div>
            </>
        );
    }
}

export default Provinsi;