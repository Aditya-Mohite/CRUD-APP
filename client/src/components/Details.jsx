import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null); // Initialize state
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    const navigate = useNavigate();

    const getData = async () => {
        try {
            const res = await fetch(`http://localhost:8003/getuser/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (res.status === 422 || !res.ok) {
                throw new Error('Error fetching data');
            }

            const data = await res.json();
            setUserData(data); // Set user data
        } catch (error) {
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    useEffect(() => {
        getData();
    }, [id]); // Dependency on id

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }

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
            navigate("/");
        }
    }

    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}>Welcome, {userData ? userData.name : 'User'}</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${userData._id}`}><button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={()=>deleteuser(userData._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name: <span>{userData.name}</span></h3>
                            <h3 className='mt-3'>Age: <span>{userData.age}</span></h3>
                            <p className='mt-3'><MailOutlineIcon />Email: <span>{userData.email}</span></p>
                            <p className='mt-3'><WorkIcon />Occupation: <span>{userData.work}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className='mt-5'><PhoneAndroidIcon />Mobile: <span>{userData.mobile}</span></p>
                            <p className='mt-3'><LocationOnIcon />Location: <span>{userData.address}</span></p>
                            <p className='mt-3'>Description: <span>{userData.desc}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Details;
