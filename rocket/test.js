/*jshint esversion: 6 */
var width = window.innerWidth;
var height = window.innerHeight;
//three.js
var geometry=[];
var material=[];
var box=[];
var group1=new THREE.Group();
var group2=new THREE.Group();
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
var p=0;
//胴
for(var i=0;i<1;i++){
	geometry[i] = new THREE.CylinderGeometry(50, 50, 400, 10, 10, false );
	material[i] = new THREE.MeshBasicMaterial( { color: 0x008866, wireframe:true} );
	box[i] = new THREE.Mesh(geometry[i], material[i]);
}
box[0].position.y-=100;
p=i;
//先端
for(;i<p+1;i++){
	geometry[i] = new THREE.CylinderGeometry(0, 50, 100, 10, 10, false );
	material[i] = new THREE.MeshBasicMaterial( { color: 0x008866, wireframe:true} );
	box[i] = new THREE.Mesh(geometry[i], material[i]);
	box[i].position.y+=150;
}
p=i;
//脇
for(;i<p+4;i++){
	geometry[i] = new THREE.CylinderGeometry(50, 50, 200, 10, 10, false );
	material[i] = new THREE.MeshBasicMaterial( { color: 0x008866, wireframe:true} );
	box[i] = new THREE.Mesh(geometry[i], material[i]);
	box[i].position.y-=250;
}
box[2].position.x-=100;
box[3].position.x+=100;
box[4].position.z-=100;
box[5].position.z+=100;
p=i;
//発射口
for(;i<p+4;i++){
	geometry[i] = new THREE.CylinderGeometry(50, 60, 100, 10, 10, false );
	material[i] = new THREE.MeshBasicMaterial( { color: 0x008866, wireframe:true} );
	box[i] = new THREE.Mesh(geometry[i], material[i]);
	box[i].position.y-=400;
}
box[6].position.x-=100;
box[7].position.x+=100;
box[8].position.z-=100;
box[9].position.z+=100;
p=i;
//先端脇
for(;i<p+4;i++){
	geometry[i] = new THREE.CylinderGeometry(0, 50, 100, 10, 10, false );
	material[i] = new THREE.MeshBasicMaterial( { color: 0x008866, wireframe:true} );
	box[i] = new THREE.Mesh(geometry[i], material[i]);
	box[i].position.y-=100;
}
box[10].position.x-=100;
box[11].position.x+=100;
box[12].position.z-=100;
box[13].position.z+=100;
p=i;


for(var i=0;i<2;i++){
	group1.add(box[i]);
}
for(var i=2;i<box.length;i++){
	group2.add(box[i]);
}
scene.add(group1);
scene.add(group2);

function animate(){
	requestAnimationFrame(animate);
	group2.rotation.y+=0.1;
	controls.update();

	rendererThree.render(scene, camera);
}

requestAnimationFrame(animate);
