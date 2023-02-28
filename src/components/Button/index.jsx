import { Container } from "./styles";



export function Button({ children, disabled }) {
  return(
    <Container className={!!disabled ? 'disabled' : ''}>
      {children}
    </Container>
  )
}
