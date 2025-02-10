const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0,
    vehicleId: 0
}

export const setPaintId = (chosenPaintId) => {
    transientState.paintId = parseInt(chosenPaintId)
}

export const setInteriorId = (chosenInteriorId) => {
    transientState.interiorId = parseInt(chosenInteriorId)
}

export const setTechnologyId = (chosenTechnologyId) => {
    transientState.technologyId = parseInt(chosenTechnologyId)
}

export const setWheelsId = (chosenWheelsId) => {
    transientState.wheelId = parseInt(chosenWheelsId)
}

export const setVehicleId = (chosenWheelsId) => {
    transientState.vehicleId = parseInt(chosenWheelsId)
 }

export const placeOrder = async () => {
    const noZeroes = Object.values(transientState).every(value => value !== 0)

    if (noZeroes) {
        
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch('http://localhost:8088/orders', postOptions)
    
        const orderEvent = new CustomEvent('orderSaved')
        document.dispatchEvent(orderEvent)

    }
}