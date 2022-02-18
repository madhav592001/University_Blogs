import React from 'react';
import { Container } from 'react-bootstrap';
import HomeHeader from '../components/HomeHeader';
import Posts from '../components/Posts';

const HomeScreen = () => {
  return (
    <>
      <HomeHeader />
      <Posts />
    </>
  );
};

export default HomeScreen;
