import styled from "@emotion/styled";


export const Container = styled.div`
  width: 450px;
  display: flex;

  height: 1000px;
  flex-direction: column;

  .imageContainer {
    background: #9DCEFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`

export const ContainerCard = styled.div`
   background-color: #fff;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   margin-top: -30px;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    padding-top: 0;
    align-items: center;

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

export const MenuList = styled.div`
  padding: 30px;
  padding-top: 0px;

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li {
    font-size: 0.9rem;
  }

  span {
    color: #ADA4A5;
    font-weight: 300;
    font-size: 0.75rem
  }
`

export const CardGraphics = styled.div`
   padding: 30px;
   padding-top: 0;

   .chartContainer {
     border: 2px solid #DDDADA;
     border-radius: 15px;

     p {
      margin-left: 30px;
     }

     .charts {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 20px;
      padding-top: 0;

      .chart {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;

        p {
          font-size: 0.75rem;
          margin: 0;
        }
      }

     }
   }

`

export const Comments = styled.div`
  padding: 30px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

 h3 {
  display: flex;
  align-items: center;
  gap: 5px;
 }

 .comment {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 350px;

  p {
    font-size: 0.8rem;

    span {
      font-size: 0.73rem;
      color: #68696A;
      font-weight: 300;
    }
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }
 }

 .avatarContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #92A3FD;
  font-weight: 500;

  font-size: 0.6rem;
 }

 .containerForm {
    display: flex;
    align-items: end;
    gap: 8px;

   .form {
      box-shadow: 0px 10px 40px 0px #1D161712;
      border-radius: 15px;
      background-color: #f1f2f3;;
      width: 280px;
      height: 3.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      z-index: 99999;
      margin-top: 1.1rem;

      svg {
        cursor: pointer;
      }
    }

    button {
      background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
      border-radius: 20px;
      border: none;
      color: #f1f2f3;
      font-size: 0.85rem;
      font-weight: 500;

      padding: 10px;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
 }

`

export const CardButton = styled.div`
  padding: 30px;
  padding-top: 0;

  .card {
    background: #F7F8F8;
    border-radius: 99px;
    padding: 12px;

    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;


    button {
      border-radius: 50px;
      text-transform: none;
      font-size: 1.2rem;
      width: 175px;
      padding: 15px;
      border: none;
      font-weight: 400;
      cursor: pointer;
    }

    .enabled {
      background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
      color: #fff;
    }

    .disabled {
      background: transparent !important;
      color: #ADA4A5;
    }
  }
`

export const Workout = styled.div`
  padding: 30px;
  padding-top: 0;
  display: flex;
  justify-content: space-between;

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


`
