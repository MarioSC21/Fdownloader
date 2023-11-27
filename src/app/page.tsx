import SectionDownload from '@/components/SectionDownload.1'
import FormSearch from '@/components/FormSearch'

export default async function Home () {
  return (
    <main className=' h-screen flex flex-col pt-10'>
      <section className='pt-10'>
        <header className='text-center py-5'>
          <h1 className='text-3xl font-bold '>Descargador de videos de Facebook</h1>
          <span className='text-lg text-base-content/60'>Descargar videos de Facebook en línea</span>
        </header>
        <div className='py-8'>
          <FormSearch />
        </div>
      </section>
      <section className='flex flex-1'>
        <SectionDownload />
      </section>
    </main>
  )
}
