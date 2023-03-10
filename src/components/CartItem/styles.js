import styled from "@emotion/styled";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Card = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.17);
    margin-top: 1rem;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 370px;
    justify-content: space-around;
    gap: 1rem;

    .title {
      font-size: 0.8rem;
      word-break: break-word;
      font-weight: 500;
      display: flex;
      align-items: flex-start;

    }

    .textAndCounter {
      display: flex;

      span {
        font-size: 0.7rem;
      }
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    button {
      cursor: pointer;
      background: #F7F8F8;
      border: none;
      border-radius: 8px;
      padding: 5px;
      display: flex;
      align-items: center;
    }

    img {
      width: 60px;
      object-fit: cover;
      height: 80px;
      border-radius: 6px;
    }

    .text {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 4px;


      p {
        margin: 0;
      }

      .description {
        font-size: 0.6rem;
        word-break: break-word;
      }
    }
`
