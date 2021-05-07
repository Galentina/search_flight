import React from 'react';
import {getFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import MainHeader from "../../header/MainHeader";
import ClientTable from "./ClientTable";
import {Link} from "react-router-dom";
import '../../../styles/App.css';




function ClientsPage(props){
    const {comp, choices} = props;

    let title;
    comp.map(el=> el.path==="/client"? title=el.head : el)


    return (
        <div className='div-table'>
        <div className='mt-3'>
            <MainHeader title={title}/>
        </div>
            {choices.length===0 &&
                <p className='mt-5'>Go to the page
                    <Link className="nav-link" to='/flights'>All flights</Link>
                    to select your flights</p>
            }

            {choices.length!==0 &&
                <div>
                    <h3 className="l-title">Chosen flights</h3>
                    <table className="table table-striped">
                        <thead>
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
                        {choices.map(el =>
                            <ClientTable choice={el} key={el.id}/>)}
                        </tbody>
                    </table>
                </div>
            }
</div>
    )
}


const mapStateToProps = (state) => ({
    // flights: state.dataFlights,
    places: state.places,
    lines: state.lines,
    comp: state.comp,
    choices: state.choices,
})
const mapDispatchToProps = (dispatch) => ({
    upFlights: ()=> dispatch(getFlights()),
})

export default connect(mapStateToProps, mapDispatchToProps) (ClientsPage);
