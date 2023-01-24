import styled from "@emotion/styled";
import { Input } from "@mui/material";
import { ArrowsDownUp } from "phosphor-react";


const Container = styled.div`
    background: #F7F8F8;
    border-radius: 14px;
    border: none;

    padding: 12px;
    width: 290px;
    display: flex;
    align-items: center;

    svg {
      padding-right: 10px;
    }
`

export function Height() {
  return (
    <Container>
      <Input startAdornment={<ArrowsDownUp size={32} color="#7B6F72" />} placeholder="Sua altura" />
    </Container>
  )
}
