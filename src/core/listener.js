export class Listener {
    constructor($root) {
        if (!$root) {
            throw new Error(`Произошла ошибка, ${$root} - это не селектор`)
        }

        this.$root = $root
    }
}