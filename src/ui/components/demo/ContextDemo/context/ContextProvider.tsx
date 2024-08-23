import type { ChildComponentProps } from '../types/types';
import Context from './context';
import { useReducer } from 'react';
import type { StateType } from '../types/types';
import ContextReducer from '../reducer/contextReducer';

function ContextProvider (props: ChildComponentProps) {
    const { children } = props;
    const initialState : StateType = { backGroundColor: '#fff', color: '#000', test: 'Hola amigos'};
    const [state, dispatch] = useReducer(ContextReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}> 
            {children}
        </Context.Provider>
    );
}
export default ContextProvider;