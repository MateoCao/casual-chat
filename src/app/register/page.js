'use client'
import { useState } from 'react'

function Register () {
  const [users, setUsers] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const newUsers = [...users, data]
    setUsers(newUsers)
    e.target.reset()
  }
  return (
        <section>
            <div>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input name="name" />
                    <input name="surname" />
                    <input name="username" />
                    <input name="email" type="email" />
                    <input name="password" type="password"/>
                    <button type="submit">Registrarme</button>
                </form>
            </div>
            {users.length > 0 && users.map((user, i) => (
                <div key={i}>
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                </div>
            ))}
        </section>
  )
}

export default Register
