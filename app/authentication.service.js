System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1;
    var User, AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            User = (function () {
                function User(email, password, username) {
                    this.email = email;
                    this.password = password;
                    this.username = username;
                }
                return User;
            }());
            exports_1("User", User);
            AuthenticationService = (function () {
                function AuthenticationService(_router, http) {
                    this._router = _router;
                    this.http = http;
                }
                AuthenticationService.prototype.logout = function () {
                    localStorage.removeItem("user");
                    this._router.navigate(['Login']);
                };
                AuthenticationService.prototype.login = function (user) {
                    var _this = this;
                    this.http.get('http://localhost:8000/getUsers?email=' + user.email + '&password=' + user.password).subscribe(function (response) {
                        if (response.json().status) {
                            localStorage.setItem("user", JSON.stringify(response.json().user[0]));
                            _this._router.navigate(['Home']);
                            return true;
                        }
                    }, function (error) {
                        console.log(error.text());
                    });
                    return false;
                };
                AuthenticationService.prototype.checkCredentials = function () {
                    if (localStorage.getItem("user") === null) {
                        this._router.navigate(['Login']);
                    }
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFDRSxjQUNTLEtBQWEsRUFDYixRQUFnQixFQUNoQixRQUFnQjtvQkFGaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFRO2dCQUVyQixDQUFDO2dCQUNQLFdBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHVCQU9DLENBQUE7WUFJRDtnQkFFRSwrQkFDVSxPQUFlLEVBQVUsSUFBVTtvQkFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFJLENBQUM7Z0JBRWxELHNDQUFNLEdBQU47b0JBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFJO29CQUFWLGlCQW1CQztvQkFsQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDMUcsVUFBQSxRQUFRO3dCQUNOLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNyRSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2QsQ0FBQztvQkFFSCxDQUFDLEVBQ0QsVUFBQSxLQUFLO3dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBRTVCLENBQUMsQ0FDRixDQUFDO29CQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRWYsQ0FBQztnQkFFRCxnREFBZ0IsR0FBaEI7b0JBQ0UsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0gsQ0FBQztnQkFwQ0g7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBcUNiLDRCQUFDO1lBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtZQXBDRCx5REFvQ0MsQ0FBQSIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyxcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZ1xuXG4gICkgeyB9XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXIpIHtcbiAgICB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0VXNlcnM/ZW1haWw9JyArIHVzZXIuZW1haWwgKyAnJnBhc3N3b3JkPScgKyB1c2VyLnBhc3N3b3JkKS5zdWJzY3JpYmUoXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5qc29uKCkuc3RhdHVzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmpzb24oKS51c2VyWzBdKSlcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgY2hlY2tDcmVkZW50aWFscygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
