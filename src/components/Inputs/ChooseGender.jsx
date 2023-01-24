import styled from "@emotion/styled";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CaretDown, Users } from "phosphor-react";
import { useState } from "react";


const Container = styled.div`

  .select {
    background: #F7F8F8;
    border-radius: 14px;
    border: none;
    padding-right: 10px;
  }

  label {
      color: #ADA4A5;
      font-weight: normal;
    }

    .start {
      padding-right: 10px;
    }
`


export function ChooseGender() {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
  }

  return (
    <Container>
      <FormControl fullWidth>
        <Select
          startAdornment={<Users size={32} className="start"/>}
          className="select"
          value={selected}
          placeholder="Gênero"
          onChange={handleChange}
          IconComponent={() => <CaretDown size={32} color="#ADA4A5"/>}
        >
          <MenuItem value={10}>Feminino</MenuItem>
          <MenuItem value={20}>Masculino</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}
