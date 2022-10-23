import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {fetchTodos} from "../src/redux/slices/todoSlice";


function App() {
  const dispatch = useDispatch();
  const items = useSelector(state=>state);
  console.log(items.todo.data);

  if(items.todo.isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={()=>dispatch(fetchTodos())}>Fetch Data</button>
      <div>
        {
          items.todo.data && items.todo.data.map((value, index)=>(
            <h1 key={index}>{value.title}</h1>
          ))
        }
      </div>
    </div>
  );
}

export default App;
