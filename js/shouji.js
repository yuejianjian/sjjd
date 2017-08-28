angular.module('myApp', ['ui.bootstrap', 'ngAnimate']).controller('CarouselDemoCtrl', function ($scope) {
    //轮播图轮播间隔时间
    $scope.myInterval = 1000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'images/lunbo/01.jpg',
            text: '',
        });
        slides.push({
            image: 'images/lunbo/02.jpg',
            text: '',
        });
        slides.push({
            image: 'images/lunbo/03.jpg',
            text: '',
        });
        slides.push({
            image: 'images/lunbo/04.jpg',
            text: '',
        });
    };
    $scope.addSlide();
});

