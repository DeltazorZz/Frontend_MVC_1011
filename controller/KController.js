import KonyvView from "../view/KonyvView.js";
import KonyvekView from "../view/KonyvekView.js";
import KModel from "../model/KModel.js";
class KController{
    constructor(){
        //console.log("megjöttem");
        new KonyvekView();
        const konyvmodel = new KModel();
        konyvmodel.Adatlekeres("../adat.json", this.KonyvAdatok)
    }
    KonyvAdatok(tomb){
        console.log(tomb);
    }
}
export default KController;