const InputElement = ({ type, register, label }) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor={label}>{label}</label>
      <input type={type} {...register} />
    </div>
  );
};

export default InputElement;
