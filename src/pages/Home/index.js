import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAppTitle } from '../../redux/actions';
import Header from '../../components/Header';

const Home = () => {
  const appTitle = useSelector((state) => state.appTitle);
  const dispatch = useDispatch();

  console.log('Home component rendered',appTitle);

  const handleChangeTitle = () => {
    dispatch(setAppTitle('New Home App Title'));
  };

  return (
    <div>
    <Header />
      <h1>{appTitle}</h1>
      <p>This is the home.</p>
      <button onClick={handleChangeTitle}>Change App Title</button>
    </div>
  );
};

export default Home;  