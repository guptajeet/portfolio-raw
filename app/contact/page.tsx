'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import Link from 'next/link'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log({ name, email, message })
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
          </p>
          <p className="mb-2">
            <strong>Location:</strong> Varanasi, India
          </p>
          <p className="mb-2">
            <strong>Email:</strong> guptajeet369@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.linkedin.com/in/ajeet-g-456333194/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </Link>
            <Link href="https://guptajeet.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Hashnode
            </Link>
            <Link href="https://github.com/guptajeet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              GitHub
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

