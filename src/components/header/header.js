import {Component} from '@core'

import styles from "./header.module.scss"

export class Header extends Component{
    static className = styles.header

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['click']
        });
    }

    toHTML() {
        return `<div>Шапка</div>`;
    }
}