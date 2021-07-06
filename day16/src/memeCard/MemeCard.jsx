import './memeCard.css';
import Dogo from './dodge.jfif';

const MemeCard = () => {
  return (
    <div className="memeParentDiv">
      <div className='memeApp'>
        <div className='memeImgDiv'>
          <img className="memeImg" src={Dogo} alt='JustinMEME_Image' />
        </div>
        <div className='memeMainText'>
          <h1 className='memeMainHeading'>My MeMe</h1>
          <p className='memeMainPara'>Coolest meme you can find :)</p>
        </div>
      </div>
    </div>
  )
};

export default MemeCard;


