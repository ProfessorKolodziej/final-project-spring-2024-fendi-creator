const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode('welcome')
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text;
      button.id = option.text.replace(" ", "-");
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

const image = document.querySelector('.cover-fendi-design');

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  console.log(option.nextImage);
  console.log (image)
  image.src= option.nextImage
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 'welcome',
    text: 'Fendi Bag Creator',
    options: [
      {
        text: 'Welcome',
        nextText: 2,
        nextImage: "images/fendi-final-design.png"
      },
     
    ]
  },
  {
    id: 2,
    text: 'This is the Fendi Atelier :) Here you will be able to create the bag of your dreams! You’ll start by picking your bags main color, secondary color, and hardware. Once you finish you can add final customizations and you’ll have your perfect bag!',
    options: [
      {
        text: 'Continue',
        nextText: 3
      },
    
    ]
  },
  {
    id: 3,
    text: 'Primary Color',
    options: [
      {
        text: 'Pepper Red',
        nextText: 4
      },
      {
        text: 'Fendi Yellow',
        nextText: 4
      },
      {
        text: 'Mint Green',
        nextText: 4
      },
      {
        text: 'Cool Blue',
        nextText: 4
      },
      {
        text: 'Piggy Pink',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Secondary Color',
    options: [
      {
        text: 'Vintage Brown',
        nextText: 5
      },
      {
        text: 'Perfect Cream',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 6
      },
      {
        text: 'Silver',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dots',
        nextText: 7
      },
      {
        text: 'Sequince',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1
      },
      {
        text: 'Download PDF',
        nextText: -1
      }
    
    ]
  },
  
  
  
]

startGame()