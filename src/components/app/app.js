import {$} from '@core'

import styles from './app.module.scss'

export class App {
    constructor(selector, options) {
        this.$element = $(selector)
        this.components = options.components || []
    }

    createElement() {
        const $root = $.create('div', styles.app)

        this.components = this.components.map(Component => {
            const $element = $.create('div', Component.className)
            const component = new Component($element)
            $element.html(component.toHTML())
            $root.append($element)

            return component
        })

        return $root
    }

    render() {
        this.$element.append(this.createElement())
        this.components.forEach(component => component.init())
    }
}