import React from 'react';
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import pic1  from '../pics/1.jpg';
import pic2 from '../pics/2.jpg';
import pic3 from '../pics/3.jpg';
import pic4 from '../pics/4.jpg';
import pic5 from '../pics/5.PNG';
import pic6 from '../pics/6.JPG';
import pic7 from '../pics/7.png';


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

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 12px;    
      }
      
    ::-webkit-scrollbar-thumb {   
        border-radius: 20px;
        background: black;
      }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    column: 5;
    column-gap: 10px;
    padding: 14px;
    width: 100%;
    
    img{
        width: 50%;
        margin-bottom: 15px;
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


export const SecModal = ({showSecModal, setShowSecModal}) => {
    
    
    return (
    <>
            {showSecModal ? (
        <Background>          
            <ModalWrapper showSecModal={showSecModal}>
                <Head>
                <CloseModalButton aria-label='Close modal' onClick={() => setShowSecModal
                    (prev => !prev)}></CloseModalButton>
                </Head>
                <ModalContent>
                            <img src={pic1} alt="drawing 1" />
                            <img src={pic2} alt="drawing 2" />
                            <img src={pic3} alt="drawing 3" />
                            <img src={pic4} alt="drawing 4" />
                            <img src={pic6} alt="drawing 6" />
                            <img src={pic5} alt="drawing 5" />
                            <img src={pic7} alt="drawing 7" />
                </ModalContent>
            </ModalWrapper>
        </Background>
        ) : null}
    </>        
    )
};
