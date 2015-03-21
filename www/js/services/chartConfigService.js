(function (angular) {
    angular.module('chart-config', []).factory('chartConfig', function () {
        var getOptions = function (data, cat) {
            data.color = '#901d1d';
            return {
                options: {
                    chart: {
                        type: 'spline',
                        zoomType: 'x',
                        backgroundColor: '#F7F7F7'
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        formatter: function () {
                            return 'Hodnota <b>' + this.y +
                                '</b><br/>v čase <b>' + this.x + '</b>';
                        }
                    },
                    credits: {
                        enabled: false
                    }
                },
                series: [data],
                title: {
                    text: undefined
                },
                yAxis: {
                    title: {
                        text: 'Hodnota'
                    }
                },
                xAxis: {
                    categories: cat,
                    labels: {
                        rotation: -45
                    },
                    title: {
                        text: 'Čas'
                    },
                    type: 'datetime'
                },
                size: {
                    height: 500
                },
                loading: false
            };
        };
        return {
            options: getOptions
        }
    });
})(angular);