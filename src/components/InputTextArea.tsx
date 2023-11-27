'use client'

interface InputTextAreaProps {
  name: string
  placeholder?: string
}

export default function InputTextArea ({ name, placeholder }: InputTextAreaProps) {
  return (
    <textarea className='textarea textarea-bordered w-full max-w-3xl h-80' placeholder={placeholder} name={name} required />
  )
}
