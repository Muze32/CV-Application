import { useState } from "react";
import { initialPerson, initialExp, initialPractExp } from "./data";
import { CV } from "./components/cv";
import { Form } from "./components/form";

export default function App() {
  const [person, setPerson] = useState(initialPerson);
  const handlePersonChange = handleChange(setPerson);

  const [exp, setExp] = useState(initialExp);
  const handleExpChange = handleChange(setExp);

  const [practExp, setPractExp] = useState(initialPractExp);
  const handlePractExpChange = handleChange(setPractExp);

  const objs = { person, exp, practExp };

  function handleChange(setter) {
    return (e) => {
      e.target.reportValidity();
      setter((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  }

  return (
    <>
      <Form
        objs={objs}
        handlers={{ handlePersonChange, handleExpChange, handlePractExpChange }}
      ></Form>

      <CV objs={objs}></CV>
    </>
  );
}
