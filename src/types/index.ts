export enum ThemeEnum {
  LIGHT = 'emerald',
  DARK = 'night'
}

export interface MsgCorrect {
  success: true
  id: string
  title: string | null
  links?: {
    'HD (720)'?: string
    'SD (360)'?: string
  }
}
export interface MsgError {
  success: false
  message: string
}

export type Msg = MsgCorrect | MsgError
