namespace myapp.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('myapp').service('movieService', MovieService);


//new

export class CarService {
      public CarResource
      public MakeResource

      public getMatchingMakes(makeId) {
        return this.CarResource.query({id: makeId});
      }

      public getAllMakes() {
        return this.MakeResource.query();
      }

      public constructor(
        public $resource
      ) {

        this.CarResource = $resource('/api/cars/:id');
        this.MakeResource = $resource('/api/makes');
      }
    }





//old

    angular.module('myapp').service('carService', CarService);
    }
