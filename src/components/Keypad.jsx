import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { lettersData } from '../constants/db';

const Keypad = ({ usedKeys }) => {

  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(lettersData);
  }, []);

  return (
    <div className='keypad'>
      {letters && letters.map((l) => {
        const color = usedKeys[l.key];
        return (
          <div key={l.key} className={color}>
            {l.key}
          </div>
        )
      })}
    </div>
  )
}

export default Keypad