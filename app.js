const randomWords = [
    [ "a winner", "beautiful", "weird", "full of power", "capable","deserving of love", "sexy af", "tough", ],
    ["conquer North Korea", "eat anything you like", "screw a dolphin", "steal a baby", "write some code", "buy a puppy", ],
    [ "the salvation army", "the mirror", "open waters", "your sleep", "the toilet", "life", ],
    ["UHAA!",  "Time to fly!","Onward and upward!", "You got this!","Ding", ]
];

const createRandomSentence = () => {
    return`You are ${
      randomWords[0][Math.floor(Math.random() * randomWords[0].length)]
    }. This year you will ${
      randomWords[1][Math.floor(Math.random() * randomWords[1].length)]
    }. Test your limits in ${
      randomWords[2][Math.floor(Math.random() * randomWords[2].length)]
    }. ${randomWords[3][Math.floor(Math.random() * randomWords[3].length)]}`;

  };
 
const el = document.createElement('div');

el.addEventListener('click', function handleClick(event) {
  console.log('element clicked 🎉🎉🎉', event);
  el.textContent = createRandomSentence();
});

el.style.backgroundColor = 'salmon';
el.style.width = '500px';
el.style.height = '150px';

const box = document.getElementById('box');
box.appendChild(el);  
