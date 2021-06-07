import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecog extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			imageWidth: null,
			imageHeight: null
		}
	}
	updateDims = (event) => {
		const image = document.getElementById('input-image');

		this.setState({
			imageWidth: image.width,
			imageHeight: image.height
		})
	}

  	componentDidMount() {
		window.addEventListener('resize', this.updateDims);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDims);
	}

	calculateFaceLocn = (boxCoords) => {		
		const width = this.state.imageWidth;
		const height = this.state.imageHeight;

		const box = {
			topRow: boxCoords.top_row * height,
			rightCol: width - (boxCoords.right_col * width),
			bottomRow: height - (boxCoords.bottom_row * height),
			leftCol: boxCoords.left_col * width
		}
		return box;
	}

	render() {
		return(
			<div className='center'>
				<div className='relative mt4 center w-80'>
					<img id='input-image' alt='' height='auto'
						onLoad={this.updateDims}  
						src={this.props.imgURL} />
					{this.props.boxes.map((box, index) => {
						const { topRow, rightCol, bottomRow, leftCol} = this.calculateFaceLocn(box);
						return(
							<div key={index} className='bounding-box' 
								style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
						);
					})}
				</div>
			</div>
		)
	}
}

export default FaceRecog;
