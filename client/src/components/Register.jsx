import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {

    const history = useNavigate();

    const [inpval, setINP] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        desc:""
    })

    const setdata = (e) =>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval)=>{
            return {
                ...preval,
                [name]:value
            }
        })
    }

    const addinpdata = async(e)=>{
        e.preventDefault();

        const {name, email, age, mobile, work, address, desc} = inpval;

        const res = await fetch("http://localhost:8003/register", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, age, mobile, work, address, desc
            })
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data)
        {
            alert("Error");
            console.log("Error");
        }
        else
        {
            alert("Data Added");
            history("/");
            console.log("Data Added");
        }
    }


    return (
        <div className='container'>
            <NavLink to='/'>Home</NavLink>
            <form className='mt-4'>
                <div className="row">
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="email" value={inpval.name} onChange={setdata} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Email Id</label>
                    <input type="email" value={inpval.email} onChange={setdata} name='email' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text" value={inpval.age} onChange={setdata} name='age' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Mobile</label>
                    <input type="number" value={inpval.mobile} onChange={setdata} name='mobile' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Work</label>
                    <input type="text" value={inpval.work} onChange={setdata} name='work' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="text" value={inpval.address} onChange={setdata} name='address' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-lg-12 col-md-12 col-12">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea name="desc" value={inpval.desc} onChange={setdata} className='form-control' id="" cols="30" rows="5"></textarea>
                </div>
                
                <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register;