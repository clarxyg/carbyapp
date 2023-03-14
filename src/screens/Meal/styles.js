import styled from "@emotion/styled";


export const Container = styled.div`
  width: 450px;
  display: flex;

  height: 1000px;
  flex-direction: column;

  .imageContainer {
    img {
      width: 100%;
      margin-top: -27px;
    }

    @media (max-width: 400px) {
      button {
       bottom: 580px;
      }
    }
  }
`

export const ContainerCard = styled.div`
   background-color: #fff;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   margin-top: -25px;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    padding-top: 0;
    align-items: center;

    @media (max-width: 400px) {
      padding: 55px;
      padding-bottom: 30px;
      padding-top: 0;
    }

    .column {
      display: flex;
      flex-direction: column;


      .by {
        color: #7B6F72;
      }

      .name {
        color: #92A3FD;
      }

      h3 {
        margin-bottom: 5px;
      }

      span {
        display: flex;
        align-items: center;
        gap: 5px;

        margin: 0;
        font-weight: 300;
        font-size: 0.8rem;
      }

      .row {
        display: flex;
        gap: 1rem;
      }
    }

  }

  .description {
    display: flex;
    flex-direction: column;
    padding: 30px;
    padding-top: 0;

    @media (max-width: 400px) {
      padding: 55px;
      padding-bottom: 30px;
      padding-top: 0;
    }

    h3 {
      margin-bottom: 5px;
    }

    p {
      margin-top: 0;
      font-weight: 300;
    }

    span {
      color: #92A3FD;
    }
  }
`

export const Workout = styled.div`
  padding: 30px;
  padding-top: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
      padding: 55px;
      padding-bottom: 30px;
      padding-top: 0;
    }

  .card {
    border-radius: 20px;

    p {
      color: #000;
      position: absolute;
      margin-left: 30px;
      margin-top: 25px;
    }

    .description {
      position: absolute;
      margin-top: 55px;
      margin-left: -1px;

      font-weight: 400;
      font-size: 0.9rem;
      line-height: 18px;

      color: #7B6F72;
    }

    button {
      margin-top: 100px;
      margin-left: 28px;
      background-color: #FFFFFF;
      border-radius: 50px;
      color: #92A3FD;
      position: absolute;
      z-index: 99999;
      font-size: 0.8rem;
      padding: 10px;
    }
  }

  img {
    z-index: 9999;
    margin-top: 25px;
    margin-right: 30px;
    width: 120px;
  }
`
export const Filter = styled.div`
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    width: 390px;
    height: 167px;
    position: absolute;
    z-index: 9999;
    border-radius: 30px;
    box-shadow: 0px 10px 22px 0px #95ADFE4D;
    opacity: 0.2;


    @media (max-width: 400px) {
      width: 340px;
    }

`
