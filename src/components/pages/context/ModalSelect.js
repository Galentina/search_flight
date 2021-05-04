import React from 'react';
import '../../../styles/App.css'
import {getFlights} from "../../../redux/actions";
import {connect} from "react-redux";
import { Drawer} from 'antd';
import 'antd/dist/antd.css';



function ModalSelect(props){
    const {interior} = props
    const {visible, setVisible} = props;
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Drawer
                width="35%"
                placement="right"
                mask={false}
                onClose={onClose}
                visible={visible}
            >
                {interior}
            </Drawer>

      </>
    )

}
const mapStateToProps = (state) => ({
    flights: state.flights,
    places: state.places,
    lines: state.lines,
});

const mapDispatchToProps = (dispatch) => ({
    getFlightsList: () => dispatch(getFlights()),
})


export default connect(mapStateToProps, mapDispatchToProps) (ModalSelect);


