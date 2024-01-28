import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')  

    const navigator = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        const  employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }

    return (
        <div className='container'>
        <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employment</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter First Name' 
                                    name='firstName' 
                                    value={firstName} 
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Last Name' 
                                    name='lastName' 
                                    value={lastName} 
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Email' 
                                    name='email' 
                                    value={email} 
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div> 

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>                           
                        </form>
                    </div>  
                </div>  
            </div>            
            <br/><br/>
        </div>
    )
}


export default EmployeeComponent
