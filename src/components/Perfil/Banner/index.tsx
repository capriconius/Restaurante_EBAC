import { BannerImg, SubTitulo, Titulo } from './styles'
import Banner from '../../../assets/img/Banner.png'

export const BannerPerfil = () => {
  return (
    <BannerImg style={{ backgroundImage: `url(${Banner})` }}>
      <div className="containerOne">
        <Titulo>italiana</Titulo>
      </div>
      <div className="containerOne">
        <SubTitulo>Bella Tavola Italiana</SubTitulo>
      </div>
    </BannerImg>
  )
}
