import Broadcaster from './broadcaster'

export class Store<T> extends Broadcaster<T> {
    constructor(
        protected storedValue: T = null
    ) {
        super()
    }

    get value(): T {
        return this.storedValue
    }

    set value(args: T) {
        this.storedValue = args
        this.broadcast(args)
    }
}
