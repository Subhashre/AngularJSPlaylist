var app = angular.module("myApp", [])
app.controller("myController", function ($scope) {
    $scope.skillList = [{ name: "java", proficient: "execellant" },
                    { name: "spring", proficient: "begginer" },
                    { name: "angularJS", proficient: "moderate" }]
    
    $scope.orderby = function(inputCondition) {
        $scope.orderCondition = inputCondition
    }

    $scope.skillName=""
    $scope.skillProficient=""

    $scope.addNew = function(){
        $scope.skillList.push(
            {
               name: $scope.skillName, proficient: $scope.skillProficient
            }
            
        )
        $scope.skillName=""
    $scope.skillProficient=""
    }
})