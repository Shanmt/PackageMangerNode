System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var User, users, AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            users = [
                new User('admin@admin.com', 'adm9', 'Admin'),
                new User('user1@gmail.com', 'a23', 'Shan')
            ];
            AuthenticationService = (function () {
                function AuthenticationService(_router) {
                    this._router = _router;
                }
                AuthenticationService.prototype.logout = function () {
                    localStorage.removeItem("user");
                    this._router.navigate(['Login']);
                };
                AuthenticationService.prototype.login = function (user) {
                    var authenticatedUser = users.find(function (u) { return u.email === user.email; });
                    if (authenticatedUser) {
                        console.log(authenticatedUser);
                        localStorage.setItem("user", JSON.stringify(authenticatedUser));
                        this._router.navigate(['Home']);
                        return true;
                    }
                    return false;
                };
                AuthenticationService.prototype.checkCredentials = function () {
                    if (localStorage.getItem("user") === null) {
                        this._router.navigate(['Login']);
                    }
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztjQVlJLEtBQUs7Ozs7Ozs7Ozs7WUFUVDtnQkFDRSxjQUNTLEtBQWEsRUFDYixRQUFnQixFQUNoQixRQUFnQjtvQkFGaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFRO2dCQUVuQixDQUFDO2dCQUNULFdBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHVCQU9DLENBQUE7WUFFRyxLQUFLLEdBQUc7Z0JBQ1YsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQztnQkFDMUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQzthQUN6QyxDQUFDO1lBR0Y7Z0JBRUUsK0JBQ1UsT0FBZTtvQkFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFFLENBQUM7Z0JBRTVCLHNDQUFNLEdBQU47b0JBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFJO29CQUNSLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO29CQUVoRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUM7d0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDL0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRWYsQ0FBQztnQkFFQSxnREFBZ0IsR0FBaEI7b0JBQ0MsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO3dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLENBQUM7Z0JBQ0gsQ0FBQztnQkE1Qkg7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBNkJiLDRCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCx5REE0QkMsQ0FBQSIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nLFxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nXG4gICAgXG4gICAgKSB7IH1cbn1cblxudmFyIHVzZXJzID0gW1xuICBuZXcgVXNlcignYWRtaW5AYWRtaW4uY29tJywnYWRtOScsJ0FkbWluJyksXG4gIG5ldyBVc2VyKCd1c2VyMUBnbWFpbC5jb20nLCdhMjMnLCdTaGFuJylcbl07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXt9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXIpe1xuICAgIHZhciBhdXRoZW50aWNhdGVkVXNlciA9IHVzZXJzLmZpbmQodSA9PiB1LmVtYWlsID09PSB1c2VyLmVtYWlsKTtcbiAgICBcbiAgICBpZiAoYXV0aGVudGljYXRlZFVzZXIpe1xuICAgICAgY29uc29sZS5sb2coYXV0aGVudGljYXRlZFVzZXIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGF1dGhlbnRpY2F0ZWRVc2VyKSk7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pOyAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgIGNoZWNrQ3JlZGVudGlhbHMoICl7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSA9PT0gbnVsbCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0xvZ2luJ10pO1xuICAgIH1cbiAgfSBcbn1cbiJdfQ==
