import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecog extends Component {	
	constructor(props) {
		super(props);
		this.pc = 0.8;
		this.imgRef = React.createRef();
		this.imageWidth = null;
		this.imageHeight = null;
		this.state = {
			imageWidth: null,
			imageHeight: null
		}
	}
	updateDims = () => {
		// Method 1: DOM element
		const image = document.getElementById('input-image');
		console.log('updateDims : method #1 : width & height = ',image.width,' ',image.height);

		// Method 2: Image URL
		// const image = new Image();
		// image.src = this.props.imgURL;
		// console.log('updateDims : method #2 : width & height = ',image.width,' ',image.height);

		// Method 3: Image reference
		// const image = {
		// 	width: this.imgRef.current.clientWidth,
		// 	height: this.imgRef.current.clientHeight
		// }
		// console.log('updateDims : method #3 : width & height = ',image.width,' ',image.height);

		this.setState({
			imageWidth: image.width,
			imageHeight: image.height
		})
		this.imageWidth = image.width;
		this.imageHeight = image.height;
		console.log('updateDims : method #3 : width & height = ',this.imageWidth,' ',this.imageHeight);
	}

  	componentDidMount() {
		window.addEventListener('resize', this.updateDims);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDims);
	}

	calculateFaceLocn = (boxCoords) => {		

		//Doesnt make Magic Blue Box, but values are correct
		// const image = new Image();
		// image.src = this.props.imgURL;
		// const ratio = (image.width > window.innerWidth * this.pc) ? (window.innerWidth * this.pc / image.width) : 1;
		// console.log('ratio: ',ratio);
		// const width = image.width;
		// const height = image.height;

		//Makes Magic Blue Box, but incorrect values
		// const width = this.imageWidth;
		// const height = this.imageHeight;
		const width = this.state.imageWidth;
		const height = this.state.imageHeight;

		console.log('calculateFaceLocn : width & height :',	width,' ',height);

		const box = {
			topRow: boxCoords.top_row * height,
			rightCol: width - (boxCoords.right_col * width),
			bottomRow: height - (boxCoords.bottom_row * height),
			leftCol: boxCoords.left_col * width
		}
		console.log('calculateFaceLocn : topRow, rightCol, bottomRow, leftCol: ', box.topRow, box.rightCol, box.bottomRow, box.leftCol);

		return box;
	}

	render() {
		return(
			<div className='center'>
				{/* <div className='relative mt4 center w-80'  > */}
				<div className={`relative mt4 center w-${this.pc * 100}`}  >
					<img id='input-image' alt='' height='auto' ref={this.imgRef} src={this.props.imgURL} />
					{this.props.boxes.map((box, index) => {
						const { topRow, rightCol, bottomRow, leftCol} = this.calculateFaceLocn(box);
						// console.log('facerecog render : topRow, rightCol, bottomRow, leftCol: ',topRow, rightCol, bottomRow, leftCol);
						return(
							<div key={index} className='bounding-box' 
								style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
						);
					})}
				</div>
			</div>
		)
	}
	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):

		if (this.props.imgURL !== prevProps.imgURL) {
			if (this.props.imgURL !== null) {
				const image = new Image();
				image.src = this.props.imgURL;
				image.onload = () => {
					const ratio = (image.width > window.innerWidth * this.pc) ? (window.innerWidth * this.pc / image.width) : 1;

					this.imageWidth = (this.imgRef.current.clientWidth) || (image.width * ratio);
					this.imageHeight = (this.imgRef.current.clientHeight) || (image.height * ratio);

					this.setState( {
						imageWidth: this.imageWidth,
						imageHeight: this.imageHeight
					});

					console.log('imgRef: ',this.imgRef.current.clientWidth,' ',this.imgRef.current.clientHeight,
					'. image: ',image.height,' ',image.width,' this.dims: ', this.imageWidth,' ',this.imageHeight)
				}
			} else {
				console.log('image URL is empty string')
			}
		}	
	}
}

export default FaceRecog;
