import MenuPerfil from '../../../ModalPerfil/menuPerfil'
import PerfilCard from '../PerfilCard'
import { Container, List } from './styles'

export type Props = {
  MenuPerfil: MenuPerfil[]
}

const PerfilProduts = ({ MenuPerfil }: Props) => (
  <Container>
    <List>
      {MenuPerfil.map((MenuPerfil) => (
        <PerfilCard
          key={MenuPerfil.id}
          description={MenuPerfil.description}
          image={MenuPerfil.image}
          title={MenuPerfil.title}
          id={0}
        />
      ))}
    </List>
  </Container>
)

export default PerfilProduts
