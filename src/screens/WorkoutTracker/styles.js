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
