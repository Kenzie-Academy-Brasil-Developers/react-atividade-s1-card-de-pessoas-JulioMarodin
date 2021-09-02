function Developer({ prop }) {
  return (
    <>
      <h3>Dev: {prop.name}</h3>
      <p>Age: {prop.age}</p>
      <p>Country: {prop.country}</p>
    </>
  );
}

export default Developer;
