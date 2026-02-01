import { Background, Img, Title } from './styles'
import logo from '../../../assets/img/logo.png'

export const Hero = () => {
  return (
    <>
      <Background>
        <Img src={logo} alt="logo" />
        <Title>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Title>
      </Background>
    </>
  )
}
