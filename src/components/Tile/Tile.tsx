import React from "react";
import "./Tile.css"
const BASE_URL = `${process.env.PUBLIC_URL}/assets/`;
let url = `${BASE_URL}knight_b.png`;
interface IProps {
    number: number
    image?: string
}
function Tile({ number, image }: IProps) {
    if (number % 2 === 0) {
        return <div className="tile black-tile">
            {image && <div style={{ backgroundImage: `url(${image})` }} className="tile chess-piece"></div>}
        </div>
    } else {
        return <div className="tile white-tile">
            {image && <div style={{ backgroundImage: `url(${image})` }} className="tile chess-piece"></div>}
        </div>
    }
}

export default Tile;