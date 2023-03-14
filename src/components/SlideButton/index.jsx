import { CardButton } from './styles'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function SlideButton({ toFirst, toSecond, textFirst, textSecond }) {
  const [value, setValue] = useState(false);

  return (
    <CardButton>
      <div className='card'>
        <Link to={toFirst} onClick={() => setValue(true)}>
          <button className={value ? 'enabled' : 'disabled'}>
            {textFirst}
          </button>
        </Link>
        <Link to={toSecond} onClick={() => setValue(false)}>
          <button className={!value ? 'enabled' : 'disabled'}>
             {textSecond}
          </button>
        </Link>
      </div>
    </CardButton>
  )
}
