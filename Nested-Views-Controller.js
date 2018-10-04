angular.module('ViewApp')

// https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$stateProvider
// http://codereview.stackexchange.com/questions/69266/json-conversion-to-single-quotes

// This is the primary controller and is used to display all the properties of the variaous views.
.controller('ViewProperties', ['$state', function($state){

        var thisProperty = this;

        var rootPropertiesObj = $state.get("rootViewName");                     // https://github.com/angular-ui/ui-router/wiki/quick-reference#stategetstatename
        thisProperty.rootPropertiesName = 
                            rootPropertiesObj.name;
        thisProperty.rootPropertiesTemplateUrl = 
                            rootPropertiesObj.templateUrl;
        thisProperty.rootPropertiesController = 
                            rootPropertiesObj.controller;


        var childViewPropertiesObj = $state.get("childViewName");               // https://github.com/angular-ui/ui-router/wiki/quick-reference#stategetstatename
        thisProperty.childViewPropertiesName = 
                            childViewPropertiesObj.name;
        thisProperty.childViewPropertiesParent = 
                            childViewPropertiesObj.parent;
        thisProperty.childViewPropertiesView1TemplateUrl = 
                            childViewPropertiesObj.views.view1.templateUrl;
        thisProperty.childViewPropertiesView1Controller = 
                            childViewPropertiesObj.views.view1.controller;
        thisProperty.childViewPropertiesView2TemplateUrl = 
                            childViewPropertiesObj.views.view2.templateUrl;
        thisProperty.childViewPropertiesView2Controller = 
                            childViewPropertiesObj.views.view2.controller;


        var childOfChildViewPropertiesObj = $state.get("childOfChildViewName"); // https://github.com/angular-ui/ui-router/wiki/quick-reference#stategetstatename
        thisProperty.childOfChildViewPropertiesName = 
                            childOfChildViewPropertiesObj.name;
        thisProperty.childOfChildViewPropertiesParent = 
                            childOfChildViewPropertiesObj.parent;
        thisProperty.childOfChildViewPropertiesUrl = 
                            childOfChildViewPropertiesObj.url;            
        thisProperty.childOfChildViewPropertiesTemplate = 
                            childOfChildViewPropertiesObj.views.view3.template;
        thisProperty.childOfChildViewPropertiesController = 
                            childOfChildViewPropertiesObj.views.view3.controller;
        thisProperty.childOfChildViewPropertiesControllerAs = 
                            childOfChildViewPropertiesObj.views.view3.controllerAs;
      
// https://github.com/angular-ui/ui-router/wiki/Nested-States-&-Nested-Views
    
       
        thisProperty.btnMsg = 'Click to see template contents';
        
        thisProperty.showTemplateBkgnd = function(){
                
                thisProperty.showTemplate = !thisProperty.showTemplate;
                //thisProperty.showBkgnd = "Another Another Test";
                
                if($state.current.name === 'childOfChildViewName'){             // https://github.com/angular-ui/ui-router/wiki/quick-reference#statecurrent
                    $state.go('bkgndPlateAndTextName');
                    thisProperty.btnMsg = 'Click to Unsee template contents';
                }
                
                if($state.current.name === 'bkgndPlateAndTextName'){            // https://github.com/angular-ui/ui-router/wiki/quick-reference#statecurrent
                    $state.go('childOfChildViewName');
                    thisProperty.btnMsg = 'Click to see template contents';
                }
        };
}]);


    



