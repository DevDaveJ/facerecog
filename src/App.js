import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import React, { Component } from 'react';
import { partOptions } from './particle-options';
import FaceRecog from './components/facerecog/FaceRecog';
import Particles from "react-tsparticles";
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import Rank from './components/Rank/Rank';
import './App.css';

const initialState = {
  input:'',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    email: '',
    name: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = (initialState);
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {    
    this.setState( {
        input: event.target.value,
        boxes: []
    })
  };

  onBtnSubmit = (event) => {
    const url = `${this.props.env.baseURL}/imageurl`;
    fetch(url,{
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.ok ? response.json() : null)
    .then(response => {
      if (response) {
        const url = `${this.props.env.baseURL}/image`; 
        fetch(url, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }))
        })
        .catch(console.log)

        const regions = response['outputs'][0]['data']['regions'];
        const boxes = regions.map( (region, index) => {
          return ( region.region_info.bounding_box );
        });    
        this.setState( { boxes: boxes } );
      }
    })
    .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    this.setState({route: route});

    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
  }

  render() {
    const { isSignedIn, route, boxes, input } = this.state;
  
    return (
      <div className="App">
        <Particles id='tsparticles' className='particles' options={ partOptions }/>
        <div className='flex justify-between'>
          <Logo />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        </div>
        { (route==='signin') ?
            (<Signin 
              {...this.props.env}
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange} 
            />)
          : 
            (route==='register') ?
              (<Register 
                {...this.props.env}
                loadUser={this.loadUser} 
                onRouteChange={this.onRouteChange} 
              />) 
            :
              (<div>
                <Rank
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
                <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
                <FaceRecog boxes={boxes} imgURL={input} />              
              </div>)
        }
      </div>
    );
  }
}

export default App;
