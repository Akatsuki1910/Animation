/*jshint esversion: 6 */
var width = window.innerWidth;
var height = window.innerHeight;
//three.js
var p=0
var box=[];
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
for(var i=0;i<2;i++){
	var geometry = new THREE.RingBufferGeometry(400-i*300, 500-i*300, 200);
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	group1.add(box[i]);
}
p=i;
var circlenum=28;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleBufferGeometry(50, 200, 0, Math.PI*2);
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].position.x=Math.cos((i-p)*(Math.PI)*2/circlenum)*(450);
	box[i].position.y=Math.sin((i-p)*(Math.PI)*2/circlenum)*(450);
	group2.add(box[i]);
}
p=i;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleGeometry( 50, 3 );
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].position.x=Math.cos((i-p)*(Math.PI)*2/circlenum)*(450);
	box[i].position.y=Math.sin((i-p)*(Math.PI)*2/circlenum)*(450);
	box[i].rotation.z=(i-p)*(Math.PI)*2/circlenum;
	group2.add(box[i]);
}
p=i;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleGeometry( 50, 3 );
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].position.x=Math.cos((i-p)*(Math.PI)*2/circlenum)*(450);
	box[i].position.y=Math.sin((i-p)*(Math.PI)*2/circlenum)*(450);
	box[i].rotation.z=(i-p)*(Math.PI)*2/circlenum+(Math.PI);
	group2.add(box[i]);
}
p=i;
circlenum=9;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleBufferGeometry(50, 200, 0, Math.PI*2);
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].position.x=Math.cos((i-p)*(Math.PI)*2/circlenum)*(150);
	box[i].position.y=Math.sin((i-p)*(Math.PI)*2/circlenum)*(150);
	group3.add(box[i]);
}
p=i;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleGeometry( 50, 3 );
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].position.x=Math.cos((i-p)*(Math.PI)*2/circlenum)*(150);
	box[i].position.y=Math.sin((i-p)*(Math.PI)*2/circlenum)*(150);
	box[i].rotation.z-=(i-p)*(Math.PI)*2/circlenum;
	group3.add(box[i]);
}
p=i;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleGeometry( 50, 3 );
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].position.x=Math.cos((i-p)*(Math.PI)*2/circlenum)*(150);
	box[i].position.y=Math.sin((i-p)*(Math.PI)*2/circlenum)*(150);
	box[i].rotation.z-=(i-p)*(Math.PI)*2/circlenum+(Math.PI);
	group3.add(box[i]);
}
p=i;
circlenum=4;
for(var i=p;i<p+circlenum;i++){
	var geometry = new THREE.CircleGeometry(400,4);
	var edges = new THREE.EdgesGeometry(geometry);
	var material = new THREE.LineBasicMaterial({
		color: 0x008866,
		side: THREE.DoubleSide,
	});
	box[i] = new THREE.LineSegments(edges,material);
	box[i].rotation.z=(i-p)*(Math.PI)/circlenum/2;
	group1.add(box[i]);
}
p=i;


scene.add(group1);
scene.add(group2);
scene.add(group3);

function animate(){
	requestAnimationFrame(animate);
	group2.rotation.z+=0.01;
	group3.rotation.z-=0.01;
	controls.update();

	rendererThree.render(scene, camera);
}

requestAnimationFrame(animate);
