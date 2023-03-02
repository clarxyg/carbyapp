import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  gap: 2rem;

  @media (max-width: 400px) {
    align-items: center;
  }

  img {
    width: 40px;
    padding-left: 5px;
  }

  div {
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
    margin-top: 1rem;
    display: flex;
    align-items: center;
    padding: 8px;
    width: 90%;

    @media (max-width: 400px) {
      width: 90%;
    }
    span {
      color: #1D1617;
      font-weight: 700;
      margin: 0;
      font-size: 1rem;
      margin-left: 10px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: none;
      box-shadow: none;
      margin: 0;

      .description {
        margin: 0;
        color: #A4A9AD;
        width: 100%;
        font-size: 0.8rem;
        font-weight: 400;
        margin-left: 0;
      }
    }
  }

  .descriptioncontainer {
    width: 100%;
    box-shadow: none;
    margin: 0;
    padding-top: 0;
    padding-right: 5px;

    svg {
      cursor: pointer;
    }
  }
`
