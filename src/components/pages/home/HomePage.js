import React, {useEffect} from 'react';
import Logo from '../../../assets/airline.svg';
import MainHeader from "../../header/MainHeader";
import {connect} from "react-redux";
import '../../../styles/App.css';



function HomePage (props) {
    const {comp} = props;
    let title;
    comp.map(el=> el.path==="/home"? title=el.head : el)
    // useEffect(()=> props.upFlights(), []);

    return (
        <div style={{width: '80%', margin: "auto"}}>
            <div className='div-menu'>
            <MainHeader title={title}/>
            </div>
            <div style={{marginTop: "30px"}}>
            <img src={Logo} alt='Logo' tytle='Airlines' style={{width: "50%", marginTop: '30px'}}/>
            </div>
            <div className='mt-5'>
                <h3>Create from the list of all flights <br/>your own list of flights</h3>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({

    comp: state.comp,
})
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
