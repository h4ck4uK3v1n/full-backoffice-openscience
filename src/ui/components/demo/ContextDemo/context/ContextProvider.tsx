import type { ChildComponentProps } from '../types/types';
import Context from './context';
function contextProvider (props: ChildComponentProps) {
    const { children } = props;
    
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
}
export default contextProvider;