import { Hero } from '../../Home/Hero'
import Menu from '../../../models/menu'
import ListaProdut from '../../Home/ListaProdut'

import shuchi from '../../../assets/img/shuchi.png'
import espaguete from '../../../assets/img/espaguete.png'
import fruntos_do_mar from '../../../assets/img/frutos_do_mar.jpg'
import churrasco from '../../../assets/img/churrasco.jpg'
import sorvete from '../../../assets/img/sorvete.webp'
import vitamina from '../../../assets/img/Vitamina.webp'
import Rodape from '../../Home/Rodape'

const restaurante: Menu[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    notes: '4.9',
    image: shuchi
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    notes: '4.6',
    image: espaguete
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária do mar no conforto da sua casa! Camarões, mexilhões e polvo preparados com ervas frescas e ingredientes selecionados. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o sabor intenso dos oceanos sem sair do lar com nosso delivery!',
    title: 'Frutos do Mar',
    infos: ['Frutos do Mar', 'Italiana'],
    notes: '4.8',
    image: fruntos_do_mar
  },
  {
    id: 4,
    description:
      'Peça já o melhor do churrasco no conforto da sua casa! Carnes nobres grelhadas no fogo alto, com sabor defumado e textura suculenta. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a tradição da brasa sem sair do lar com nosso delivery!',
    title: 'Churrasco na Brasa',
    infos: ['Churrasco', 'Gaucho'],
    notes: '5.0',
    image: churrasco
  },
  {
    id: 5,
    description:
      'Peça já o melhor da sobremesa artesanal no conforto da sua casa! Sorvetes cremosos de baunilha com toque de hortelã e apresentação encantadora. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o prazer gelado sem sair do lar com nosso delivery!',
    title: 'Sorvete de Baunilha',
    infos: ['Françes', 'Baunilha'],
    notes: '5.0',
    image: sorvete
  },
  {
    id: 6,
    description:
      'Peça já o melhor da refrescância natural no conforto da sua casa! Smoothies cremosos de morango com hortelã fresca e sabor irresistível. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o frescor saudável sem sair do lar com nosso delivery!',
    title: 'Smoothie de Morango',
    infos: ['Prestigio', 'Morango'],
    notes: '5.0',
    image: vitamina
  }
]

const Home = () => (
  <>
    <Hero />
    <ListaProdut Menu={restaurante} />
    <Rodape />
  </>
)

export default Home
