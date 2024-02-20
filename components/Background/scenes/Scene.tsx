import { Scene as SceneThree } from "three";
import Camara from "../clases/Camara";
import Skybox from "../clases/Skybox";
import Luces from "../clases/Luces";
import CaballeroLoader from "../clases/CaballeroLoader";
import OrbitControl from "../clases/OrbitImplementation";

export default class Scene extends SceneThree{

    private camara : Camara

    constructor(renderer) {
        super()
        this.camara = new Camara()
        new OrbitControl(this.camara,renderer)
        new Luces(this)
        new Skybox(this)
        new CaballeroLoader(this,renderer,this.camara)
        this.update(renderer)
    }

    private update(renderer){
        renderer.render(this, this.camara)
        requestAnimationFrame(this.update.bind(this, renderer))
    }
}