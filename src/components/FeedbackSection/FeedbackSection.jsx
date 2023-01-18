import PropTypes from 'prop-types';
import css from './FeedbackSection.module.css'

const FeedbackSection = ({ title }) => {  
  return (
    <section className={css.feedbackSection}>
      { title && <h2>{title}</h2> }
      
    </section>
  )
};

export default FeedbackSection;

FeedbackSection.propTypes = {
  title: PropTypes.string,
}