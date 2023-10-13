import {Component} from '@core'

import styles from './header.module.scss'

export class Header extends Component{
    static className = styles.header

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['click']
        })
    }

    clickHandler = () => {
        console.log('click header')
    }

    toHTML() {
        return `<div>header</div>`
    }
}