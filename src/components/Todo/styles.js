import styled from "@emotion/styled";



export const Container = styled.div`

  @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  ul {
    list-style-type: none;
    padding-left: 20px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.17);
    display: flex;
    align-items: center;
    padding: 10px;

    @media (max-width: 400px) {
      width: 320px;
    }

    .weight {
      margin-right: 2rem;
    }
  }

  h2 {
    margin-left: 10px !important;
    font-size: 1.2rem;
    color: #1D1617;
    font-weight: 400;
    padding: 0;
    margin: 0;

    @media (max-width: 400px) {
      margin-left: 20px !important;
    }
  }
`
