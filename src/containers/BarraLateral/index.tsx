import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../component/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard criterio="A" letra="A" />
              <FiltroCard criterio="B" letra="B" />
              <FiltroCard criterio="C" letra="C" />
              <FiltroCard criterio="D" letra="D" />
              <FiltroCard criterio="E" letra="E" />
              <FiltroCard criterio="F" letra="F" />
              <FiltroCard criterio="G" letra="G" />
              <FiltroCard criterio="H" letra="H" />
              <FiltroCard criterio="I" letra="I" />
              <FiltroCard criterio="J" letra="J" />
              <FiltroCard criterio="K" letra="K" />
              <FiltroCard criterio="L" letra="L" />
              <FiltroCard criterio="M" letra="M" />
              <FiltroCard criterio="N" letra="N" />
              <FiltroCard criterio="O" letra="O" />
              <FiltroCard criterio="P" letra="P" />
              <FiltroCard criterio="Q" letra="Q" />
              <FiltroCard criterio="R" letra="R" />
              <FiltroCard criterio="S" letra="S" />
              <FiltroCard criterio="T" letra="T" />
              <FiltroCard criterio="U" letra="U" />
              <FiltroCard criterio="V" letra="V" />
              <FiltroCard criterio="W" letra="W" />
              <FiltroCard criterio="X" letra="X" />
              <FiltroCard criterio="Y" letra="Y" />
              <FiltroCard criterio="Z" letra="Z" />
              <FiltroCard criterio="todas" letra="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar à lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
