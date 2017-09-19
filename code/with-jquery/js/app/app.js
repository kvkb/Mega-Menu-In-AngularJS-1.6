var app = angular.module("megamenu",[]);

app.run(function() {

});

app.controller("HeaderController",function($scope,$compile,$timeout){

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
                            subMenu:[
                                {
                                    sid:1121,
                                    name:"Sub Menu Item 1121",
                                    subMenu:[
                                        {
                                            sid:11211,
                                            name:"Sub Menu Item 11211",

                                        }
                                    ]
                                },
                                {
                                    sid:1122,
                                    name:"Sub Menu Item 1122",
                                },
                                {
                                    sid:1123,
                                    name:"Sub Menu Item 1123",
                                },
                            ]
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
                            subMenu:[
                                {
                                    sid:2121,
                                    name:"Sub Menu Item 2121",
                                },
                                {
                                    sid:2122,
                                    name:"Sub Menu Item 2122",
                                },
                                {
                                    sid:2123,
                                    name:"Sub Menu Item 2123",
                                },
                            ]
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


    $(document).on("click",".main-item",function() {

        $(".menu").addClass("hidden");
        $(this).next(".menu").toggleClass("hidden");

    });

    $(document).on("click","li .menu-item-trigger",function() {
        var h3w = $(".main-item").width();
        $(this).parent().siblings().find(".menu").addClass("hidden");
        $(this).next(".menu").removeClass("hidden");
    });





});
