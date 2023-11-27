'use client'

import { useFormStatus } from 'react-dom'
import DownloadIcon from '../../public/download'
import { firaSans } from '@/fonts/fonts'
import clsx from 'clsx'

interface SubmitButtonProps {
  rounded?: boolean
  block?: boolean
}

export function SubmitButton ({ rounded = true, block }: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button
      className={clsx(`${firaSans.className} antialiased btn btn-primary btn-active text-lg  max-w-3xl `, {
        'btn-block': block,
        'rounded-l-none': rounded
      })} disabled={pending}
    >
      Descargar
      {
        pending
          ? (
            <span className='loading loading-spinner' />
            )
          : <DownloadIcon />
      }

    </button>
  )
}
