import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from './Post'

const Posts = () => {
  return (
    <Container className='my-3' >
        <Row>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
            <Col className='my-3'  sm={12} md={4} >
                <Post />
            </Col>
        </Row>
    </Container>
  )
}

export default Posts