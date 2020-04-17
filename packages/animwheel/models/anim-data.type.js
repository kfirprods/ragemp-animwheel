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
exports.default = AnimData;
//# sourceMappingURL=anim-data.type.js.map