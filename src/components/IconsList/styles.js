import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 99999;

  align-content: center;
  padding: 20px;


  span {
    color: #333;
    text-align: center;
    font-size: 0.8rem;
  }

  .row {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    align-items: center;
    z-index: 99999;

    img {
     width: 45px !important;
     object-fit: cover;
     cursor: pointer;

     &:hover {
      transform: scale(1.1);
     }
    }
  }
`
