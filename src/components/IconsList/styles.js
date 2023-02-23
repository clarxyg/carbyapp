import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-content: center;
  padding: 20px;


  span {
    color: #f1f2f3;
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
