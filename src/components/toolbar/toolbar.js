import {Component} from '@core'

import styles from './toolbar.module.scss'

export class Toolbar extends Component {
    static className = styles.toolbar

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        })
    }

    clickHandler = () => {
        console.log('click toolbar')
    }

    toHTML() {
        return `<div>toolbar</div>`
    }
}