import React from 'react';
import { memo } from 'react';

const Child1 = () => {
    console.log('Child1')
  return (
    <>
    <h5>Hello</h5>
    </>
  )
}
export default memo(Child1);
