import closeIcon from '../assets/images/close.png'
import { Prato } from '../components/PerfilList'
import { formataPreco } from '../utils/formatters'
import { ModalContainer, Modal, BotaoModal, ModalContent } from './styles'

type Props = {
  product: Prato | null
  isVisible: boolean
  onClose: () => void
}

const ProductModal = ({ product, isVisible, onClose }: Props) => {
  const handleConfirm = () => {
    onClose()
  }

  if (!isVisible || !product) return null

  return (
    <Modal className="visivel">
      <div className="overlay" onClick={onClose}></div>
      <ModalContainer>
        <img onClick={onClose} src={closeIcon} alt="ícone de fechar" />
        <ModalContent>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h4>{product.nome}</h4>
            <p>{product.descricao}</p>
            <p>
              Serve de <span>{product.porcao}</span>
            </p>
            <BotaoModal onClick={handleConfirm}>
              Confirmar - {formataPreco(product.preco)}
            </BotaoModal>
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default ProductModal
