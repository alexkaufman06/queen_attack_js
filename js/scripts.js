var queenAttack = function(queen_coordinates, attack_coordinates) {
  if (queen_coordinates[1] === attack_coordinates[1]) {
    return true;
  } else {
    return false;
  }
};
