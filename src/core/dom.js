class Dom {
    constructor(selector) {
        this.$element = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html() {

    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tag, className) => {

    const $element = document.createElement('div')
    if (className) $element.classList.add(className)

    return $element
}