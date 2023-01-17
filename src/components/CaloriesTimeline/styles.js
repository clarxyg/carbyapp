import styled from "@emotion/styled";


export const Container = styled.div`

`

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 10px 40px rgba(29, 36, 42, 0.05);
  border-radius: 20px;
  height: fit-content;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  height: 360px;


  .bar {
    height: 340px;
    padding: 5px;
    background: #F7F8F8;
    border-radius: 30px;
    position: relative;
    width: 15px;

    .progress {
      background: linear-gradient(180deg, #C58BF2 -83.11%, #B4C0FE 60.6%);
      position: absolute;
      width: 25px;
      height: 200px;
      left: 0;
      bottom: 0;
      border-radius: 30px;
    }
}

.description {

  .title {
    font-size: 0.8rem;
    margin: 0;
    color: #000;
  }

  p {
    font-weight: 400;
    font-size: 0.8rem;
    color: #7B6F72;
  }
  span {
    color: #93A7FE;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px !important;
    margin-left: -50px;
    height: 250px !important;

    .separator {
      display: flex;
    }

    .outhers {
      margin-left: -27px;
    }

    .outhers2 {
      margin-left: -20px;
    }


  }

  .connector {
   background-color: #EEA4CE;
   margin: 0;
  }

  .content {
    color: #ADA4A5;
    font-weight: 400;
    font-size: 0.8rem;
    width: 100%;
    margin-top: -10px;
  }

  .quantity {
    color: #C58BF2;
    font-weight: 400;
    font-size: 0.8rem;
  }

  .dot {
    margin: 0;
  }
}

`
