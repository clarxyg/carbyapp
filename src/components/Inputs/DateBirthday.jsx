import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';


const Container = styled.div`

    .date {
      background: #F7F8F8;
      border-radius: 14px;
      border: none;
      width: 100%;
    }

    label {
      color: #ADA4A5;
      font-weight: normal;
    }
`


export function DateBirthday() {
  const [value, setValue] = React.useState(null);

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          InputAdornmentProps={{
            position: 'start'
          }}
          className='date'
          value={value}

          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  );
}
