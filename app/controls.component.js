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
            this.controlservice.getControlSettings('text');
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNJLDJCQUFvQixjQUErQjtvQkFBL0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO2dCQUVuRCxDQUFDO2dCQVRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsU0FBUyxFQUFFLENBQUMsaUNBQWMsQ0FBQztxQkFDOUIsQ0FBQzs7cUNBQUE7Z0JBT0Usd0JBQUM7WUFBRCxDQUxKLEFBS0ssSUFGQTtZQUhMLGlEQUdLLENBQUE7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbnRyb2xzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sU2VydmljZX0gZnJvbSAnLi9jb250cm9scy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzY3JlZW4tY29udHJvbHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvY29udHJvbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29udHJvbFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHNDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyb2xzZXJ2aWNlIDogQ29udHJvbFNlcnZpY2Upe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRyb2xzZXJ2aWNlLmdldENvbnRyb2xTZXR0aW5ncygndGV4dCcpO1xyXG59Il19
