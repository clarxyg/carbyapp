import styled from "@emotion/styled";

export const Container = styled.div`
  background: #fff;
  /* border-radius: 40px; */
  box-shadow: 0px 10px 40px 0px #1D161712;
  width: 450px;
  padding-top: 16px;
  /* border-top-left-radius: 0;
  border-top-right-radius: 0; */
  position: fixed;
  bottom: 0;

  @media (max-width: 400px) {
    width: 100%;
  }
`

export const SearchContainer = styled.div`
  background-image: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0px 10px 22px 0px #95ADFE4D;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: -35px;
`
