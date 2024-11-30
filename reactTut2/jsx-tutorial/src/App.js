import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojIs = [{
  emoji: '😀',
  name: 'grinning face'
}, {
  emoji: '🎉',
  name: 'party popper'
}, {
  emoji: '💃',
  name: 'woman dancing'
}];

function App() {
  const greeting = 'greeting';
  const displayAction = true;
  return(
    <div className='container'>
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {
          emojIs.map((emoji) => {
            return <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role='img' aria-label={emoji.name} id={emoji.name}>
                  {emoji.emoji}
                </span>
              </button>
            </li>
          })
        }
      </ul>
    </div>
    )
  ;
}

export default App;
/* <></>

<li>
<button onClick={ displayEmojiName}>
  <span role='img' aria-label='grinning face' id='grinning face'>😀</span>
</button>
</li>
<li>
<button onClick={displayEmojiName}>
  <span role='img' aria-label='party popper' id='party popper'>🎉</span>
</button>
</li>
<li>
<button onClick={displayEmojiName}>
  <span role='img' aria-label='woman dancing' id='woman dancing'>💃</span>
</button>
</li> */