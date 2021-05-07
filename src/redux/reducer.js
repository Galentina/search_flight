

const initialState = {
    allFlights: [],
    places: [],
    lines: [],
    comp: [
        { path: '/home', name: 'Home', head: "Looking for a flight?"},
        { path: '/info', name: 'Info', head: "Search for flight"},
        { path: '/airlines', head: "Search for flight", name: 'All airlines'},
        { path: '/client', head: "Welcome to Your page", name: 'Clients page'},
    ],
    choices: [],
}

const airlineApp = (state=initialState, action)=>{

    switch (action.type){
        case 'GET_INFO': {
            return {...state, allFlights: action.payload}
        }
        case "GET_PLACES": {
            return {...state, places: action.payload}
        }
        case "GET_LINES": {
            return {...state, lines: action.payload}
        }
        case "SEARCH": {
            return {...state, allFlights: action.payload}
        }
        case 'CHOICE': {
            let newChoice=state.choices;
            let res=[]
            if (!newChoice.includes(action.payload)) { newChoice.push(action.payload);
            let arr=[];
            for (let i=0; i<newChoice.length; i++) {
                arr.push(Number(newChoice[i].data.replace(/[-]/g, '') + newChoice[i].time.replace(/[:]/g, '')));
            }
            arr=arr.sort();

            for (let i=0; i<arr.length; i++){
                newChoice.map(el=>Number(el.data.replace(/[-]/g, '') + el.time.replace(/[:]/g, ''))===arr[i] ? res.push(el) : el)
                res[i].num=i+1;
            }
            console.log(res)
            } return {...state, choices: res}
        }
        case 'DELETE-CHOICE': {
            let newChoice=state.choices;
            newChoice=newChoice.filter(el=> el.id!==action.payload)
            for (let i=0; i<newChoice.length; i++){newChoice[i].num=i+1; console.log(newChoice[i].num)}
            return {...state, choices: newChoice}
        }
        default: return state;

    }

}

export default airlineApp;
