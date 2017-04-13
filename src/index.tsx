import * as React from 'react'
import { render } from 'react-dom'

import './mechanics'

import * as actions from './actions'
import * as stores from './stores'

import Component from './components'
import NavBar from './components/navbar'
import HomeView from './components/home-view'
import NewRanchComp from './components/new-ranch'

import AddBull from './components/add/bull'
import AddCow from './components/add/cow'

interface P { }

interface S { }

class App extends Component<P, S> {
    componentWillMount() {
        stores.ranchInfo.subscribe(() => { this.forceUpdate() })
        stores.openPage.subscribe(() => { this.forceUpdate() })
    }

    get activePage() {
        var page = stores.openPage.value

        if (page == 'home') {
            return <HomeView />
        } else if (page == 'info') {
            return <NewRanchComp displayText='Ranch Info' />
        } else if (page == 'add-bull') {
            return <AddBull />
        } else if (page == 'add-cow') {
            return <AddCow />
        }

        return null
    }

    get mainPage() {
        if (stores.ranchInfo.value == null) {
            return <NewRanchComp />
        } else {
            return this.activePage
        }
    }

    render() {
        return <div>
            <NavBar />
            {this.mainPage}
        </div>
    }
}

render(<App />, document.getElementById('app'))
