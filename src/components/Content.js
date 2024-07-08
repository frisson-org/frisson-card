import QR from './QR/QR';
import Tag from './Tag';
import Title from './Title/Title';
import Feedback from './Feedback/Feedback';
import Details from './Details/Details';
import Offer from './Offer/Offer';
import imgInfo from '../images/Info-circle.svg';
import imgLightning from '../images/lightning.svg';
import Prices from './Prices/Prices';

const Content = ( { footerRef } ) => {

	return (
		<div className="f-container__side f-container__side_content">

			<QR classes='f-qr_header'/>
			<Tag title="О месте" icon={ imgInfo }/>
			<Title/>
			<Feedback/>
			<Details/>
			<Tag title="Услуги" icon={ imgLightning }/>
			<Offer footerRef={ footerRef }/>
			<Prices/>

		</div>
	);
}

export default Content;
