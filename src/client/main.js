import * as THREE from 'three'
const sphereGeometry = new THREE.SphereGeometry(1.5,32,32)
// const triGeometry = new THREE.t
/*
We need 4 elements to get started:

1) A scene that will contain objects
2) Some objects
3) A camera
4) A renderer

*/
// 1)
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1.5,1.5,3)

// To create the material, we use the MeshBasicMaterial class with one parameter: an object {} containing all the options.
const material = new THREE.MeshBasicMaterial({color:`green`})//transparent:true,opacity:.5

// To create the final mesh, we use the Mesh class and send the geometry and the material as parameters.
const mesh = new THREE.Mesh(geometry,material)
// add opacity to mesh
const addOpacity = () => {
    mesh.material.transparent=true;
    mesh.material.opacity=.5;
    return;
 } 
 addOpacity()
 
// plug your mesh into the scene
scene.add(mesh)
// 2)
// field of view (fov)(degree) & height and width aspect ratios
const aRatio = {
    height:550,
    width:750
}
const fov = 75
const camera = new THREE.PerspectiveCamera(fov,aRatio.width/aRatio.height)
camera.position.z = 3


scene.add(camera)

// 3 
const canvas = document.querySelector('.three-canvas')
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(aRatio.width,aRatio.height)
    

// render animation
const renderAnimation = () => {
    requestAnimationFrame( renderAnimation )
    // animation transform
    
let c = .0025 // starting speed
    for(let i = 0; i <= 5; i++){
       
        setTimeout(()=>{
            // set rotation to x & y axis
            // rotation += c (starting speed)
            mesh.rotation.x+=((c+=.0005)%.1)
            mesh.rotation.y+=((c+=.0005)%.1)
        },2000*(i+1))
    }

    // 4 render
    renderer.render( scene,camera )
}
renderAnimation();