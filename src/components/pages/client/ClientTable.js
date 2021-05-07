import React from "react";
import {clientsChoice, deleteChoice, getFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/App.css';

function FlightTable(props){
    const {choice}=props;
    console.log(choice)


    return (
        <>
            <tr >
                <td scope="col">{choice.num}</td>
                <td scope="col">{choice.data}</td>
                <td scope="col">{choice.time}</td>
                <td scope="col">{choice.name}</td>
                <td scope="col">{choice.direct}</td>
                <td scope="col">
                    <button className=" btn-xs btn-outline-success my-2 my-sm-0 rounded-lg" onClick={()=>props.deleteOneChoice(choice.id)}>Delete</button>
                </td>
            </tr>
        </>
    )

}
const mapStateToProps = (state) => ({
    choices: state.choices,
    places: state.places,
    lines: state.lines,
})
const mapDispatchToProps = (dispatch) => ({
    getAllFlights: ()=> dispatch(getFlights()),
    chooseFlight: (payload)=> dispatch(clientsChoice(payload)),
    deleteOneChoice: (payload)=> dispatch(deleteChoice(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable)
