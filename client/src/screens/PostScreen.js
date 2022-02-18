import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const PostScreen = () => {
    return (
        <Container className='py-4' >
            <img src='/assets/post.jpg' className='w-100 mb-3 ' style={{ height: "400px", borderRadius: "5px", objectFit: "contain" }} alt='image' />
            <h3 className='text-center  ' >
                Title Of The Post
                <div className='float-end'>
                    <button className='bg-light border border-light' ><FaEdit fontSize={30} style={{ color: "teal" }} /></button>
                    <button className='bg-light border border-light' ><MdDelete style={{ color: "red" }} fontSize={30} /></button>
                </div>
            </h3>
            <br />
            <div className='d-flex flex-row justify-content-between' >
                <h5><strong>By Madhav Shukla</strong></h5>
                <small ><span style={{ color: '#D29D2B' }} > 1 hours ago</span></small>
            </div>
            <hr />
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos beatae vero sunt dolores consectetur consequuntur eum dignissimos, porro, perferendis, est culpa quam explicabo aut adipisci alias. Eius porro mollitia aliquam facilis. Temporibus qui non doloribus, corrupti tenetur eveniet ullam nesciunt fuga maiores voluptates doloremque delectus minus illo expedita velit assumenda dolorum tempora nemo. Odio possimus fuga consequuntur necessitatibus itaque cum dolores, voluptas dolorem quae ut quasi, tenetur consequatur repellendus explicabo magnam rerum nisi temporibus iste vitae? Tenetur dicta amet dolorem, delectus, culpa ratione laboriosam cum autem hic debitis rerum omnis ab quisquam repudiandae possimus velit, a corporis molestiae dolor deleniti.</span>
        </Container>
    );
};

export default PostScreen;
