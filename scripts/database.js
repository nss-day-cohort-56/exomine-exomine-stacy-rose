const database = {
  transientState: {},

  governors: [
    { id: 1, name: "joe Johnson", active: true, colonyId: 1 },
    { id: 2, name: "Steve Stevenson", active: true, colonyId: 1 },
    { id: 3, name: "Fred", active: false, colonyId: 1 },
    { id: 4, name: "Jane ", active: true, colonyId: 1 },
    { id: 5, name: "Jill", active: true, colonyId: 1 }
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
    { id: 1, name: "Io", active: true },
    { id: 1, name: "Titan", active: true },
    { id: 1, name: "Roast", active: false },
    { id: 1, name: "Starbucks", active: true },
    { id: 1, name: "Target", active: true }
  ],

  miningFacilitiesMinerals: [],

  mineralsColonies: [],

  coloniesCart: []
};


export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

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
