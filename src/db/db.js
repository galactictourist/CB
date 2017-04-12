const LinvoDB = require('linvodb3')

LinvoDB.defaults.store = {
    db: require('level-js')
}
LinvoDB.dbPath = process.cwd()

export const RanchInfo = new LinvoDB('RanchInfo', {})

export const Cattle = new LinvoDB('Cattle', {})
