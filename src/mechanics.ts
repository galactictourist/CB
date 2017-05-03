import {
    existsSync,
    readFileSync,
    writeFileSync,
    mkdirSync
} from 'fs'
import { notify } from 'electron-notify'

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
            text: 'Couldn\'t read configurations'
        })
    }
}

actions.ranchInfoSave.subscribe(value => {
    var json = JSON.stringify(value, null, 4)
    try {
        writeFileSync(Configs.APP, json)
        stores.ranchInfo.value = value
        alert('Info saved')
        notify({
            title: 'Success',
            text: 'Info Saved'
        })
    } catch (err) {
        console.error(err)
        notify({
            title: 'Error',
            text: 'Could not save configuration'
        })
    }
})
