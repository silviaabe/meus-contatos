import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { FormCampo } from './styles'
import { cadastrar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <form onSubmit={cadastrarContato}>
        <FormCampo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Nome"
        ></FormCampo>
        <FormCampo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
        ></FormCampo>
        <FormCampo
          type="text"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          placeholder="Telefone"
        ></FormCampo>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </form>
    </MainContainer>
  )
}

export default Formulario
