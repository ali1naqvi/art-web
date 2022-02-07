import React, {useState} from "react"
import './style.css';
import './symbols.css'
import './desktop.css'
import ParticleBackground from "./ParticleBackground"
import folder from './files/folder.png'
//import notes from './files/notes.png'
import insta from './files/instagram.png'
import spotify from './files/spotify.png'
import Draggable from "react-draggable";
import { Modal } from './components/Modal';
import { SecModal } from './components/SecModal';
import { GlobalStyle } from './globalStyles';


function Desktop() {
  const [showSecModal, setShowSecModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  var spotifyi = "https://open.spotify.com/user/alinaqvi8014"
  var instagrami = "https://instagram.com/naqwrld"
  
  const getLocalPosition0 = () => {
    const position0 = localStorage.getItem('1')
    const positionJSON = (position0 && JSON.parse(position0)) || {}
    return {
      x: positionJSON.x || 0,
      y: positionJSON.y || 0
    }
  }
  const setLocalPosition0 = (data) => {
    localStorage.setItem('1', JSON.stringify(data))
  }

  const getLocalPosition1 = () => {
    const position1 = localStorage.getItem('2')
    const positionJSON = (position1 && JSON.parse(position1)) || {}
    return {
      x: positionJSON.x || 0,
      y: positionJSON.y || 0
    }
  }
  const setLocalPosition1 = (data) => {
    localStorage.setItem('2', JSON.stringify(data))
  }

  const getLocalPosition2 = () => {
    const position2 = localStorage.getItem('3')
    const positionJSON = (position2 && JSON.parse(position2)) || {}
    return {
      x: positionJSON.x || 0,
      y: positionJSON.y || 0
    }
  }
  const setLocalPosition2 = (data) => {
    localStorage.setItem('3', JSON.stringify(data))
  }




  const getLocalPosition3 = () => {
    const position3 = localStorage.getItem('4')
    const positionJSON = (position3 && JSON.parse(position3)) || {}
    return {
      x: positionJSON.x || 0,
      y: positionJSON.y || 0
    }
  }
  const setLocalPosition3 = (data) => {
    localStorage.setItem('4', JSON.stringify(data))
  }

  //spotify and instagram
  const [position0, setPosition0] = React.useState(getLocalPosition0())
  const onStop0 = (e, data) => {
      e.stopPropagation()
      const { x: lastX, y: lastY } = getLocalPosition0()
      setPosition0({
        x: data.x,
        y: data.y
      })
      setLocalPosition0({
        x: data.x,
        y: data.y
      })
      // mock onClick event, use lastX compare with this X, and lastY compare with this Y, if them is equal, do click, other do drag
      if (lastX === data.x && lastY === data.y) {
        window.location.href = spotifyi
      }
  }
  
  const [position1, setPosition1] = React.useState(getLocalPosition1())
  const onStop1 = (e, data) => {
      e.stopPropagation()
      const { x: lastX, y: lastY } = getLocalPosition1()
      setPosition1({
        x: data.x,
        y: data.y
      })
      setLocalPosition1({
        x: data.x,
        y: data.y
      })
      // mock onClick event, use lastX compare with this X, and lastY compare with this Y, if them is equal, do click, other do drag
      if (lastX === data.x && lastY === data.y) {
        window.location.href = instagrami
      }
    }

  //video folder
  const [position2, setPosition2] = React.useState(getLocalPosition2())
  const onStop2 = (e, data) => {
      e.stopPropagation()
      const { x: lastX, y: lastY } = getLocalPosition2()
      setPosition2({
        x: data.x,
        y: data.y
      })
      setLocalPosition2({
        x: data.x,
        y: data.y
      })
      // mock onClick event, use lastX compare with this X, and lastY compare with this Y, if them is equal, do click, other do drag
      if (lastX === data.x && lastY === data.y) {
        setShowModal(prev => !prev)
      }
    }
  
  //art
  const [position3, setPosition3] = React.useState(getLocalPosition3())
    const onStop3 = (e, data) => {
      e.stopPropagation()
      const { x: lastX, y: lastY } = getLocalPosition3()
      setPosition3({
        x: data.x,
        y: data.y
      })
      setLocalPosition3({
        x: data.x,
        y: data.y
      })
      // mock onClick event, use lastX compare with this X, and lastY compare with this Y, if them is equal, do click, other do drag
      if (lastX === data.x && lastY === data.y) {
        setShowSecModal(prev => !prev)
      }
    }
  
  return (
    <>
      <>
        <SecModal showSecModal={showSecModal} setShowSecModal={setShowSecModal} />
        <GlobalStyle />
      </>
      <>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
        </>
      
    <desktop>
    <ParticleBackground />
        <span id="Symb">
          <Draggable parent="desktop"
          position={position0}
          onStop={onStop0}
          >
        <div id="each-icon">
          <a id='golink'>
          <div id="pic"
            style={{
              background: `url(${spotify})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
            lockAspectRatio={true} 
          />
          </a>
            <p id="icon-name">Spotify</p>
          </div>
        </Draggable>


        
          <Draggable parent={"desktop"}
          position={position1}
          onStop={onStop1}
          >
          <div id="each-icon">
            <a> 
              <div id="pic"
              style={{
                background: `url(${insta})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
              lockAspectRatio={true} 
              />
            </a>
            <p id="icon-name">Instagram</p>
          </div>
          </Draggable>

          
        
          <Draggable parent={"desktop"}
            position={position2}
            onStop={onStop2}>
            <div id="each-icon"              
            >
            <div >
            <div id="pic"
            style={{
              background: `url(${folder})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
            lockAspectRatio={true} 
            >
            </div>
            </div>
            <p id="icon-name">Vids</p></div>
          </Draggable>
          
        <Draggable parent={"desktop"}
        position={position3}
        onStop={onStop3}>
          <div id="each-icon">
            <div id="pic"
            style={{
              background: `url(${folder})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
            lockAspectRatio={true} 
            >
            </div>
            <p id="icon-name">Art</p></div>
          </Draggable>
              
        
          {/*        
        <Draggable parent={"desktop"}><div id="each-icon"> 
            <div class="notes" id="pic" 
              style={{
              background: `url(${notes})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
            lockAspectRatio={true} 
            >
            </div>
            <p id="icon-name">???</p>
            </div>
          </Draggable>
          */}
        </span>
        </desktop>
    </>
  
  );
  
}

export default Desktop;
