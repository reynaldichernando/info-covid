import './Tile.css'

function Tile(props) {
    const { id, name, positive, recovered, death } = props.item;
    return (
        <div className="tile">
            <div className="tile-head">
                <div>#{id}</div>
                <div>{name}</div>
            </div>
            <hr />
            <div className="tile-body">
                <table>
                    <tbody>
                        <tr>
                            <td>{positive}</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>{recovered}</td>
                            <td>Recovered</td>
                        </tr>
                        <tr>
                            <td>{death}</td>
                            <td>Death</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tile;