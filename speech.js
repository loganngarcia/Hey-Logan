/*

What does this page do? ❔
  - Lets Hey Logan speak to you on compatiable devices
  
*/

// makes text-to-speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1; // can be 0, 1, or 2
  synth.speak(voice);
}
