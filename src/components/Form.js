import React from 'react'

export default function Form({ handleGuess }) {
  const [form, setForm] = React.useState('')

  function onSubmitForm(event) {
    event.preventDefault()
    handleGuess(form)
    setForm('')
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={onSubmitForm}
    >
      <label htmlFor="guess-input">Enter guess of five letters word:</label>
      <input
        required
        value={form}
        id="guess-input" type="text"
        onChange={event => {
          setForm(event.target.value.toUpperCase())
        }}
        maxLength={5}
        minLength={5}
        pattern="[A-Za-z]{5}"
        title='Poner una palabra de exactamene 5 (cinco) characteres'
      />
    </form>
  )
}
