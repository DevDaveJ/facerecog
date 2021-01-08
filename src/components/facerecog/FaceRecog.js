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

		this.setState({
			imageWidth: image.width,
			imageHeight: image.height
		})
		this.imageWidth = image.width;
		this.imageHeight = image.height;
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
				<div className={`relative mt4 center w-${this.pc * 100}`}  >
					<img id='input-image' alt='' height='auto' ref={this.imgRef} src={this.props.imgURL} />
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
