import { setInteriorId } from "./TransientState.js"
export const interiorOptions = async () => {

    const response = await fetch('http://localhost:8088/interior')

    const interiorArr = await response.json()

    const optionsHTML = await interiorArr.map(interior => {
        return `<option value="${interior.id}">${interior.material}</option>`
    })

    const fullHTML = `<select id="interior">
    <option value="0">Select Interior Material</option>
    ${optionsHTML.join('')}
    </select>`

    return fullHTML
}

document.addEventListener(
    'change',
    (clickEvent) => {
        const {id, value} = clickEvent.target

        if (id === 'interior') {
            setInteriorId(value)
        }
    }
)