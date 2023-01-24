import styled from "@emotion/styled";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 2rem;


  @media (max-width: 400px) {
    width: 300px;

    .containerInputs {
      padding: 15px;
    }

    .completeTexts {
      padding: 15px;
    }

    .containerButton {
      button {
        width: 250px !important;
        padding: unset !important;
      }
    }
  }

  .containerInputs {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  .containerButton {
    display: flex;
    justify-content: center;
    button {
    padding: 18px 129px;
    width: 315px;
    height: 60px;
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    border-radius: 99px;

    font-size: 1rem;

    margin-top: 2rem;
   }
  }

  .containerMeasure {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .measure {
      background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%);
      border-radius: 14px;
      color: #fff;
      padding: 1rem;
    }
`
