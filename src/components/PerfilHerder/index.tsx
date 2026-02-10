import { HeaderContainer } from './styles'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <a href="#">Restaurantes</a>
        </Link>
        <img src={Logo} alt="logo" />
        <span>produto(s) no carrinho</span>
      </div>
    </HeaderContainer>
  )
}

export default HeaderPerfil
