function checkLocations(locationId, user) {
    user.visited[locationId] = true;
}

export default checkLocations;