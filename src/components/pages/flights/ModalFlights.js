import React, {useEffect, useState} from 'react';
import '../../../styles/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {getAirlines, getFlights, getPlaces, searchFlights} from "../../../redux/actions";
import {connect} from "react-redux";


function ModalFlights(props) {

    const {places, lines} = props;
    const useAirlines = ['--', ...lines];
    const useCities = ['--', ...places];

    const [newData, setData] = useState('')
    const [newTime, setTime] = useState('')
    const [newName, setNewName] = useState('');
    const [newDirection, setNewDirection] = useState('');

    useEffect(()=>props.getPlacesList(), [])
    useEffect(()=>props.getAirlinesList(), [])

    const updateFlights=(data, time, name, direction)=>{
        let newData1= newData.replace(/[-]/g,'')
        let newTime1= newTime.replace(/[:]/g,'')
        let payload={data: newData1, time: newTime1, name: newName, direction: newDirection}
        props.searchForFlights(payload);
        setData('');
        setTime('');
        setNewName('');
        setNewDirection('');
    }

    return (
        <div>
            <h2>Search for flight</h2>
            <hr/>
            <table className='mt-5'>
                <tbody>
                <tr>
                    <td>schedule Date from:</td>
                    <td><input className='inputModal' type="date" min="2021-04-19" max="2021-06-16" value={newData}
                               onChange={(e) => setData(e.target.value)}/>
                    </td>

                </tr>
                <tr>
                    <td>schedule Time from:</td>
                    <td><input className='inputModal' type="time" min="00:00" max="23:59" value={newTime}
                               onChange={(e) => setTime(e.target.value)}/>
                    </td>

                </tr>
                <tr>
                    <td>Flight Name:</td>
                    <td><select className="inputModal" value={newName}
                                onChange={(e) => setNewName(e.target.value)}>
                        {useAirlines.map(el => <option>{el}</option>)}
                    </select>&nbsp;

                    </td>
                </tr>
                <tr>
                    <td>Flight Direction:</td>
                    <td><select className="inputModal" value={newDirection}
                                onChange={(e) => setNewDirection(e.target.value)}>
                        {useCities.map(el => <option>{el}</option>)}
                    </select>&nbsp;

                    </td>
                </tr>
                </tbody>
            </table>
            <div className="float-right">
            <button className="btn btn-primary mt-4 mb-3" onClick={()=>props.getFlightsList()}>Choose from all flights</button>
            <button className="btn btn-primary ml-sm-2 mt-4 mb-3" onClick={()=>updateFlights(newData, newTime, newName, newDirection)}>Search</button>{' '}
            </div>

        </div>
    )

}

const mapStateToProps = (state) => ({
    flights: state.flights,
    places: state.places,
    lines: state.lines,
});

const mapDispatchToProps = (dispatch) => ({
    getFlightsList: () => dispatch(getFlights()),
    getPlacesList: () => dispatch(getPlaces()),
    getAirlinesList: () => dispatch(getAirlines()),
    searchForFlights: (payload) => dispatch(searchFlights(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalFlights);
