import logo from '../../../assets/img/logo.png'
import {
  BackgroundPerfil,
  BotaoCarrinho,
  ContainerPerfil,
  PerfilLink
} from './styles'

export const HeaderPerfil = () => {
  return (
    <BackgroundPerfil>
      <div className="container">
        <ContainerPerfil>
          <nav>
            <PerfilLink>
              <a href="/">Restaurantes</a>
            </PerfilLink>
          </nav>
          <img src={logo} alt="logo efood" />
          <BotaoCarrinho>0 produto(s) no carrinho</BotaoCarrinho>
        </ContainerPerfil>
      </div>
    </BackgroundPerfil>
  )
}
