import styled from "@emotion/styled";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Card = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.17);
    margin-top: 1rem;
    display: flex;
    align-items: center;
    padding-right: 5px !important;
    padding: 0;
    width: 370px;
    justify-content: space-around;
    gap: 1rem;

    @media (max-width: 400px) {
      width: 330px;
      margin-left: 30px;
    }

    .title {
      font-size: 0.75rem;
      word-break: break-word;
      font-weight: 500;
      width: 100%;
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 9px;
      width: 50%;
      margin-right: 10px;
    }

    button {
      cursor: pointer;
      background: #F7F8F8;
      border: none;
      border-radius: 8px;
      padding: 8px;
      display: flex;
      align-items: center;
    }

    img {
      width: 60px;
      object-fit: cover;
      height: 80px;
      border-radius: 16px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .text {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;


      p {
        margin: 0;
      }

      .description {
        font-size: 0.6rem;
        word-break: break-word;
      }
    }
`
