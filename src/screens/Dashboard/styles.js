import styled from "@emotion/styled";

export const Header = styled.header`
  justify-content: space-around;
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 100%;

  div {
    h1 {
      margin: 0;
      padding-bottom: 5px !important;
      font-size: 1rem;
    }
    span {
      color: #ADA4A5;
      font-weight: 400;
      font-size: 0.6rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .containerCard {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background-blend-mode: difference;

    img {
      width: 80%;
      box-shadow: 0px 10px 22px 0px #95ADFE4D;
      border-radius: 30px;
    }
  }


  .descriptionCard {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 200px;
      opacity: 100%;
      filter: brightness(1.0);
      z-index: 999999;
      margin-top: 15px;

      p {
      color: #fff;
      font-weight: 500;
      font-size: 0.8rem;
      margin-bottom: 5px;
    }
    span {
      color: #fff;
      font-size: 0.65rem;
    }

    button {
      margin-top: 10px;
      margin-bottom: 15px;
      background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%);
    }
    }
`

export const Button = styled.button`
  background: #F7F8F8;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
`

export const Filter = styled.div`
  background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
  width: 252px;
  height: 117px;
  position: absolute;
  z-index: 9999;
  border-radius: 25px;
  box-shadow: 0px 10px 22px 0px #95ADFE4D;
  opacity: 0.8;
`

export const CardUpdateWeight = styled.div`
  background: #f0f8ff;
  border-radius: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  p {
    color: #000;
    font-weight: 500;
    font-size: 0.8rem;
  }

  button {
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
  }
`

export const ContainerChart = styled.div`
  width: 250px;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
