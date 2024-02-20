import {GLTFLoader} from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import Camara from "../clases/Camara";
// import {GLTFLoader} from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'




export default class CaballeroLoader{

    //private camara : Camara

    constructor(scene,renderer,camara) {
        camara = new Camara()
        const loader = new GLTFLoader().setPath('/models/armadura/')
        loader.load('scene.gltf', async function(gtlf){
            const model = gtlf.scene
            model.scale.set(10,10,10)
            camara.lookAt(model.position)
            model.position.set(0,0,0) //-5,1,0

            await renderer.compileAsync( model, camara, scene );

            scene.add(model);
    
        })
    }
}