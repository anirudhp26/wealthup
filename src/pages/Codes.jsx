'use client'
import React, { useEffect, useState } from 'react'

export default function Codes() {
    const [code, setCode] = useState('');
    const [ccode, setCcode] = useState('');
    const [responce, setResponce] = useState('');
    const fetchData = async () => {
        try {
            const response2 = await fetch('https://wealthupbackend.vercel.app/getCode');
            const data2 = await response2.json();
            setCode(data2.code);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const checkCode = async () => {
        try {
            fetch('https://wealthupbackend.vercel.app/checkCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: ccode }),
            }).then(async (res) => {
                const data = await res.json();
                console.log(data);
                if (res.status === 200) {
                    setResponce(data.message);
                } else if (res.status === 201) {
                    setResponce(data.message);
                } else {
                    setResponce(data.message);
                }
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <div className='flex w-40'>
                <span>{code}</span>
                <button className="flex" style={{ margin: '2rem' }} onClick={() => { fetchData() }}>Refresh</button>
            </div>
            <input type='text' placeholder='enter the code' onChange={(e) => { setCcode(e.target.value) }}></input>
            <button onClick={() => checkCode()}>Check code</button>
            <p>{responce}</p>
        </div>
    )
}
