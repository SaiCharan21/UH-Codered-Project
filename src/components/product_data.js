import React, {useEffect, useState} from "react";
import axios from "axios";


const url = 'http://localhost:3002/'
const [res, setRes] = useState(null);
useEffect(() => {
    const getData = () => {
        axios.get('http://localhost:3002/api/get').then((response) => {
            return response
        }).then((data) => setRes(data.data))
    }

    getData()
}, [])

export function product_data() {
    {
        res && res.map((product) => (
            <div>
                <div>{product.username}</div>
                <div>{product.title}</div>
                <div>{product.text}</div>
                <div>{product.date_posted}</div>
            </div>
        ))
    }
}

