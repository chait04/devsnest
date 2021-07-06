import './chessBoard.css'

const ChessBoard = () => {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<div className='chessSquare'/>);
  }
  console.log(boxes);
  return (
    <div className='chessApp'>
      <div className='chessBoard'>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
        <div className='chessRow'>{boxes}</div>
      </div>
    </div>
  );
};

export default ChessBoard;
