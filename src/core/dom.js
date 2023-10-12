class Dom {
    constructor(selector) {
        this.$element = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$element.innerHTML = html
            return this
        }

            return this.$element.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$element
        }

        if (Element.prototype.append) {
            this.$element.append(node)
        } else {
            this.$element.appendChild(node)
        }
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tag, className) => {

    const $element = document.createElement('div')
    if (className) $element.classList.add(className)

    return $($element)
}