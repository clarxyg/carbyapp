import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { Container } from './styles'


export const TodoList = () => {
  const [items, setItems] = useState([
    { name: 'Farinha', weight: '1kg', checked: false },
    { name: 'Açúcar', weight: '2kg', checked: false },
    { name: 'Leite', weight: '1L', checked: false },
    { name: 'Ovos', weight: '96g', checked: false }
  ]);

  function handleCheckboxChange(index) {
    const newitems = [...items];
    newitems[index].checked = !newitems[index].checked;
    setItems(newitems);
  }

  return (
    <Container>
      <ul>
        <h2>
          Açougue
        </h2>
        {items.map((item, index) => (
          <>
            <li key={index}>
              <label>
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: "#C58BF2"
                    }
                  }}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)} />
                <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                  {item.name}
                </span>
              </label>
              <span className='weight'>
                {item.weight}
              </span>
            </li>
          </>
        ))}
      </ul>
      <ul>
        <h2>
          Hortifruti
        </h2>
        {items.map((item, index) => (
          <>
            <li key={index}>
              <label>
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: "#C58BF2"
                    }
                  }}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)} />
                <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                  {item.name}
                </span>
              </label>
              <span className='weight'>
                {item.weight}
              </span>
            </li>
          </>
        ))}
      </ul>
    </Container>
  );
}

