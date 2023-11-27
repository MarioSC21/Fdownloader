'use client'
import { useFormState } from 'react-dom'
import clsx from 'clsx'
import { generateDownload } from '@/lib/actions'
import { SubmitButton } from './SubmitButton'
import SearchResult from './SearchResult'
import Input from './Input'

export default function FormSearch () {
  const [message, formAction] = useFormState(generateDownload, null)
  return (
    <>
      <form
        action={async (formData) => {
          await formAction(formData)
        }} className='flex w-full justify-center'
      >
        <Input name='search' placeholder='Ingrese el enlace del video de Facebook aquí' />
        <SubmitButton />
      </form>
      <article className={clsx(
        'flex w-full justify-center pt-5',
        {
          'pt-10': message?.success
        }
      )}
      >
        <SearchResult respuesta={message} />
      </article>
    </>
  )
}
