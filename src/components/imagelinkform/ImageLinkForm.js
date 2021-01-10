import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( { onInputChange, onBtnSubmit } ) => {
	return(
		<div>
			<p className='f4'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<p className='f5'>
				{'Enter the URL of an image and click \'Detect\'.'}
			</p>

			<div id='formId' className='center pa3 w-100 w-80-ns br3 shadow-1'>
				<input id='inputId' onChange={onInputChange} 
					className='w-100 pa2 dib-ns w-70-ns db' 
					type='text'/>
				<button id='buttonId' 
					className='w-100 pv2 ph3 grow br-pill link white fw6 f4 dib-ns mh1 w-25-ns'
					onClick={onBtnSubmit}>Detect</button>
			</div>
		</div>
	);
}
export default ImageLinkForm;

