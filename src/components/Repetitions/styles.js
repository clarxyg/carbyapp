import styled from "@emotion/styled";


export const Container = styled.div`

  h3 {
    margin-left: 15px;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    margin-right: -35px;
  }

  .picker-container {
    margin-top: -2.5rem;
  }

.picker-container .picker-column .picker-item {
  white-space: normal;
}

@media (max-width: 400px) {
  .picker-container .picker-column .picker-item {
  text-overflow: unset;
  padding: 5px;
}
}

.picker-container .picker-column {
  flex: unset !important;
}

.picker-container .picker-inner {
   font-size: 0.9rem;
}
`
