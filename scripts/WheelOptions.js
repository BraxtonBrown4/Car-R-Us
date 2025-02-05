import { setWheelsId } from "./TransientState.js"

export const wheelOptions = async () => {

    const response = await fetch('http://localhost:8088/wheels')

    const wheelArr = await response.json()

    const optionsHTML = await wheelArr.map(wheel => {
        return `<option value="${wheel.id}">${wheel.set}</option>`
    })

    const fullHTML = `<select id="wheels">
    <option value="0">Select Wheels</option>
    ${optionsHTML.join('')}
    </select>`

    return fullHTML
}

document.addEventListener(
    'change',
    (clickEvent) => {
        const {id, value} = clickEvent.target

        if (id === 'wheels') {
            setWheelsId(value)
        }
    }
)