import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MailboxList = () => {
  const [mailboxes, setMailboxes] = useState([])

  useEffect(() => {
    const fetchMailboxes = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/mailboxes`
      )

      const data = await response.json()

      setMailboxes(data)
    }

    fetchMailboxes()
  }, [])

  return (
    <main>
      <h1>Mailbox List</h1>

      {mailboxes.length === 0 ? (
        <p>No mailboxes found.</p>
      ) : (
        mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
          >
            <article>
              <h2>Mailbox {mailbox._id}</h2>
              <p>Owner: {mailbox.boxOwner}</p>
              <p>Size: {mailbox.boxSize}</p>
            </article>
          </Link>
        ))
      )}
    </main>
  )
}

export default MailboxList