import React from 'react';

const ImageLinkForm = () => {
	return(
		<div>
			<p className='f4'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<p className='f5'>
				{'Enter the URL of an image and click \'Detect\'.'}
			</p>
			<div id='formId' className='center pa4 w-60 br3 shadow-1'>
				<input id='inputId' className=' pa2 w-100 center' type='text'/>
				<button id='buttonId' className='w-50 grow link ph3 pv2 dib black bg-light-purple'>
					Detect
				</button>
			</div>
		</div>
	);
}
export default ImageLinkForm;

