import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGLobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;

  label {
    font-family: 'Roboto Mono', monospace;
  }

  textarea {
    color: #8b8b8b;
    font-family: 'Roboto Mono', monospace;
    width: 100%;
    background-color: transparent;
    padding: 8px;
    resize: none;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666666;
    border-radius: 16px;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGLobal
