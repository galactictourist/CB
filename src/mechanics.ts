import {
    existsSync,
    readFileSync,
    writeFileSync,
    mkdirSync
} from 'fs'
import { notify } from 'node-notifier'

import * as actions from './actions'
import * as stores from './stores'

namespace Configs {
    export const APP = './config/app.json'
}

if (!existsSync('./config')) {
    mkdirSync('./config')
}

if (existsSync(Configs.APP)) {
    try {
        let value = JSON.parse(readFileSync(Configs.APP, 'utf-8'))
        stores.ranchInfo.value = value
    } catch (err) {
        console.error(err)
        notify({
            title: 'Error',
            message: 'Couldn\'t read configurations',
            sound: true
    }
}

actions.ranchInfoSave.subscribe(value => {
    var json = JSON.stringify(value, null, 4)
    try {
        writeFileSync(Configs.APP, json)
        stores.ranchInfo.value = value
        notify({
            title: 'Success',
            message: 'Info Saved',
        })
    } catch (err) {
        console.error(err)
        notify({
            title: 'Error',
            message: 'Could not save configuration',
        })
    }
})
