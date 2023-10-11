import {App, Formula, Header, Table, Toolbar} from '@components'

import '@styles/main.scss'

const app = new App('#app', {
    components: [Formula, Header, Table, Toolbar]
})

app.render()
