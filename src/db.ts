import {
    readFileSync,
    existsSync
} from 'fs'
import {
    Database,
    open
} from 'sqlite'

import {
    dbReady
} from './actions'

type ParamType = string | number | boolean
interface ExecType {
    changes: number
    lastID: number
    sql: string
}

class DB {
    private db: Database = null

    constructor() {
        var exists = existsSync('./Ranch.sqlite')
        open('Ranch.sqlite').then(async db => {
            if (!exists) {
                var sql = readFileSync('./migrations/000-initial-schema.sql', 'utf-8')
                await db.exec(sql)
            }
            this.db = db
            dbReady.trigger()
        }).catch(err => {
            console.error(err)
        })
    }

    get ready() {
        return this.db != null
    }

    async get<T>(sql: string, ...params: ParamType[]): Promise<T[]> {
        var get = await this.db.prepare(sql, ...params)
        var data = await get.all()

        return new Promise<T[]>((resolve, reject) => {
            resolve(data)
        })
    }

    async exec(sql: string, ...params: ParamType[]): Promise<ExecType> {
        var statement = await this.db.prepare(sql, ...params)
        var exec = await statement.run()

        return new Promise<ExecType>((resolve, reject) => {
            var changes = exec.changes
            var lastID = exec.lastID
            var sql = exec.sql

            resolve({
                changes,
                lastID,
                sql
            })
        })
    }
}

export default new DB()
