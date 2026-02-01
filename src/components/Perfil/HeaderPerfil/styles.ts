import styled from 'styled-components'
import fundo from '../../../assets/img/fundo.png'
import { cores } from '../../../styles'

export const BackgroundPerfil = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ContainerPerfil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 186px;
  width: 100%;
  margin: 0 auto;
`

export const PerfilLink = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: ${cores.rosaSalmao};
    font-size: 21px;
    font-weight: bold;
  }
`

export const BotaoCarrinho = styled.button`
  background: none;
  border: none;
  color: ${cores.rosaSalmao};
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
`
