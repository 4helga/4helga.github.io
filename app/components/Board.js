import React from 'react'
import Cell from './Cell'

const keys = {
	DOWN: 40,
	UP: 38,
	LEFT: 37,
	RIGHT: 39
}

class MathPlosion extends React.Component {
	constructor (props) {
		super(props);

		const initialBoard = [];
		const boardSize = props.boardSize || 5;


		for (let i = 0; i < boardSize * boardSize; i++) {
			initialBoard[i] = null;
		}

		this.state = {
			boardSize: boardSize,
			board: initialBoard,
			currentCell: 0
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);

		window.addEventListener('keydown', this.handleKeyPress)
	}

	handleKeyPress (e) {
		const {
			currentCell,
			boardSize
		} = this.state
		let newCurrentCell = currentCell;

		switch (e.keyCode) {
			case keys.DOWN:
				newCurrentCell += boardSize;
				break;
			case keys.UP:
				newCurrentCell -= boardSize;
				break;
			case keys.RIGHT:
				newCurrentCell += 1;
				break;
			case keys.LEFT:
				newCurrentCell -= 1;
				break;
			default:
				debugger;
				const el = document.getElementById(currentCell);
				document.getElementById(currentCell).focus();
		}

		if (newCurrentCell < 0 || newCurrentCell > boardSize * boardSize - 1) {
			newCurrentCell = currentCell;
		}

		this.setState({
			currentCell: newCurrentCell
		})
	}

	render () {
		//debugger;
		const {
			board,
			boardSize,
			currentCell
		} = this.state;
		return (
			<div
				className="board"
				style={{
					width: boardSize * 60,
					height: boardSize * 60
				}}
			>

				{
					board.map((cell, i) => {
						//debugger
						return (
							<Cell
								value={cell}
								id={i}
								isCurrent={i === currentCell}
							/>
						)
					})
				}

			</div>
		)
	}
}

export default MathPlosion