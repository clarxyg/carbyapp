import styled from "@emotion/styled";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .connector {
   background-color: #EEA4CE;
   margin: 0;
  }

  .description {
    font-size: 0.85rem;
    line-height: 18px;
    color: #7B6F72;
    width: 230px;
  }

  .title {
    font-size: 0.96rem;
    line-height: 21px;
    color: #1D1617;
    margin-top: -5px;
  }

  .timeline {
    margin-left: -75px;
    width: 100%;
  }

  @media (max-width: 400px) {

    .timeline {
      margin-left: -50px;
    }

    .description {
      width: 150px;
    }
  }

  .step {
    color: #EEA4CE;
    margin-top: -5px;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 0.9rem;
    color: #ADA4A5;
  }

  h3 {
    font-size: 1rem;
  }
`
