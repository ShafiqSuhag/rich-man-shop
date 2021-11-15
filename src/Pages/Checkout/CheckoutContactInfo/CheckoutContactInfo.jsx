import axios from "axios";
import React, { useEffect, useState } from 'react';
import { SpinnerComponent } from 'react-element-spinner';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
import useServerConfig from "../../../hooks/useServerConfig";



const CheckoutContactInfo = (props) => {
    const serverUrl = useServerConfig()
    const [isProductAdding, setIsProductAdding] = useState(false)
    const { currentUser } = useAuth()
    const [userInfo, setUserInfo] = useState({})
    const {_id,image,  name, price, description} =props.productDetails
    const [isLoading, setIsLoading] = useState(false)

    
    


    

    useEffect(() => {
        console.log("CurrentUserInfo", currentUser)
        setUserInfo(currentUser)
    }, [currentUser])



    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data["fullName"]=userInfo.displayName
        data["email"]=userInfo.email
        data["photoUrl"]=userInfo.photoURL
        data["name"]=name
        data["image"]=image
        data["price"]=price
        data["description"]=description
        data["status"]="pending"
        console.log("onSubmit",data)


        setIsLoading(true)
        axios.post(serverUrl+"/orders", {data})
        .then(response => {
            console.log(response)
            toast("Order placed successfully")
            reset()
            setIsLoading(false)
        })
        .finally(() =>setIsLoading(false))

    };
    // console.log(watch("example")); // watch input value by passing the name of it
    return (

        <>
           <SpinnerComponent loading={isLoading} position="centered" className="z-20">
            </SpinnerComponent>

            <div class="leading-loose">
                <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                    <p class="text-gray-800 font-medium">Customer information</p>
                    <div class="">
                        <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                        <input value={userInfo.displayName}  {...register("fullName", { required: false })} class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                    </div>
                    <div class="mt-2">
                        <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input value={userInfo.email} {...register("email", { required: false })} class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                    </div>
                    <div class="mt-2">
                        <label class="block text-sm text-gray-600" for="cus_number">Contact Number</label>
                        <input  {...register("number", { required: false })} class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_number" type="text" required="" placeholder="Your contact number"/>
                    </div>
                    <div class="mt-2">
                        <label class=" block text-sm text-gray-600" for="Address">Shipping Address</label>
                        <input  {...register("shippingAddress")} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"  type="text" placeholder="Street"  id="Address" />
                    </div>
                    <div class="mt-2">
                        <label class=" text-sm block text-gray-600" for="City">City</label>
                        <input   {...register("shippingCity")} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="City" id="City" />
                    </div>
                    <div class="inline-block mt-2 w-1/2 pr-1">
                        <label class=" block text-sm text-gray-600" for="Country">Country</label>
                        <input   {...register("shippingCountry")} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="Country"  type="text"  placeholder="Country"  />
                    </div>
                    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label class=" block text-sm text-gray-600" for="zip">Zip</label>
                        <input   {...register("zip")} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="zip" type="text"   />
                    </div>
                    {/* <p class="mt-4 text-gray-800 font-medium">Payment information</p>
                <div class="">
                    <label class="block text-sm text-gray-600" for="cus_name">Card</label>
                    <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                </div> */}
                    <div class="mt-4">

                        <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded " type="submit" disabled={isProductAdding}>
                            {
                                isProductAdding && <div className="  animate-spin loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10 mr-7 my-1"></div>
                            }

                            SUBMIT</button>
                    </div>

                </form>
                <div>
                    <ToastContainer />

                </div>
            </div>
          
        </>
    );
};

export default CheckoutContactInfo;