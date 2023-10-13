export class Listener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`Произошла ошибка, ${$root} - это не селектор`)
        }

        this.$root = $root
        this.listeners = listeners
    }

    initListeners() {
        this.listeners.forEach(listener => {
            const method = `${listener}Handler`

            // this[method] !== this[method].bind(this)
            // всегда переопределяем, чтобы потом можно было удалить
            this[method] = this[method].bind(this)
            if (this[method]) this.$root.on(listener, this[method])
        })
    }

    removeListeners() {
        this.listeners.forEach(listener => {
            const method = `${listener}Handler`
            if (this[method]) this.$root.off(listener, this[method])
        })
    }
}