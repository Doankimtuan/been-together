import { useState, useLayoutEffect, useRef } from 'react'
import boyAvatar from './assets/img/tuan.jpg'
import girlAvatar from './assets/img/ngan2.jpg'
import heart from './assets/img/hearts.svg'
import giftBox from './assets/img/gift.gif'
import music from './assets/music/music.mp3'
import ReactAudioPlayer from 'react-audio-player';
import Video from './components/Video'
import './App.css'

function App() {
  const [loveDate, setLoveDate] = useState('')
  const [time, setTime] = useState(null)
  const [mute, setMute] = useState(false)
  const [openVideo, setOpenVideo] = useState(false)
  const intervalRef = useRef(null);

  useLayoutEffect(() => {
    const startDate = new Date("2021-01-01T20:00:00");

    setLoveDate(Math.floor((new Date() - startDate) / 86400000));

    intervalRef.current = setInterval(() => {
      let timeObj = {}
      const ms = (new Date() - startDate) % 86400000;
      timeObj.hour = `0${Math.floor(ms / 3600000)}`.slice(-2);
      timeObj.min = `0${Math.floor(ms % 3600000 / 60000)}`.slice(-2);
      timeObj.second = `0${Math.floor(ms % 3600000 % 60000 / 1000)}`.slice(-2);
      setTime(timeObj)
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [])

  const handleClickBox = () => {
    setMute(true)
    setOpenVideo(true)
  }
  return (
    <>
      {openVideo && <Video onClose={() => {
        setOpenVideo(false)
        setMute(false)
      }} />}
      <h1 className="title">BEEN TOGETHER</h1>

      <div className="box">
        <div className="about">
          <div className="info">
            <img src={boyAvatar} className="avatar" alt="avatar" />
            <div className="details">
              <p className="name">Đoàn Kim Tuấn</p>
              <p className="born">21.10.1999</p>
            </div>
          </div>

          <div className="heart-box">
            <img src={heart} className="heart" alt="heart" />
          </div>

          <div className="info">
            <img src={girlAvatar} className="avatar" alt="avatar" />
            <div className="details">
              <p className="name">Lê Thị Thanh Ngân</p>
              <p className="born">29.09.1999</p>
            </div>
          </div>
        </div>

        <div className="time">
          <h2 className="days">{loveDate}&nbsp;DAYS</h2>
          <p className="sup-time">
            {time && (<><span className="hour">{time.hour}</span>:<span className="min">{time.min}</span>:<span className="second">{time.second}</span></>)}
          </p>
        </div>

        <p className="say-thank">Thank you for your love !</p>
      </div>

      <div className="gift-box" onClick={() => handleClickBox()}>
        <img src={giftBox} alt="gif" />
        <div className="buttons">
          <button className="blob-btn">
            Tap to Here
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
              </span>
            </span>
          </button>
        </div>
      </div>

      <ReactAudioPlayer
        src={music}
        autoPlay={true}
        loop={true}
        muted={mute}
      />
    </>
  );
}

export default App;
