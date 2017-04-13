import * as React from 'react'
import { render } from 'react-dom'

import './mechanics'

import * as actions from './actions'
import * as stores from './stores'

import Component from './components'
import NavBar from './components/navbar'
import HomeView from './components/home-view'
import NewRanchComp from './components/new-ranch'

interface P { }

interface S { }

class App extends Component<P, S> {
    componentWillMount() {
        stores.ranchInfo.subscribe(() => { this.forceUpdate() })
    }

    get activePage() {
        if (stores.ranchInfo.value == null) {
            return <NewRanchComp />
        } else {
            return <HomeView />
        }
    }

    render() {
        return <div>
            <NavBar />
            {this.activePage}
        </div>
    }
}

render(<App />, document.getElementById('app'))
