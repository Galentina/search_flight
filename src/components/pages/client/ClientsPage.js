import React from 'react';
import {getFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import MainHeader from "../../header/MainHeader";





function ClientsPage(props){
    const {comp} = props;

    let title;
    comp.map(el=> el.path==="/client"? title=el.head : el)


    return (
        <div style={{width: '80%', margin: "auto"}}>
            <MainHeader title={title}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    // flights: state.dataFlights,
    places: state.places,
    lines: state.lines,
    comp: state.comp,
})
const mapDispatchToProps = (dispatch) => ({
    upFlights: ()=> dispatch(getFlights()),
})

export default connect(mapStateToProps, mapDispatchToProps) (ClientsPage);
