/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { MsgCorrect } from '@/types'
import DownloadIcon from '../../public/download'
import ErrorAlert from './error'
import InfoAlert from './InfoAlert'
import Link from 'next/link'

interface CardVideoProps {
  respuesta: MsgCorrect
  isAlert?: boolean
}

export default function CardVideo ({ respuesta, isAlert = true }: CardVideoProps) {
  return (
    <>
      {
      respuesta.links !== undefined
        ? (
          <div className='card lg:card-side max-w-6xl bg-base-100 shadow-xl'>
            <div className='h-full w-96 flex items-center'>
              <video src={respuesta?.links?.['HD (720)']} className='aspect-video h-full' controls />
            </div>
            <div className='card-body'>
              <header>
                <h2 className='card-title'>Tittle:</h2>
                <span>
                  {respuesta.title !== undefined ? 'No se encontro titulo' : respuesta.title}
                </span>
              </header>
              <div className='h-full'>
                <table className='table table-zebra'>
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Calidad</th>
                      <th>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
              Object.entries((respuesta?.links) ?? {}).reverse().map(([key, value]) => (
                <TableRow key={key} calidadName={key} href={value} />
              ))
            }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          )
        : (
          <div className='grid gap-2'>
            {
              (isAlert)
                ? (
                  <>
                    <ErrorAlert message='El video no se ha encontrado o el video es Privado' />
                    <InfoAlert>
                      <p>Si el video es privado haz <span />
                        <Link href='/download-private-video' className='link link-hover text-blue-100'>click aqui</Link> par poder descargarlo
                      </p>
                    </InfoAlert>
                  </>
                  )
                : (
                  <ErrorAlert message='El video no se ha encontrado asegura de llenar bien todo los campos con las idnicaciones dadas' />
                  )
            }

          </div>

          )
    }
    </>
  )
}

function TableRow ({ calidadName, href }: { calidadName: string, href: string }) {
  return (
    <tr>
      <td>{calidadName}</td>
      <td>
        <a className='btn btn-outline btn-secondary' href={href} download>
          <DownloadIcon />
          Descargar
        </a>
      </td>
    </tr>
  )
}
