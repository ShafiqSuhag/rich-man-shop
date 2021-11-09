import React from 'react';

const AddNewProduct = () => {
    console.log('node eng', process.env.NODE_ENV)
    console.log("imgbdb-api",process.env.REACT_APP_IMGBB_API_KEY)
    const imgBbUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`
    console.log(imgBbUrl)

    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
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
                console.log(result)
                console.log('img ulr ', result?.data?.url)
                console.log('img ulr ', result?.data?.display_url)

            })

    }
    return (
        <div>
            add new product
            <input type="file" id="product-image-upload" onChange={handleImageUpload} accept="image/*" />
        </div>
    );
};

export default AddNewProduct;