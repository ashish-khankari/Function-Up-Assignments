import React, { useRef } from 'react';
import './File.css'
export default function File() {
  let chooseFile = useRef(null);

  function takeFile() {
    chooseFile.current.click();
  }

  return (
    <div>
      <input type="file" ref={chooseFile} style={{ display: 'none' } } />
      <button onClick={takeFile} className='btn'>Pick the File</button>
    </div>
  );
}

