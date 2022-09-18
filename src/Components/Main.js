import React, { useEffect, useState } from "react";
import emojiList from "../emojiList";
import EmojiContainer from "./EmojiContainer";
function Main() {
  const [list, setList] = useState(emojiList);
  // console.log(emojiList)
  const [keyword, setKeyword] = useState("");
  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setKeyword(value);
  };
  useEffect(() => {
    const filterList = emojiList.filter((singleEmoji) => {
      if (singleEmoji.description.startsWith(keyword)) {
        return true;
      }
      if (singleEmoji.category.startsWith(keyword)) {
        return true;
      }
      // 9th august some
      if (singleEmoji.aliases.some((e) => e.startsWith(keyword))) {
        return true;
      }
      return false;
    });
    setList(filterList);
  }, [keyword]);
  return (
    <main>
      <div className="search">
      <input type="text" placeholder="Filter 🔎" onKeyUp={typed} />
      {keyword === "" ? false : ( <h3>Result for - {keyword} </h3> )}
      </div>
      <hr />
      {list.length === 0 ? (
        <p>No Emoji Found</p>
      ) : (
        <EmojiContainer list={list}/>
      )}
    </main>
  );
}
export default Main;
