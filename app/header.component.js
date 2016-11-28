System.register(['angular2/core', './controls.component', './authentication.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, controls_component_1, authentication_service_1, http_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (controls_component_1_1) {
                controls_component_1 = controls_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(_service, http) {
                    this._service = _service;
                    this.http = http;
                    var userdetails = localStorage.getItem("user");
                    if (userdetails) {
                        var user = JSON.parse(userdetails);
                        this.LoginUserName = user.name;
                    }
                    else {
                        this.LoginUserName = "User";
                    }
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    this._service.checkCredentials();
                };
                HeaderComponent.prototype.logout = function () {
                    this._service.logout();
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-head',
                        templateUrl: 'app/views/header.component.html',
                        directives: [controls_component_1.ControlsComponent],
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, http_1.Http])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFFSSx5QkFDWSxRQUE4QixFQUFVLElBQVM7b0JBQWpELGFBQVEsR0FBUixRQUFRLENBQXNCO29CQUFVLFNBQUksR0FBSixJQUFJLENBQUs7b0JBQ3RELElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRS9DLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNqQyxDQUFDO29CQUNELElBQUksQ0FBQSxDQUFDO3dCQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO29CQUM5QixDQUFDO2dCQUdKLENBQUM7Z0JBRUwsa0NBQVEsR0FBUjtvQkFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsZ0NBQU0sR0FBTjtvQkFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsaUNBQWlDO3dCQUM5QyxVQUFVLEVBQUMsQ0FBQyxzQ0FBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsOENBQXFCLENBQUM7cUJBRXJDLENBQUM7O21DQUFBO2dCQTRCRixzQkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsNkNBMEJDLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sc0NvbXBvbmVudH0gZnJvbSAnLi9jb250cm9scy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhlYWQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W0NvbnRyb2xzQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50e1xyXG4gICAgTG9naW5Vc2VyTmFtZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3NlcnZpY2U6QXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGh0dHA6SHR0cCl7XHJcbiAgICAgICAgICAgdmFyIHVzZXJkZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpOyBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBpZih1c2VyZGV0YWlscyl7XHJcbiAgICAgICAgICAgICB2YXIgdXNlciA9IEpTT04ucGFyc2UodXNlcmRldGFpbHMpO1xyXG4gICAgICAgICAgICAgdGhpcy5Mb2dpblVzZXJOYW1lID0gdXNlci5uYW1lO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgdGhpcy5Mb2dpblVzZXJOYW1lID0gXCJVc2VyXCI7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2hlY2tDcmVkZW50aWFscygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG59Il19
