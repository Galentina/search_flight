import React from "react";
import {getFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'


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
                <button className=" btn-xs btn-outline-success my-2 my-sm-0 rounded-lg " >Select</button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable)
