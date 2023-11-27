import { NAMEPAGINA, URLNAME } from '@/const/namePage'
import Browser from './Browser'
import { StepDownload } from './StepDownload'
import DownloadIcon from '../../public/download'
import { chelseaMarket, firaSans } from '@/fonts/fonts'

const StepsDownload = [
  {
    stepTitle: 'Paso 1: Copia el enlace del video de Facebook',
    stepDescription:
      'Ve a Facebook, busque el video que desea descargar y copie el enlace del video.',
    urlName: URLNAME,
    children: '👆 Copiar la URL del video'
  },
  {
    stepTitle:
      'Paso 2: Pega el enlace del video en el cuadro de entrada de arriba',
    stepDescription:
      'Pega el enlace del video de Facebook en el cuadro de entrada de arriba y haz clic en el botón Descargar.',
    children: (
      <>
        <input
          type='text'
          placeholder='Ingrese el enlace del video de Facebook aquí'
          className='input input-bordered w-full max-w-md '
          disabled
        />
        👈 Pegar el enlace del video
      </>
    ),
    urlName: 'FDownload.com'
  },
  {
    stepTitle: 'Paso 3: Descarga el video de Facebook',
    stepDescription:
      'Una vez que haga clic en el botón Descargar, se obtendrá la lista de enlaces de descarga. Simplemente haga clic en el botón Descargar según la calidad del video que desee descargar.',
    children: (
      <>
        <button className={`${firaSans.className} antialiased btn btn-primary btn-active text-lg `}>
          Descargar
          <DownloadIcon />
        </button>
        👈 Presiona el botón de Descargar
      </>
    ),
    urlName: 'FDownload.com'
  }
]

export default function SectionDownload () {
  return (
    <article className='hero bg-base-200 '>
      <div className='hero-content text-center flex flex-col pt-10'>
        <div className='max-w-2xl'>
          <h1 className={`${firaSans.className} antialiased text-4xl font-bold`}>
            Descargar videos de Facebook online desde la web de{' '}
            <span className={`${chelseaMarket.className} antialiased text-primary`}> {NAMEPAGINA}</span>
          </h1>
          <p className='py-6 text-lg text-base-content/60'>
            Para descargar un video de Facebook en tu PC utilizando el sitio web{' '}
            {NAMEPAGINA} , simplemente sigue estos tres pasos fáciles:
          </p>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          {StepsDownload.map((step, index) => (
            <div key={index}>
              <StepDownload
                stepTitle={step.stepTitle}
                stepDescription={step.stepDescription}
              >
                <Browser urlName={step.urlName}>{step.children}</Browser>
              </StepDownload>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
