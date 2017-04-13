import {
    Database,
    open
} from 'sqlite'

var baseDB: Database = null

open('Ranch.sqlite').then(db => {
    baseDB = db
}).catch(err => {
    console.error(err)
})
