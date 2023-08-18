import React from 'react'
import { memo } from 'react';

const Child2 = () => {
    console.log('Child2');
  return (
    <>
      <h5>hey</h5>
    </>
  )
}

export default memo(Child2);