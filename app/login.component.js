System.register(['angular2/core', './authentication.service'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_service) {
                    this._service = _service;
                    this.user = new authentication_service_1.User('', '', '');
                    this.errorMsg = '';
                }
                LoginComponent.prototype.login = function () {
                    if (!this._service.login(this.user)) {
                        this.errorMsg = 'Failed to login';
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        providers: [authentication_service_1.AuthenticationService],
                        templateUrl: 'app/views/login.component.html',
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLHdCQUNZLFFBQThCO29CQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtvQkFKbkMsU0FBSSxHQUFHLElBQUksNkJBQUksQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixhQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUtqQixDQUFDO2dCQUVMLDhCQUFLLEdBQUw7b0JBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO29CQUN0QyxDQUFDO2dCQUNMLENBQUM7Z0JBckJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFNBQVMsRUFBRSxDQUFDLDhDQUFxQixDQUFDO3dCQUNsQyxXQUFXLEVBQUUsZ0NBQWdDO3FCQUVoRCxDQUFDOztrQ0FBQTtnQkFpQkYscUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDJDQWVDLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2UsVXNlcn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luLWZvcm0nLFxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHVzZXIgPSBuZXcgVXNlcignJywnJywnJyk7XG4gICAgcHVibGljIGVycm9yTXNnID0gJyc7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3NlcnZpY2U6QXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgaWYoIXRoaXMuX3NlcnZpY2UubG9naW4odGhpcy51c2VyKSl7XG4gICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gJ0ZhaWxlZCB0byBsb2dpbic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==
