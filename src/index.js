import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
	return (
		<button 
			className="square" 
			onClick={props.changePlayer}
		>
			{props.value}				
		</button>
	);	
}

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			xIsNext: true,
			squares: Array(9).fill(null)
		}
	}

  renderSquare(i) {
    return (
			<Square 
				value={this.state.squares[i]} 
				changePlayer={() => this.handleClick(i)}
			/>
		);
	}
	
	handleClick = (i) => {
		const squares = this.state.squares.slice();
		console.log(squares);
		squares[i] = this.state.xIsNext ? "X" : "O";
		console.log(squares);
		this.setState({
			xIsNext: !this.state.xIsNext,			
			squares
		});
	}

  render() {
    const status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
