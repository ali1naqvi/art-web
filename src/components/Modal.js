import React from 'react';
//import { useSpring, animated } from 'react-spring';
import styled from "styled-components";
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    z-index: 1000000;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
width: 100vh;
height: 90vh;
box-shadow: 0 5px 16px rgba(0, 0, 0.2);
background: #202124;
color: #000;
display: grid;
position: relative;
z-index: 100000000;
border-radius: 7px;
min-width: auto; 
`;


const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 0vh;
    color: grey;
    overflow: hidden;
    right: 0%;
    width: 28px;
    height: 26px;
    padding-top: 0.9vh;
    padding-right: 1vh;
    padding-bottom: 0.3vh;
    padding-left: 1vh;
    border-radius: 0 7px 0 0;
    z-index: 10;
    :hover{
     background-color: #be0000;
     color: white;   
    }
`;


const ModalContent = styled.div`
  height: 70vh;
  
  display: flex;
  flex-direction: column;
  left: 50%;
  right: 50%;
  justify-content: flex-start;
  align-items: center;
  iframe{
    padding-bottom: 10vh;
  }
  @media screen and (max-width: 430px){
    iframe {
        width: 390px;
        length: 300px;
        
    }
  }

  p{
      width: 80%;
      font-weight: bold;
      color: grey;
      text-align: center;
  }
`;

const Head = styled.div`
  width: 100%;
  border-radius: 7px 7px 0 0;
  top: 0%;
  position: relative;
  height: 4vh;
  background-color: #303134;
  @media screen and (max-width: 430px){
      height: 5vh;
  }
`;


export const Modal = ({showModal, setShowModal}) => {
    /*
        const modalRef = useRef()

        const animation = useSpring({
            config: {
                duration: 250
            },
            opacity: showModal ? 1 : 0,
            transform: showModal ? `translateY(0%)` : `translateY(-100%)`
        })
    */

    
    return (
    <>
        {showModal ? (
        <Background>
            <ModalWrapper showSecModal={showModal}>
                <Head>
                <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
                    (prev => !prev)}></CloseModalButton>
                </Head>
                <ModalContent>
                                <iframe width="430" height="314" src="https://www.youtube.com/embed/x2ACnJYzHo0"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen="allowfullscreen"></iframe>
                            <p>NOTE</p>
                            <p>
                                Since the most popular genre in North America is hip-hop, many of my videos
                                are overlayed by trending songs to attract a large crowd. I removed many because of the explicit lyrics which is why you are
                                viewing a very limited amount of embeded videos :)
                            </p>
                </ModalContent>
            </ModalWrapper>
        </Background>
        ) : null}
    </>        
    )
};
