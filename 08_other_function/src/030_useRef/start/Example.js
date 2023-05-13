import { useState, useRef } from 'react';

const Case1 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type='text'
        value={value}
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  return (
    <>
      <h3>ユースケース2</h3>
      <video ref={videoRef} style={{ maxWidth: '100%' }}>
        <source src='./sample.mp4' />
      </video>
      <button
        onClick={() => {
          if (playing) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setPlaying(prev => !prev);
        }}
      >
        {playing ? 'stop' : 'play'}
      </button>
    </>
  );
};

const Case3 = () => {
  const createTimeStamp = () => new Date().getTime();
  const [timeStamp, setTimeStamp] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    setTimeStamp(createTimeStamp());
    console.log('state: ' + timeStamp);
  };

  const updateRef = () => {
    ref.current = createTimeStamp();
    console.log('ref: ' + ref.current);
  };
  return (
    <>
      <h3>ユースケース3</h3>
      <p>
        state: {timeStamp}
        <button onClick={updateState}>変更</button>
      </p>
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>変更</button>
      </p>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
