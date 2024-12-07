import React from 'react'

const Row = ({ guess, currentGuess, col }) => {
  
  const generateAnimationDelay = () => {
    return Array(col).fill("").map((_, index) => ({
      animationDelay: `${index * 0.2}s`
    }));
  }

  const styles = generateAnimationDelay();

  if(guess){
    return (
      <div className='row past'>
        {guess.map((letter, index) => (
          <div key={index} className={letter.color} style={styles[index]}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if(currentGuess){
    const letters = currentGuess.split('');
    return (
      <div className='row current'>
        {
          letters.map((letter, index) => (
            <div key={index} className='fill'>{letter}</div>
          ))
        }
        {[...Array(col - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
      {[...Array(col)].map((_, i) => (
        <div key={i}></div>
      ))}
    </div>
  )
}

export default Row