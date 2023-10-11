import {$} from "@core";

import styles from './app.module.scss'

export class App {
    constructor(selector, options) {
        this.$element = document.querySelector(selector);
        this.components = options.components || [];
    }

    createElement() {
        const $root = $.create('div', styles.app)

        this.components.forEach(Component => {
            const $element = $.create('div', Component.className)
            const component = new Component($element)

            console.log($element)
            $element.innerHTML = component.toHTML()

            $root.append($element)
        })

        return $root
    }

    render() {
        this.$element.append(this.createElement())
    }
}