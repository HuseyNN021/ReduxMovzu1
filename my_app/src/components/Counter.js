import Decreamnet from "./Decreament";
import Increament from "./Increament";
import './Counter.css'
import { useSelector } from "react-redux";


function Counter() {
    const count=useSelector(store=>store.counter)
    console.log(count);
    return (
        <>
            <div className="Counter">
                <Decreamnet />
                <h1>{count}</h1>
                <Increament />
            </div>
        </>
    )
}
export default Counter;