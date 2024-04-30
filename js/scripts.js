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
      textElement.innerText = textNode.text;
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
    text: '',
    options: [
      {
        text: 'START',
        nextText: 2,
        nextImage: "images/fendi-bag-plain-2.png"
      },
     
    ]
  },
  {
    id: 2,
    text: 'This is the Fendi Atelier :) Here you will be able to create the bag of your dreams! You’ll start by picking your bags main color, secondary color, and hardware. Once you finish you can add final customizations and you’ll have your perfect bag!',
    options: [
      {
        text: 'Continue',
        nextText: 3,
        nextImage: "images/fendi-bag-plain-2.png"
      }
      
    
    ]
  },
  {
    id: 3,
    text: 'Primary Color',
    options: [
      {
        text: 'Pepper Red',
        nextText: 4,
        nextImage: "images/red-plain.png"
      },
      {
        text: 'Fendi Yellow',
        nextText: 5,
        nextImage: "images/yellow-plain.png"
      },
      {
        text: 'Mint Green',
        nextText: 6,
        nextImage: "images/mint-plain.png"
      },
      {
        text: 'Cool Blue',
        nextText: 7,
        nextImage: "images/blue-plain.png"
      },
      {
        text: 'Piggy Pink',
        nextText: 8,
        nextImage: "images/pink-plain.png"
      }
    ]
  },
  {
    id: 4,
    text: 'Secondary Color',
    options: [
      {
        text: 'Vintage Brown',
        nextText: 9,
        nextImage: "images/red-brown.png"
      },
      {
        text: 'Perfect Cream',
        nextText: 10,
        nextImage: "images/red-cream.png"
      },
      {
        text: 'Back',
        nextText: 3,
        nextImage: "images/fendi-bag-plain-2.png"
      }
    ]
  },
  {
    id: 5,
    text: 'Secondary Color',
    options: [
      {
        text: 'Vintage Brown',
        nextText: 11,
        nextImage: "images/yellow-brown.png"
      },
      {
        text: 'Perfect Cream',
        nextText: 12,
        nextImage: "images/yellow-cream.png"
      },
      {
        text: 'Back',
        nextText: 3,
        nextImage: "images/fendi-bag-plain-2.png"
      }
    ]
  },
  {
    id: 6,
    text: 'Secondary Color',
    options: [
      {
        text: 'Vintage Brown',
        nextText: 13,
        nextImage: "images/mint-brown.png"
      },
      {
        text: 'Perfect Cream',
        nextText: 14,
        nextImage: "images/mint-cream.png"
      },
      {
        text: 'Back',
        nextText: 3,
        nextImage: "images/fendi-bag-plain-2.png"
      }
    ]
  },
  {
    id: 7,
    text: 'Secondary Color',
    options: [
      {
        text: 'Vintage Brown',
        nextText: 15,
        nextImage: "images/blue-brown.png"
      },
      {
        text: 'Perfect Cream',
        nextText: 16,
        nextImage: "images/blue-cream.png"
      },
      {
        text: 'Back',
        nextText: 3,
        nextImage: "images/fendi-bag-plain-2.png"
      }
    ]
  },
  {
    id: 8,
    text: 'Secondary Color',
    options: [
      {
        text: 'Vintage Brown',
        nextText: 17,
        nextImage: "images/pink-brown.png"
      },
      {
        text: 'Perfect Cream',
        nextText: 18,
        nextImage: "images/pink-cream.png"
      },
      {
        text: 'Back',
        nextText: 3,
        nextImage: "images/fendi-bag-plain-2.png"
      }
    ]
  },
  {
    id: 9,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 19,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Silver',
        nextText: 20,
        nextImage: "images/red-brown-silver.png"
      },
      {
        text: 'Back',
        nextText: 4,
        nextImage: "images/red-plain.png"
      }
    
    ]
  },
  {
    id: 10,
    text: 'Hardware Color (test)',
    options: [
      {
        text: 'Gold testing',
        nextText: 21,
        nextImage: "images/red-cream-gold.png"
      },
      {
        text: 'Silver',
        nextText: 22,
        nextImage: "images/red-cream-silver.png"
      },
      {
        text: 'Back',
        nextText: 4,
        nextImage: "images/red-plain.png"
      }
    ]
  },
  {
    id: 11,
    text: 'Hardware Color (Test 2)',
    options: [
      {
        text: 'Gold',
        nextText: 23,
        nextImage: "images/yellow-brown-gold.png"
      },
      {
        text: 'Silver',
        nextText: 24,
        nextImage: "images/yellow-brown-silver.png"
      },
      {
        text: 'Back',
        nextText: 5,
        nextImage: "images/yellow-plain.png"
      }
    ]
  },
  {
    id: 12,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 25,
        nextImage: "images/yellow-cream-gold.png"
      },
      {
        text: 'Silver',
        nextText: 26,
        nextImage: "images/yellow-cream-silver.png"
      },
      {
        text: 'Back',
        nextText: 5,
        nextImage: "images/yellow-plain.png"
      }
    ]
  },
  {
    id: 13,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 27,
        nextImage: "images/mint-brown-gold.png"
      },
      {
        text: 'Silver',
        nextText: 28,
        nextImage: "images/mint-brown-silver.png"
      },
      {
        text: 'Back',
        nextText: 6,
        nextImage: "images/mint-plain.png"
      }
    ]
  },
  {
    id: 14,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 29,
        nextImage: "images/mint-cream-gold.png"
      },
      {
        text: 'Silver',
        nextText: 30,
        nextImage: "images/mint-cream-silver.png"
      },
      {
        text: 'Back',
        nextText: 6,
        nextImage: "images/mint-plain.png"
      }
    ]
  },
  {
    id: 15,
    text: 'Hardware Color (Test 3)',
    options: [
      {
        text: 'Gold',
        nextText: 31,
        nextImage: "images/blue-brown-gold.png"
      },
      {
        text: 'Silver',
        nextText: 32,
        nextImage: "images/blue-brown-silver.png"
      },
      {
        text: 'Back',
        nextText: 7,
        nextImage: "images/blue-plain.png"
      }
    ]
  },
  {
    id: 16,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 33,
        nextImage: "images/blue-cream-gold.png"
      },
      {
        text: 'Silver',
        nextText: 34,
        nextImage: "images/blue-cream-silver.png"
      },
      {
        text: 'Back',
        nextText: 7,
        nextImage: "images/blue-plain.png"
      }
    ]
  },
  {
    id: 17,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 35,
        nextImage: "images/pink-brown-gold.png"
      },
      {
        text: 'Silver',
        nextText: 36,
        nextImage: "images/pink-brown-silver.png"
      },
      {
        text: 'Back',
        nextText: 8,
        nextImage: "images/pink-plain.png"
      }
    ]
  },
  {
    id: 18,
    text: 'Hardware Color',
    options: [
      {
        text: 'Gold',
        nextText: 37,
        nextImage: "images/pink-cream-gold.png"
      },
      {
        text: 'Silver',
        nextText: 38,
        nextImage: "images/pink-cream-silver.png"
      },
      {
        text: 'Back',
        nextText: 8,
        nextImage: "images/pink-plain.png"
      }
    ]
  },
  {
    id: 19,
    text: 'Final Touches (test 4)',
    options: [
      {
        text: 'Polka Dot',
        nextText: 39,
        nextImage: "images/red-brown-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 40,
        nextImage: "images/red-brown-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 9,
        nextImage: "images/red-brown.png"
      }
      
    ]
  },
  {
    id: 20,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 41,
        nextImage: "images/red-brown-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 42,
        nextImage: "images/red-brown-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 9,
        nextImage: "images/red-brown.png"
      }
    ]
  },
  {
    id: 21,
    text: 'Final Touches (test 4)',
    options: [
      {
        text: 'Polka Dot',
        nextText: 43,
        nextImage: "images/red-cream-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 44,
        nextImage: "images/red-cream-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 10,
        nextImage: "images/red-cream.png"
      }
    ]
  },
  {
    id: 22,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 45,
        nextImage: "images/red-cream-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 46,
        nextImage: "images/red-cream-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 10,
        nextImage: "images/red-cream.png"
      }
    ]
  },
  {
    id: 23,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 47,
        nextImage: "images/yellow-brown-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 48,
        nextImage: "images/yellow-brown-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 11,
        nextImage: "images/yellow-brown.png"
      }
    ]
  },
  {
    id: 24,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 49,
        nextImage: "images/yellow-brown-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 50,
        nextImage: "images/yellow-brown-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 11,
        nextImage: "images/yellow-brown.png"
      }
      
    ]
  },
  {
    id: 25,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 49,
        nextImage: "images/yellow-cream-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 50,
        nextImage: "images/yellow-cream-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 12,
        nextImage: "images/yellow-cream.png"
      }
    ]
  },
  {
    id: 26,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 51,
        nextImage: "images/yellow-cream-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 52,
        nextImage: "images/yellow-cream-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 12,
        nextImage: "images/yellow-cream.png"
      }
    ]
  },
  {
    id: 27,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 53,
        nextImage: "images/mint-brown-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 54,
        nextImage: "images/mint-brown-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 13,
        nextImage: "images/mint-brown.png"
      }
    ]
  },
  {
    id: 28,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 55,
        nextImage: "images/mint-brown-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 56,
        nextImage: "images/mint-brown-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 13,
        nextImage: "images/mint-brown.png"
      }
    ]
  },
  {
    id: 29,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 57,
        nextImage: "images/mint-cream-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 58,
        nextImage: "images/mint-cream-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 14,
        nextImage: "images/mint-cream.png"
      }
    ]
  },
  {
    id: 30,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 59,
        nextImage: "images/mint-cream-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 60,
        nextImage: "images/mint-cream-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 14,
        nextImage: "images/mint-cream.png"
      }
    ]
  },
  {
    id: 31,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 61,
        nextImage: "images/blue-brown-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 62,
        nextImage: "images/blue-brown-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 15,
        nextImage: "images/blue-brown.png"
      }
    ]
  },
  {
    id: 32,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 63,
        nextImage: "images/blue-brown-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 64,
        nextImage: "images/blue-brown-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 15,
        nextImage: "images/blue-brown.png"
      }
    ]
  },
  {
    id: 33,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 65,
        nextImage: "images/blue-cream-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 66,
        nextImage: "images/blue-cream-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 16,
        nextImage: "images/blue-cream.png"
      }
    ]
  },
  {
    id: 34,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 67,
        nextImage: "images/blue-cream-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 68,
        nextImage: "images/blue-cream-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 16,
        nextImage: "images/blue-cream.png"
      }
    ]
  },
  {
    id: 35,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 69,
        nextImage: "images/pink-brown-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 70,
        nextImage: "images/pink-brown-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 17,
        nextImage: "images/pink-brown.png"
      }
    ]
  },
  {
    id: 36,
    text: 'Final Touches Test',
    options: [
      {
        text: 'Polka Dot',
        nextText: 71,
        nextImage: "images/pink-brown-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 72,
        nextImage: "images/pink-brown-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 17,
        nextImage: "images/pink-brown.png" 
      }
      
    ]
  },
  {
    id: 37,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 73,
        nextImage: "images/pink-cream-gold-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 74,
        nextImage: "images/pink-cream-gold-shine.png"
      },
      {
        text: 'Back',
        nextText: 18,
        nextImage: "images/pink-cream.png" 
      }
      
    
    ]
  },
  {
    id: 38,
    text: 'Final Touches',
    options: [
      {
        text: 'Polka Dot',
        nextText: 75,
        nextImage: "images/pink-cream-silver-dots.png"
      },
      {
        text: 'Sequin',
        nextText: 76,
        nextImage: "images/pink-cream-silver-shine.png"
      },
      {
        text: 'Back',
        nextText: 18,
        nextImage: "images/pink-cream.png" 
      }
    
    ]
  },
  {
    id: 39,
    text: 'Done',
    options: [
      {
        text: 'Start Over last one',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }

      
    
    ]
  },
  {
    id: 40,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 41,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 42,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 43,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 44,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      
      }
    
    ]
  },
  {
    id: 45,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 46,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 47,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 48,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 49,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 50,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 51,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 52,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 53,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 54,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 55,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 56,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 57,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 58,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 59,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 60,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 61,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 62,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 63,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 64,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 65,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 66,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 67,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 68,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 69,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 70,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 71,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 72,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 73,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 74,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 75,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  },
  {
    id: 76,
    text: 'Done',
    options: [
      {
        text: 'Start Over',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      },
      {
        text: 'Download PDF',
        nextText: -1,
        nextImage: "images/red-brown-gold.png"
      }
    
    ]
  }

  
  
  
  
]

startGame()