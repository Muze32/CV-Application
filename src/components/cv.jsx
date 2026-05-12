import "../styles/cv.css";

function InfoCV({ person }) {
  const { name, email, tel, address } = person;
  const hasContactInfo = email || tel || address;
  return (
    <section className="infoCV">
      <h1>{name}</h1>
      {hasContactInfo && <hr />}
      <div className="contactInfo">
        <span>{address}</span>
        <span>{email}</span> <span>{tel}</span>
      </div>
      {hasContactInfo && <hr />}
    </section>
  );
}

function Header({ obj, title }) {
  const hasInfo = Object.values(obj).some(Boolean);

  if (!hasInfo) return null;

  return (
    <div>
      <hr />
      <h2>{title}</h2>
    </div>
  );
}

function DateField({ dateStart, dateEnd }) {
  const date1 = new Date(dateStart);
  const date2 = new Date(dateEnd);
  const date1Str = date1.toLocaleDateString();
  const date2Str = date2.toLocaleDateString();

  if (!dateStart && dateEnd) return <span>{date2Str}</span>;
  if (date1 >= date2 || !dateEnd) return null;

  return (
    <span>
      {date1Str} - {date2Str}
    </span>
  );
}

function ExpSection({ obj, sectionName, infoName }) {
  const { organization, title, dateEnd, dateStart, responsibilities } = obj;

  return (
    <section className={sectionName}>
      <div className={infoName}>
        <strong>{title}</strong>
        <DateField dateStart={dateStart} dateEnd={dateEnd}></DateField>
      </div>

      <div>{organization}</div>
      {responsibilities && <div> Responsibilities: {responsibilities}</div>}
    </section>
  );
}

function CV({ objs }) {
  const { person, exp, practExp } = objs;

  return (
    <div className="cv">
      <InfoCV person={person}></InfoCV>

      <Header obj={exp} title="Educational experience"></Header>
      <ExpSection
        obj={exp}
        sectionName="expCV"
        infoName="titleInfo"
      ></ExpSection>

      <Header obj={practExp} title="Practical Experience"></Header>
      <ExpSection
        obj={practExp}
        sectionName="practExpCV"
        infoName="posTitleInfo"
      ></ExpSection>
    </div>
  );
}

export { CV };
