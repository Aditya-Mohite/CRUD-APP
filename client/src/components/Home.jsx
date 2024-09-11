import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { LivingOutlined } from '@mui/icons-material';

const Home = () => {

    const [getUserdata, setUserdata] = useState([]);
    console.log(getUserdata);

    const getdata = async(e)=>{

        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            },
            
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data)
        {
            console.log("Error");
        }
        else
        {
            setUserdata(data);
            console.log("Get Data");
        }
    }

    useEffect(()=>{
        getdata();
    },[]);


    const deleteuser = async(id)=>{
        const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if(res2.status === 422 || !deletedata)
        {
            console.log("Error");
        }
        else{
            console.log("User Deleted");
            getdata();
        }
    }

    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/Register" className="btn btn-primary">Add Item</NavLink>
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>


                    {
                        getUserdata.map((element,id)=>{
                            return(
                                <>
                                <tr>
                            <th scope="row">{id+1}</th>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.work}</td>
                            <td>{element.mobile}</td>
                            <td className='d-flex justify-content-between'>
                            <NavLink to={`view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon/></button></NavLink>    
                            <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><CreateIcon/></button></NavLink>
                                <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}><DeleteOutlineIcon/></button>
                            </td>
                        </tr>
                                </>
                            )
                        })
                    }

                        

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home;