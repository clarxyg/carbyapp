
import styled from "@emotion/styled";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";

const Container = styled.div`
.form {
    box-shadow: 0px 10px 40px 0px #1D161712;
    border-radius: 15px;
    background-color: #f1f2f3;;
    width: 200px;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    z-index: 99999;

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
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end"><MagnifyingGlass size={22} /></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight'
          }}
        />
      </FormControl>
    </Container>
  )
}
