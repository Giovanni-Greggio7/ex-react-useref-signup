import { useState, useMemo } from 'react'

function App() {
  const [nome, setNome] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [spec, setSpec] = useState('')
  const [years, setYears] = useState('')
  const [description, setDescription] = useState('')

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const isUserValid = useMemo(() => {

    const charsValid = user.trim().split('').every(char =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )

    return charsValid && user.length >= 6

  }, [user])

  const isPasswordValid = useMemo(() => {

    return (
      password.trim().length >= 8 &&
      password.split('').some(char => letters.includes(char)) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    )

  }, [password])

  const isDescriptionValid = useMemo(() => {

    return (
      description.trim().length >= 100 &&
      description.trim().length < 1000
  )

  }, [description])

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
          {user.trim() && (
            <p style={{ color: isUserValid ? 'green' : 'red' }}>
              {isUserValid ? 'Username valido' : 'Deve avere almeno 6 caratteri alfanumerici'}
            </p>
          )}

          <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
              {isPasswordValid ? 'Password valida' : 'La password deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo'}
            </p>
          )}

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
          {description.trim() && (
            <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
              {isDescriptionValid ? 'Descrizione valida' : 'Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali)'}
            </p>
          )}

          <button type='submit'>Invia form</button>

        </form>
      </div>
    </>
  )
}

export default App
