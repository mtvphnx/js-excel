import {Component} from '@core'

import styles from './toolbar.module.scss'

export class Toolbar extends Component {
    static className = styles.toolbar

    toHTML() {
        return `<div>Тулбар</div>`;
    }
}