import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      titulo: 'Silvana',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 2,
      titulo: 'Fatima',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 3,
      titulo: 'Giulia',
      email: 'giulia@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 4,
      titulo: 'Kimberly',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 5,
      titulo: 'Luis',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 6,
      titulo: 'João Pedro',
      email: 'giulia@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 7,
      titulo: 'Juliana',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 8,
      titulo: 'Poliana',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 9,
      titulo: 'Patricia',
      email: 'giulia@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 10,
      titulo: 'Sergio',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 11,
      titulo: 'Solange',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 12,
      titulo: 'Vitor',
      email: 'giulia@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 13,
      titulo: 'Denise',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 14,
      titulo: 'Alberto',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 15,
      titulo: 'Douglas',
      email: 'giulia@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 16,
      titulo: 'Suelen',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 17,
      titulo: 'Erica',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 18,
      titulo: 'Quelen',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 19,
      titulo: 'Zilda',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 20,
      titulo: 'Washington',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 21,
      titulo: 'Xuxa',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 22,
      titulo: 'Felipe',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 23,
      titulo: 'Roberta',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 24,
      titulo: 'Yuri',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 25,
      titulo: 'Tobias',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 26,
      titulo: 'Ursula',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 27,
      titulo: 'Iago',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 28,
      titulo: 'Olivia',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 29,
      titulo: 'Helen',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 30,
      titulo: 'Nair',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 31,
      titulo: 'Milena',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 32,
      titulo: 'Pedro',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 33,
      titulo: 'Laura',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 34,
      titulo: 'Benicio',
      email: 'silvana@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 35,
      titulo: 'Carlos',
      email: 'fatima@gmail.com',
      telefone: '(44)99945-1211'
    },
    {
      id: 36,
      titulo: 'Giovanna',
      email: 'giulia@gmail.com',
      telefone: '(44)99945-1211'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
