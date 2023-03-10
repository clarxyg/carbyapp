import { ShoppingCart } from 'phosphor-react'
import { CartItem } from '../../components/CartItem'
import { Container } from './styles'
import BottomTabs from '../../components/BottomTabs'
import { Link } from 'react-router-dom'

export function ShoppingList() {
  return (
    <Container>
      <div className='header'>
        <h1>
          <ShoppingCart size={20} />
          Lista de compras
        </h1>
        <Link to="/shoppingchecklist">
          Continuar
        </Link>
      </div>
      <div className='cart'>
        <CartItem />
      </div>
      <div className='loadingMore'>
        <span>Carregar mais</span>
      </div>
      <BottomTabs />
    </Container>
  )
}
