import styled from "@emotion/styled";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 99999;

  align-content: center;
  padding: 20px;


  @media (max-width: 400px) {
      align-items: center;

      span {
        font-size: 0.5rem !important;
      }
    }

  span {
    color: #333;
    text-align: center;
    font-size: 0.6rem;
    padding-bottom: 5px;
  }

  .row {
    display: flex;
    gap: 1rem;
    width: 100%;

    @media (max-width: 400px) {
      width: unset;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    align-items: center;
    background: #f0f8ff;
    border-radius: 16px;

    &:hover {
      transform: scale(1.1);
     }

    img {
     width: 45px !important;
     object-fit: cover;
     cursor: pointer;
     padding: 5px;

    }
  }
  .column.variant {
    background: #fff0f9 !important;
  }
`
