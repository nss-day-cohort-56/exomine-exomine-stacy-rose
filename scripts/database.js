const database = {
  transientState: {},

  governors: [
    { id: 1, name: "joe Johnson", active: true, colonyId: 1 },
    { id: 2, name: "Steve Stevenson", active: true, colonyId: 2 },
    { id: 3, name: "Fred", active: false, colonyId: 2 },
    { id: 4, name: "Jane ", active: true, colonyId: 3 },
    { id: 5, name: "Jill", active: true, colonyId: 3 }
  ],

  colonies: [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
    { id: 3, name: "The Moon" },
    { id: 4, name: "Saturn" },
    { id: 5, name: "Narnia" },
    { id: 6, name: "Jupiter" }
  ],

  minerals: [
    { id: 1, name: "diamond" },
    { id: 2, name: "graphite" },
    { id: 3, name: "salt" },
    { id: 4, name: "gold" },
    { id: 5, name: "silver" },
    { id: 6, name: "copper" }
  ],

  facilities: [
    { id: 1, name: "Ganymead", active: true },
    { id: 2, name: "Io", active: true },
    { id: 3, name: "Titan", active: true },
    { id: 4, name: "Roast", active: false },
    { id: 5, name: "Starbucks", active: true },
    { id: 6, name: "Target", active: true }
  ],

  miningFacilitiesMinerals: [
    { id: 1, mineralId: 6, facilityId:2},
    { id: 2, mineralId: 5, facilityId:2},
    { id: 3, mineralId: 4, facilityId:3},
    { id: 4, mineralId: 4, facilityId:4},
    { id: 5, mineralId: 2, facilityId:6},
    { id: 6, mineralId: 1, facilityId:4},
  ],

  colonyMinerals: [
    { id: 1, colonyId: 1, mineralId: 1, quantity: 2 },
    { id: 2, colonyId: 1, mineralId: 2, quantity: 1 },
    { id: 3, colonyId: 3, mineralId: 4, quantity: 3 },
    { id: 4, colonyId: 3, mineralId: 2, quantity: 3 },
    { id: 5, colonyId: 3, mineralId: 3, quantity: 1 },
    { id: 6, colonyId: 2, mineralId: 5, quantity: 3 },
    { id: 7, colonyId: 2, mineralId: 2, quantity: 3 }
  ],

  coloniesCart: []
};

/*
  Governors
*/
export const getGovernors = () => {
  return database.governors.map((governor) => ({ ...governor }));
};

export const getGovernorById = (id) => {
  return database.governors.find((governor) => governor.id === id);
};

export const getGovernorsByColonyId = (id) => {
  return database.governors.filter((governor) => governor.colonyId === id);
};

/*
  Colonies
*/
export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }));
};

export const getMinerals = () => {
  return database.minerals.map((mineral) => ({ ...mineral }));
};

export const getMineralById = (id) => {
  return database.minerals.find((mineral) => mineral.id === id);
};

/*
  Colony Minerals  
*/

// Filter the array of colony minerals on the colonyId foreign key
export const getColonyMineralsByColonyId = (id) => {
  return database.colonyMinerals.filter((mineral) => mineral.colonyId === id);
};

/*
  Facilities  
*/
export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};

export const purchaseMineral = () => {
  // Broadcast custom event to entire documement so that the
  // application can re-render and update state
  document.dispatchEvent(new CustomEvent("stateChanged"));
};