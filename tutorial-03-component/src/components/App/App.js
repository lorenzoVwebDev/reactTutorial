import React from 'react';
import './App.css';
import Instructions from '../Instructions/Instructions.js'

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: 'test grinning face'
  }, {
    emoji: '🎉',
    name: 'party popper'
  }, {
    emoji: '💃',
    name: 'woman dancing'
  }
]

function App() {
  const greeting = 'greeting';
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing jsx</p>}
      <Instructions/>
      <ul>
        {
          emojis.map(emoji=>{
            return <li key={emoji.name}>
              <button onclick={displayEmojiName}>
                <span role='img' aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
