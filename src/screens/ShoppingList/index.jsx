import { ShoppingCart } from 'phosphor-react'
import { CartItem } from '../../components/CartItem'
import { Container } from './styles'

export function ShoppingList() {
  return (
   <Container>
    <h1>
      <ShoppingCart size={20}/>
      Lista de compras
    </h1>
    <CartItem />
   </Container>
  )
}
