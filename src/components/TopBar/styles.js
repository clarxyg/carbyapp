import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 400px) {
    justify-content: center;
    gap: 12rem;
  }

  button, .menu {
    background: #F7F8F8;
    border: none;
    border-radius: 8px;
    padding: 2px 9px 2px 9px;
    cursor: pointer;
    min-width: unset !important;
    color: #000;

    font-size: 1.3rem;

    a, span {
      color: #000;
      display: flex;
      align-items: center;
    }
  }

`
