export class Listener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`Произошла ошибка, ${$root} - это не селектор`)
        }

        this.$root = $root
        this.listeners = listeners
    }

    initListeners() {
        console.log(this.$root, this.listeners)
    }

    removeListeners() {

    }
}