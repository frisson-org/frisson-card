import { forwardRef, useCallback, useEffect, useState } from 'react';
import { isTablet } from '../helpers/helpers';
import cn from 'classnames';
import QR from './QR/QR';
import imgLogo from '../images/logo-classic.svg';

const Footer = forwardRef( ( props, ref ) => {

	const [ hideBar, setHideBar ] = useState( false );

	const handleScroll = useCallback( () => {
		const footerHeight = ref.current ? ref.current.offsetHeight : 0;
		const bottom       = ( window.innerHeight + window.scrollY ) >= ( document.documentElement.scrollHeight - footerHeight );
		setHideBar( bottom );
	}, [ ref ] );

	useEffect( () => {
		window.addEventListener( 'scroll', handleScroll );
		return () => {
			window.removeEventListener( 'scroll', handleScroll );
		};
	}, [ handleScroll ] );

	return (
		<>
			<footer ref={ ref } className={ cn( 'f-footer', 'f-outer' ) }>
				<div className="f-footer__wrapper f-wrapper flex jcc">
					<div className="f-footer__content flex fdc aic">
						<div className="f-footer__logo-container img-contain">
							<img src={ imgLogo } alt="" className="f-footer__logo"/>
						</div>
						<div className="f-footer__title-container">
							<h2 className="f-footer__title text-center">Скачать приложение</h2>
						</div>
						<div className="f-footer__description-container">
							<p className="f-footer__description text-center">Установите приложение, и отправляйтесь на
								встречу незабываемым приключениям!</p>
						</div>

						<QR/>

						<div className="f-footer__copyright-container">
							<span className="f-footer__copyright text-center">© Frisson, 2024</span>
						</div>
					</div>
				</div>
			</footer>

			{ ! hideBar && isTablet &&
				<div className={ cn( 'f-app-bar', 'f-outer' ) }>
					<div className="f-app-bar__wrapper f-wrapper flex jcc">
						<div className="f-app-bar__content flex fdc aic">
							<QR/>
						</div>
					</div>
				</div>
			}
		</>
	);
} );

export default Footer;
