import {Component} from '@core'

import styles from './formula.module.scss'

export class Formula extends Component {
    static className = styles.formula

    toHTML() {
        return `<div>Формула</div>`;
    }
}