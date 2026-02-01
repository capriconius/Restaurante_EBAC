import ButtonPerfil from '../../button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
}

const PerfilCard = ({ title, description, image }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <ButtonPerfil type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </ButtonPerfil>
    </Card>
  )
}

export default PerfilCard
