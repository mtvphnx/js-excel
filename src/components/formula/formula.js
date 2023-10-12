import {Component} from '@core'

import styles from './formula.module.scss'

export class Formula extends Component {
    static className = styles.formula

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['click']
        });
    }

    onClick(event) {
        console.log('click formula', event)
    }

    toHTML() {
        return `<div>Формула</div>`;
    }
}