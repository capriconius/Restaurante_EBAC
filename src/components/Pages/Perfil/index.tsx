import { useParams } from 'react-router-dom'
import Banner from '../../Banner'
import PerfilHerder from '../../PerfilHerder'
import ProductList from '../../PerfilList'
import { useGetPratosQuery } from '../../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetPratosQuery(id || '')

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <PerfilHerder />
      <Banner
        capa={restaurante.capa}
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <ProductList pratos={restaurante.cardapio} />
    </>
  )
}

export default Perfil
