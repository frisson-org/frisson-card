import './App.scss';
import QR from './components/QR';

function App() {
	return (
		<>
			<main className="f-main f-outer">
				<div className="f-wrapper">
					<div className="f-container flex jcspb">

						<div className="f-container__side f-container__side_content">

							<QR />

							<div className="f-tag flex aic">
								<div className="f-tag__image-container img-contain">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13.1429 7.42857C13.1429 8.05975 12.6312 8.57143 12 8.57143C11.3688 8.57143 10.8571 8.05975 10.8571 7.42857C10.8571 6.79739 11.3688 6.28571 12 6.28571C12.6312 6.28571 13.1429 6.79739 13.1429 7.42857ZM12 10.5714C12.4734 10.5714 12.8571 10.9552 12.8571 11.4286V17.1429C12.8571 17.6162 12.4734 18 12 18C11.5266 18 11.1429 17.6162 11.1429 17.1429V11.4286C11.1429 10.9552 11.5266 10.5714 12 10.5714Z"
											fill="#0E2F56"/>
									</svg>
								</div>
								<div className="f-tag__title-container">
									<h2 className="f-tag__title">О месте</h2>
								</div>
							</div>

						</div>

						<div className="f-container__side f-container__side_gallery"></div>

					</div>
				</div>
			</main>
			<footer className="f-footer"></footer>
		</>
	);
}

export default App;
