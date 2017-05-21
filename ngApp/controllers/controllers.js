var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var apiUrl = '/api/cars/search/';
        var apiUrl2 = '/api/makes/search/';
        var HomeController = (function () {
            function HomeController($http) {
                var _this = this;
                this.$http = $http;
                this.makes = this.carService.getAllMakes();
                this.$http.get('/api/cars')
                    .then(function (response) {
                    _this.cars = response.data;
                });
                this.$http.get('/api/makes')
                    .then(function (response) {
                    _this.makes = response.data;
                    console.log(_this.makes);
                })
                    .catch(function (response) {
                    console.error('Could not retrieve movies.');
                });
            }
            HomeController.prototype.fetch = function () {
                var _this = this;
                this.$http.get(apiUrl + this.search).then(function (res) {
                    console.log(res);
                    _this.cars = res.data;
                });
            };
            HomeController.prototype.getMatchingMakes = function () {
                this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
                console.log(this.matchingMakes);
            };
            HomeController.prototype.getDetails = function (showCars) {
                var _this = this;
                this.$http.get(apiUrl2).then(function (response) {
                    _this.carDetails = response.data;
                    console.log(_this.carDetails);
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        showModal(modalDetails, string);
        {
            this.$uibModal.open({
                templateUrl: '/myApp/dialog.html',
                controller: 'DialogController',
                controllerAs: 'modal',
                resolve: {
                    car: function () { return car; },
                    make: function () { return make.name; }
                },
                size: 'lg'
            });
        }
        var DialogController = (function () {
            function DialogController(dialogDetails, $uibModalInstance) {
                this.dialogDetails = dialogDetails;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
