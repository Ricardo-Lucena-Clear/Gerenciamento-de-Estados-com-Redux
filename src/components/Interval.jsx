import './Interval.css'
import React from "react";
import Card from './Card';
import { connect } from 'react-redux';
import { EditNumberMin, EditNumberMax} from '../store/actions/Numbers';



function Interval(props) {
    const { min, max } = props
 
    return(
        <Card title="Intervalo de Números" red >
        <div className="Interval">
            <span>
                <strong>Mínimo:</strong>
                <input type="number"  value={min} 
                onChange={e => props.EditNumberMin(+e.target.value)} />
            </span> 
            <span>
                <strong>Máximo:</strong>
                <input type="number"  value={max}
                onChange={e => props.EditNumberMax(+e.target.value)}
                />
            </span>
        </div>
        </Card>
    
        )

}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    };
}

function mapDispatchToProps(dispatch){
    return {
        EditNumberMin(newNumber){
            //Action Creator -> Action
            const action =  EditNumberMin(newNumber)
            dispatch(action);
        },
        EditNumberMax(newNumber){
            //Action Creator -> Action
            const action =  EditNumberMax(newNumber)
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
     ) (Interval)