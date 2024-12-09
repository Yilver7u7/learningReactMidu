// Importamos los estilos globales de la aplicación
import './App.css'

// Importamos el componente TwitterFollowCard para reutilizarlo con diferentes usuarios
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// Lista de usuarios que se mostrarán en la aplicación
const users = [
  {
    userName: 'midudev', // Nombre de usuario (username) único para el perfil
    name: 'Miguel Ángel Durán', // Nombre completo del usuario
    isFollowing: true // Estado inicial: si el usuario está siendo seguido
  },
  {
    userName: 'yilver7u7',
    name: 'Yilver Garcia',
    isFollowing: false
  },
]

// Componente principal de la aplicación
export function App () {
  return (
    <section className='App'>
      {/* Iteramos sobre la lista de usuarios y renderizamos un componente TwitterFollowCard por cada uno */}
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName} // Clave única requerida por React para identificar cada componente
            userName={userName} // Propiedad: nombre de usuario
            initialIsFollowing={isFollowing} // Propiedad: estado inicial de "siguiendo"
          >
            {name} {/* Contenido hijo: muestra el nombre completo */}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
