import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MailboxForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'small',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await fetch(`${import.meta.env.VITE_BASE_URL}/mailboxes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    navigate('/mailboxes')
  }

  return (
    <main>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Box Owner:</label>
        <input
          type="text"
          name="boxOwner"
          id="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />

        <label htmlFor="boxSize">Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  )
}

export default MailboxForm