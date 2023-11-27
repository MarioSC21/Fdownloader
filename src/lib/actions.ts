
'use server'
import { getVideoDownloadPrivate, postDownload } from '@/service/search'
import { Msg, MsgCorrect } from '@/types'

export async function generateDownload (prevState: any, formData: FormData): Promise<Msg> {
  const searchInput = formData.get('search')

  const msg = await postDownload(searchInput as string)
  return msg
}

export async function generateDownloadPrivate (prevState: any, formData: FormData): Promise<MsgCorrect> {
  const searchInput = formData.get('search')
  const source = formData.get('source')
  const msg = await getVideoDownloadPrivate(searchInput as string, source as string)
  return msg
}
