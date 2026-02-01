import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border: none;
  background-color: ${cores.beige};
  color: ${cores.rosaSalmao};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  border: none;
  background-color: ${cores.rosaSalmao};
  color: ${cores.beige};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 6px;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
`
