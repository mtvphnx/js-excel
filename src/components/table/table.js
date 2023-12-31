import {Component} from '@core'
import {createTable} from './table.template.js'

import styles from './table.module.scss'

export class Table extends Component {
    static className = styles.table

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click']
        })
    }

    clickHandler = () => {
        console.log('click table')
    }

    toHTML() {
        return createTable()
    }
}