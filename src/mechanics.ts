import {
    exists,
    readFile,
    writeFile
} from 'fs'

import * as actions from './actions'
import * as stores from './stores'

exists('./config/app.json', configExists => {
    readFile('./config/app.json', 'utf-8', (err, file) => {
        if (err) {
            console.error(err)
        } else {
            let value = JSON.parse(file)
            stores.ranchInfo.value = value
        }
    })
})
