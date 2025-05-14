import { useState } from 'react'

function App() {
  const [nome, setNome] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [spec, setSpec] = useState('')
  const [years, setYears] = useState(0)
  const [description, setDescription] = useState('')

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !nome.trim() ||
      !user.trim() ||
      !password.trim() ||
      !spec.trim() ||
      !years.trim() ||
      years <= 0 ||
      !description.trim()
    ) {
      alert('Errore: compila correttamente tutti i campi')
      return
    }
    console.log(`
      Hai fatto il submit con:
      Nome completo: ${nome},
      Username: ${user},
      Password: ${password},
      Specializzazione: ${spec},
      Anni di esperienza: ${years},
      Descrizione: ${description}`)
  }

  return (
    <>
      <div>

        <h1>Compila questo modulo</h1>

        <form onSubmit={handleSubmit}>

          <input type="text"
            placeholder='Nome completo'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input type="text"
            placeholder='Username'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            value={spec}
            onChange={(e) => setSpec(e.target.value)}>
            <option value="" disabled>Seleziona un'opzione</option>
            <option value="Full-Stack">Full-stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>


          <input type="number"
            placeholder='Anni di esperienza'
            min={'0'}
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />

          <textarea type="text"
            placeholder='Breve descrizione'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type='submit'>Invia form</button>

        </form>
      </div>
    </>
  )
}

export default App
