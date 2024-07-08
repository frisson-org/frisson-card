import { useRef, useState } from 'react';
import Content from './components/Content';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import GalleryPopup from './components/GalleryPopup';
import './App.scss';
import { isMobile } from './helpers/helpers';

function App() {
	const footerRef = useRef( null );

	const [ isPopupOpen, setIsPopupOpen ]           = useState( false );
	const [ activeSlideIndex, setActiveSlideIndex ] = useState( 0 );

	const handleSlideClick = ( index ) => {
		setActiveSlideIndex( index );
		setIsPopupOpen( true );
	};

	const closePopup = () => {
		setIsPopupOpen( false );
	};

	return (
		<>
			<main className="f-main f-outer">
				<div className="f-wrapper">
					<div className="f-container flex jcspb">
						<Content footerRef={ footerRef }/>
						<Gallery onSlideClick={ handleSlideClick }/>
					</div>
				</div>
			</main>

			<Footer ref={ footerRef }/>

			{ isPopupOpen && isMobile &&
				<GalleryPopup
					activeSlideIndex={ activeSlideIndex }
					onClose={ closePopup }
				/>
			}
		</>
	);
}

export default App;
