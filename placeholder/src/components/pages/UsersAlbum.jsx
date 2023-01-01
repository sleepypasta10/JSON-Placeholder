import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row';
import axios from "axios";
import { useParams } from 'react-router-dom';

function UsersAlbum() {
    
    const [usersAlbum, setUsersAlbum] = useState([]);
    const [input, setInput] = useState("")
    
    const {userId} = useParams();

    const showUsersAlbum = async () => {
       const data = await axios.get(` http://localhost:3000/users/${userId}/albums`);
        setUsersAlbum(data.data)
        // console.log(data.data)
    }

    useEffect(() => {
        showUsersAlbum();
    }, [])

    const handleDelete = async(id) => {
        await axios.delete(`http://localhost:3000/albums/${id}`)
        showUsersAlbum();
    } 

    const handleSubmit = async (e) => {
       e.preventDefault();
       await axios.post('http://localhost:3000/albums', input)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
        // console.log(e.target.value)
    }
    

  return (
    <Row>
      <Col>
        <div className='border-top pt-3 mb-3 row'>
            <div className='col-8'>
                <h4>Photo Albums:</h4>
            </div>
        </div>
        <div className='mb-3 row'>
            <div className='col-6'>
                <form className='d-flex items-center gap-3'>
                    <input type={"text"} onChange={handleChange} value={input} className="form-control" placeholder='Title of new album' />
                    <button type={"submit"} onClick={(e) => handleSubmit(e)} className='flex-shrink-0 w-25 btn btn-success btn-lg'>New Album</button>
                </form>
            </div>
        </div>
        <div className='row'>
            {usersAlbum.map((val, index) => (   
            <div className='mb-3 col-md-6' key={val.id}>
                <div className='d-flex items-center justify-content-between border rounded text-decoration-none text-black '>
                    <div className='py-2 flex-shrink-0 border-end d-flex items-center justify-content-center' style={{"width":"50px"}}>{val.id}</div>
                    <div className='py-2 w-100 px-4 text-truncate fw-bold text-start'>{val.title}</div>
                    <div className='py-2 text-center flex-shrink-0' style={{"width":"50px"}}>
                        <button onClick={(e) => handleDelete(val.id)} className='btn btn-danger btn-sm'>X</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </Col>
    </Row>
  )
}

export default UsersAlbum
