/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { generateId, getHDLink, getSDLink, getTitle } from '@/utils'
import { headers } from './headers'
import type { MsgCorrect, Msg } from '@/types'

export async function postDownload (url: string): Promise<Msg> {
  try {
    if (url.length === 0) {
      throw new Error('Please provide the URL')
    }

    const response = await fetch(url, {
      headers
    })
    if (!response.ok) {
      throw new Error('Please provide the URL')
    }
    const data = await response.text()

    const msg: MsgCorrect = {
      success: true,
      id: generateId(url),
      title: getTitle(data)
    }

    const sdLink = getSDLink(data)
    const hdLink = getHDLink(data)

    if (sdLink) {
      // agregar el link a la respuesta
      msg.links = {
        'SD (360)': `${sdLink as string}&dl=1`
      }
    }

    if (hdLink) {
      // agregar el link a la respuesta
      msg.links = {
        ...msg.links,
        'HD (720)': `${hdLink as string}&dl=1`
      }
    }
    return msg
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export async function getVideoDownloadPrivate (url: string, data: string) {
  const msg: MsgCorrect = {
    success: true,
    id: generateId(url),
    title: getTitle(data)
  }

  const sdLink = getSDLink(data)
  const hdLink = getHDLink(data)

  if (sdLink) {
    // agregar el link a la respuesta
    msg.links = {
      'SD (360)': `${sdLink as string}&dl=1`
    }
  }

  if (hdLink) {
    // agregar el link a la respuesta
    msg.links = {
      ...msg.links,
      'HD (720)': `${hdLink as string}&dl=1`
    }
  }
  return msg
}
