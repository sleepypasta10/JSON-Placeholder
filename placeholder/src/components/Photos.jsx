import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(12);
  const [albumId, setAlbumId] = useState("")
  const [search, setSearch] = useState(albumId);

  const loadPhotos = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${page}&albumId=${albumId === "" ? 1 : albumId}`)

    setPhotos(response.data)

  }

  useEffect(() => {
    loadPhotos();
  }, [page, search])

  const loadMore = () => {
    setPage((page) => page + 12)
  }

  const handleChange = (e) => {
    setAlbumId(e.target.value)
  }

  const handleClick = () => {
    setSearch(albumId)
  }


  return (
    <Container>
      <Row>
        <Col>
          <h2 className='h2 fw-bold'>Photo</h2>
        </Col>
      </Row>
      <Row className='my-4'>
        <Col>
          <div className='d-flex items-center gap-2'>
            <div>
              <select className='form-select'>
                <option>Album Id</option>
              </select>
            </div>
            <div>
            <input className='form-control' placeholder='Search by album id' type={"text"} onChange={handleChange} value={albumId}/>
            </div>
            <button className='btn btn-primary mx-2'
           onClick={handleClick}>Search</button>  
          </div>
        </Col>
      </Row>
      <Row lg={4}>
        {photos.map(photo => (
          <Col className="mb-3" key={photo.id}>
            <Card>
              <Card.Img variant="top" src={photo.thumbnailUrl} />
              <Card.Body>
                <Card.Title className='text-truncate'> {photo.title}</Card.Title>
                <Card.Text className='mb-1'>Id: {photo.id}</Card.Text>
                <Card.Text>Album Id: {photo.albumId}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <Button onClick={loadMore}>Load More</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Photos