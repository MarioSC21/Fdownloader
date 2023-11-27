export function generateId (url: string) {
  let id = ''
  if (Number.isInteger(url)) {
    id = url
  } else {
    const match = url.match(/(\d+)\/?$/)
    id = (match != null) ? match[1] : ''
  }

  return id
}

export function cleanStr (str: string): string {
  const tmpStr = `{"text": "${str}"}`
  return JSON.parse(tmpStr).text
}

export function getSDLink (curlContent: string): string | boolean {
  const regexRateLimit = /browser_native_sd_url":"([^"]+)"/
  const match = curlContent.match(regexRateLimit)
  return (match != null) ? cleanStr(match[1]) : false
}

export function getHDLink (curlContent: string): string | boolean {
  const regexRateLimit = /browser_native_hd_url":"([^"]+)"/
  const match = curlContent.match(regexRateLimit)
  return (match != null) ? cleanStr(match[1]) : false
}

export function getTitle (curlContent: string): string | null {
  const titleMatch = ((curlContent.match(/<title>(.*?)<\/title>/) != null) || curlContent.match(/title id="pageTitle">(.+?)<\/title>/)) as RegExpMatchArray
  return (titleMatch != null) ? cleanStr(titleMatch[1]) : null
}
