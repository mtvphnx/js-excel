import {Listener} from '@core'

export class Component extends Listener {
    constructor($root, options = {}) {
        super($root, options.listeners);
    }
    toHTML() {
        return ''
    }

    init() {
        this.initListeners()
    }

    destroy() {
        this.removeListeners()
    }
}