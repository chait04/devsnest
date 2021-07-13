import './day18.css';

const Day18 = () => {
  let alter = true;
  return (
    <>
      <div id='day18'>
        {[...Array(64)].map((box, i) => {
          if (i % 8 === 0 && i !== 0) {
            alter = !alter;
          }
          return <Box i={i} alter={alter} />;
        })}
      </div>
    </>
  );
};

export const Box = ({ alter, i }) => {
  if (alter) {
    return (
      <div
        style={{
          backgroundColor: i % 2 === 0 ? 'black' : 'white',
          height: '20px',
          padding: '12px',
        }}
        className='day18BChessBox'></div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: i % 2 === 0 ? 'white' : 'black',
          padding: '12px',
        }}></div>
    );
  }
};

export default Day18;
