import { useState } from 'react';
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  // 배열의 요소를 랜덤하게 섞는 함수
  const shuffleArray = () => {
    const shuffledArray = [...nums]; // 현재 배열 복사
    let currentIndex = nums.length;

    // 배열의 요소를 랜덤하게 섞음
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // console.log(randomIndex);
      // console.log(currentIndex);

      const temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    // 새로운 배열로 상태를 업데이트
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
