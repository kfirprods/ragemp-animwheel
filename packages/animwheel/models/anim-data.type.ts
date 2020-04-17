export default class AnimData {
    constructor(public action: string, public category: string,
        public objId: number, public boneIndx: string, public posOff: Vector3Mp, public rotOff: Vector3Mp, public animFlag: number, public rageDictKey: string, public rageDictValue: string, public personOff: boolean = false, public personOffset: Vector3Mp = null) {
    }    
}
