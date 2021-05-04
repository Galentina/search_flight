

const initialState = {
    dataFlights: [],
    places: [],
    lines: [],
    comp: [
        { path: '/home', name: 'Home', head: "Looking for a flight?"},
        { path: '/info', name: 'Info', head: "Search for flight"},
        { path: '/airlines', head: "Search for flight", name: 'All airlines'},
        { path: '/client', head: "Your page", name: 'Clients page'},
    ],
    choice: [],
}

const airlineApp = (state=initialState, action)=>{

    switch (action.type){
        case 'GET_INFO': {
            return {...state, dataFlights: action.payload}
        }
        case "GET_PLACES": {
            return {...state, places: action.payload}
        }
        case "GET_LINES": {
            return {...state, lines: action.payload}
        }
        case "SEARCH": {
            return {...state, dataFlights: action.payload}
        }
        case 'CHOICE': {
            let newChoice=state.choice.push(action.payload)
           return {...state, choice: newChoice}
        }

        default: return state;

    }

}

export default airlineApp;
