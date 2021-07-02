import './chessBoard.css'

const ChessBoard = () => {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<div className='square'/>);
  }
  console.log(boxes);
  return (
    <div className='App'>
      <div className='chessBoard'>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
        <div className='row'>{boxes}</div>
      </div>
    </div>
  );
};

export default ChessBoard;
