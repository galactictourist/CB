import AI from './auto-incrementer'

type Subscriber<T> = (args: T) => void

const broadcasterAI = new AI()

export default class Broadcaster<T>{
    readonly id = broadcasterAI.nextValue
    protected ai = new AI()
    protected subscribers = new Map<number, Subscriber<T>>()

    subscribe(subscriber: Subscriber<T>): number {
        var id = this.ai.nextValue
        this.subscribers.set(id, subscriber)
        return id
    }

    unsubscribe(id: number): boolean {
        return this.subscribers.delete(id)
    }

    protected broadcast(args: T) {
        this.subscribers.forEach(func => {
            func(args)
        })
    }
}
