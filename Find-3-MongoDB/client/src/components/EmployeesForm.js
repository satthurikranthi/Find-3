import React, { useState } from 'react'

function EmployeesForm() {

    let [employees,setEmployees] = useState([]);


    let getEmployeeFromServer = async ()=>{


        let reqOptions = {

           method:"GET"

        }

        let JSONData= await fetch("http://localhost:1586/getEmployees",reqOptions);


        let JSOData = await JSONData.json();
        setEmployees(JSOData);
        console.log(JSOData);

    }




  return (
    <div>
        <form>
        <button type="button"
        onClick={() =>{
            getEmployeeFromServer();
        }}
        >Get Employees</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>S.NO.</th>
                    <th>id</th>
                    <th>profilepic</th> 
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((ele,i)=>{
                    return(
                        <tr>
                            <td>{i+1}</td>
                    
                <td>{ele.id}</td>
                    <td>
                        <img src={ele.profilepic}></img>
                        </td> 
                    <td>{ele.FirstName}</td>
                    <td>{ele.LastName}</td>
                    <td>{ele.Age}</td>
                    <td>{ele.Email}</td>
                    <td>{ele.Gender}</td>
                    <td>{ele.Department}</td>
                    <td>{ele.Country}</td>
                </tr>
                    )
                })}
                
            </tbody>
            <tfoot></tfoot>
        </table>
       
    </div>
  )
}

export default EmployeesForm