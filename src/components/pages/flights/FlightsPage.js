import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import MainHeader from "../../header/MainHeader";
import {getAirlines, getFlights, getPlaces, searchFlights} from "../../../redux/actions";
import 'bootstrap/dist/css/bootstrap.css'
import FlightTable from "./FlightTable";
import Paginate from "../context/Paginate";
import ModalSelect from '../context/ModalSelect';
import ModalFlights from "./ModalFlights";
import ClientInfoButton from "./ClientInfoButton";
import FlightInfo from "./FlightInfo";
import '../../../styles/App.css';


function FlightsPage(props) {
    const {comp, flights, choices} = props;

    let title;
    comp.map(el => el.path === "/info" ? title = el.head : el)

    useEffect(() => props.getFlightsList(), []);
    useEffect(() => props.getPlacesList(), []);
    useEffect(() => props.getAirlinesList(), []);
    const update = () => {
        props.getFlightsList();
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [flightsPerPage, setFlightsPerPage] = useState(15);


    const indexLastFlight = currentPage * flightsPerPage;
    const indexFirstFlight = indexLastFlight - flightsPerPage;
    const currentFlights = flights.slice(indexFirstFlight, indexLastFlight)

    const pageCounter = (num) => setCurrentPage(num)

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };


    return (
        <div className='mt-10 mb-3 d-flex pl-5' >
            <div className='div-table'>
                <div className='l-title'>
                    <MainHeader title={title}/>
                </div>
                <div className="float-right " style={{margin: "40px 0 30px 0"}}><br/>
                    <button className="btn btn-outline-success " type="search" onClick={() => update()}>All items
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-outline-success mr-2" type="search" onClick={() => {
                        showDrawer();
                        setCurrentPage(1)
                    }}>Search for items
                    </button>
                    <ClientInfoButton/>
                </div>

            <ModalSelect visible={visible} setVisible={setVisible} interior={<ModalFlights pageCounter={pageCounter}/>}/>
            <table className="table table-striped">
                <thead >
                    <tr className="table-primary">
                    <th scope="col">Number</th>
                    <th scope="col">Flight departure day</th>
                    <th scope="col">Flight departure time</th>
                    <th scope="col">Flight Name</th>
                    <th scope="col">Flight Direction</th>
                    <th scope="col">Select flight</th>
                    </tr>
                </thead>
                <tbody>
                 {currentFlights.map((el, i)=>
                 <FlightTable flight={el} key={i}/>
                 )}
                 </tbody>
            </table>
            <Paginate itemsPerPage={flightsPerPage} totalItems={flights.length} pageCounter={pageCounter}/>
            </div >
        <div className='div-small-table'>
            <FlightInfo/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FlightsPage)
