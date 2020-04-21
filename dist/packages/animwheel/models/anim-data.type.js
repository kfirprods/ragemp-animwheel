"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimData = /** @class */ (function () {
    function AnimData(action, category, objId, boneIndx, posOff, rotOff, animFlag, rageDictKey, rageDictValue, personOff, personOffset) {
        if (personOff === void 0) { personOff = false; }
        if (personOffset === void 0) { personOffset = null; }
        this.action = action;
        this.category = category;
        this.objId = objId;
        this.boneIndx = boneIndx;
        this.posOff = posOff;
        this.rotOff = rotOff;
        this.animFlag = animFlag;
        this.rageDictKey = rageDictKey;
        this.rageDictValue = rageDictValue;
        this.personOff = personOff;
        this.personOffset = personOffset;
    }
    return AnimData;
}());
exports.AnimData = AnimData;
var AnimCategories;
(function (AnimCategories) {
    AnimCategories["None"] = "None";
    AnimCategories["Sitting"] = "Sitting";
    AnimCategories["Laying"] = "Laying";
    AnimCategories["Standing"] = "Standing";
    AnimCategories["Food"] = "Food";
    AnimCategories["Working"] = "Working";
    AnimCategories["Expressions"] = "Expressions";
    AnimCategories["Phone"] = "Phone";
    AnimCategories["Ground"] = "Ground";
    AnimCategories["Leaning"] = "Leaning";
    AnimCategories["Surrender"] = "Surrender";
    AnimCategories["Social"] = "Social";
    AnimCategories["Adult"] = "Adult";
    AnimCategories["Items"] = "Items";
    AnimCategories["Gestures"] = "Gestures";
    AnimCategories["Fighting"] = "Fighting";
})(AnimCategories = exports.AnimCategories || (exports.AnimCategories = {}));
//# sourceMappingURL=anim-data.type.js.map