export const TaskManagement=()=>{
  return (
    <div className="Container bg-white shadow-md  p-10 w-1/2" >
      <h2 className="text-2xl font-bold" >Add Tasks</h2>
      <div className="fields  ">
        <div className="flex flex-row gap-4 mb-2 mt-5 " >
        <label>Enter Task Title</label>
        <input  className=" border-2 border-gray-200 rounded-lg" type="text" placeholder="Enter Emp ID" /></div>
        <div className="flex flex-row mb-2 gap-4" >
        <label  >Enter Task Description</label>
        <input className=" border-2 border-gray-200 pl-2 rounded-lg" type="text " placeholder="Enter Task Description" /></div>
        <div className="flex flex-row mb-2 gap-4" >
        <label>Select Emp</label>     
        <select className="" >
    <option className=" border-2 border-gray-200 pl-2 rounded-lg" >Select Emp</option>
  </select></div>

        
      </div>
      <button className="border-black mt-5 bg-pink-500 p-2 rounded-xl text-white ">Assign Task</button>
    </div>
  )
}