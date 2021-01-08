import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import React, { Component } from 'react';
import { partOptions } from './particle-options';
import Clarifai from 'clarifai';
import FaceRecog from './components/facerecog/FaceRecog';
import Particles from "react-tsparticles";
import './App.css';

const app = new Clarifai.App({
  apiKey: '4452fe136d6644b8a83f40d56ad60bea'
});

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App constructor : ',window.innerWidth);
    this.state = {
      input:'',
      boxes: []
    }
  }

  onInputChange = (event) => {    
    this.setState( {
        input: event.target.value,
        boxes: []
    })
  };

  onBtnSubmit = (event) => {
    app.models.initModel({id: 'd02b4508df58432fbb84e800597b8959'})
    .then(detectFaceModel => {
      if (this.state.input !=='') {
        return detectFaceModel.predict(this.state.input);
      }
    })
    .then(response => (response['outputs'][0]['data']['regions']) ) //Return regions
    .then(regions => {      
      const boxes = regions.map( (region, index) => {
        return ( region.region_info.bounding_box );
      });    
      this.setState( { boxes: boxes } );
      console.log('app.js : boxes : ',boxes)
    })
  }
  render() {
    return (
      <div className="App">
        <Particles id='tsparticles' className='particles' options={ partOptions }/>
        <div className='flex justify-between'>
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
        <FaceRecog boxes={this.state.boxes} imgURL={this.state.input} />              
      </div>
    );
  }
}

export default App;
