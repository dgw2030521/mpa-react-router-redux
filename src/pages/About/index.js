import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAppTitle } from '../../redux/actions';
import Header from '../../components/Header';

const About = () => {
  const appTitle = useSelector((state) => state.appTitle);
  const dispatch = useDispatch();

  const handleChangeTitle = () => {
    dispatch(setAppTitle('New About App Title'));
  };

  return (
    <div>
      <Header />
      <h1>{appTitle}</h1>
      <p>This is the about page.</p>
      <button onClick={handleChangeTitle}>Change App Title</button>
    </div>
  );
};

export default About;