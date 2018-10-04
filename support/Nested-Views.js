angular.module('ViewApp',['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        // Code Block AAA
        var rootViewObj = {
            name: 'rootViewName',
            templateUrl: 'cache.rootTmpl.html',
            controller: 'ViewProperties as rootProp'
        };
        $stateProvider.state(rootViewObj);

        // Code Block BBB
        var childViewObj = {
            name: 'childViewName',
            parent: 'rootViewName',
            views: 
                {
                    'view1': {templateUrl: 'cache.tmpl1.html',
                                controller: 'ViewProperties as vProp1'}, 

                    'view2': {templateUrl: './Nested-Views.tmpl1.html'}
                }
        };
        $stateProvider.state(childViewObj);

        // Code Block DDD
        var childOfChildViewObj = {
            name:'childOfChildViewName',
            parent: 'childViewName',
            url: '/',
            views:
            {
                'view3': {
                template: 
                '<div style="background-color:#EFEFEF; padding:5px 20px; border:2px solid black; border-radius:8px;">' +
                    '<h3><span style="color:blue; font-size:1.5em;">View 3: <span style="color:red;">&#10140;</span> child of the 2nd child</span><br>' +
                        'This box is view 3 and is the child of the second child and is the default, thus marking the end of the default chain.</span>' +
                    '</h3>' +
                    '<div> This is a child of the the 2nd child and is an <span style="color:red;">html template (see template property of view 3)</span> defined in the config module. ' +
                        'See <span style="color:red;">Code Block(s) DDD.</span> This view is the default view because it has the first defined url ' + 
                        'who\'s value is a backslash which is the standard default url path. <span style="color:red;">NOTE!</span> There is a 4th view ' +
                        'but it is used to show the template contents (value) of this view\'s template property. Click on the button below to see the ' + 
                        'html of what you are reading.<br><br>' +
                        '<span style="color:blue; font-size:20px;"><b>Defined state properties of the view 3 object<b></span>' +
                    '</div>' +
                    '<div style="position:relative; color:blue;">' +
                        'name: <span style="color:red; position:absolute; left:200px;">"{{rootProp.childOfChildViewPropertiesName}}"</span><br>' +
                        'parent: <span style="color:red; position:absolute; left:200px;">"{{rootProp.childOfChildViewPropertiesParent}}"</span><br>' +
                        'url: <span style="color:red; position:absolute; left:200px;">"{{rootProp.childOfChildViewPropertiesUrl}}"</span><br>' +
                        'views.view3.template:  <button id="view3TemplateBtn" ng-click="vProp3.showTemplateBkgnd()" style="position:absolute; left:200px; width:220px;">{{vProp3.btnMsg}}</button><br>' +
                        'views.view3.controller:  <span style="color:red; position:absolute; left:200px; width:200px;">"{{rootProp.childOfChildViewPropertiesController}}"</span><br>' +
                        'views.view3.controllerAs: <span style="color:red; position:absolute; left:200px; width:200px;">"{{rootProp.childOfChildViewPropertiesControllerAs}}"</span><br>' +
                        '<div style="position:absolute; top:-600px;" data-ui-view="bkgndPlate"></div>' +
                    '</div>' +
                '</div>',
                controller: 'ViewProperties',
                controllerAs: 'vProp3'
                }
            }
        };  
        $stateProvider.state(childOfChildViewObj);
        
        
        var bkgndPlateAndTextObj = {
            name: 'bkgndPlateAndTextName',
            parent: 'childOfChildViewName',
            url: 'bkgndPlateAndTextUrl',
            views:
                {   
                    'bkgndPlate': {
                        templateUrl:'./Nested-Views_Bkgnd-Plate.tmpl.html'
                    }    
                },
                
            controller: 'ViewProperties',
            controllerAs: 'vProp4'
        };
        $stateProvider.state(bkgndPlateAndTextObj);
        
}])


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

