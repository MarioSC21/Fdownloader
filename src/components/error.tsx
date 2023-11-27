import ErrorIcon from '../../public/ErrorIcon'

export default function ErrorAlert ({ message }: { message: string }) {
  return (
    <div role='alert' className='alert alert-error max-w-xl'>
      <ErrorIcon />

      <span>{message}</span>
    </div>
  )
}
