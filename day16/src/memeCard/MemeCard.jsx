import './memeCard.css';
import Dogo from './dodge.jfif';

const MemeCard = () => {
  return (
    <>
      <div className='App'>
        <div className='imgDiv'>
          <img src={Dogo} alt='JustinMEME_Image' />
        </div>
        <div className='mainText'>
          <h1 className='mainHeading'>My MeMe</h1>
          <p className='mainPara'>Coolest meme you can find :)</p>
        </div>
      </div>
    </>
  )
};

export default MemeCard;


