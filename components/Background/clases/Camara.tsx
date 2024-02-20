import {PerspectiveCamera} from 'three';

export default class Camara extends PerspectiveCamera{
    constructor() {
        super(75, window.innerWidth/window.innerHeight,0.1,1000)
        this.position.set( 0.04, 1.04 , -2.75) //-0.21,1.59,-4.17
    }
}