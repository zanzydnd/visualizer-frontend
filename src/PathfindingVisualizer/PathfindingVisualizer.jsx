import React, {Component} from "react";
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            mouseIsPressed: false
        };
    }

    componentDidMount() {
        const grid = initialGrid();
        this.setState({grid});
    }

    render() {
        const {grid, isMousePressed} = this.state;
        console.log(grid)
        return (
            <>
                <div className="grid">
                    {grid.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx}>
                                {row.map((node, nodeIdx) => {
                                    const {row, col, isFinish, isStart, isWall} = node;
                                    return (
                                        <Node
                                            key={nodeIdx}
                                            col={col}
                                            isFinish={isFinish}
                                            isStart={isStart}
                                            isWall={isWall}
                                            row={row}
                                        ></Node>
                                    )
                                })
                                }
                            </div>
                        );
                    })
                    }
                </div>
            </>
        );
    }
}

const initialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let column = 0; column < 50; column++) {
            currentRow.push(createNode(column, row));
        }
        grid.push(currentRow);
    }

    return grid;
}

const createNode = (col, row) => {
    return {
        col,
        row,
        isStart: false,
        isFalse: false,
        isWall: false,
    };
}