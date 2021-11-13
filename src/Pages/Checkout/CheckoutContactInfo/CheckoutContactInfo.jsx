import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';

const CheckoutContactInfo = () => {
    const [isProductAdding, setIsProductAdding] = useState(false)
    const { currentUser } = useAuth()
    const [userInfo, setUserInfo] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    useEffect(() => {
        console.log("CurrentUserInfo", currentUser)
        setUserInfo(currentUser)
    }, [currentUser])


    return (


        <div class="leading-loose">
            <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                <p class="text-gray-800 font-medium">Customer information</p>
                <div class="">
                    <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                    <input value={userInfo.displayName}  {...register("fullName", { required: false })} class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                </div>
                <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                    <input value={userInfo.email} {...register("email", { required: false })} class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                </div>
                <div class="mt-2">
                    <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                    <input  {...register("address", { required: false })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                </div>
                <div class="mt-2">
                    <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                    <input  {...register("city", { required: false })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                    <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                    <input  {...register("country", { required: false })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                    <input  {...register("zip", { required: false })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
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
    );
};

export default CheckoutContactInfo;