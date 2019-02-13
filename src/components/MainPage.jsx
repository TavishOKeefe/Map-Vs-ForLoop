import React from 'react';
import { Link } from 'react-router-dom';
import bison from '../assets/images/kisspng-warrior.png';
import ryu from '../assets/images/kisspng-ryu.png';

const styles = {
  imageWrapper: {
    float: 'left',
    height: 400,
    width: 400
  },
  move: {
    float: 'right',
    height: 400,
    width: 400
  },
  h1: {
    marginTop: 200,
    textAlign: 'center',
    fontSize: 60,
  }
};

function MainPage(){
  return (
    <div>
      <img style= {styles.imageWrapper} src={bison}/>
      <img style= {styles.move} src={ryu}/>
        <h1 align="center" style={styles.h1}>VS</h1>
    </div>
  );
}

export default MainPage;
