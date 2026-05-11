function InfoCV({ person }) {
  const { name, email, tel } = person;
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <span>{email}</span> <span>{tel}</span>
      </div>
    </div>
  );
}

function ExpCV({ exp }) {
  const { title, dateOfStudy, schoolName } = exp;
  return (
    <div>
      <div>
        <span>{title}</span> <span>{dateOfStudy}</span>
      </div>
      <div>{schoolName}</div>
    </div>
  );
}

function PractExpCV({ practExp }) {
  const { positionTitle, dateStart, dateEnd, companyName, responsibilities } =
    practExp;
  return (
    <div>
      <div>
        <span>{positionTitle}</span> <span>{dateStart}</span>{" "}
        <span>{dateEnd}</span>
      </div>
      <div>{companyName}</div>
      <div>
        {responsibilities ? `Responsibilities:  ${responsibilities}` : ""}
      </div>
    </div>
  );
}

function CV({ objs }) {
  const { person, exp, practExp } = objs;
  return (
    <div className="cv">
      <InfoCV person={person}></InfoCV>
      <ExpCV exp={exp}></ExpCV>
      <PractExpCV practExp={practExp}></PractExpCV>
    </div>
  );
}

export { CV };
