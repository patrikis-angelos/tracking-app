import PropTypes from 'prop-types';

const AddCard = (props) => {
  const { id, title, submitHandler } = props;

  const handleSubmit = (e, id) => {
    submitHandler(e, id);
  };

  return (
    <div>
      <div>{title}</div>
      <input type="number" placeholder="value" />
      <button type="submit" onClick={(e) => handleSubmit(e, id)}>+</button>
    </div>
  );
};

AddCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default AddCard;
