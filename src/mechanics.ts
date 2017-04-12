import {
    exists,
    readFile,
    writeFile
} from 'fs'

import * as actions from './actions'
import * as stores from './stores'

namespace Configs {
    export const APP = './config/app.json'
}

exists(Configs.APP, configExists => {
    if (configExists) {
        readFile(Configs.APP, 'utf-8', (err, file) => {
            if (err) {
                alert('Failed to read config file')
                console.error(err)
                return
            }
            let value = JSON.parse(file)
            stores.ranchInfo.value = value
            stores.ranchInfo.subscribe(value => {
                var jsonValues = JSON.stringify(value, null, 2)
                writeFile(Configs.APP, jsonValues, (err) => {
                    if (err) {
                        console.error(err)
                        alert('Failed to save')
                    } else {
                        alert('Info Saved')
                    }
                })
            })
        })
    }
})
