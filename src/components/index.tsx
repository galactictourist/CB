import * as React from 'react'

import { Broadcaster } from '../broadcaster'

interface Subscription<T> {
    id: number
    broadcaster: Broadcaster<T>
}

export default class Component<P, S> extends React.Component<P, S> {
    protected subscriptions = new Map<number, Subscription<any>>()

    subscribe<T>(broadcaster: Broadcaster<T>, func: (args: T) => void) {
        if (this.subscriptions.has(broadcaster.id)) {
            return
        }
        var id = broadcaster.subscribe(func)
        this.subscriptions.set(broadcaster.id, {
            id,
            broadcaster
        })
    }

    componentWillUnmount() {
        this.subscriptions.forEach(subscription => {
            subscription.broadcaster.unsubscribe(subscription.id)
        })
        this.subscriptions.clear()
    }
}
