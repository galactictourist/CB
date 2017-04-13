import * as React from 'react'
import { render } from 'react-dom'

import './mechanics'

import * as actions from './actions'
import * as stores from './stores'

import Component from './components'
import NavBar from './components/navbar'

interface P { }

interface S { }

class App extends Component<P, S> {
    componentWillMount() {
        stores.ranchInfo.subscribe(() => { this.forceUpdate() })
    }

    render() {
        return <div>
            <NavBar />
        </div>
    }
}

render(<App />, document.getElementById('app'))
