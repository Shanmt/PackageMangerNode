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
                        alert('Wrong Email or Password');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFDRSxjQUNTLEtBQWEsRUFDYixRQUFnQixFQUNoQixRQUFnQjtvQkFGaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFRO2dCQUVuQixDQUFDO2dCQUNULFdBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHVCQU9DLENBQUE7WUFJRDtnQkFFRSwrQkFDVSxPQUFlLEVBQVUsSUFBUztvQkFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUFFLENBQUM7Z0JBRS9DLHNDQUFNLEdBQU47b0JBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFJO29CQUFWLGlCQXNCQztvQkFyQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDcEcsVUFBQSxRQUFRO3dCQUdOLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDOzRCQUV2QixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNyRSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7b0JBRUgsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDRCxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFOUIsQ0FBQyxDQUNGLENBQUM7b0JBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFFZixDQUFDO2dCQUVBLGdEQUFnQixHQUFoQjtvQkFDQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDSCxDQUFDO2dCQXZDSDtvQkFBQyxpQkFBVSxFQUFFOzt5Q0FBQTtnQkF3Q2IsNEJBQUM7WUFBRCxDQXZDQSxBQXVDQyxJQUFBO1lBdkNELHlEQXVDQyxDQUFBIiwiZmlsZSI6ImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nLFxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nXG4gICAgXG4gICAgKSB7IH1cbn1cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwOkh0dHApe31cblxuICBsb2dvdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0xvZ2luJ10pO1xuICB9XG5cbiAgbG9naW4odXNlcil7XG4gICAgdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldFVzZXJzP2VtYWlsPScrdXNlci5lbWFpbCsnJnBhc3N3b3JkPScrdXNlci5wYXNzd29yZCkuc3Vic2NyaWJlKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKHJlc3BvbnNlLmpzb24oKS5zdGF0dXMpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuanNvbigpLnVzZXJbMF0pKSBcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7ICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBhbGVydCgnV3JvbmcgRW1haWwgb3IgUGFzc3dvcmQnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAgXG4gICAgICB9XG4gICAgKTsgXG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAgY2hlY2tDcmVkZW50aWFscyggKXtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpID09PSBudWxsKXtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTG9naW4nXSk7XG4gICAgfVxuICB9IFxufVxuIl19
