import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
    render() {
        console.log(this.props)
        const {
            col,
            isFinish,
            isStart,
            isWall,
            // onMouseDown,
            // onMouseEnter,
            // onMouseUp,
            row
        } = this.props;

        const extraClassName = isFinish ? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

        return (
            <div
                id={`node-${row}-${col}`}
                className={`node ${extraClassName}`}
                // onMouseUp={() => onMouseUp()}
                // onMouseEnter={() => onMouseEnter(row, col)}
                // onMouseDown={() => onMouseDown(row, col)}
            ></div>
        );
    }

}