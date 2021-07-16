import styled from 'styled-components';
import useFetch from '../Hooks/useFetch';
import useToggle from '../Hooks/useToggle';

// const Title = styled.h1`
//   color: red;
//   font-size: 30px;
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: #291a01;
//   color: yellow;
// `;

const Day23 = () => {
  const [data2] = useFetch(`https://jsonplaceholder.typicode.com/todos/5`);
  const [data3] = useFetch(`https://jsonplaceholder.typicode.com/todos/8`);

  const [myText, setMyText] = useToggle();

  return (
    <div>
      <h1>Day 23</h1>
      <p>
        {data2 && data2.title} ID: {data2.id}
      </p>
      <p>{data3.title}</p>
      <div
        style={{
          marginTop: '30px  ',
        }}>
        <h1>Toggle Button</h1>
        <button onClick={setMyText}>
          {myText ? 'Toggled' : 'Click to Toggle'}
        </button>
      </div>
        {/* <Title>Chaitanya</Title> */}


    </div>
  );
};

export default Day23;
