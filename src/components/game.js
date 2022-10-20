import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function Game() {
    
    const [turn, setTurn] = useState(1);
    const [square, setSquare] = useState('a1')
    
    const squares = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'];
    const colors = ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b']

    const getRandomSquare = () => {
        return squares[Math.floor(Math.random() * squares.length)];
    }


    const onChooseColor = (color) => {
        if (colors[squares.indexOf(square)] === color) {
            setTurn(turn + 1);
        }
        else {
            setTurn(1);
        }
        setSquare(getRandomSquare());
    }

    return (
        <Box>
            <h1> {square} {turn} </h1>
            <Button variant="contained" onClick={() => onChooseColor("b")}>Black</Button>
            <Button variant="contained" onClick={() => onChooseColor("w")}>White</Button>
        </Box>
    )
}