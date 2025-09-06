// Чтобы получить данные для перечня недвижимости, вы должны сделать запрос GET на следующем URL:
// https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json
// Example:
fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    // Use the data here
  })
  .catch((error) => {
    // Handle any errors here
  });

// Example Code
// PropertyList

import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";

function PropertyList() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    // Fetch data and set propertyData
  }, []);

  return (
    <div className="property-list">
      {propertyData.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;