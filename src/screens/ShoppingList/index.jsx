import { ShoppingCart } from 'phosphor-react'
import { CartItem } from '../../components/CartItem'
import { Container } from './styles'
import BottomTabs from '../../components/BottomTabs'
import { Link } from 'react-router-dom'
import { SlideButton } from '../../components/SlideButton'

export function ShoppingList() {
  return (
    <Container>
      <div className='header'>
        <h1>
          <ShoppingCart size={20} />
          Lista de compras
        </h1>
      </div>
      <SlideButton textFirst="Cardápio" textSecond="Ingredientes" toSecond="/shoppingchecklist"/>
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
