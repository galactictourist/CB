import Broadcaster from './broadcaster'

export class Action<T> extends Broadcaster<T> {
    trigger(args: T = null) {
        this.broadcast(args)
    }
}
