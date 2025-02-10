import { setVehicleId } from "./TransientState.js"


export const vehicleOptions = async () => {

    const response = await fetch('http://localhost:8088/vehicles')

    const vehicles = await response.json()

    let html = `<input type='radio' name='vehicle' id='${vehicles[0].id}' checked>${vehicles[0].vehicle}`

    setVehicleId(vehicles[0].id)

    for (let i = 1; i < vehicles.length; i++) {
        html += `<input type='radio' name='vehicle' id='${vehicles[i].id}'>${vehicles[i].vehicle}`
    }

    return html
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const {id, name} = clickEvent.target
        if (name === 'vehicle') {
            setVehicleId(id)
        }
    }
)