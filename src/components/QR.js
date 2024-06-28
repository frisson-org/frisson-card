import appStoreQR from '../images/1.webp';
import appStore from '../images/appstore.svg';
import googlePlayQR from '../images/2.webp';
import googlePlay from '../images/googleplay.svg';

const QR = () => {

	return (
		<div className="f-qr">
			<div className="f-qr__items flex fwrap">
				<div className="f-qr__item">
					<div className="f-qr__code-container img-contain">
						<img src={ appStoreQR } alt="" className="f-qr__code"/>
					</div>
					<div className="f-qr__store-container img-contain">
						<img src={ appStore } alt="" className="f-qr__store"/>
					</div>
				</div>
				<div className="f-qr__item">
					<div className="f-qr__code-container img-contain">
						<img src={ googlePlayQR } alt="" className="f-qr__code"/>
					</div>
					<div className="f-qr__store-container img-contain">
						<img src={ googlePlay } alt="" className="f-qr__store"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default QR;
