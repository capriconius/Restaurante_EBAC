import styled from 'styled-components'
import { cores } from '../../../styles'

export const BannerImg = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 340px;
  position: relative;
  display: block;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* overlay escuro */
    z-index: 0;
  }
`

export const Titulo = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  position: relative;
  margin-bottom: 230px;
  top: 30px;
  color: ${cores.branco};
`

export const SubTitulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  position: relative;
  color: ${cores.branco};
`
