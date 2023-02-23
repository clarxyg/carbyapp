import styled from "@emotion/styled"

export const Container = styled.div`
    width: 450px;
    min-height: 700px;

   .containerButton {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: 1rem;

    .row {
      display: flex;
      gap: 0.2rem;
      align-items: center;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 200px 200px;
    place-items: center;
    place-content: center;
    gap: 1rem;

    a {
      color: #000;
    }
  }

`

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;

  svg {
    cursor: pointer;
  }

  .titleAndHour {
    display: flex;
    flex-direction: column;

    h1, span {
      margin: 0;
    }

    h1 {
      margin-top: 20px;
    }

    span {
      font-size: 0.8rem;
      color: #92A3FD;
    }
  }

  .drawer {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      display: flex;
      align-items: center;
      color: #000;
    }

    h1 {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  .form {
    box-shadow: 0px 10px 40px 0px #1D161712;
    border-radius: 15px;
    background-color: #f1f2f3;
    width: 200px;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }
`

export const Button = styled.button`
background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
border: none;
box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
border-radius: 99px;
color: #fff;
font-weight: 500;
padding: 5px 13px 5px 13px;
cursor: pointer;

display: flex;
align-items: center;
gap: 3.5px;
`


export const Card = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 10px 40px 0px #1D161712;
    border-radius: 9px;
    width: fit-content;
    cursor: pointer;
  .imageCard {
    background: #9DCEFF;
    border-radius: 9px 9px 0px 0px;
    width: fit-content;
    padding: 22px;
    img {
      width: 150px;
    }

  }

  &:hover {
    filter: brightness(1.04);
  }
  .description {
     padding: 10px;

      h1 {
        font-size: 0.95rem;
        font-weight: 500;
        margin: 0;
      }

      p {
        font-size: 0.75rem;
        color: #7E707D;
        margin: 0;
      }
  }
`
