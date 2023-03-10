import { CheckSquare } from "phosphor-react";
import { Container } from "./styles";



export function ShoppingChecklist() {
  return (
    <Container>
      <h1>
        <CheckSquare size={22} />
        Checklist
      </h1>
    </Container>
  )
}
