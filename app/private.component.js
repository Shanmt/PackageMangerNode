System.register(['angular2/core', './header.component', './footer.component', './authentication.service'], function(exports_1, context_1) {
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
    var core_1, header_component_1, footer_component_1, authentication_service_1;
    var PrivateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            PrivateComponent = (function () {
                function PrivateComponent(_service) {
                    this._service = _service;
                    this.WorkSpace = 'Display Screen';
                    this.Controls = 'Controls';
                }
                PrivateComponent.prototype.ngOnInit = function () {
                    this._service.checkCredentials();
                };
                PrivateComponent.prototype.logout = function () {
                    this._service.logout();
                };
                PrivateComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: 'app/views/home.component.html',
                        directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent],
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], PrivateComponent);
                return PrivateComponent;
            }());
            exports_1("PrivateComponent", PrivateComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUksMEJBQ1ksUUFBOEI7b0JBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO29CQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO29CQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTCxtQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCxpQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7d0JBQzVDLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUMsa0NBQWUsQ0FBQzt3QkFDN0MsU0FBUyxFQUFFLENBQUMsOENBQXFCLENBQUM7cUJBQ3JDLENBQUM7O29DQUFBO2dCQW1CRix1QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsK0NBaUJDLENBQUEiLCJmaWxlIjoicHJpdmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3ZpZXdzL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsRm9vdGVyQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJpdmF0ZUNvbXBvbmVudCB7XG4gICAgXG4gICAgV29ya1NwYWNlO1xuICAgIENvbnRyb2xzO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9zZXJ2aWNlOkF1dGhlbnRpY2F0aW9uU2VydmljZSl7XG4gICAgICAgICAgICB0aGlzLldvcmtTcGFjZSA9ICdEaXNwbGF5IFNjcmVlbic7XG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzID0gJ0NvbnRyb2xzJztcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5fc2VydmljZS5jaGVja0NyZWRlbnRpYWxzKCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cbn0iXX0=
