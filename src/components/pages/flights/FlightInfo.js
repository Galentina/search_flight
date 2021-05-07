import React from "react";
import {getAirlines, getFlights, getPlaces, searchFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import Ticket from '../../../assets/ticket.svg'
import '../../../styles/App.css';



function FlightInfo(props){


    return (
        <div className='page'>
            <h1 className='mt-2'>{props.choices.length}</h1><p className='client'>
            <span className='select'> flights </span><br/>in your list</p>
            <img src={Ticket} alt='your choice' title='your choice'/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    flights: state.allFlights,
    places: state.places,
    lines: state.lines,
    comp: state.comp,
    choices: state.choices,
})
const mapDispatchToProps = (dispatch) => ({
    getFlightsList: () => dispatch(getFlights()),
    getPlacesList: () => dispatch(getPlaces()),
    getAirlinesList: () => dispatch(getAirlines()),
    searchForFlights: (payload) => dispatch(searchFlights(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightInfo)
