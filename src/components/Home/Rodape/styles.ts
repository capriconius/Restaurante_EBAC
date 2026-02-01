import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.footer`
  background-color: ${cores.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 298px;
  padding-top: 40px;

  p {
    font-weight: 400;
    font-size: 10px;
    margin-top: 80px;
    display: flex;
    text-align: center;
    margin-bottom: 40px;
  }
`

export const ImgDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`
