var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('myapp').service('movieService', MovieService);
        var CarService = (function () {
            function CarService($resource) {
                this.$resource = $resource;
                this.CarResource = $resource('/api/cars/:id');
                this.MakeResource = $resource('/api/makes');
            }
            CarService.prototype.getMatchingMakes = function (makeId) {
                return this.CarResource.query({ id: makeId });
            };
            CarService.prototype.getAllMakes = function () {
                return this.MakeResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('myapp').service('carService', CarService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
