import styled from 'styled-components'
import fundo from '../../../assets/img/fundo.png'
import { cores } from '../../../styles'

export const Background = styled.div`
  background-image: url(${fundo});
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Img = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 64px;
  margin-bottom: 128px;
`

export const Title = styled.h1`
  color: ${cores.rosaSalmao};
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 40px;
  text-align: center;
`
