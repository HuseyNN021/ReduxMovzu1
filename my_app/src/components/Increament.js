import { useDispatch } from "react-redux";

function Increament(){
    const dispatch=useDispatch();
    function Plus(){
        dispatch(
            {
                type: "INCREAMENT",
                payload: 3
            }
        )
    }
    return(
        <>
            <button onClick={Plus}>+</button>
        </>
    )
}
export default Increament;