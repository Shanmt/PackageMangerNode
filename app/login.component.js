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
                    this.user = new User('', '');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLHdCQUNZLFFBQThCO29CQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtvQkFKbkMsU0FBSSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDdkIsYUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFLakIsQ0FBQztnQkFFTCw4QkFBSyxHQUFMO29CQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztvQkFDdEMsQ0FBQztnQkFDTCxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixTQUFTLEVBQUUsQ0FBQyw4Q0FBcUIsQ0FBQzt3QkFDbEMsV0FBVyxFQUFFLGdDQUFnQztxQkFFaEQsQ0FBQzs7a0NBQUE7Z0JBaUJGLHFCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCwyQ0FlQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4tZm9ybScsXG4gICAgcHJvdmlkZXJzOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC92aWV3cy9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgdXNlciA9IG5ldyBVc2VyKCcnLCcnKTtcbiAgICBwdWJsaWMgZXJyb3JNc2cgPSAnJztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfc2VydmljZTpBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBpZighdGhpcy5fc2VydmljZS5sb2dpbih0aGlzLnVzZXIpKXtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSAnRmFpbGVkIHRvIGxvZ2luJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
