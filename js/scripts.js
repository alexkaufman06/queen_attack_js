var queenAttack = function(queen_coordinates, attack_coordinates) {
  if (queen_coordinates[1] === attack_coordinates[1]) {
    return true;
  } else if (queen_coordinates[0] === attack_coordinates[0]) {
    return true;
  } else if (Math.abs(queen_coordinates[0]) - Math.abs(attack_coordinates[0]) === Math.abs(queen_coordinates[1]) - Math.abs(attack_coordinates[1])) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
    var queenxCoordinates = parseInt($("input#queen-x-coordinates").val());
    var queenyCoordinates = parseInt($("input#queen-y-coordinates").val());
    var attackxCoordinates = parseInt($("input#attack-x-coordinates").val());
    var attackyCoordinates = parseInt($("input#attack-y-coordinates").val());
    var result = queenAttack([queenxCoordinates, queenyCoordinates], [attackxCoordinates, attackyCoordinates]);

    $(".queen-coordinates").text([queenxCoordinates, queenyCoordinates]);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
