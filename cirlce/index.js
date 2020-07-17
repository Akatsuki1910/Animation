/*jshint esversion: 6 */
var width = window.innerWidth;
var height = window.innerHeight;
//three.js
var p=0;
var box=[];
var group0=new THREE.Group();
var group1=new THREE.Group();
var group2=new THREE.Group();
var group3=new THREE.Group();
// レンダラー
var rendererThree = new THREE.WebGLRenderer({
	canvas: document.querySelector('canvas')
});
rendererThree.setPixelRatio(window.devicePixelRatio);
rendererThree.setSize(width, height);
// シーン
var scene = new THREE.Scene();
// カメラ
var camera = new THREE.PerspectiveCamera(60, width / height);
camera.position.set(0, 0, +1000);
var controls = new THREE.OrbitControls(camera);
controls.enableDamping = true;

// object
for(var i=0;i<4;i++){
	var geometry = new THREE.IcosahedronGeometry(100,3);
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
    group0.add(box[i]);
    if(i>0){
        box[i].position.y=-200;
        box[i].position.x=Math.cos((i)*(Math.PI)*2/3)*(200);
        box[i].position.z=Math.sin((i)*(Math.PI)*2/3)*(200);
    }
}
p=i;

for(var i=p;i<p+3;i++){
	var geometry = new THREE.CylinderGeometry( 20, 20, 200, 20, 0, false );
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
    group0.add(box[i]);
    if(i>0){
        box[i].position.y=-100;
        box[i].position.x=Math.cos((i-p+1)*(Math.PI)*2/3)*(100);
        box[i].position.z=Math.sin((i-p+1)*(Math.PI)*2/3)*(100);
        box[i].rotation.z=(Math.PI)/4;
        box[i].rotation.y-=(Math.PI)*2/3*(i-p+1);
    }
}
p=i;

scene.add(group0);

function animate(){
	requestAnimationFrame(animate);
	group0.rotation.y+=0.01;
	controls.update();

	rendererThree.render(scene, camera);
}

requestAnimationFrame(animate);
