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

    render() {
        return (
            <div>
                Foo
                <Node></Node>
            </div>
        );
    }
}

const createNode = (col, row) => {
    return {
        col,
        row
    };
}