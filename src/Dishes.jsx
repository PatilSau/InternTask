import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dishes = () => {
    const [ddata, setDdata] = useState([])
    const datafetch = async () => {
        const { data } = await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
        console.log(data)
        setDdata(data)
        // console.log(data.popularDishes)
    }
    console.log(ddata)
    useEffect(() => {
        datafetch()
    }, [])
    return <>

        <div>

            <div className='bg-dark p-4 h-5' style={{ height: "50px" }}>

            </div>
            <div className='bg-light p-3 w-75 mx-auto rounded-3 shadow-lg ' style={{ marginTop: "-30px", height: "80px" }}>
                <div className="d-flex mt-3 justify-content-between container text-center align-items-center">
                    <div className='d-flex'>
                        <div>icon</div>
                        <div>21 May 2021</div>
                    </div>
                    <div className='d-flex'>
                        <div>icon</div>
                        <div>21 May 2021</div>
                    </div>
                </div>
            </div>

            <div class="mt-5 d-flex justify-content-center gap-3">
                <button type="button" class="btn btn-outline-warning border-secondary text-secondary rounded-5">Italian</button>
                <button type="button" class="btn btn-outline-primary border-secondary text-secondary rounded-5">Indian</button>
                <button type="button" class="btn btn-outline-primary border-secondary text-secondary rounded-5">Indian</button>
                <button type="button" class="btn btn-outline-primary border-secondary text-secondary rounded-5">Indian</button>
            </div>

            <div className='m-3'>
                <p className='fw-bold fs-4'>Popular Dishes</p>
            </div>

            <div className="d-flex gap-2 text-center">
                <button type="button" class="btn btn-outline-warning border-2 rounded-circle p-0">
                    <img className='img-fluid  rounded-circle m-0 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD7dWCNCb4exuyHJQouDVf1AcmTi--GRZFQ&usqp=CAU" alt="" />
                </button>
                <button type="button" class="btn btn-outline-warning rounded-circle p-0">
                    <img className='img-fluid  rounded-circle m-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD7dWCNCb4exuyHJQouDVf1AcmTi--GRZFQ&usqp=CAU" alt="" />
                </button>
                <button type="button" class="btn btn-outline-warning rounded-circle p-0">
                    <img className='img-fluid  rounded-circle m-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD7dWCNCb4exuyHJQouDVf1AcmTi--GRZFQ&usqp=CAU" alt="" />
                </button>
                <button type="button" class="btn btn-outline-warning rounded-circle p-0">
                    <img className='img-fluid  rounded-circle m-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD7dWCNCb4exuyHJQouDVf1AcmTi--GRZFQ&usqp=CAU" alt="" />
                </button>
                <button type="button" class="btn btn-outline-warning rounded-circle p-0">
                    <img className='img-fluid  rounded-circle m-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD7dWCNCb4exuyHJQouDVf1AcmTi--GRZFQ&usqp=CAU" alt="" />
                </button>
                <button type="button" class="btn btn-outline-warning rounded-circle p-0">
                    <img className='img-fluid  rounded-circle m-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAD7dWCNCb4exuyHJQouDVf1AcmTi--GRZFQ&usqp=CAU" alt="" />
                </button>

            </div>
            <hr className='text-secondary border-5' />
            <div className='m-3 d-flex justify-content-between'>
                <p className='fw-bold fs-4'>Recommended <i class="bi bi-arrow-down-circle-fill"></i></p>
                <button type="button" class="btn btn-dark w-25">menu</button>
            </div>
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className='row '>
                            <div className="col-sm-5">

                                <div className='d-flex gap-3'>
                                    <p className='fw-bold fs-3'>{ddata.name}</p>
                                    <i className='bi bi-box2-fill'></i>
                                    <button type="button" class="btn btn-success">4.2 *</button>
                                    <Link to="/select"><button type="button" class="btn btn-primary">Select</button></Link>

                                </div>
                                <div className='d-flex gap-3'>
                                    <div>
                                        {/* <p>{ddata && ddata.ingredients.appliances[0].name}</p> */}
                                    </div>


                                </div>
                                <div>
                                    <p>chiken fried in deep tomato sauce with delicious spices</p>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <div className="card">
                                    <img className='img-fluid w-50 rounded-3' src="https://media.istockphoto.com/id/497784792/photo/chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=F3L4dtO0xsPoDY0ISn_zRTpYJLE_YyQDvQnd6Q3ItlY=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='row '>
                            <div className="col-sm-5">

                                <div className='d-flex gap-3'>
                                    <p className='fw-bold fs-3'>{ddata.name}</p>
                                    <i className='bi bi-box2-fill'></i>
                                    <button type="button" class="btn btn-success">4.2 *</button>
                                    <Link to="/select"><button type="button" class="btn btn-primary">Select</button></Link>


                                </div>
                                <div className='d-flex gap-3'>
                                    <div>
                                        {/* <p>{ddata.ingredients.appliances[0].name}</p> */}
                                    </div>


                                </div>
                                <div>
                                    <p>chiken fried in deep tomato sauce with delicious spices</p>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <div className="card">
                                    <img className='img-fluid w-50 rounded-3' src="https://media.istockphoto.com/id/497784792/photo/chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=F3L4dtO0xsPoDY0ISn_zRTpYJLE_YyQDvQnd6Q3ItlY=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='row '>
                            <div className="col-sm-5">

                                <div className='d-flex gap-3'>
                                    <p className='fw-bold fs-3'>{ddata.name}</p>
                                    <i className='bi bi-box2-fill'></i>
                                    <button type="button" class="btn btn-success">4.2 *</button>
                                    <Link to="/select"><button type="button" class="btn btn-primary">Select</button></Link>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div>
                                        {/* <p>{ddata.ingredients.appliances[0].name}</p> */}
                                    </div>


                                </div>
                                <div>
                                    <p>chiken fried in deep tomato sauce with delicious spices</p>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <div className="card">
                                    <img className='img-fluid w-50 rounded-3' src="https://media.istockphoto.com/id/497784792/photo/chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=F3L4dtO0xsPoDY0ISn_zRTpYJLE_YyQDvQnd6Q3ItlY=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='row '>
                            <div className="col-sm-5">

                                <div className='d-flex gap-3'>
                                    <p className='fw-bold fs-3'>{ddata.name}</p>

                                    <i className='bi bi-box2-fill'></i>
                                    <button type="button" class="btn btn-success">4.2 *</button>
                                    <Link to="/select"><button type="button" class="btn btn-primary">Select</button></Link>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div>
                                        {/* <p>{ddata.ingredients.appliances[0].name}</p> */}
                                    </div>


                                </div>
                                <div>
                                    <p>chiken fried in deep tomato sauce with delicious spices</p>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <div className="card">
                                    <img className='img-fluid w-50 rounded-3' src="https://media.istockphoto.com/id/497784792/photo/chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=F3L4dtO0xsPoDY0ISn_zRTpYJLE_YyQDvQnd6Q3ItlY=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='row '>
                            <div className="col-sm-5">

                                <div className='d-flex gap-3'>
                                    <p className='fw-bold fs-3'>{ddata.name}</p>
                                    <i className='bi bi-box2-fill'></i>

                                    <button type="button" class="btn btn-success">4.2 *</button>
                                    <Link to="/select"><button type="button" class="btn btn-primary">Select</button></Link>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div>
                                        {/* <p>{ddata.ingredients.appliances[0].name}</p> */}
                                    </div>


                                </div>
                                <div>
                                    <p>chiken fried in deep tomato sauce with delicious spices</p>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <div className="card">
                                    <img className='img-fluid w-50 rounded-3' src="https://media.istockphoto.com/id/497784792/photo/chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=F3L4dtO0xsPoDY0ISn_zRTpYJLE_YyQDvQnd6Q3ItlY=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dishes