"use client"

import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: normally you'd POST to an API route here
    console.log({ name, email, message })
    setSent(true)
    setName("")
    setEmail("")
    setMessage("")
  }

  if (sent) {
    return <div className="p-6 bg-ni-ink/5 rounded">Thank you — we'll get back to you soon.</div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-ni-ink mb-1">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ni-ink mb-1">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ni-ink mb-1">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded border px-3 py-2 h-32" />
      </div>
      <div>
        <button type="submit" className="inline-flex items-center justify-center px-4 py-2 bg-ni-accent text-white rounded">Send inquiry</button>
      </div>
    </form>
  )
}
