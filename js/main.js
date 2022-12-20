let app = angular.module("MyApp", []);

app.controller("formCtrl", function ($scope) {
  $scope.auto = {kilometro : null, tarifa : null, monto:null, descuento: null, total : null};
  $scope.calcular = function () {
    let km = $scope.auto.kilometro;
    let tarifa = 250;
    let exceso = km - 300;
    let monto = 0;
    let descuento = 0;
    let total = 0;
    if (km > 300 && km <= 1000) {
      monto = tarifa + exceso * 30;
    } else if (km > 1000) {
      monto = tarifa + 700 * 30 + (km - 1000) * 20;
    } else {
      monto = tarifa;
    }
    // Descuento
    if (monto > 500) {
      descuento = monto * 0.1;
    } else {
      descuento = 0;
    }
    total = monto - descuento;
    $scope.auto.tarifa = tarifa;
    $scope.auto.monto = monto;
    $scope.auto.descuento = descuento;
    $scope.auto.total = total;
  };
  $scope.calcular();
});
