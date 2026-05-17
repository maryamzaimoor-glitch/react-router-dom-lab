import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = () => {
  const { mailboxId } = useParams()
  const [mailbox, setMailbox] = useState(null)

  useEffect(() => {
    const getMailbox = async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/mailboxes/${mailboxId}`)
      const data = await response.json()
      setMailbox(data)
    }

    getMailbox()
  }, [mailboxId])

  if (!mailbox) {
    return <h1>Loading...</h1>
  }

  return (
    <main>
      <h1>Mailbox Details</h1>
      <h2>Mailbox {mailbox._id}</h2>
      <p>Owner: {mailbox.boxOwner}</p>
      <p>Size: {mailbox.size}</p>
    </main>
  )
}

export default MailboxDetails