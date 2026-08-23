import { useState, useEffect } from 'react'

import './App.css'

import User from './components/User'

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)

  const fetchUsers = async () => {
    const response = await fetch('https://dummyjson.com/users')

    if (!response.ok) {
      throw new Error('Erro ao buscar usuários')
    }

    const data = await response.json()

    return data.users
  }

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await fetchUsers()

        setUsers(users)
      } catch {
        setError(true)
      }
    }

    loadUsers()
  }, [])

  const handleRefresh = async () => {
    try {
      setError(false)

      const users = await fetchUsers()

      setUsers(users)
    } catch {
      setError(true)
    }
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h1 className="mb-3 text-2xl font-bold text-red-600">
            Ocorreu um erro
          </h1>

          <p className="mb-6 text-gray-600">
            Não foi possível carregar a lista de usuários.
          </p>

          <button
            onClick={handleRefresh}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Tentar novamente
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Lista de Usuários
      </h1>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <User
            key={user.id}
            image={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            gender={user.gender}
            email={user.email}
            phone={user.phone}
            company={user.company?.name}
            role={user.company?.title}
            city={user.address?.city}
          />
        ))}
      </div>
    </main>
  )
}

export default App