import * as React from 'react'
import { render } from 'react-dom'

import './mechanics'

import Component from './components'
import NavBar from './components/navbar'

interface P { }

interface S { }

class App extends Component<P, S> {
    render() {
        return <div>
            <NavBar />
        </div>
    }
}

render(<App />, document.getElementById('app'))
