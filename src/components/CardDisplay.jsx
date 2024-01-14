import planets from "../../planets.js";

const CardDisplay = () => {
  //using slice to make shallow copy of array so as not to change it
  const sortedPlanets = planets
    .slice()
    .sort((a, b) => a.diameterInKm - b.diameterInKm);
  console.log(planets);

  return (
    <div id="cardContainer">
      {sortedPlanets.map((planet, index) => (
        <div
          key={index}
          className={
            planet.numberOfMoons === 0 ? "planet-card no-moons" : "planet-card"
          }
        >
          <p>Planet Name: {planet.planetName}</p>
          <img src={planet.image} alt="planet image" height={"100px"} />
          <p>Distance from Sun: {planet.distanceFromSun}</p>
          <p>Diameter in Km: {planet.diameterInKm}</p>
          <p>Number of Moons: {planet.numberOfMoons}</p>
          <p>Length of Year: {planet.lengthOfYear}</p>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
