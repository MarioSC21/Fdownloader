import Link from 'next/link'
import InputToggleTheme from '../InputToggleTheme'
import { chelseaMarket } from '@/fonts/fonts'

export default function Navbar () {
  return (
    <>
      <div className={`${chelseaMarket.className} antialiased navbar bg-neutral text-neutral-content  flex justify-around absolute`}>
        <Link href='/' className='text-3xl text-white md:text-3xl font-bold hover:text-secondary'>
          F <span>Download</span>
        </Link>
        <div className='flec items-center gap-7'>
          <Link href='/download-private-video' className='link link-secondary link-hover'>Descargar Videos Privados</Link>
          <InputToggleTheme />
        </div>

      </div>
    </>
  )
}
