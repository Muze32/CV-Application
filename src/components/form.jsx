import { personFields, expFields, practExpFields } from "../data";
import "../styles/form.css";

function FormSection({ obj, fields, handleChange, children }) {
  return (
    <div className="formSection">
      <h2>{children}</h2>
      {fields.map((field, index) => {
        const { name, text, type } = field;
        const value = obj[field.name];

        return (
          <label key={name}>
            {text}:{" "}
            <input
              type={type ? field.type : "text"}
              value={value}
              onChange={handleChange}
              name={name}
            />
          </label>
        );
      })}
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
