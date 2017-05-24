import { Store } from './broadcaster'

import {
    RanchInfo
} from './types'

export const ranchInfo = new Store<RanchInfo>()

export const openPage = new Store<string>('home')
