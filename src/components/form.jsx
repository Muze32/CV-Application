import { personFields, expFields, practExpFields } from "../data";

function FormSection({ obj, fields, handleChange }) {
  return (
    <div className="formSection">
      {fields.map((field, index) => {
        const {name, text, type} = field;
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
      ></FormSection>

      <FormSection
        obj={exp}
        fields={expFields}
        handleChange={handleExpChange}
      ></FormSection>

      <FormSection
        obj={practExp}
        fields={practExpFields}
        handleChange={handlePractExpChange}
      ></FormSection>
    </div>
  );
}
