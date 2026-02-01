import { BannerImg, SubTitulo, Titulo } from './styles'
import Banner from '../../../assets/img/Banner.png'

export const BannerPerfil = () => {
  return (
    <BannerImg style={{ backgroundImage: `url(${Banner})` }}>
      <div className="container">
        <Titulo>italiana</Titulo>
      </div>
      <div className="container">
        <SubTitulo>Bella Tavola Italiana</SubTitulo>
      </div>
    </BannerImg>
  )
}
