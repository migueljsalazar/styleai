'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  sender: 'user' | 'stylist'
  content: string
}

export function StylistChat() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'stylist', content: "Hello! I'm your personal stylist. How can I help you today?" }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', content: input }])
      setInput('')
      // Simulate stylist response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          sender: 'stylist', 
          content: "Thank you for your question. I'm analyzing your style preferences and will provide personalized advice shortly." 
        }])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col h-[60vh]">
      <ScrollArea className="flex-grow mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${
              message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}>
              {message.content}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
}

