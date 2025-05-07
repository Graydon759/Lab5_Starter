// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
 //console.log("TEST");
  const hornChoice = document.getElementById('horn-select');
  //console.log('Choice ', hornChoice);
  const hornImage = document.querySelector('img');
  //console.log('Img ', hornImage);
  const hornSound = document.querySelector('audio');
  //console.log('Sound ', hornSound)

  const soundButton = document.querySelector('button');
  //console.log('Button ', soundButton.src);
  const confetti = new JSConfetti();

  const volumeControl = document.getElementById('volume-controls');
  //console.log(volumeControl);
  const volumeSlider = document.getElementById('volume');
  //console.log(volumeSlider);
  const volumeIcon = document.querySelector('#volume-controls img');
  //console.log(volumeIcon);

  hornChoice.addEventListener('input', function(){
    //console.log('Horn ', hornChoice.value);
    const hornType = hornChoice.value;
    //console.log('Type', hornType);
    hornImage.src = 'assets/images/' + hornType + '.svg';
    //console.log('Img ', hornImage);
    hornImage.alt = hornType + ' image selected';
    //console.log('ALT ' + hornImage.alt);
    hornSound.src = 'assets/audio/' + hornType + '.mp3';
    //console.log('Audio ' + hornSound.src);
  });

  soundButton.addEventListener('click', function(){
    //console.log('Button ', hornSound.src);
    const hornType = hornChoice.value;
    hornSound.play();
    if(hornType === 'party-horn'){
      confetti.addConfetti();
    }
  });

  volumeSlider.addEventListener('input', function(){
    //console.log('Sounds ', volumeSlider.value);
    //console.log("IN SOUND EVENT");
    const vol = Number(volumeSlider.value);
    //console.log(vol);
    hornSound.volume = Number(vol / 100);
    //console.log('Sound ', hornSound)
    if(vol === 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    }
    else if (vol < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    }
    else if (vol < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  })
  
}

init();