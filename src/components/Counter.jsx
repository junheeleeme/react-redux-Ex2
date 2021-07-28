import React from 'react';
import { connect } from 'react-redux';
import { addCount, minusCount } from '../redux/index';

const Counter = ({count, addCount, minusCount}) => {

    const onClickPlus = () =>{
        addCount("Plus!");
    }

    const onClickMinus = () => {
        minusCount("Minus");
    }

    return(
        <>
        <div className="counter">
            <h2>Counter</h2>
            <p>카운터 : {count}</p> 
            <button onClick={onClickPlus}>PLUS</button>&nbsp;
            <button onClick={onClickMinus}>MINUS</button>
        </div>
        </>
    )
}
 

const mapStateToProps = ({counts}) => ({ count : counts.count });
const mapDispatchToProps = ({addCount, minusCount});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);