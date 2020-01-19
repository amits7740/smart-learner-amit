import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";




  const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,

};

const Dictaphone = ({
  transcript,
  resetTranscript,
  startListening,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
 

  return (
    <div>
         <button onClick={startListening}>start</button>
         <button onClick={resetTranscript}>stop</button>
      <span>{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;
const options = {
   autostart:false,
    continuous:false

  }


export default SpeechRecognition(options)(Dictaphone);