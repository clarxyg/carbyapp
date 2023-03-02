import styled from "@emotion/styled";


export const Container = styled.div`
   width: 450px;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: 400px) {
    width: unset;

    video {
      width: 80%;
      height: 100%;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
   }
   video {
    cursor: pointer;
   }


   .containerButton {
    button {
    padding: 18px 129px;
    width: 315px;
    height: 60px;
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    border-radius: 99px;

    font-size: 1rem;

    margin-top: 2rem;
    margin-bottom: 1.5rem;
   }
   }

   @media (max-width: 400px) {

    .containerButton {
      button {
        width: 250px;
        padding: unset;
      }
    }
   }
`


export const Header = styled.div`
  width: 310px;
  margin-top: 3rem;


`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;


  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    h3, p {
      margin: 5px;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      color: #7B6F72;
      font-weight: 400;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 400px) {
    .text {
      width: 250px;
    }
  }
`
