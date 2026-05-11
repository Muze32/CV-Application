const personFields = [
  { text: "Name", name: "name" },
  { text: "Email", type: "email", name: "email" },
  { text: "Telephone", type: "tel", name: "tel" },
];
const expFields = [
  { text: "School name", name: "schoolName" },
  { text: "Title of study", name: "title" },
  { text: "Date of study", type: "date", name: "dateOfStudy" },
];

const practExpFields = [
  { text: "Company name", name: "companyName" },
  { text: "Position title", name: "positionTitle" },
  { text: "Main resposibilites of your job", name: "responsibilities" },
  {
    text: "Date you started working for the company",
    name: "dateStart",
    type: "date",
  },
  {
    text: "Date you stopped working for the company",
    name: "dateEnd",
    type: "date",
  },
];

const initialPerson = {
  name: "",
  email: "",
  tel: "",
};

const initialExp = {
  schoolName: "",
  title: "",
  dateOfStudy: "",
};

const initialPractExp = {
  companyName: "",
  positionTitle: "",
  responsibilities: "",
  dateStart: "",
  dateEnd: "",
};

export {
  personFields,
  expFields,
  initialPerson,
  initialExp,
  practExpFields,
  initialPractExp,
};
