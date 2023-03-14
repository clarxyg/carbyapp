import styled from "@emotion/styled";


export const CardButton = styled.div`
padding: 30px;
padding-top: 0;

@media (max-width: 400px) {
    padding: 55px;
    padding-bottom: 30px;
    padding-top: 0;
  }

.card {
  background: #F7F8F8;
  border-radius: 99px;
  padding: 12px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;


  button {
    border-radius: 50px;
    text-transform: none;
    font-size: 1.2rem;
    width: 175px;
    padding: 15px;
    border: none;
    font-weight: 400;
    cursor: pointer;


    @media (max-width: 400px) {
      width: 155px;
    }

  }

  .enabled {
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    color: #fff;
    animation: slider 1.4s;

    @keyframes slider {
      0% {
          opacity: 0.9;
      }
      100% {
          opacity: 1;
      }
    }
  }

  .disabled {
    background: transparent !important;
    color: #ADA4A5;
  }
}
`
