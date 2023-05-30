import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const SelectDish = () => {


    const [ddata, setDdata] = useState({
        ingredients: {
            vegetables: [

            ],
            spices: [],
            appliances: []
        }
    })
    const datafetch = async () => {
        const { data } = await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
        console.log(data)
        setDdata(data)
    }
    console.log(ddata)
    useEffect(() => {
        datafetch()
    }, [])

    return <>

        <div className=' m-3 bgimg'>
            <div className='d-flex gap-3'>
                <p className='fw-bold fs-1'>{ddata.name}</p>
                <button type="button" class="btn btn-success btn-sm">4.2 *</button>

            </div>
            <div className='w-50'>
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, obcaecati! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, odio?</p>
            </div>
            <div className='d-flex'>
                <i>icon</i>
                <p className='fw-bold'>{ddata.timeToPrepare}</p>
            </div>
            <div className='w-75'>
                <hr className='border-3 border-secondary' />
            </div>

            <div>
                <p className='fw-bold fs-4'>Ingredients</p>
                <p>for 2 people</p>
                <hr />
            </div>
            <div>
                <p className='fw-bold fs-5'>Vegitables(05)</p>
                {
                    ddata.ingredients.vegetables && ddata.ingredients.vegetables.map(item => <div className='d-flex justify-content-between'>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                    )
                }
            </div>
            <div>
                <p className='fw-bold fs-5'>Spices(10)</p>
                {
                    ddata && ddata.ingredients.spices.map(item => <div className='d-flex justify-content-between'>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                    )
                }
            </div>
            <div>
                <p className='fw-bold fs-4'>Appliances</p>
                <div className='d-flex gap-4'>
                    {
                        ddata.ingredients.appliances && ddata.ingredients.appliances.map(item =>
                            <button type="button" class="btn btn-outline-primary w-25">
                                <i className='bi bi-box2-fill'></i>
                                <p>{item.name}
                                </p></button>

                        )
                    }
                </div>
            </div>
        </div>
    </>
}

export default SelectDish