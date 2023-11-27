interface BrowserProps {
  urlName: string
  children?: React.ReactNode
}
export default function Browser ({ urlName, children }: BrowserProps) {
  return (
    <div className='mockup-browser border bg-primary/10 h-52 mt-4'>
      <div className='mockup-browser-toolbar'>
        <div className='input'>{urlName}</div>
      </div>
      <div className='flex justify-center px-4 py-16 bg-base-200'>
        {children}
      </div>
    </div>
  )
}
