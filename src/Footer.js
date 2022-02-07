import React from "react"
import { makeStyles } from '@mui/styles';
import './footer.css'
import kitch from './files/kitch.mp3' 
import cudi from './files/cudi.jpg'
import AudioPlayer from 'material-ui-audio-player';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const muiTheme = createMuiTheme({});

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent !important',
        width: '80% !important',
    },
    playIcon: {
        color: '#ffffff !important',
        '&:hover': {
            color: '#ffffff !important'
         },
    },
    replayIcon: {
        color: '#ffffff !important'
    },
    pauseIcon: {
        color: '#ffffff !important'
    },
    volumeIcon: {
        color: '#ffffff !important'
    },
    volumeSlider: {
        color: '#000000 !important'
    },
    progressTime: {
        color: '#ffffff !important',
        fontSize: '13px !important',
        fontWeight: 'bold !important',
        marginTop: '4px !important'
        
    },
    
    mainSlider: {
        color: '#ffffff !important',
        '& .MuiSlider-rail': {
            color: '#ffffff !important'
        },
        '& .MuiSlider-track': {
            color: '#ffffff !important'
        },
        '& .MuiSlider-thumb': {
            color: '#ffffff !important'
        },
    },
});

  


export default function Footer(){

    
    return (
        <div className="footer">
            <meta content="True" name="HandheldFriendly" />
            <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
            <meta name="viewport" content="width=device-width"></meta>
            <div className="footer-left">
                <img className="footer-albumLogo" src={cudi} alt="" />
                <div className="footer-songInfo">
                    <h4>Kitchen</h4>
                    <p>Kid Cudi</p>
                </div>
            </div>      
            <ThemeProvider theme={muiTheme}>
                <AudioPlayer
                    volume='false'
                    useStyles={useStyles}
                    src={kitch}
                    time="single"
                />  
            </ThemeProvider>
        </div>
    );
};





