let app = angular.module("MyApp", []);

app.controller("formCtrl", function ($scope) {
  $scope.empleado = {
    codigo: 0,
    horas: 0,
    tarifa: 0,
    salarioBruto: 0,
    descuento: 0,
    salarioNeto: 0,
  };
  $scope.calcularSalario = function () {
    $scope.empleado.salarioBruto = $scope.empleado.horas * $scope.empleado.tarifa;
    if ($scope.empleado.salarioBruto <= 500) {
      $scope.empleado.descuento = 0;
    } else if ($scope.empleado.salarioBruto > 500 && $scope.empleado.salarioBruto <= 1000) {
      $scope.empleado.descuento = 0.02;
    } else if ($scope.empleado.salarioBruto > 1000 && $scope.empleado.salarioBruto <= 4000) {
      $scope.empleado.descuento = 0.08;
    } else if ($scope.empleado.salarioBruto > 4000 && $scope.empleado.salarioBruto <= 8000) {
      $scope.empleado.descuento = 0.15;
    } else if ($scope.empleado.salarioBruto > 8000 && $scope.empleado.salarioBruto < 10000) {
      $scope.empleado.descuento = 0.21;
    } else if ($scope.empleado.salarioBruto >= 10000) {
      $scope.empleado.descuento = 0.3;
    }

    $scope.empleado.salarioNeto = $scope.empleado.salarioBruto - ($scope.empleado.salarioBruto * $scope.empleado.descuento);
  };
  $scope.calcularSalario();
});
