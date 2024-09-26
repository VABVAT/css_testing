import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Speech(){
    const {transcript, resetTranscript} = useSpeechRecognition();
    const listening = () => {
        SpeechRecognition.startListening({continuous: true, language: "en-IN"})
    }
    const stop = () => {
        SpeechRecognition.stopListening()
    }
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <button>Your browser does not support speech recognition.</button>;
    }
    const csl = () => {
        console.log({transcript});
    }
    return(
        <>
    <p>{transcript}</p>
    <button onClick={listening}>Start Listening</button>
    <button onClick={stop}>Stop Listening </button>
    <button onClick={csl}> Reset </button>
    {/* console.log({transcript}); */}
        </>
    );
}
export default Speech