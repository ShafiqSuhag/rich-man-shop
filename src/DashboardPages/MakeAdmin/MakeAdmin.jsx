import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useForm } from 'react-hook-form';
import useServerConfig from '../../hooks/useServerConfig';


const MakeAdmin = () => {

    const serverUrl = useServerConfig()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false)
   
    const onSubmit = data => {
        
        console.log(data)
        console.log("Email-", data.email)
        if(data.email){
            alert("Email field is empty.");
        }
        
        confirmAlert({
            title: '',
            message: 'Are you sure to make admin  ' + data.email + " ?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('Click Yes')
                        setIsLoading(true)
                        fetch(serverUrl + '/make-admin', {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ email: data.email })
                        })
                            .then(response => response.json())
                            .then(result => {
                                console.log(result)
                                
                                setIsLoading(false)

                            })
                            .catch(err => console.log("add tour error - ", err))
                            .finally(()=> setIsLoading(false))
                    }
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };
    console.log(errors);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-10  card bg-base-200 flex">
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="email"  className="input"  {...register("email", { required: true, maxLength: 80 })} />
                    </div>
                    <input type="submit" className="btn btn-primary btn-sm my-3 w-80"/>
                </div>
            </form>


        </div>
    );
};

export default MakeAdmin;



