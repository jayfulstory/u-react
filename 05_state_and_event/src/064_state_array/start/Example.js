import { useState } from 'react';
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  // 配列の要素をランダムに混ぜる関数
  const shuffleArray = () => {
    const shuffledArray = [...nums]; // 現在の配列をコピー
    let currentIndex = nums.length;

    // 配列の要素をランダムに混ぜる
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      //
      console.log(`current ${currentIndex}`);
      console.log(`random ${randomIndex}`);
      //
      const temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    // 新しい配列をにアップデート
    setNums(shuffledArray);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffleArray}>suffle</button>
    </>
  );
};

export default Example;
