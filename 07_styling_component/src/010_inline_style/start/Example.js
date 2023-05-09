import { useState } from 'react';

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected(prev => !prev);

  const btn = {
    width: 120,
    height: 60,
    fontWeight: 'bold',
    display: 'block',
    borderRadius: 30,
    border: 'none',
    cursor: 'pointer',
    margin: 'auto',
    background: isSelected ? 'pink' : '',
    // インラインスタイルの注意点
    // ::before, ::after, :hover, :active
    // @media (min-width: 600px) {}
    // 使用不可
  };
  return (
    <>
      {/* パポマンスが良くない */}
      <button onClick={clickHandler} style={btn}>
        ボタン
      </button>
      {/* コードの再利用性が悪くなる */}
      <button style={btn}>ボタン2</button>
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};
export default Example;
