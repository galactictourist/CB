import { Action } from './broadcaster'
import {
    RanchInfo
} from './types'

export const ranchInfoSave = new Action<RanchInfo>()
