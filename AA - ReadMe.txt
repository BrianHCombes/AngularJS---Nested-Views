SelfEd Date: 		11/01/2016

SelfEd Title:           SelfEd-Angular-Nested-Views

SelfEd Objective:       To have ready examples of nested views using ui-router

SelfEd Catalyst:        After finishing Angular states tutorial wanted to
                        work on states within states (nested views) to 
                        deepen the understanding 

SelfEd References:
                  
                    This is an example of nested views in the code below. It includes a child of a child nested view.

                    1)  Note that the most descendent child has the line:  url:'/'   The others don't. Thus all members
                        are displayed because the whole node tree is treated as the "root" view.

                    // https://github.com/angular-ui/ui-router/wiki/quick-reference#stateproviderstatestatename-stateconfig
                    // https://github.com/angular-ui/ui-router/wiki/quick-reference
                    // https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views

                    // https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$stateProvider
                    // http://codereview.stackexchange.com/questions/69266/json-conversion-to-single-quotes

                    // https://github.com/angular-ui/ui-router/wiki/Nested-States-&-Nested-Views

Process:

    02/16/2017
    Finished this on 11/01/2016 but have returned to prep it for GitHub.

    In the process of posting SelfEd: < SelfEd-Angular-States-Understanding-Of >
    on GitHub I picked up additional understandings of states. Now I will 
    shore up this tutorial for my GitHub repository.

    At first glance it must be noted:

    About the default view "chain":
    All the default view(s) up the sibling chain will show until the first 
    defined url with a backslash is encountered. 
    So if a view has a backslash for its url and
    that view is a child of a child of a root view, then all the views from
    the child through the root will show.

    About declaring a controller in a view:
    I have successfully declared a controller instance in three different
    ways for the various views.
    Notably, the two controller instances declared in the view configuration
    objects as defined in the configuration module and the one controller 
    instance declared in one of the views itself.

    02/19/2017
    Have readied the SelfEd for presentation in my GitHub account. The
    instructional content is in the app itself.

    But there is one notable mention. View 3 has a button to click so you 
    can see the template contents of view 3. To make this work I had to 
    create a fourth view because I needed a background to put the html text
    of view 3's template onto. Prior, I tried to use ng-show but that involved
    using a child scope to set a parent scope which doesn't work. So watch
    out for this trap.


https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$stateProvider

    














/*      // https://css-tricks.com/snippets/css/using-font-face/
        // https://www.filamentgroup.com/lab/font-loading.html
        // http://fontsforweb.com/font/show?id=423      // This is the money shot
    */