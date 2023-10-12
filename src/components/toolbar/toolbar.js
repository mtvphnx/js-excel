import {Component} from '@core'

import styles from './toolbar.module.scss'

export class Toolbar extends Component {
    static className = styles.toolbar

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        });
    }

    toHTML() {
        return `<div>Тулбар</div>`;
    }
}