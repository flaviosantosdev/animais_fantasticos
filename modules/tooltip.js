export default function initToolTip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    function onMouseOver(event) {
        const tooltipBox = criarTooltioBox(this)
        tooltipBox.style.top = event.pageY + "px"
        tooltipBox.style.left = event.pageX + "px"

        onMouseMove.tooltipBox = tooltipBox
        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)


    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + "px"
            this.tooltipBox.style.left = event.pageX + 20 + "px"
        }
    }
    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove()

        }
    }


    tooltips.forEach((item) => {

        item.addEventListener('mouseover', onMouseOver)
    })

    function criarTooltioBox(element) {
        const text = element.getAttribute('aria-label')
        const tooltipBox = document.createElement('div')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)

        return tooltipBox

    }
}

