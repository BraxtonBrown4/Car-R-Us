import { setTechnologyId } from "./TransientState.js"

export const technologyOptions = async () => {

    const response = await fetch('http://localhost:8088/technologies')

    const technologyArr = await response.json()

    const optionsHTML = await technologyArr.map(technology => {
        return `<option value="${technology.id}">${technology.package}</option>`
    })

    const fullHTML = `<select id="technology">
    <option value="0">Select Technology Package</option>
    ${optionsHTML.join('')}
    </select>`

    return fullHTML
}

document.addEventListener(
    'change',
    (clickEvent) => {
        const {id, value} = clickEvent.target

        if (id === 'technology') {
            setTechnologyId(value)
        }
    }
)