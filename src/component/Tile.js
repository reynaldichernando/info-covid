import './Tile.css'

function Tile(props) {
    const {id, name, positive, recovered, death} = props.item;
    return (
        <div className="tile">
            <div>{id}</div>
            <div>{name}</div>
            <div>{positive} Positive</div>
            <div>{recovered} Recovered</div>
            <div>{death} Death</div>
        </div>
    );
}

export default Tile;