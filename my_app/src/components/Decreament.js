import './Decreament.css'
import { useDispatch } from 'react-redux';

function Decreamnet(){
    const dispatch=useDispatch();
    function Minus(){
        dispatch(
            {
                type: 'DECREAMENT',
                payload: 5
            }
        )
    }
    return(
        <>
            <button onClick={Minus}>-</button>
        </>
    )
}
export default Decreamnet;