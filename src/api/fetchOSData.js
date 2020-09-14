/**
 * A complete Coordinate Pair consisting of a latitude and longitude
 * @typedef {Object} CoordinatePair
 * @property {number} longitude - longitude coordinate
 * @property {number} latitude - latitude coordinate
 */

/**
 * Generates a GeoJSON FeatureCollection of points
 */
const fetchOSData = centerCoordinates => {
  const newFeaturesList = [];
  newFeaturesList.push({
        type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-123.1757, 48.5619]
      },
      properties: {
        id: 1,
        name: 'OrcasoundLab',
        description: `Hydrophone at 8m depth on the west side of San Juan Island`
      }
  });
  newFeaturesList.push({
        type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.760645, 48.13569]
      },
      properties: {
        id: 2,
        name: 'PTMSC',
        description: `Hydrophone at 4m depth under dock at Port Townsend Marine Science Center`
      }
  });
  newFeaturesList.push({
        type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.6077, 48.031]
      },
      properties: {
        id: 3,
        name: 'Bush Point',
        description: `Hydrophone at 2m depth under dock at Bush Point`
      }
  });
  newFeaturesList.push({
        type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.34378, 47.6071]
      },
      properties: {
        id: 4,
        name: 'Seattle Aquarium',
        description: `Hydrophone at 6m depth under dock at Seattle Aquarium`
      }
  });
  return Promise.resolve({
    type: "FeatureCollection",
    features: newFeaturesList
  });
};


export default fetchOSData;
