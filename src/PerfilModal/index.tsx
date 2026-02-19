import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import close from '../assets/images/close.png'
import { Prato } from '../components/PerfilList'
import { formataPreco } from '../utils/formatters'
import { ModalContainer, Modal, BotaoModal, ModalContent } from './styles'
import { add, open } from '../store/reducers/cart'

type Props = {
  product: Prato | null
  isVisible: boolean
  onClose: () => void
}

const PerfiltModal = ({ product, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  const addItem = () => {
    if (product) {
      dispatch(add(product))
      onClose()

      toast.success('Item adicionao! Ver carrinho', {
        onClick: () => dispatch(open()),
        icon: <span>🛒</span>,
        position: 'bottom-right',
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true
      })
    }
  }

  if (!isVisible || !product) return null

  return (
    <Modal className="visivel">
      <div className="overlay" onClick={onClose}></div>
      <ModalContainer>
        <img onClick={onClose} src={close} alt="ícone de fechar" />
        <ModalContent>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h4>{product.nome}</h4>
            <p>{product.descricao}</p>
            <p>
              Serve de <span>{product.porcao}</span>
            </p>
            <BotaoModal onClick={addItem}>
              Adicionar ao carrinho - {formataPreco(product.preco)}
            </BotaoModal>
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default PerfiltModal
