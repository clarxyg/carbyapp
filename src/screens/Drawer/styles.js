import styled from "@emotion/styled";


export const Container = styled.div`
  height: 100vh;
  width: 450px;
  border-radius: 30px;
  animation: go-back 1.7s;

  @keyframes go-back {
    0% {
        transform: translateX(-500px);
    }
    100% {
        transform: translateX(-0);
    }
}

  .css-1f2xuhi-MuiDrawer-docked .MuiDrawer-paper{
      width: 450px !important;
    }

  .appBar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .drawer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;

    .css-12i7wg6-MuiPaper-root-MuiDrawer-paper {
      left: unset;
    }
  }

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
    margin-top: 1rem;;
    z-index: 99999;

    @media (max-width: 400px) {
      margin-left: 35px;
    }


    .row {
      display: flex;
      gap: 0.2rem;
      align-items: center;
      z-index: 99999;
    }
  }


  .containerForm {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
    margin-left: 20px;
    z-index: 99999;
    color: #fff;

    @media (max-width: 400px) {
      justify-content: center;
      margin-left: 0;
    }

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

    @media (max-width: 400px) {
      padding: 40px;
      margin-left: 0;

      .title {
        margin-left: 20px;
      }
    }

    .title {
      font-weight: 600;
      font-size: 1.1rem;
      padding-bottom: 5px;
      color: #1D1617;
      margin-top: 5px;
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
  width: 90%;
  margin-left: 20px;
  margin-top: 10px;
  height: 0px;
  z-index: 99999;
  border: 1px solid transparent;
  background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%) padding-box, linear-gradient(274.42deg, #C58BF2 0%, #9DCEFF 124.45%) border-box;

  @media (max-width: 400px) {
    width: 75%;
    margin-left: 55px;
  }
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
