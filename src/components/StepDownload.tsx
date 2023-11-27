import { firaSans } from '@/fonts/fonts'

interface StepDownloadProps {
  stepTitle: string
  stepDescription: string
  children?: React.ReactNode
}

export function StepDownload ({ stepTitle, stepDescription, children }: StepDownloadProps) {
  return (
    <>
      <h2 className={`${firaSans.className} antialiased text-xl font-bold h-16`}>{stepTitle}</h2>
      {children}
      <p className='py-6 text-md text-base-content/60'>{stepDescription}</p>
    </>
  )
}
