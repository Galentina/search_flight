import React from "react";
import {clientsChoice, getFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/App.css';


function FlightTable(props){
const {flight}=props;


    return (
        <>
        <tr >
            <td scope="col">{flight.num}</td>
            <td scope="col">{flight.data}</td>
            <td scope="col">{flight.time}</td>
            <td scope="col">{flight.name}</td>
            <td scope="col">{flight.direct}</td>
            <td scope="col">
                <button className=" btn-xs btn-outline-success my-2 my-sm-0 rounded-lg" onClick={()=>props.chooseFlight(flight)}>Select</button>
            </td>
        </tr>
        </>
    )

}
const mapStateToProps = (state) => ({
    places: state.places,
    lines: state.lines,
    comp: state.comp,
})
const mapDispatchToProps = (dispatch) => ({
    getAllFlights: ()=> dispatch(getFlights()),
    chooseFlight: (payload)=> dispatch(clientsChoice(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable)
