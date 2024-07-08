import TitleTags from './TitleTags';
import TitleRating from './TitleRating';
import TitleCost from './TitleCost';
import TitleDistance from './TitleDistance';

const Title = () => {

	return (
		<div className="f-title">
			<TitleTags/>
			<div className="f-title__title-container">
				<h1 className="f-title__title">База отдыха «Красное озеро»</h1>
			</div>
			<div className="f-title__description-container">
				<p className="f-title__description">Подойдет для новичков, компаний и гостей с детьми.</p>
			</div>
			<div className="f-title__footer flex fwrap aic">
				<div className="f-title__rating-container flex fwrap aic">
					<TitleRating rating={ 4.7 } count={ 236 }/>
					<TitleDistance distance={ '1,56 км.' } />
				</div>
				<div className="f-title__cost-container flex fwrap aic">
					<TitleCost
						cost={ 2 } // Can be 1-4
					/>
				</div>
			</div>
		</div>
	);
}

export default Title;
