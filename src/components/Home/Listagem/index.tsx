import {
  Card,
  Titulo,
  Descricao,
  TagWrapper,
  TagsContainer,
  TitleDiv
} from './styles'

import Button from '../../button'
import estrela from '../../../assets/img/estrela.png'

type Props = {
  id: number
  title: string
  description: string
  notes: string
  infos: string[]
  image: string
}

const Listagem = ({ title, description, notes, image, infos }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <TagsContainer>
        {infos.map((info) => (
          <TagWrapper key={info}>{info}</TagWrapper>
        ))}
      </TagsContainer>
      <TitleDiv>
        <Titulo>{title}</Titulo>
        <div className="nota">
          <span>{notes}</span>
          <img src={estrela} alt="estrela" />
        </div>
      </TitleDiv>
      <Descricao>{description}</Descricao>
      <Button type="link" title="Ver detalhes" to="/Perfilprodut">
        Ver detalhes
      </Button>
    </Card>
  )
}

export default Listagem
