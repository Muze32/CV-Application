import { useState } from "react";

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

export default function FormSection() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const fields = [
    { text: "Name", type: "text", value: person.name, name: "name" },
    { text: "Email", type: "email", value: person.email, name: "email" },
    { text: "Telephone", type: "tel", value: person.tel, name: "tel" },
  ];

  function handleChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  return (
    <>
      {fields.map((field, index) => (
        <FormField
          type={field.type}
          value={field.value}
          onChange={handleChange}
          key={index}
          name={field.name}
        >
          {field.text}:{" "}
        </FormField>
      ))}
    </>
  );
}
