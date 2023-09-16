const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={defaultValue}
        placeholder="Type here"
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
