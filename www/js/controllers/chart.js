(function (angular) {
    angular.module('controllers').controller('ChartCtrl', function ($scope, $filter, $interval, chartConfig) {
        var MAX_ITEM = 20;

        var cat = [];
        var data = [];
        var counter = 0;
        var intervalPromise;
        $scope.stop = function () {
            if (!_.isUndefined(intervalPromise)) {
                $interval.cancel(intervalPromise);
            }
        };

        $scope.restart = function () {
            cat.length = 0;
            data.length = 0;
            counter = 0;
            startTicking();
        };

        $scope.setInterval = function (interval) {
            startTicking(interval);
        };

        $scope.setMaxItemsCount = function (maxItemsCount) {
            MAX_ITEM = maxItemsCount;
            if(data.length > MAX_ITEM){
                data.length = MAX_ITEM;
                cat.length = MAX_ITEM;
            }
        };
        var init = function (chartData) {
            $scope.chartConfig = chartConfig.options({
                data: chartData.data,
                type: "area"
            }, chartData.cat);
        }({
            data: data,
            cat: cat
        });

        var tick = function () {
            console.log('tick');
            cat.push($filter('date')(new Date(), 'HH:mm'));
            data.push(Math.sin(counter));
            if (data.length > MAX_ITEM) {
                cat.shift();
                data.shift();
            }
            counter = counter + 0.5;
        };

        var startTicking = function(interval) {
            $scope.stop();
            intervalPromise = $interval(tick, interval);
        };

        startTicking(500);

    });
})(angular);