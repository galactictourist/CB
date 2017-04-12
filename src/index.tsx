import * as React from 'react'
import { render } from 'react-dom'

import './mechanics'

import NavBar from './components/navbar'

interface P { }

interface S { }

class App extends React.Component<P, S>{
    render() {
        return <div>
            <NavBar />
        </div>
    }
}

render(<App />, document.getElementById('app'))
