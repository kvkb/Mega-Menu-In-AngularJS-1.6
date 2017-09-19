var app = angular.module("megamenu",[]);

// app.directive("submenu",function(){
//     function link(scope,element, attrs){
//
//     }
//     return{
//         restrict: 'E',
//         scope:{
//             subMenu:"submenuItem"
//         },
//         link:link
//     }
// });

app.directive("headermenu",function(){

    function next(elem) {
        do {
            elem = elem.nextSibling;
        } while (elem && elem.nodeType !== 1);
        return elem;
    }

    function link(scope, element, attrs) {
        element.on('click',function(event) {

            let targetElementId = event.target.id;
            let targetNgName = event.target.getAttribute("ng-name");
            console.log(targetElementId);
            let nextSiblingClass = document.getElementById(targetElementId).nextElementSibling.getAttribute("class");
            let classList = nextSiblingClass.split(' ');
            //console.log(classList[0]);

            if(targetNgName == "item"){
                console.log(nextSiblingClass);
                //document.getElementsByClassName('menu-items').setAttribute("class","menu-items menu hidden");
                if(classList[0] == "menu-items"){
                    MenuItems();
                }
            }
            function MenuItems(){
                if(nextSiblingClass == "menu-items menu hidden"){
                    document.getElementById(targetElementId).nextElementSibling.setAttribute("class","menu-items menu");
                }else{
                    document.getElementById(targetElementId).nextElementSibling.setAttribute("class","menu-items menu hidden");
                }

            }

            function SubMenuItems(){
                alert(targetElementId);
                if(nextSiblingClass == "sub-menu-items menu hidden"){
                    document.getElementById(targetElementId).nextElementSibling.setAttribute("class","sub-menu-items menu");
                }else{
                    document.getElementById(targetElementId).nextElementSibling.setAttribute("class","sub-menu-items menu hidden");
                }

            }

            if(document.getElementById(targetElementId).nextElementSibling != null){

                if(classList[0] == "menu-items"){
                    MenuItems();
                }
                if(classList[0] == "sub-menu-items"){
                    SubMenuItems();
                }

            }

        });
    }
    return {
        restrict: 'E',
        scope: {
            menuObject: '=obj'
        },
        template:`
            <div class="header-menu">
                <div class="row">
                    <div class="col-md-3 col" ng-repeat="obj in menuObject">
                        <h3 ng-name="item" id="parentItem-{{obj.id}}">{{obj.name}}</h3>
                        <div class="menu-items menu hidden">
                            <ul>
                                <li ng-repeat="item in obj.subMenu">
                                    <a href="javascript:void(0);" id="item-{{item.sid}}" ng-click="showSubMenu(item)">{{item.name}}</a>
                                    <div class="sub-menu-items menu hidden" id="sub-menu-{{item.sid}}">
                                        <ul>
                                            <li ng-repeat="subItem1 in item.subMenu">
                                                <a href="javascript:void(0);" id="item-{{subItem1.sid}}">{{subItem1.name}}</a>
                                                <div class="sub-menu-items menu hidden">
                                                    <ul>
                                                        <li ng-repeat="subItem2 in subItem1.subMenu">
                                                            <a href="javascript:void(0);" id="item-{{subItem2.sid}}">{{subItem2.name}}</a>
                                                            <div class="sub-menu-items menu hidden">
                                                                <ul>
                                                                    <li ng-repeat="subItem3 in subItem2.subMenu">
                                                                        <a href="javascript:void(0);" id="item-{{subItem3.sid}}">{{subItem3.name}}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `,
        link:link
    }
});

app.controller("HeaderController",function($scope){


    $scope.MenuItems = [
        {
            id:1,
            name:"DEALS BY PRODUCT",
            subMenu:[
                {
                    sid:11,
                    name:"Menu Item 11",
                    subMenu:[
                        {
                            sid:111,
                            name:"Sub Menu Item 111",
                            subMenu:[
                                {
                                    sid:1111,
                                    name:"Sub Menu Item 1111",
                                    subMenu:[
                                        {
                                            sid:11111,
                                            name:"Sub Menu Item 11111",
                                            subMenu:[
                                                {
                                                    sid:11111,
                                                    name:"Sub Menu Item 11111",
                                                },
                                                {
                                                    sid:11112,
                                                    name:"Sub Menu Item 11112",
                                                },
                                                {
                                                    sid:11113,
                                                    name:"Sub Menu Item 11113",
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    sid:1112,
                                    name:"Sub Menu Item 1112",
                                },
                                {
                                    sid:1113,
                                    name:"Sub Menu Item 1113",
                                },
                            ]
                        },
                        {
                            sid:112,
                            name:"Sub Menu Item 112",
                        },
                        {
                            sid:113,
                            name:"Sub Menu Item 113",
                        },
                    ]
                }
            ]
        },
        {
            id:2,
            name:"DEALS BY BRAND",
            subMenu:[
                {
                    sid:21,
                    name:"Menu Item 21",
                    subMenu:[
                        {
                            sid:211,
                            name:"Sub Menu Item 211",
                        },
                        {
                            sid:212,
                            name:"Sub Menu Item 212",
                        },
                        {
                            sid:213,
                            name:"Sub Menu Item 213",
                        },
                    ]
                },
                {
                    sid:22,
                    name:"Menu Item 21",
                    subMenu:[
                        {
                            sid:211,
                            name:"Sub Menu Item 211",
                        },
                        {
                            sid:212,
                            name:"Sub Menu Item 212",
                        },
                        {
                            sid:213,
                            name:"Sub Menu Item 213",
                        },
                    ]
                },
                {
                    sid:23,
                    name:"Menu Item 21",
                    subMenu:[
                        {
                            sid:211,
                            name:"Sub Menu Item 211",
                        },
                        {
                            sid:212,
                            name:"Sub Menu Item 212",
                        },
                        {
                            sid:213,
                            name:"Sub Menu Item 213",
                        },
                    ]
                }
            ]
        },
        {
            id:3,
            name:"DEALS BY RETAILER",
            subMenu:[
                {
                    sid:31,
                    name:"Menu Item 31",
                    subMenu:[
                        {
                            sid:311,
                            name:"Sub Menu Item 311",
                        },
                        {
                            sid:312,
                            name:"Sub Menu Item 312",
                        },
                        {
                            sid:313,
                            name:"Sub Menu Item 313",
                        },
                    ]
                }
            ]
        },
        {
            id:4,
            name:"TOP OFFERS",
            subMenu:[
                {
                    sid:41,
                    name:"Menu Item 41",
                    subMenu:[
                        {
                            sid:411,
                            name:"Sub Menu Item 411",
                        },
                        {
                            sid:412,
                            name:"Sub Menu Item 412",
                        },
                        {
                            sid:413,
                            name:"Sub Menu Item 413",
                        },
                    ]
                }
            ]
        }
    ];

    $scope.showSubMenu = function(item){
        console.log(this.next());
    };
});
