import {Component} from '@core'

import styles from "./header.module.scss"

export class Header extends Component{
    static className = styles.header

    toHTML() {
        return `<div>Шапка</div>`;
    }
}