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
                    this.user = new authentication_service_1.User('', '');
                    this.errorMsg = '';
                    console.log('Tseteeeeeeeeeeeeeeeeeeeeee');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLHdCQUNZLFFBQThCO29CQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtvQkFKbkMsU0FBSSxHQUFHLElBQUksNkJBQUksQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZCLGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBSWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUVMLDhCQUFLLEdBQUw7b0JBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO29CQUN0QyxDQUFDO2dCQUNMLENBQUM7Z0JBckJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFNBQVMsRUFBRSxDQUFDLDhDQUFxQixDQUFDO3dCQUNsQyxXQUFXLEVBQUUsZ0NBQWdDO3FCQUVoRCxDQUFDOztrQ0FBQTtnQkFpQkYscUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDJDQWVDLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJ9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbi1mb3JtJyxcbiAgICBwcm92aWRlcnM6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3ZpZXdzL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcblxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyB1c2VyID0gbmV3IFVzZXIoJycsJycpO1xuICAgIHB1YmxpYyBlcnJvck1zZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3NlcnZpY2U6QXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVHNldGVlZWVlZWVlZWVlZWVlZWVlZWVlZWUnKTtcbiAgICAgICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9zZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikpe1xuICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9ICdGYWlsZWQgdG8gbG9naW4nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=
