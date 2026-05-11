import { useState } from "react";
import {
  personFields,
  experienceFields,
  initialPerson,
  initialExperience,
} from "./data";

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
    <>
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
    </>
  );
}

export default function Form() {
  const [person, setPerson] = useState(initialPerson);

  function handlePersonChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  const [experience, setExperience] = useState(initialExperience);

  function handleExperienceChange(e) {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <FormSection
        obj={person}
        fields={personFields}
        handleChange={handlePersonChange}
      ></FormSection>

      <div>{person.name}</div>
      <div>{person.email}</div>
      <div>{person.tel}</div>

      <FormSection
        obj={experience}
        fields={experienceFields}
        handleChange={handleExperienceChange}
      ></FormSection>
      <div>{experience.schoolName}</div>
      <div>{experience.title}</div>
      <div>{experience.dateOfStudy}</div>
    </>
  );
}
