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

    clickHandler = () => {
        console.log('click formula')
    }

    toHTML() {
        return `<div>formula</div>`;
    }
}