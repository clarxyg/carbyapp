import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  button {
    background: #F7F8F8;
    border: none;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;

    font-size: 1.3rem;

    a, span {
      color: #000;
      display: flex;
      align-items: center;
    }
  }
`
