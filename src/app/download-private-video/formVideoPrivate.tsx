'use client'

import CardVideo from '@/components/CardVideo'
import Input from '@/components/Input'
import InputTextArea from '@/components/InputTextArea'
import { SubmitButton } from '@/components/SubmitButton'
import { generateDownloadPrivate } from '@/lib/actions'
import clsx from 'clsx'
import { ChangeEvent, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

export default function FormVideoPrivate () {
  const [message, setMessage] = useFormState(generateDownloadPrivate, null)
  const ref = useRef<HTMLFormElement>(null)
  const [value, setValue] = useState('')

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className={clsx('grid gap-9 pb-10', {
      'grid-cols-1': message !== null
    })}
    >
      <article className='flex w-full justify-center h-full'>
        {
          message !== null && <CardVideo respuesta={message} isAlert={false} />
        }
      </article>
      <form
        action={async (formData) => {
          toast('Se esta procesando la informacion, espere un momento por favor')
          await setMessage(formData)
          setValue('')
          ref.current?.reset()
        }} className='flex flex-col justify-center gap-10' ref={ref}
      >
        <div className='flex flex-col items-center justify-center w-full gap-1'>
          <h3 className='w-full max-w-3xl font-bold '>1. Ingrese la URL del video privado de Facebook que desea descargar.</h3>
          <Input name='search' placeholder='Example: https://www.facebook.com/100043953047614/videos/550945932201118' inputValue={value} setInputValue={handleOnchange} />
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-1'>
          <h3 className='w-full max-w-3xl font-bold'>2. Copie el enlace a continuación y ábralo en una nueva pestaña del navegador.</h3>
          <Input name='generateLink' isDisabled inputValue={`view-source:${value}`} isCopy />
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-1'>
          <h3 className='w-full max-w-3xl font-bold'>3. Pegue la fuente de la página de video en el cuadro de entrada a continuación y haga clic en descargar.</h3>
          <InputTextArea name='source' placeholder='Copie el codigo Fuente de la pagina que se abrio' />
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-1'>
          <SubmitButton block rounded={false} />
        </div>
      </form>
    </div>
  )
}
