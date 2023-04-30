import './Child.css';
// import React from 'react';

const Child = () => {
  return (
    // <React.Fragment　key=''>
    <>
      <div className='component'>
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        distinctio repellendus animi eaque deleniti quos tempore aliquid quasi
        libero! Esse perferendis adipisci hic delectus! Quos optio repudiandae
        pariatur minus cum.
      </p>
    </>
    // </React.Fragment>
  );
};

export default Child;
