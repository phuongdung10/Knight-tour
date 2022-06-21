import React, { useState, useRef, useEffect } from "react";
import './chessBoard.css';
import Tile from "../Tile/Tile";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
interface Piece {
    image: string
    x: number
    y: number
}
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
function ChessBoard() {
    const initialBoardState: Piece[] = [];
    const [pieces, setPieces] = useState(initialBoardState);
    const [X, setX] = useState<number | undefined>();
    const [Y, setY] = useState<number | undefined>();
    const [col, setcol] = useState<number | undefined>();
    const chessBoardRef = useRef<HTMLDivElement>(null)
    let boardArray = [];
    initialBoardState.push({ image: "/assets/knight_b.png", x: 1, y: 1 })

    console.log('initialBoardState ==> ', initialBoardState);

    console.log('pieces ===> ', pieces);
    

    function MouseUpPiece(e: React.MouseEvent) {
        // console.log(e.target)
        const element = e.target as HTMLElement;
        const X = e.clientX;
        const Y = e.clientY;

        // console.log(setX)

        initialBoardState.push({ image: "/assets/knight_b.png", x: e.clientX, y: e.clientY })
        console.log('initialBoardState ==> ', initialBoardState);

        // const X = chessBoardRef.current?.offsetLeft
        // console.log(X, Y)
        setPieces(e => {
            return [...initialBoardState]
        })


    }
    function MovePiece(e: React.MouseEvent) {
        const X = e.clientX;
        const Y = e.clientY;

    }
    const getPosition = () =>{
        const col = chessBoardRef.current?.offsetLeft;

    }
    useEffect(() =>{
        getPosition();
    }, [])


    useEffect(() => {
        window.addEventListener("resize", getPosition)
    },[])

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            let image = undefined;
            const number = i + j;
            pieces.forEach(p => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            boardArray.push
                (<Tile key={`${i}, ${j}`} image={image} number={number} />);
        }
    }
    return (
        <div
            onMouseUp={e => MouseUpPiece(e)}
            // onMouseMove={e => MovePiece(e)}
            ref={chessBoardRef}
            id="chessBoard">

            {boardArray}
            <h1>{col}</h1>
            knjnjk



        </div>
    )
}

export default ChessBoard;