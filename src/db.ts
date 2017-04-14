import {
    Database,
    open
} from 'sqlite'

type ParamType = string | number
interface ExecType {
    changes: number
    lastID: number
    sql: string
}

class DB {
    private db: Database = null
    constructor() {
        open('Ranch.sqlite').then(db => {
            this.db = db
        }).catch(err => {
            console.error(err)
        })
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
