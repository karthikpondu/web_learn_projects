import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)

  const deletePerson = (id) => {
    return setPeople(people.filter(person => person.id !== id))
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} deleteP={deletePerson} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
