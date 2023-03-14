import { CheckSquare } from "phosphor-react";
import { TodoList } from "../../components/Todo";
import { Container } from "./styles";
import BottomTabs from '../../components/BottomTabs'
import { Link } from "react-router-dom";
import { SlideButton } from "../../components/SlideButton";



export function ShoppingChecklist() {
  return (
    <Container>
      <div className="header">
        <h1>
          <CheckSquare size={22} />
          Checklist
        </h1>
      </div>
      <SlideButton textFirst="Cardápio" textSecond="Ingredientes" toFirst="/shoppinglist"/>
      <TodoList />
      <BottomTabs />
    </Container>
  )
}
