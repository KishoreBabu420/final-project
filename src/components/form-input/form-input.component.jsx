import './form-input.styles.scss';

const FormInput = ({ labelText, inputOptions }) => {
  const { id, value } = inputOptions;

  return (
    <div className='group'>
      <input
        className='form-input'
        {...inputOptions}
      />

      {labelText && (
        <label
          htmlFor={id}
          className={`form-input-label ${value.length ? 'shrink' : ''}`}
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FormInput;
