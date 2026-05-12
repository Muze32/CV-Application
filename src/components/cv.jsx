import "../styles/cv.css";

function InfoCV({ person }) {
  const { name, email, tel, address } = person;
  return (
    <section className="infoCV">
      <h1>{name}</h1>
      <hr />
      <div className="contactInfo">
        <span>{address}</span>
        <span>{email}</span> <span>{tel}</span>
      </div>
      <hr />
    </section>
  );
}

function ExpCV({ exp }) {
  const { title, dateOfStudy, schoolName } = exp;
  return (
    <div className="expCV">
      <div className="titleInfo">
        <strong>{title}</strong>
        <span>{dateOfStudy}</span>
      </div>
      <div>{schoolName}</div>
    </div>
  );
}

function PractExpCV({ practExp }) {
  const { positionTitle, dateStart, dateEnd, companyName, responsibilities } =
    practExp;
  return (
    <div className="practExpCV">
      <div className="posTitleInfo">
        <strong>{positionTitle}</strong>
        <span>
          {dateStart} - {dateEnd}
        </span>
      </div>
      <div>{companyName}</div>
      {responsibilities && <div> Responsibilities: {responsibilities}</div>}
    </div>
  );
}

function CV({ objs }) {
  const { person, exp, practExp } = objs;
  return (
    <div className="cv">
      <InfoCV person={person}></InfoCV>

      <section>
        <hr />
        <h2>Educational experience</h2>
        <ExpCV exp={exp}></ExpCV>
      </section>

      <section>
        <hr />
        <h2>Practical Experience</h2>
        <PractExpCV practExp={practExp}></PractExpCV>
        <hr />
      </section>
    </div>
  );
}

export { CV };
