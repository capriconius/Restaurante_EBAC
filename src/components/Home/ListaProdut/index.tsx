import { Container, List } from './styles'
import Menu from '../../../models/menu'
import Listagem from '../Listagem'

export type Props = {
  Menu: Menu[]
}

const ListaProdut = ({ Menu }: Props) => (
  <Container>
    <List>
      {Menu.map((Menu) => (
        <Listagem
          key={Menu.id}
          description={Menu.description}
          image={Menu.image}
          infos={Menu.infos}
          title={Menu.title}
          notes={Menu.notes}
          id={0}
        />
      ))}
    </List>
  </Container>
)

export default ListaProdut
