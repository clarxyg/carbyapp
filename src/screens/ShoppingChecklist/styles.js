import styled from "@emotion/styled";



export const Container = styled.div`
  width: 450px;
  height: 100vh;

  h1 {
    font-size: 1.2rem;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 0;
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

  }
`
