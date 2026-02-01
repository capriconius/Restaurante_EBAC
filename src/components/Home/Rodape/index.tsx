import twitter from '../../../assets/img/twitter.png'
import facebook from '../../../assets/img/facebook.png'
import instagram from '../../../assets/img/instagram.png'
import logo from '../../../assets/img/logo.png'
import { Container, ImgDiv } from './styles'

const Rodape = () => (
  <Container>
    <div>
      <img src={logo} alt="logo" />
    </div>
    <ImgDiv>
      <img src={twitter} alt="logo twitter" />
      <img src={facebook} alt="logo facebook" />
      <img src={instagram} alt="logo instagram" />
    </ImgDiv>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Rodape
