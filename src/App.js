import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import React, { Component } from 'react';
import { partOptions } from './particle-options';
import Clarifai from 'clarifai';
import FaceRecog from './components/facerecog/FaceRecog';
import Particles from "react-tsparticles";
import Signin from './components/signin/Signin';
import Register from './components/register/Register';

import './App.css';

const app = new Clarifai.App({
  apiKey: '4452fe136d6644b8a83f40d56ad60bea'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      boxes: [],
      route: 'signin',
      isSignedIn: false
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

  onRouteChange = (route) => {
    this.setState({route: route});

    this.setState( { isSignedIn: (route==='home') });

    if (route==='signin') {
      this.setState({
        input: '', boxes: []
      })
    }
  }

  render() {
    const { isSignedIn, route, boxes, input } = this.state;
    const { onRouteChange } = this;
    return (
      <div className="App">
        <Particles id='tsparticles' className='particles' options={ partOptions }/>
        <div className='flex justify-between'>
          <Logo />
          <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        </div>
        { (route === 'home')
          ? <div>
              <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
              <FaceRecog boxes={boxes} imgURL={input} />              
            </div>
          : ( (route === 'signin')
              ? <Signin isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
              : <Register onRouteChange={onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
