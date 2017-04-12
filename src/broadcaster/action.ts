import Broadcaster from './broadcaster'

export default class Action<T> extends Broadcaster<T> {
    trigger(args: T = null) {
        this.broadcast(args)
    }
}
