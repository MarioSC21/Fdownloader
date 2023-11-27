import { lora } from '@/fonts/fonts'
import FormVideoPrivate from './formVideoPrivate'

export default function DownloadPrivateVideoPage () {
  return (
    <main className='h-screen flex flex-col pt-16'>
      <div className='flex flex-col items-center h-full gap-8 pt-10'>
        <h1 className={`${lora.className} antialiased text-4xl font-bold`}>
          Descargador de Videos privados de <span className='text-blue-600'>Facebook</span>
        </h1>
        <section className='w-full'>
          <FormVideoPrivate />
        </section>
        <section />
      </div>
    </main>
  )
}
