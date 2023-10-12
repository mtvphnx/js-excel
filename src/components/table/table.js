import {Component} from '@core'

import styles from './table.module.scss'

export class Table extends Component {
    static className = styles.table

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click']
        });
    }

    toHTML() {
        return `<div>Таблица</div>`;
    }
}