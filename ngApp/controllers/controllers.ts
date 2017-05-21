namespace myapp.Controllers {

    const apiUrl = '/api/cars/search/';
    const apiUrl2 = '/api/makes/search/';

    export class HomeController {
      public cars;
      public search;
      public makes;
      public makeId;
      public matchingMakes;
      public showCars;
      public carDetails;
      public makeCars;
      public selectedMake;


      public fetch() {
        this.$http.get(apiUrl + this.search).then((res) => {
          console.log(res);
          this.cars = res.data;
        });

      }
//new

public getMatchingMakes() {
      this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
      console.log(this.matchingMakes);

    }

//old
      public getDetails(showCars) {
          this.$http.get(apiUrl2).then((response) => {
              this.carDetails = response.data;
              console.log(this.carDetails); //DEBUG
          });
      }

      constructor(private $http: ng.IHttpService) {
          this.makes = this.carService.getAllMakes();
          this.$http.get('/api/cars')
              .then((response) => {
                  this.cars = response.data;
              })
          this.$http.get('/api/makes')
              .then((response) => {
                  this.makes = response.data;
                  console.log(this.makes); //DEBUG
              })





              .catch((response) => {
                  console.error('Could not retrieve movies.');
              });


      }






    }


//new dropdown
















//end of dropdown


    //new code




    public showModal(modalDetails: string) {
               this.$uibModal.open({
                   templateUrl: '/myApp/dialog.html',
                   controller: 'DialogController',
                   controllerAs: 'modal',
                   resolve: {
                 car: () => car,
                 make: () => make.name
             },
             size: 'lg'
               });
           }



               class DialogController {

                   public ok() {
                       this.$uibModalInstance.close();
                   }

                   constructor(public dialogDetails: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
               }

//angular.module('CarDealer').controller('DialogController', DialogController);


//end of new




//other stuff
    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
