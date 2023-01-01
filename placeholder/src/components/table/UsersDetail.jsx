import React from 'react';
import Container from 'react-bootstrap/Container';
import UsersAlbum from '../pages/UsersAlbum';
import UsersInformation from '../pages/UsersInformation';


function UsersDetail() {

  return (  
    <Container className='py-3'>
      <UsersInformation />
      <UsersAlbum />
    </Container>
  )
}

export default UsersDetail
