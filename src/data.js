const personFields = [
  { text: "Name", name: "name" },
  { text: "Email", type: "email", name: "email" },
  { text: "Telephone", type: "tel", name: "tel" },
];
const experienceFields = [
  { text: "School name", name: "schoolName" },
  { text: "Title of study", name: "title" },
  { text: "Date of study", type: "date", name: "dateOfStudy" },
];

const initialPerson = {
  name: "",
  email: "",
  tel: "",
};

const initialExperience = {
  schoolName: "",
  title: "",
  dateOfStudy: "",
};

export { personFields, experienceFields, initialPerson, initialExperience };
