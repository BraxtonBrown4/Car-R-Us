import { setPaintId } from "./TransientState.js"

export const paintOptions = async () => {

    const response = await fetch('http://localhost:8088/paints')

    const paintArr = await response.json()

    const optionsHTML = await paintArr.map(paint => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    const fullHTML = `<select id="paint">
    <option value="0">Select Paint Color</option>
    ${optionsHTML.join('')}
    </select>`

    return fullHTML
}

document.addEventListener(
    'change',
    (clickEvent) => {
        const {id, value} = clickEvent.target

        if (id === 'paint') {
            setPaintId(value)
        }
    }
)