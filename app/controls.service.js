System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ControlService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ControlService = (function () {
                function ControlService(http) {
                    this.http = http;
                }
                ControlService.prototype.getControlSettings = function (controls) {
                    console.log(this.http.get('http://localhost:8000/getControlSettings?control=' + controls).map(function (res) { return res.json(); }));
                };
                ControlService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ControlService);
                return ControlService;
            }());
            exports_1("ControlService", ControlService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFFSSx3QkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUU5QixDQUFDO2dCQUVELDJDQUFrQixHQUFsQixVQUFtQixRQUFRO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBRSxDQUFDO2dCQUMvSCxDQUFDO2dCQVRMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVdiLHFCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCwyQ0FVQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udHJvbFNldHRpbmdzKGNvbnRyb2xzKXtcclxuICAgICAgY29uc29sZS5sb2coIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXRDb250cm9sU2V0dGluZ3M/Y29udHJvbD0nK2NvbnRyb2xzKS5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkgKTsgXHJcbiAgICB9XHJcblxyXG59Il19
