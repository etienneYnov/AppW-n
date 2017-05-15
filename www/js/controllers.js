angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {


  

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = { username: 'Team_Spoutnik', id: 1, password: "tge671er"},
                     { username: 'Team_ Gemini', id: 2, password: "jfy785tg" },
                     { username: 'Team_Soyouz', id: 5, password: "the671pl" },
                     { username: 'Team_Ariane', id: 8, password: "sxg610df" },
                     { username: 'Team_Galileo', id: 10, password: "apm512an" };  
                     //{ username: 'Team_Skylab', id: 7, password: "pev561tg" },
                     //{ username: 'Team_Mercury', id: 4, password: "teh710ol" },
                     //{ username: 'Team_Corona', id: 9, password: "qwt125ij" },
                     //{ username: 'Team_Mir', id: 6, password: "amv901th" },
                     //{ username: 'Team_Vostok', id: 3, password:  "hgi785gd" },
                     //{ username: 'Team_Shenzhou', id: 11, password: "txa436tx" };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    console.log($scope.counter);



    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $id = $scope.loginData.id;
    $username = $scope.loginData.username;
    $password = $scope.loginData.password;
    $locations = []
    

    switch($id){
      case 1:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        break;
      case 2:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        
        break;
      case 3:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        
        break;
      case 4:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');

        break;
      case 5:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        
        break;
      case 6:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        
        break;
      case 7:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        
        break;
      case 8:
        console.log($username + " "+$password+ " "+$id);
        $state.go('app.dashboard');
        
        break;
      default:
    }

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})




.controller('countCtrl', function MyCtrl($scope, $interval, $ionicPopup) {
  var intervalId;
  
  $scope.counter = 0;
  $scope.initialCountdown = 10;
  $scope.countdown = $scope.initialCountdown;

  $scope.timer = function(){
    var startTime = new Date();
    intervalId = $interval(function(){
        var actualTime = new Date();
        $scope.counter = Math.floor((actualTime - startTime) / 1000);
        $scope.countdown = $scope.initialCountdown - $scope.counter;
    }, 1000);
  };

  $scope.$watch('countdown', function(countdown){
    if (countdown === 0){
      $scope.stop();
    }
  });

  $scope.start = function(){
    $scope.timer();
  };
  
  $scope.stop = function(){
    $interval.cancel(intervalId);
    var alertPopup = $ionicPopup.alert({
             title: 'Bravo!',
             template: 'La course est terminée!'});
  };

})

.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])




.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {
     

    $ionicPlatform.ready(function() {    
 
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>En cours de géolocalisation...'
        });
         
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
 
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
             
            var myLatlng = new google.maps.LatLng(lat, long);
 
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

            $locations = [];

            switch($username){
              case 'Team_Spoutnik':
                $locations = [
                            ['Vous y trouverez les meilleures capsules à emporter sur ApolloW@N', 47.2066045, -1.5531690000000253, 1],
                            ['Ils ont toujours la tchatche !', 47.207322, -1.5560915999999452, 2],
                            ['C\'est so chic de travailler avec eux', 47.2150355, -1.5627938999999742, 3],
                            [' Ils détiennent les meilleurs atouts de tout Nantes à emporter sur ApolloW@N', 47.2224825, -1.548170099999993, 4],
                            ['Si vous pouviez les enmener il seraient aux petits soins avec vous', 47.2179554, -1.5429547999999613, 5]
                            ];
                break;
              case 'Team_Gemini':
                $locations = [
                            ['C\'est so chic de travailler avec eux', 47.2150355, -1.5627938999999742, 1],
                            [' Ils détiennent les meilleurs atouts de tout Nantes à emporter sur ApolloW@N', 47.2224825, -1.548170099999993, 2],
                            ['Si vous pouviez les enmener il seraient aux petits soins avec vous', 47.2179554, -1.5429547999999613, 3],
                            ['Ce stop se trouve à la frontière entre la réalité et le monde virtuel', 47.21400149999999, -1.5477815000000419, 4],
                            ['Ils élèvent des animaux à la couleur originale...', 47.20793319999999, -1.5359321999999338, 5]
                            ];
                break;
              case 'Team_Soyouz':
                $locations = [
                            ['Si vous pouviez les enmener il seraient aux petits soins avec vous', 47.2179554, -1.5429547999999613, 1],
                            ['Ce stop se trouve à la frontière entre la réalité et le monde virtuel', 47.21400149999999, -1.5477815000000419, 2],
                            ['Ils élèvent des animaux à la couleur originale...', 47.20793319999999, -1.5359321999999338, 3],
                            ['Vous y trouverez la dernière tribu indienne de Nantes', 47.206329, -1.5461609999999837, 4],
                            ['Vous y trouverez les meilleures capsules à emporter sur ApolloW@N', 47.2066045, -1.5531690000000253, 5]
                            ];
                break;
              case 'Team_Ariane':
                $locations = [
                            ['Ce stop se trouve à la frontière entre la réalité et le monde virtuel', 47.21400149999999, -1.5477815000000419, 1],
                            ['Ils élèvent des animaux à la couleur originale...', 47.20793319999999, -1.5359321999999338, 2],
                            ['Vous y trouverez la dernière tribu indienne de Nantes', 47.206329, -1.5461609999999837, 3],
                            ['Vous y trouverez les meilleures capsules à emporter sur ApolloW@N', 47.2066045, -1.5531690000000253, 4],
                            ['Ils ont toujours la tchatche !', 47.207322, -1.5560915999999452, 5]
                            ];
                break;
              case 'Team_Galileo':
                $locations = [
                            ['Vous y trouverez la dernière tribu indienne de Nantes', 47.206329, -1.5461609999999837, 1],
                            ['Vous y trouverez les meilleures capsules à emporter sur ApolloW@N', 47.2066045, -1.5531690000000253, 2],
                            ['Ils ont toujours la tchatche !', 47.207322, -1.5560915999999452, 3],
                            ['C\'est so chic de travailler avec eux', 47.2150355, -1.5627938999999742, 4],
                            [' Ils détiennent les meilleurs atouts de tout Nantes à emporter sur ApolloW@N', 47.2224825, -1.548170099999993, 5]
                            ];
                break;
              default:
            }         
            
            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < $locations.length; i++) { 
            marker = new google.maps.Marker({
              position: new google.maps.LatLng($locations[i][1], $locations[i][2]),
              map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                infowindow.setContent($locations[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
            }
                $scope.map = map;   
                $ionicLoading.hide();           
                 
            }, function(err) {
                $ionicLoading.hide();
                console.log(err);
            });

            var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(47.2155761, -1.5490890999999465),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }).catch((err) => {
      console.log('Err', err);
    });
})










.controller('TeamsCtrl', function($scope) {
  $scope.teams = [
    { title: 'Team_Spoutnik', id: 1, password: "tge671er" },
    { title: 'Team_ Gemini', id: 2, password: "jfy785tg" },
    { title: 'Tem_Vostok', id: 3, password:  "hgi785gd" },
    { title: 'Team_Mercury', id: 4, password: "teh710ol" },
    { title: 'Team_Soyouz', id: 5, password: "the671pl" },
    { title: 'Team_Mir', id: 6, password: "amv901th" },
    { title: 'Team_Skylab', id: 7, password: "pev561tg" },
    { title: 'Team_Ariane', id: 8, password: "sxg610df" },
    { title: 'Team_Corona', id: 9, password: "qwt125ij" },
    { title: 'Team_Galileo', id: 10, password: "apm512an" },
    { title: 'Team_Shenzhou', id: 11, password: "txa436tx" }
  ];
})

/*.controller('TeamCtrl', function($scope, $stateParams) {
})*/









.controller('DashCtrl', function($scope, $cordovaCamera, $cordovaFile) {
    

    // 1
$scope.images = [];
 
$scope.addImage = function() {
  // 2
   
  var options = {
    destinationType : Camera.DestinationType.FILE_URI,
    sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
    allowEdit : false,
    encodingType: Camera.EncodingType.JPEG,
    popoverOptions: CameraPopoverOptions,
  };
  
  // 3
  $cordovaCamera.getPicture(options).then(function(imageData) {
 
    // 4
    onImageSuccess(imageData);
 
    function onImageSuccess(fileURI) {
      createFileEntry(fileURI);
    }
 
    function createFileEntry(fileURI) {
      window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
    }
 
    // 5
    function copyFile(fileEntry) {
      var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
      var newName = makeid() + name;
 
      window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
        fileEntry.copyTo(
          fileSystem2,
          newName,
          onCopySuccess,
          fail
        );
      },
      fail);
    }
    
    // 6
    function onCopySuccess(entry) {
      $scope.$apply(function () {
        $scope.images.push(entry.nativeURL);
      });
      
    }
 
    function fail(error) {
      console.log("fail: " + error.code);
    }
 
    function makeid() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
      for (var i=0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
 
  }, function(err) {
    console.log(err);
  });
}
  $scope.urlForImage = function(imageName) {
    var name = imageName.substr(imageName.lastIndexOf('/') + 1);
    var trueOrigin = cordova.file.dataDirectory + name;
    return trueOrigin;
}
})

.controller('shareCtrl',['$scope',function($scope) {
  
   $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function(errormsg){alert("Erreur: Impossible de partager")});
  }
  

}]);