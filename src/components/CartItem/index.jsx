import { Container, Card } from "./styles";
import prato01 from '../../assets/prato.jpeg'
import { useState } from "react";
import { Minus, Plus } from "phosphor-react";

const Items = [
  {
    id: 1,
    name: 'Executivo de frango com crosta de gergelim',
    image: prato01,
    description: 'Feijão cozido (grão e caldo), brocolis refogado, filé de peito de frango grelhado, salada de repolho, uva, azeite de oliva extra virgem, semente de gergelim.'
  },
  {
    id: 2,
    name: 'Executivo de frango com crosta de gergelim',
    image: prato01,
    description: 'Feijão cozido (grão e caldo), brocolis refogado, filé de peito de frango grelhado, salada de repolho, uva, azeite de oliva extra virgem, semente de gergelim.'
  },
  {
    id: 3,
    name: 'Executivo de frango com crosta de gergelim',
    image: prato01,
    description: 'Feijão cozido (grão e caldo), brocolis refogado, filé de peito de frango grelhado, salada de repolho, uva, azeite de oliva extra virgem, semente de gergelim.'
  },
  {
    id: 4,
    name: 'Executivo de frango com crosta de gergelim',
    image: prato01,
    description: 'Feijão cozido (grão e caldo), brocolis refogado, filé de peito de frango grelhado, salada de repolho, uva, azeite de oliva extra virgem, semente de gergelim.'
  }
]

export function CartItem() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container>
      {
        Items.map((item) =>
          <Card key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="text">
              <div className="textAndCounter">
                <p className='title'>
                  {item.name}
                  <div className="counter">
                    <button onClick={decrementCount}>
                      <Minus size={13} />
                    </button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>
                      <Plus size={13} />
                    </button>
                  </div>
                </p>
              </div>
              <p className="description">{item.description}</p>
            </div>
          </Card>
        )
      }
    </Container>
  )
}
