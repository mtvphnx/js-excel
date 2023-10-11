import {Component} from '@core'

import styles from './table.module.scss'

export class Table extends Component {
    static className = styles.table

    toHTML() {
        return `<div>Таблица</div>`;
    }
}