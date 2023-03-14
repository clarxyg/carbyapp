import styled from "@emotion/styled";


export const Container = styled.div`
  width: 450px;
  height: 100vh;

  .cart {
    margin-left: 30px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    @media (max-width: 400px) {
      margin-left: 40px;
    }

    a {
      color: #000;
    }

    h1 {
      font-size: 1.2rem;
      padding-bottom: 0;
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 0;
  }
  }

  .loadingMore {
    text-align: center;
    margin-top: 2rem;
    cursor: pointer;
  }


  h2 {
    margin-left: 10px !important;
    font-size: 1.2rem;
    color: #1D1617;
    font-weight: 400;
    padding: 0;
    margin: 0;

    @media (max-width: 400px) {
      margin-left: 40px !important;
    }
  }
`
