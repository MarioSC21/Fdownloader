'use client'

import { ChangeEvent, useState } from 'react'
import CopyIcon from '../../public/CopyIcon'

interface InputProps {
  name: string
  placeholder?: string
  isDisabled?: boolean
  isCopy?: boolean
  inputValue?: string
  setInputValue?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  name,
  placeholder,
  isDisabled = false,
  inputValue,
  setInputValue,
  isCopy
}: InputProps) {
  const [isCopiedMessageVisible, setIsCopiedMessageVisible] = useState(false)
  const handleClick = () => {
    navigator.clipboard
      .writeText(inputValue ?? '')
      .then(() => {
        setIsCopiedMessageVisible(true)

        // Después de un tiempo, oculta el mensaje
        setTimeout(() => {
          setIsCopiedMessageVisible(false)
        }, 2000) // Puedes ajustar el tiempo en milisegundos según tus necesidades
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err)
      })
  }
  return (
    <div className='relative inline-block w-full max-w-3xl'>
      <input
        type='search'
        placeholder={placeholder}
        className='input input-bordered w-full max-w-3xl rounded-r-none pr-10'
        name={name}
        value={inputValue}
        onChange={setInputValue}
        required
        disabled={isDisabled}
      />
      {isCopy === true && (
        <>
          <button
            onClick={handleClick}
          >
            <CopyIcon /> {/* Reemplaza FaSearch con el icono que desees usar */}
          </button>
          {isCopiedMessageVisible && (
            <div className='absolute badge badge-success -top-2 right-0 '>
              Texto copiado!
            </div>
          )}
        </>
      )}
    </div>
  )
}
