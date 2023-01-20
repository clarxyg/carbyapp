import styled from "@emotion/styled";


export const Container = styled.div`
   width: 450px;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: 400px) {
    width: unset;
   }
   video {
    cursor: pointer;
   }
`


export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
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
`
