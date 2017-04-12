import {
    exists,
    readFile,
    writeFile
} from 'fs'

import * as actions from './actions'
import * as stores from './stores'

exists('./config/app.json', configExists => {
    if (configExists) {
        readFile('./config/app.json', 'utf-8', (err, file) => {
            if (err) {
                console.error(err)
            } else {
                let value = JSON.parse(file)
                stores.ranchInfo.value = value
            }
        })
    }
})

stores.ranchInfo.subscribe(value => {
    var jsonValues = JSON.stringify(value, null, 2)
    writeFile('./config/app.json', jsonValues, (err) => {
        if (err) {
            console.error(err)
            alert('Failed to save')
        } else {
            alert('Info Saved')
        }
    })
})
