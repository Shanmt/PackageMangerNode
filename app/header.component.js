System.register(['angular2/core', './controls.component', './authentication.service'], function(exports_1, context_1) {
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
    var core_1, controls_component_1, authentication_service_1;
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
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(_service) {
                    this._service = _service;
                    var userdetails = localStorage.getItem("user");
                    var user = JSON.parse(userdetails);
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
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFFSSx5QkFDWSxRQUE4QjtvQkFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7b0JBQ25DLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBR3RDLENBQUM7Z0JBRUwsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsZ0NBQU0sR0FBTjtvQkFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQXpCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsaUNBQWlDO3dCQUM5QyxVQUFVLEVBQUMsQ0FBQyxzQ0FBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsOENBQXFCLENBQUM7cUJBRXJDLENBQUM7O21DQUFBO2dCQW9CRixzQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsNkNBa0JDLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sc0NvbXBvbmVudH0gZnJvbSAnLi9jb250cm9scy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhlYWQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W0NvbnRyb2xzQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50e1xyXG4gICAgTG9naW5OYW1lO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VydmljZTpBdXRoZW50aWNhdGlvblNlcnZpY2Upe1xyXG4gICAgICAgICAgIHZhciB1c2VyZGV0YWlscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTsgXHJcbiAgICAgICAgICAgdmFyIHVzZXIgPSBKU09OLnBhcnNlKHVzZXJkZXRhaWxzKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5jaGVja0NyZWRlbnRpYWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcbn0iXX0=
