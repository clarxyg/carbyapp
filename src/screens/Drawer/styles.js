import styled from "@emotion/styled";


export const Container = styled.div`
  background-color:  #1D1617;
  height: 100vh;
  width: 450px;

  .containerButton {
    display: flex;
    gap: 0.5rem;
    padding: 20px;
    margin-top: 1rem;

    .row {
      display: flex;
      gap: 0.2rem;
      align-items: center;
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

  .containerForm {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1.5rem;
    margin-left: 20px;

    p {
      color: #f1f2f3;
      cursor: pointer;
    }
  }


  .containerSearchItems {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    gap: 0.7rem;
    margin-top: 20px;

    .title {
      font-weight: 500;
      font-size: 1rem;
      padding-bottom: 10px;
    }

    p {
      color: #f1f2f3;
      margin: 0;
      font-size: 0.9rem;
      display: flex;
      align-items: center;

      gap: 6px;
    }
  }
  .drawer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
  }

.titleAndHour {
    display: flex;
    flex-direction: column;

    h1, span {
      margin: 0;
    }

    h1 {
      margin-top: 20px;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 300;

    }

    span {
      font-size: 0.8rem;
      color: #92A3FD;
    }
  }

`


export const Button = styled.button`
background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
border: none;
box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.17);
border-radius: 99px;
color: #fff;
font-weight: 500;
padding: 5px 13px 5px 13px;
cursor: pointer;

display: flex;
align-items: center;
gap: 3.5px;
`

export const Divider = styled.div`
  width: 90%;
  margin-left: 20px;
  margin-top: 10px;
  height: 0px;
  border: 1px solid #C4BBBB;
`
