import { cores } from '../../../styles'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${cores.beigeClaro};
  position: relative;
  border: 1px solid ${cores.rosaSalmao};
  padding: 8px;

  .nota {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 32px;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagWrapper = styled.span`
  background-color: ${cores.rosaSalmao};
  color: ${cores.beige};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 8px;
  white-space: nowrap;
`

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 16px;
`
