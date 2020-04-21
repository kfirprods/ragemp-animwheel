export class AnimData {
    constructor(public action: string, public category: AnimCategories,
        public objId: number, public boneIndx: string, public posOff: Vector3Mp, public rotOff: Vector3Mp, public animFlag: number, public rageDictKey: string, public rageDictValue: string, public personOff: boolean = false, public personOffset: Vector3Mp = null) {
    }    
}

export enum AnimCategories
{
    None = "None",
    Sitting = "Sitting",
    Laying = "Laying",
    Standing = "Standing",
    Food = "Food",
    Working = "Working",
    Expressions = "Expressions",
    Phone = "Phone",
    Ground = "Ground",
    Leaning = "Leaning",
    Surrender = "Surrender",
    Social = "Social",
    Adult = "Adult",
    Items = "Items",
    Gestures = "Gestures",
    Fighting = "Fighting"
}