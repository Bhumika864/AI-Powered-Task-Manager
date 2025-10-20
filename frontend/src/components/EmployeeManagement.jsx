export const EmployeeManagement=()=>{
  return (
    <div className="Container bg-white shadow-md  p-5 w-1/3" >
      <h2 className="text-2xl pt-5 font-bold" >Add Employee</h2>
      <div className="fields  ">
        <div className="flex flex-row gap-4 mb-2 mt-5 " >
        <label  >Enter Emp Id</label>
        <input className=" border-2 border-gray-200 pl-2 rounded-lg" type="text" placeholder="Enter Emp ID" /></div>
        <div className="flex flex-row mb-2 gap-2" >
        <label  >Enter Emp Name</label>
        <input className=" border-2 border-gray-200  rounded-lg" type="text " placeholder="Enter Emp-name" /></div><div  className="flex flex-row mb-2 gap-2">
        <label  >Enter Emp skills</label>
        <input className=" border-2 border-gray-200 pl-2 rounded-lg" type="text " placeholder="Enter Emp-skills" /></div>
      </div>
      <button className="border-black text-white bg-pink-500 p-2 mt-4 rounded-xl">Add New Emp</button>
    </div>
  )
}