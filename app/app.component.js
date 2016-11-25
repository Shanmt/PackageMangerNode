System.register(['angular2/core', './login.component', './private.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_component_1, private_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (private_component_1_1) {
                private_component_1 = private_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES],
                        template: "\n            <router-outlet></router-outlet>\n        "
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: private_component_1.PrivateComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFmTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDBCQUFpQixDQUFDO3dCQUMvQyxRQUFRLEVBQUUseURBRUw7cUJBQ1IsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFFO3dCQUM5RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtxQkFFL0QsQ0FBQzs7Z0NBQUE7Z0JBTUYsbUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVDQUtDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7UHJpdmF0ZUNvbXBvbmVudH0gZnJvbSAnLi9wcml2YXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtMb2dpbkNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIGBcbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy9ob21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IFByaXZhdGVDb21wb25lbnQsdXNlQXNEZWZhdWx0OnRydWUgfSxcbiAgICB7IHBhdGg6ICcvbG9naW4nLCBuYW1lOiAnTG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gIFxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn1cblxuIl19
