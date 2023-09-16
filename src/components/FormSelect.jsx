const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor="name" className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={size}
        defaultValue={defaultValue}
      >
        {list.map((opt) => {
          return (
            <option value={opt} key={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
