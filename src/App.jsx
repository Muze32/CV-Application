import { useState } from "react";
import {
  personFields,
  expFields,
  initialPerson,
  initialExp,
  practExpFields,
  initialPractExp,
} from "./data";

//TODO: Determinar si FormField si es necesario o redundante

function FormField({ type, children, value, onChange, name }) {
  return (
    <>
      <label>
        {children}
        <input type={type} value={value} onChange={onChange} name={name} />
      </label>
    </>
  );
}

function FormSection({ obj, fields, handleChange }) {
  return (
    <div className="formSection">
      {fields.map((field, index) => {
        const value = obj[field.name];
        return (
          <FormField
            type={field.type ? field.type : "text"}
            value={field.value}
            onChange={handleChange}
            key={index}
            name={field.name}
          >
            {field.text}:{" "}
          </FormField>
        );
      })}
    </div>
  );
}

export default function Form() {
  const [person, setPerson] = useState(initialPerson);

  function handlePersonChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  const [exp, setExp] = useState(initialExp);

  function handleExpChange(e) {
    setExp({ ...exp, [e.target.name]: e.target.value });
  }

  const [practExp, setPractExp] = useState(initialPractExp);

  function handlePractExpChange(e) {
    setPractExp({ ...practExp, [e.target.name]: e.target.value });
  }

  return (
    <>
      <FormSection
        obj={person}
        fields={personFields}
        handleChange={handlePersonChange}
      ></FormSection>

      {Object.values(person).map((value, index) => (
        <div key={index}>{value}</div>
      ))}

      <FormSection
        obj={exp}
        fields={expFields}
        handleChange={handleExpChange}
      ></FormSection>

      {Object.values(exp).map((value, index) => (
        <div key={index}>{value}</div>
      ))}

      <FormSection
        obj={practExp}
        fields={practExpFields}
        handleChange={handlePractExpChange}
      ></FormSection>

      {Object.values(practExp).map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </>
  );
}
