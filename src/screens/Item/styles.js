import styled from "@emotion/styled";


export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  .imageContainer {

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      max-height: 370px;
      object-fit: cover;
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
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .column {
      display: flex;
      flex-direction: column;

      h1 {
        margin-bottom: 9px;
      }

      span {
        display: flex;
        align-items: center;
        gap: 7px;

        color: #ADA4A5;
        font-weight: 300;
      }

      .row {
        display: flex;
        gap: 1rem;
      }
    }

  }
`

export const MenuList = styled.div`
  padding: 30px;
  padding-top: 0px;

  @media (max-width: 400px) {
      padding: 55px;
      padding-top: 0px;
      padding-bottom: 30px;
    }

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

   @media (max-width: 400px) {
      padding: 50px;
      padding-top: 0;
      padding-bottom: 30px;
    }

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

      @media (max-width: 400px) {
      padding: 10px;
      padding-top: 0px;
    }

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
  gap: 1.5rem;


  .seeMore {
    text-align: center;
    font-size: 0.9rem;
    color: #68696A;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 0;
  }

  .like {
    display: flex;
    gap: 5px;
    font-size: 0.8rem;
    margin-top: 40px;
    float: right;

    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 400px) {
     padding: 55px;
     padding-top: 0px;
     padding-bottom: 30px;
    }

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
  background-color: #fff;
  box-shadow: 0px 10px 40px 0px #1D242A0D;
  padding: 15px;
  border-radius: 16px;

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
