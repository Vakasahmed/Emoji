import React from 'react';
import SingleEmoji from './SingleEmoji';

function EmojiContainer({list}) {
  return (
    <div className='container'>{list.map((singleEmoji, idx) => {
        console.log(singleEmoji);
        return (
            <SingleEmoji key={idx} singleEmoji={singleEmoji}/>
        )
      })}</div>
  )
}

export default EmojiContainer;