import FeedbackItem from './FeedbackItem';
import imgFrisson from '../../images/avatar_small.svg';
import imgUser from '../../images/user-avatar.png';

const Feedback = () => {

	return (
		<div className="f-feedback">
			<div className="f-feedback__title-container">
				<h2 className="f-feedback__title f-heading-2">Отзывы</h2>
			</div>
			<div className="f-feedback__items flex fdc">
				<FeedbackItem
					image={imgFrisson}
					name='Frisson'
					date='4 месяца назад'
					feedback='Прекрасное пребывание! Безупречное обслуживание, уютные номера и отличные удобства. Мы обязательно вернёмся сюда, и ещё не раз. Рекомендуем'
				/>
				<FeedbackItem
					image={imgUser}
					name='Марина Клюковкина'
					date='3 дня назад'
					feedback='Внезапно, некоторые особенности внутренней политики освещают чрезвычайно интересные картины в целом, однако конкретные меры принимать мы не можем'
				/>
			</div>
			<div className="f-feedback__more-container flex">
				<span className="f-feedback__more">И ещё 16 отзывов в приложении Frisson.</span>
				<a href="#" className="f-feedback__more-link f-hover">Посмотреть</a>
			</div>
		</div>
	);
}

export default Feedback;
