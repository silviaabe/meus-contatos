import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  letra: string
  criterio:
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z'
    | 'todas'
}

const FiltroCard = ({ letra, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    return mesmoCriterio
  }

  const contarContatos = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'A')
      return contatos.itens.filter((item) => item.titulo.startsWith('A')).length
    if (criterio === 'B')
      return contatos.itens.filter((item) => item.titulo.startsWith('B')).length
    if (criterio === 'C')
      return contatos.itens.filter((item) => item.titulo.startsWith('C')).length
    if (criterio === 'D')
      return contatos.itens.filter((item) => item.titulo.startsWith('D')).length
    if (criterio === 'E')
      return contatos.itens.filter((item) => item.titulo.startsWith('E')).length
    if (criterio === 'F')
      return contatos.itens.filter((item) => item.titulo.startsWith('F')).length
    if (criterio === 'G')
      return contatos.itens.filter((item) => item.titulo.startsWith('G')).length
    if (criterio === 'H')
      return contatos.itens.filter((item) => item.titulo.startsWith('H')).length
    if (criterio === 'I')
      return contatos.itens.filter((item) => item.titulo.startsWith('I')).length
    if (criterio === 'J')
      return contatos.itens.filter((item) => item.titulo.startsWith('J')).length
    if (criterio === 'K')
      return contatos.itens.filter((item) => item.titulo.startsWith('K')).length
    if (criterio === 'L')
      return contatos.itens.filter((item) => item.titulo.startsWith('L')).length
    if (criterio === 'M')
      return contatos.itens.filter((item) => item.titulo.startsWith('M')).length
    if (criterio === 'N')
      return contatos.itens.filter((item) => item.titulo.startsWith('N')).length
    if (criterio === 'O')
      return contatos.itens.filter((item) => item.titulo.startsWith('O')).length
    if (criterio === 'P')
      return contatos.itens.filter((item) => item.titulo.startsWith('P')).length
    if (criterio === 'Q')
      return contatos.itens.filter((item) => item.titulo.startsWith('Q')).length
    if (criterio === 'R')
      return contatos.itens.filter((item) => item.titulo.startsWith('R')).length
    if (criterio === 'S')
      return contatos.itens.filter((item) => item.titulo.startsWith('S')).length
    if (criterio === 'T')
      return contatos.itens.filter((item) => item.titulo.startsWith('T')).length
    if (criterio === 'U')
      return contatos.itens.filter((item) => item.titulo.startsWith('U')).length
    if (criterio === 'V')
      return contatos.itens.filter((item) => item.titulo.startsWith('V')).length
    if (criterio === 'W')
      return contatos.itens.filter((item) => item.titulo.startsWith('W')).length
    if (criterio === 'X')
      return contatos.itens.filter((item) => item.titulo.startsWith('X')).length
    if (criterio === 'Y')
      return contatos.itens.filter((item) => item.titulo.startsWith('Y')).length
    if (criterio === 'Z')
      return contatos.itens.filter((item) => item.titulo.startsWith('Z')).length
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio
      })
    )
  }

  const contador = contarContatos()

  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{letra}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
