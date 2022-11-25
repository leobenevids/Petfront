import { FormControl } from "./SelectStyles";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <FormControl>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </FormControl>
  );
}

export default Select;
