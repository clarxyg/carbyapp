import { Container, Card } from "./styles";

const Items = [
  {
    name: 'Abóbora'
  },
  {
    name: 'Feijão'
  },
  {
    name: 'Banana'
  },
  {
    name: 'Frango'
  }
]

export function CartItem() {
  return (
    <Container>
      <Card>
        {
          Items.map((item) =>
            <p>{item.name}</p>
          )
        }
      </Card>
    </Container>
  )
}
