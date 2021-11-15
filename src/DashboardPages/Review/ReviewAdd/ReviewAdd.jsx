import axios from "axios";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useServerConfig from "../../../hooks/useServerConfig";



const ReviewAdd = () => {
    const serverUrl = useServerConfig()
    const [uploadImageUrl, setUploadImageUrl] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const [isProductAdding, setIsProductAdding] = useState(false)

    // const notify = () => toast("Wow so easy!");

    // const ratingConfig = {
    //     size: 30,
    //     value: 5,
    //     edit: true
    // };
    let newRating = 0
    const ratingChanged = (ratingValue) => {
        newRating = ratingValue;
        console.log(newRating);
    };






    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      
       

        data["rating"] = newRating;


        console.log("form data", data)
        
        setIsProductAdding(true)
        axios.post(serverUrl + '/reviews', data)
            .then(res => {
                setIsProductAdding(false)
                console.log("Response Result ", res)
                toast("Rating added successfully")
                reset()
                setUploadImageUrl('')
            })
            .catch(error => {
                setIsProductAdding(false)
                // handle error
                console.log(error);
            })
            .finally(() => setIsProductAdding(false))
    };


    console.log(watch("example")); // watch input value by passing the name of it
    const handleAddProductSubmit = (e) => {
        e.preventDefault()
        console.log('submit details')
        const onSubmit = data => console.log(data);
        alert("add product ")

    }

    return (
        <>
            <div className="bg-green-200 py-10 px-5 text-2xl font-semibold">
                Add a Reveiw
            </div>
            <div className="px-10 pt-5">

                <form className="space-y-4 text-gray-700" onSubmit={handleSubmit(onSubmit)}>


                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full px-2 md:w-1/2">
                            <label className="block mb-1" for="formGridCode_name">Display Name</label>
                            <input  {...register("displayName", { required: true })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name" />
                        </div>

                        <div className="w-full px-2 md:w-1/2">
                            <label className="block mb-1" for="formGridCode_last">Rating</label>
                            <ReactStars isHalf={true} count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Reveiw Description</label>
                            <textarea   {...register("description", { required: true })} rows="4" cols="50" className="w-full px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" id="formGridCode_card" />
                        </div>
                    </div>



                    <button className="btn btn-outline btn-primary w-52 " type="submit" disabled={isProductAdding}>
                        {
                            isProductAdding && <div className="  animate-spin loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10 mr-7 my-1"></div>
                        }

                        SUBMIT</button>

                </form>
                <div>
                    <ToastContainer />

                </div>

            </div>
        </>
    );
};

export default ReviewAdd;