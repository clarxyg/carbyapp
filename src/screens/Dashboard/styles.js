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

    @media (max-width: 400px) {
      margin-right: 80px;
    }
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 25px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 450px;

  @media (max-width: 400px) {
    width: unset;
  }

  .containerCard {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background-blend-mode: difference;

    img {
      width: 360px;
      box-shadow: 0px 10px 22px 0px #95ADFE4D;
      border-radius: 30px;

      @media (max-width: 400px) {
        width: 100%;
      }
    }
  }


  .descriptionCard {
      position: absolute;
      display: flex;
      flex-direction: column;
      margin-right: 100px;
      opacity: 100%;
      filter: brightness(1.0);
      z-index: 999999;
      margin-top: 15px;

      @media (max-width: 400px) {
        margin-right: 70px;
      }

      p {
      color: #fff;
      font-weight: 500;
      font-size: 0.92rem;
      margin-bottom: 5px;
    }
    span {
      color: #fff;
      font-size: 0.7rem;
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
  width: 80%;
  height: 167px;
  position: absolute;
  z-index: 9999;
  border-radius: 30px;
  box-shadow: 0px 10px 22px 0px #95ADFE4D;
  opacity: 0.8;

  @media (max-width: 400px) {
    width: 95%;
    height: 147px;
  }
`

export const CardUpdateWeight = styled.div`
  background: #f0f8ff;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 20px;
  padding: 5px 25px 5px 25px;

  @media (max-width: 400px) {
    width: 80%;
  }

  p {
    color: #000;
    font-weight: 500;
    font-size: 0.75rem;
  }

  button {
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    width: 65px;
  }
`

export const ContainerChart = styled.div`
  width: 370px;

  @media (max-width: 400px) {
    width: 320px;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 20px;


  .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
`


export const ContainerCardStatus = styled.div`
  box-shadow: 0px 10px 40px 0px #1D161712;
  background: #fff;
  padding: 23px;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 15px;
  }

  display: flex;
  flex-direction: column;
  border-radius: 20px;

  p {
    font-size: 0.8rem;
    margin: 0;
  }

  span {
    color: #92A3FD;
  }
`

export const ContainerSplitAreaChart = styled.div`
   display: flex;
   flex-direction: column;


   .dropcontainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;

      p {
        font-weight: 500;
      }
   }
`
