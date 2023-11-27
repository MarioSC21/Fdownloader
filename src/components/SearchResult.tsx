import { Msg } from '@/types'
import CardVideo from './CardVideo'
import ErrorAlert from './error'

interface SearchResultProps {
  respuesta: Msg | null
}
export default function SearchResult ({ respuesta }: SearchResultProps) {
  if (respuesta === null) {
    return null
  }

  return (
    <>
      {
      (respuesta?.success)
        ? (
          <CardVideo respuesta={respuesta} />
          )
        : (
          <ErrorAlert message={respuesta?.message ?? 'Error obteniendo el video'} />
          )
    }
    </>
  )
}
