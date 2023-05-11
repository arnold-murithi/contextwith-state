import React from 'react'
import { levelContext } from './LevelContext'
import { useContext } from 'react'

function Section({children,isFancy}) {
  const level = useContext(levelContext);
  return (
    <section className={'section ' + (isFancy ? 'fancy':'')}>
      <levelContext.Provider value={level+1}>
        {children}
      </levelContext.Provider>
    </section>
  )
}

export default Section