import React, {useState,useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function SingleEmoji({singleEmoji}) {
  const [isCopied, setCopy] = useState(false);

  useEffect(()=>{
    if(isCopied){
      setTimeout(()=>{
        setCopy(false);
      }, 1500);
    }
  }, [isCopied]);
  return (
    <CopyToClipboard text={singleEmoji.emoji} onCopy={_ => setCopy(true)}>
      <div className={`item ${isCopied ? 'copied' : "" }`}>
        <p className="emoji">{isCopied ? '✅' : singleEmoji.emoji}</p>
        <p>{singleEmoji.description}</p>
      </div>
    </CopyToClipboard>
  )
}

export default SingleEmoji;