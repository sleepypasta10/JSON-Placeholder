import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


function UsersInformation() {
    const [userInfo, setUserInfo] = useState([])
    const { userId } = useParams();
   

    const showDetail = async () => {
        const res = await axios.get(`http://localhost:3000/users/${userId}`)
        setUserInfo(res.data);
        // console.log(res.data)
    }

    useEffect(() => {
        showDetail()
    }, [])

    const handleClick = () => {
        console.log("clicked")
    }
    
    return (
        <Row className='mb-4'>
            <Col>
                <div className='mb-4 row'>
                    <div className='col-6'>
                        <h2 className='fw-bold'>{userInfo?.name}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='d-flex flex-column gap-4'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4 className='text-info'>Personal:</h4>
                                </div>
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Id:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userId}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Username:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.username}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4 className='text-info'>Address:</h4>
                                </div>
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Street:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.address?.street}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Suite:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.address?.suite}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>City:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.address?.city}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Zipcode:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.address?.zipcode}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4 className='text-info'>Company:</h4>
                                </div>
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Name:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.company?.name}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>CatchPhrase:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.company?.catchPhrase}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-3 col-4'>
                                            <p className='mb-0'>Bs:</p>
                                        </div>
                                        <div className='col-lg-9 col-8'>
                                            <p className='mb-0 fw-bold'>{userInfo?.company?.bs}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='d-flex items-center justify-content-between'>
                                    <h4 className='text-info'>Contact:</h4>
                                </div>
                            </div>
                            <div className='mb-2 col-12'>
                                <div className='row'>
                                    <div className='col-lg-3 col-4'>
                                        <p className='mb-0'>Email:</p>
                                    </div>
                                    <div className='col-lg-9 col-8'>
                                        <p className='mb-0 fw-bold'>{userInfo?.email}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3 col-4'>
                                        <p className='mb-0'>Website:</p>
                                    </div>
                                    <div className='col-lg-9 col-8'>
                                        <p className='mb-0 fw-bold'>{userInfo?.website}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3 col-4'>
                                        <p className='mb-0'>Phone:</p>
                                    </div>
                                    <div className='col-lg-9 col-8'>
                                        <p className='mb-0 fw-bold'>{userInfo?.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-success' onClick={handleClick}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default UsersInformation

