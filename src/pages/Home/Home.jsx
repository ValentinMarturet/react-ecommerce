import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../reducers/slices/counterSlice";

function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <span>{count.value}</span>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Disminuir</button>
    </div>
  );
}

export default Home;
