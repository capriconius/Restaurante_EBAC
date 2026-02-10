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
    <Modal className="visivel" role="dialog" aria-modal="true">
      <div className="overlay" onClick={onClose}></div>
      <ModalContainer>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img src={closeIcon} alt="ícone de fechar" />
        </button>
        <ModalContent>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h3>{product.nome}</h3>
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
