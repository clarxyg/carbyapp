import styled from "@emotion/styled";


export const Container = styled.div`
  height: 100vh;
  width: 450px;
  border-radius: 30px;

  /* .elipse {
    clip-path: circle(50% at 50% 50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    float: right;
    margin-right: 20px;
  } */

  .containerButton {
    display: flex;
    gap: 0.2rem;
    padding: 20px;
    padding-top: 5px;
    z-index: 99999;


    .row {
      display: flex;
      gap: 0.2rem;
      align-items: center;
      z-index: 99999;
    }
  }


  .form {
    box-shadow: 0px 10px 40px 0px #1D161712;
    border-radius: 15px;
    background-color: #f1f2f3;;
    width: 200px;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    z-index: 99999;

    svg {
      cursor: pointer;
    }
  }

  .containerForm {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1.5rem;
    margin-left: 20px;
    z-index: 99999;
    color: #fff;

    p {
      color: #333;
      cursor: pointer;
      z-index: 99999;
    }
  }


  .containerSearchItems {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    gap: 0.7rem;
    margin-top: 20px;
    z-index: 99999;

    .title {
      font-weight: 500;
      font-size: 1rem;
      padding-bottom: 10px;
    }

    p {
      color: #333;
      margin: 0;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      z-index: 99999;

      gap: 6px;
    }
  }
  .drawer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    z-index: 99999;

    a {
      z-index: 99999;
    }
  }

.titleAndHour {
    display: flex;
    flex-direction: column;

    h1, span {
      margin: 0;
      z-index: 99999;
    }

    h1 {
      margin-top: -10px;
      color: #000;
      z-index: 99999;
      font-size: 1.2rem;
      font-weight: 300;

    }

    span {
      font-size: 0.8rem;
      color: #92A3FD;
      z-index: 99999;
    }
  }

`


export const Button = styled.button`
background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
border: none;
box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.17);
border-radius: 99px;
color: #f1f2f3;
font-weight: 500;
padding: 5px 13px 5px 13px;
cursor: pointer;
z-index: 99999;

display: flex;
align-items: center;
gap: 3.5px;
`

export const Divider = styled.div`
  width: 28%;
  margin-left: 20px;
  margin-top: 10px;
  height: 0px;
  z-index: 99999;
  position: absolute;
  border: 1px solid transparent;
  background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%) padding-box, linear-gradient(274.42deg, #C58BF2 0%, #9DCEFF 124.45%) border-box;
`

export const Filter = styled.div`
  background: #ffff;
  width: 450px;
  height: 100vh;
  position: absolute;

  border-radius: 40px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;


  @media (max-width: 400px) {
    width: 95%;
    height: 147px;
  }
`
