System.register(['angular2/core', './controls.service'], function(exports_1, context_1) {
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
    var core_1, controls_service_1;
    var ControlsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (controls_service_1_1) {
                controls_service_1 = controls_service_1_1;
            }],
        execute: function() {
            ControlsComponent = (function () {
                function ControlsComponent(controlservice) {
                    this.controlservice = controlservice;
                }
                ControlsComponent.prototype.getSettings = function (controls) {
                    var _this = this;
                    this.controlservice.getControlSettings(controls).subscribe(function (data) { return _this.getSettingsDetails = data.fields; }, function (error) { return console.log("Error HTTP GET Service"); }, function () { return console.log("Job Done Get !"); });
                };
                ControlsComponent = __decorate([
                    core_1.Component({
                        selector: 'screen-controls',
                        templateUrl: 'app/views/controls.component.html',
                        providers: [controls_service_1.ControlService]
                    }), 
                    __metadata('design:paramtypes', [controls_service_1.ControlService])
                ], ControlsComponent);
                return ControlsComponent;
            }());
            exports_1("ControlsComponent", ControlsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVJLDJCQUNZLGNBQTZCO29CQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtnQkFFckMsQ0FBQztnQkFDRCx1Q0FBVyxHQUFYLFVBQVksUUFBUTtvQkFBcEIsaUJBU0M7b0JBUEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3RELFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLEVBQXJDLENBQXFDLEVBQzdDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFyQyxDQUFxQyxFQUM5QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUE3QixDQUE2QixDQUV0QyxDQUFDO2dCQUVMLENBQUM7Z0JBckJUO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsU0FBUyxFQUFFLENBQUMsaUNBQWMsQ0FBQztxQkFDOUIsQ0FBQzs7cUNBQUE7Z0JBbUJGLHdCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCxpREFpQkMsQ0FBQSIsImZpbGUiOiJjb250cm9scy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFNlcnZpY2V9IGZyb20gJy4vY29udHJvbHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NyZWVuLWNvbnRyb2xzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3ZpZXdzL2NvbnRyb2xzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0NvbnRyb2xTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xzQ29tcG9uZW50e1xyXG4gICAgZ2V0U2V0dGluZ3NEZXRhaWxzOnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY29udHJvbHNlcnZpY2U6Q29udHJvbFNlcnZpY2UpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2V0dGluZ3MoY29udHJvbHMpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB0aGlzLmNvbnRyb2xzZXJ2aWNlLmdldENvbnRyb2xTZXR0aW5ncyhjb250cm9scykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuZ2V0U2V0dGluZ3NEZXRhaWxzID0gZGF0YS5maWVsZHMsXHJcbiAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgSFRUUCBHRVQgU2VydmljZVwiKSxcclxuICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJKb2IgRG9uZSBHZXQgIVwiKVxyXG5cclxuICAgICAgICAgICApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgLy90aGlzLmNvbnRyb2xzZXJ2aWNlLmdldENvbnRyb2xTZXR0aW5ncygndGV4dCcpO1xyXG59Il19
