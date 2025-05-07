// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const inputText = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');
  const talkButton = document.querySelector('button');
  /*console.log(voiceSelect);
  console.log(inputText);
  console.log(faceImage);
  console.log(talkButton);
  console.log(inputText.value)*/

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', function(){
    if(!inputText || voiceSelect.selectedIndex === 0)
      return;
    //console.log(inputText.placeholder);
    let utterThis = new SpeechSynthesisUtterance(inputText.value);
    //console.log('Input Text ' + inputText.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    //Traverses the array trying to find the correct voice to use to talk
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
/*
Couldn't get tp work properly
    const checkIfSpeaking = setInterval((function(){
      const amISpeaking = synth.speaking;

      if(amISpeaking === 1){
        faceImage.src = 'assets/images/smiling-open.png';
        faceImage.alt = 'Smiling talking face';
      }
      else{
        faceImage.src = 'assets/images/smiling.png';
        faceImage.alt = 'Smiling face';
      }
    }), 100)
    */
    utterThis.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling talking face';
    };

    utterThis.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };
  })
}

