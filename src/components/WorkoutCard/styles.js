import styled from "@emotion/styled";


export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .see {
    color: #ADA4A5;
    font-size: 0.8rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;


  div {
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 10px 40px 0px #1D242A0D;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 80%;

    @media (max-width: 400px) {
      width: 90%;
    }
    span {
      color: #DDDADA;
      font-weight: 300;
      margin: 0;
      font-size: 0.8rem;
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
      }
    }

    .bar {
    height: 8px;
    padding: 5px;
    background: #F7F8F8;
    border-radius: 20px;
    position: relative;
    width: 220px;
    margin: 0;

    @media (max-width: 400px) {
      width: 180px;
    }

    .progress {
      background: linear-gradient(180deg, #C58BF2 -83.11%, #B4C0FE 60.6%);
      position: absolute;
      width: 100px;
      height: 18px;
      left: 0;
      bottom: 0;
      border-radius: 30px;
    }
}
  }

  .descriptioncontainer {
    width: 100%;
    box-shadow: none;
    margin: 0;

    svg {
      cursor: pointer;
    }
  }
`
