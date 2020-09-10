"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var addemployee_initialpage_1 = require("../Pages/addemployee_initialpage");
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var expect = require('chai').expect;
var add = new addemployee_initialpage_1.addemployee_initialpage();
cucumber_1.When('i add {string} in firstName textbox', function (uname) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, add.txtfirstName.sendKeys(uname)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('i add {string}  in lastName  textbox.', function (lname) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.txtlastName.sendKeys(lname)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('i add {string} in employee id textbox', function (empid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.txtemployeeId.clear()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, add.txtemployeeId.sendKeys(empid)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('i select workplace dropdown', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.ddLocation1.click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, add.ddLocation2.each(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.driver.sleep(500)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, add.ddLocation3.click()];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.browser.driver.sleep(500)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i assert that login checkbox is unchecked', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(add.chkLogin.isSelected()).to.eventually.equal(false)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i select the login checkbox', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.chkLogin.click()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i enter the {string} in username textbox.', function (username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.txtuserName.sendKeys(username)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i enter the {string} in password textbox', function (password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.txtPassword.sendKeys(password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i enter the {string} in confirm password textbox', function (password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.txtconfirmPassword.sendKeys(password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i select the Roleid dropdown.', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, add.ddlRole2.click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, add.ddlRole3.each(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.driver.sleep(500)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, add.ddlRole4.click()];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, protractor_1.browser.driver.sleep(500)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i click on Next button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(add.btnNext).perform()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, add.btnNext.click()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('Add Employee Personal Wizard details should be shown.', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
});
