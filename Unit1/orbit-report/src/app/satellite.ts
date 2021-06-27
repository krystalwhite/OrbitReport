export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;

    }

    shouldShowWarning() {
        if (this.type.toLowerCase() === "space debris") {
            // adds the warning CSS class to the <td> containing the satellite's type
            // come back and incorporate this after reading lesson 3 chapter
            return true;
        } else {
            return false;
        }
    }






}

