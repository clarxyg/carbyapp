
import styled from "@emotion/styled";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react";

const Container = styled.div`
  width: 400px;
.form {
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    border-radius: 16px;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    z-index: 99999;

    .outlined {
      width: 100%;

      span {
        color: #DDDADA;
        margin-right: 10px;
        font-size: 1.5rem;
        font-weight: 300;
      }

      input::placeholder {
        font-size: 0.9rem;
      }
    }


    svg {
      cursor: pointer;
    }
  }
`

export function Search() {
  return (
    <Container>
      <FormControl variant="outlined" className="form">
        <OutlinedInput
          className="outlined"
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end"><span>|</span><SlidersHorizontal size={23} color="#92A3FD" /></InputAdornment>}
          startAdornment={<InputAdornment position="start"><MagnifyingGlass size={20} color="#ADA4A5" /></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder="Pesquisar"
        />
      </FormControl>
    </Container>
  )
}
