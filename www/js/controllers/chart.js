(function (angular) {
    angular.module('controllers').controller('ChartCtrl', function ($scope, chartConfig) {
        var init = function (chartData) {
            $scope.chartConfig = chartConfig.options({
                data: chartData,
                type: "area"
            }, []);
        }([]);

    });
})(angular);