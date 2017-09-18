var app = angular.module("megamenu",[]);



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
                    name:"Menu Item 22",
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
                    name:"Menu Item 23",
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

    $scope.showMenu = function(obj){


        $scope.menuItemWrap = ``, $scope.subMenuItemWrap;
        var isArray = obj instanceof Array;

        for (var j in obj) {
            if( j == "id"){
                // console.log("obj");
                // console.log(obj);
                //console.log(obj['subMenu']);
                // console.log("obj");
                // console.log(obj.subMenu.length);
                for(var count = 0;count < obj.subMenu.length;count++){
                    console.log(obj.subMenu[count]);

                    //------ BUILD THE FIRST LEVEL MENU -------
                    $scope.menuItemWrap += `
                        <li class="child-menu-item">
                            <a href="javascript:void(0);" id="child-menu-item-`+obj.subMenu[count].sid+`" ng-click="showMenu(`+obj.subMenu+`)">
                                `+obj.subMenu[count].name+`
                            </a>
                        </li>
                    `;

                    for(var count1 = 0;count1 < obj.subMenu[count].length;count1++){
                        console.log(obj.subMenu[count1]);
                        //------ BUILD THE FIRST LEVEL MENU -------
                        $scope.subMenuItemWrap += `
                            <div class="sub-menu-items menu">
                                <ul>
                                    <li class="child-menu-item">
                                        <a href="javascript:void(0);" id="child-menu-item-`+obj.subMenu[count].subMenu[count1].sid+`" ng-click="showMenu(`+obj.subMenu+`)">
                                            `+obj.subMenu[count].subMenu[count1].name+`
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        `;
                    }
                }
                //------ APPEND THE FIRST LEVEL MENU TO MENU-ITEMS, ON EACH CLICK, THE MENU-ITEMS INNER HTML IS REPLACED
                document.querySelector(".menu-items").innerHTML = $scope.menuItemWrap;
                document.querySelector(".child-menu-item").appendChild($scope.menuItemWrap);
            }
            // else if( j == "sid"){
            //
            //     console.log("sub obj");
            //     console.log(obj.subMenu);
            //     for(var count = 0;count < obj.subMenu.length;count++){
            //         console.log(obj.subMenu[count]);
            //         //------ BUILD THE FIRST LEVEL MENU -------
            //         $scope.subMenuItemWrap += `
            //             <div class="sub-menu-items menu">
            //                 <ul>
            //                     <li class="child-menu-item">
            //                         <a href="javascript:void(0);" id="child-menu-item-`+obj.subMenu[count].sid+`" ng-click="showMenu(`+obj.subMenu+`)">
            //                             `+obj.subMenu[count].name+`
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </div>
            //         `;
            //     }
            //
            //     //document.querySelector("#child-menu-item-"+obj.sid).parentNode.append($scope.subMenuItemWrap);
            //     //console.log(document.querySelector("#child-menu-item-"+obj.sid).parentNode.innerHTML);
            //     //document.querySelector(".this-child-menu").innerHTML = $scope.menuItemWrap;
            //
            // }
            if (obj.hasOwnProperty(j)) {

                if (typeof(obj[j]) == "object") {
                    if(obj[j].hasOwnProperty("subMenu")){
                        console.log("obj[j]");
                        console.log(obj[j]['subMenu']);
                    }
                    if(!isArray)
                    {
                        //console.log(j + ":");
                    }
                    $scope.showMenu(obj[j]);
                } else if(!isArray) {
                    //console.log(j + ":" + obj[j]);
                }
            }
        }


    };

    //$scope.showChildMenu


});
