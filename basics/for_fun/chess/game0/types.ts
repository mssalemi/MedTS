interface ChessGame {
  board: ChessBoard;
  playerMove(color: string, move: Move): void;
}

interface BoardPosition {
  letter: string;
  number: number;
  boardPosition(): string;
}

interface BoardSquare {
  occupiedBy: Piece;
  possbileMoves(): Move[];
  cell: BoardPosition;
}

interface Piece {
  name: string;
  color: string;
}

interface Move {
  capture: boolean;
  newBoardPosition: BoardPosition;
  previosBoardPosition: BoardPosition;
  piece: Piece;
  moveSummary(): string;
}

interface MoveHistory {
  chessGameMoves: string[];
}

// Fix sized tuple of 64 with either peice or null in it
type ChessBoard = [
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare,
  BoardSquare
];
