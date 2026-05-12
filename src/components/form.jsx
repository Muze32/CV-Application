import { personFields, expFields, practExpFields } from "../data";
import "../styles/form.css";

//TODO: Los inputs no realizan validacion al ingresar informacion en ellos

function FormField({ field, obj, onChange }) {
  const { name, text, type, placeholder } = field;
  const value = obj[name];

  return (
    <label>
      {text}:
      {type !== "textarea" ? (
        <input
          type={type || "text"}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder || null}
        />
      ) : (
        <textarea
          name={name}
          rows="3"
          cols="40"
          value={value}
          onChange={onChange}
          minLength={25}
          maxLength={100}
          placeholder={placeholder}
        ></textarea>
      )}
    </label>
  );
}

function FormSection({ obj, fields, handleChange, children }) {
  return (
    <div className="formSection">
      <h2>{children}</h2>
      {fields.map((field, index) => (
        <FormField
          obj={obj}
          onChange={handleChange}
          field={field}
          key={index}
        ></FormField>
      ))}
    </div>
  );
}

export function Form({ objs, handlers }) {
  const { person, exp, practExp } = objs;
  const { handlePersonChange, handleExpChange, handlePractExpChange } =
    handlers;

  return (
    <div className="form">
      <FormSection
        obj={person}
        fields={personFields}
        handleChange={handlePersonChange}
      >
        General Information
      </FormSection>

      <FormSection obj={exp} fields={expFields} handleChange={handleExpChange}>
        Educational Experience
      </FormSection>

      <FormSection
        obj={practExp}
        fields={practExpFields}
        handleChange={handlePractExpChange}
      >
        Practical Experience
      </FormSection>
    </div>
  );
}
