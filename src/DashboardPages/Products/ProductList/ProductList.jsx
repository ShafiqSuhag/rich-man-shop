import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { SpinnerComponent } from 'react-element-spinner';
import useServerConfig from '../../../hooks/useServerConfig';




const ProductList = () => {
    const serverUrl = useServerConfig()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        axios.get(serverUrl + "/products")
            .then(res => {
                console.log("Product data ", res)
                if (res.status === 200) {
                    setProducts(res.data.productList)
                }
            })
    }, [])

    const handleProductDelete = (name, _id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete ' + name + " ?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('Click Yes' + _id)
                        setIsLoading(true)
                        fetch(serverUrl + '/products', {
                            method: "DELETE",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: _id })
                        })
                            .then(response => response.json())
                            .then(result => {
                                console.log(result)
                                const newProducts = products.filter(product => product._id !== result.id)
                                setProducts(newProducts)
                                setIsLoading(false)

                            })
                            .catch(err => console.log("add tour error - ", err))
                            .finally(() => setIsLoading(false))
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    return (
        <div class="overflow-x-auto relative">
            <SpinnerComponent loading={isLoading} position="centered" className="z-20">
            </SpinnerComponent>
            <div className="">

                <table class="table w-full">
                    <thead>
                        <tr>
                            {/* <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th> */}
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Product Short Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                const { _id, name, image, description, price } = product
                                return (
                                    <tr>
                                        {/* <th>
                                        <label>
                                            <input type="checkbox" class="checkbox" />
                                        </label>
                                    </th> */}
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="w-12 h-12 mask mask-squircle">
                                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">
                                                        {name}
                                                    </div>
                                                    {/* <div class="text-sm opacity-50">
                                                    United States
                                                </div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {price}
                                        </td>
                                        <td>{description ? description.substring(0, 40) + "..." : ""}</td>
                                        <th>
                                            <button onClick={() => handleProductDelete(name, _id)}><i class="fas fa-trash-alt"></i></button>
                                        </th>

                                    </tr>
                                )
                            })
                        }


                    </tbody>
                    {/* <tfoot>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Product Short Description</th>
                        <th>Action</th>
                    </tr>
                </tfoot> */}

                </table>


            </div>




        </div>
    );
};

export default ProductList;