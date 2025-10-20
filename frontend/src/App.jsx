import  {EmployeeManagement}  from "./components/EmployeeManagement";
import Header from "./components/Header";
import { TaskManagement } from "./components/TaskManagement";

function App(){
  return (
    <div id="container" className="bg-grey-500">
    <Header></Header>
    <div className="w-10/12 m-auto flex gap-10 mt-10 "><EmployeeManagement ></EmployeeManagement>
    <TaskManagement></TaskManagement>
    </div>
    
    </div>
  )
}
export default App;
