import axios from "axios";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddNewProduct = () => {

    const [uploadImageUrl, setUploadImageUrl] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const [isProductAdding, setIsProductAdding] = useState(false)

    // const notify = () => toast("Wow so easy!");







    const handleImageUpload = (e) => {
        if (e.target.files[0]) {
            const imgBbUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`
            setIsUploading(true)
            console.log("Image name", e.target.files[0])
            var form = new FormData();
            form.append("image", e.target.files[0])
            fetch(imgBbUrl, {
                "method": 'POST',
                "timeout": 0,
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "body": form
            })
                .then(response => response.json())
                .then(result => {
                    setIsUploading(false)
                    console.log("result", result)
                    console.log('img ulr ', result?.data?.url)
                    console.log('img ulr ', result?.data?.display_url)
                    setUploadImageUrl(result?.data?.url)

                })
                .finally(() => setIsUploading(false))
        }


    }

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (!uploadImageUrl) {
            alert("Please upload product image")
            return;
        }
        console.log("add product submit", data)
        data["image"] = uploadImageUrl
        console.log("form data", data)
        setIsProductAdding(true)
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                setIsProductAdding(false)
                console.log("Response Result ", res)
                toast("Product added successfully")
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
                ADD NEW PRODUCT
            </div>
            <div className="px-10 pt-5">

                <form className="space-y-4 text-gray-700" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Product Name</label>
                            <input  {...register("name", { required: true })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full px-2 md:w-1/2">
                            <label className="block mb-1" for="formGridCode_name">Product Price</label>
                            <input  {...register("price", { required: true })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" id="formGridCode_name" />
                        </div>

                        <div className="w-full px-2 md:w-1/2">
                            <label className="block mb-1" for="formGridCode_last">Product Category</label>
                            {/* <input  {...register("category", { required: true })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_last" /> */}
                            <select {...register("category", { required: true })} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">
                                <option value="Man">Man</option>
                                <option value="Women">Women</option>
                                <option value="Unisex">Unisex</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block mb-1" for="formGridCode_card">Product Description</label>
                            <textarea   {...register("description", { required: true })} rows="4" cols="50" className="w-full px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" id="formGridCode_card" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-6/12">
                            <p>Upload product image</p>
                            <div>
                                {isUploading && <i className="fas fa-spinner animate-spin text-2xl text-blue-500"></i>}
                                <input className="m-5" type="file" id="product-image-upload" onChange={handleImageUpload} accept="image/*" />
                            </div>
                        </div>
                        <div className="w-6/12">
                            {
                                uploadImageUrl && <div className="m-5 bg-gray-100 border  text-sm rounded px-2 py-1 inline-block ">
                                    {/* {uploadImageUrl} */}
                                    <img src={uploadImageUrl} className="" alt="" className="h-52" />
                                </div>
                            }

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

export default AddNewProduct;