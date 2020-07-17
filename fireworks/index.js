function setup() {
	windowResized(); //初期化
	fw.push(new fireWorks(time));
	noStroke();
	background(0);
}

let time = 0;
let fw = [];

function draw() {
	background(0, 20); //背景色 兼 消す

	if (random(1) < 0.1) {//ランダム生成
		fw.push(new fireWorks(time));
	}

	for (var i = 0; i < fw.length; i++) {
		fw[i].update();
		if (fw[i].life()) {
			fw.slice(i, 1);
		}
	}

	time++;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function fireWorks(time) {
	const easing = 0.035; //いーじんぐ
	const splitWindow = 10; //画面分割用変数
	let startTime = time; //作成された時間
	let nowTime = time; //今の時間
	let posiX = random(0, windowWidth); //X
	let posiY = random(windowHeight * (splitWindow - 1) / splitWindow, windowHeight); //Y
	const targetY = random(10, windowHeight / 2); //到達点
	const fireColor = [random(0, 256), random(0, 256), random(0, 256)]; //色

	let fireBallLife = true; //玉生存
	let fireWorkLife = false; //花生存

	let fireWorkEasing = 0; //いーじんぐで使う
	const flowerSize = random(100, 300); //大きさ
	const flowerNum = 40; //花の量
	let fireWork = []; // 花配列

	this.update = () => {
		nowTime++;
		if (fireBallLife) {
			this.fireBallMove();
		} else if (!fireWorkLife) {
			this.fireWork();
		}
	}

	this.fireBallMove = () => {
		var fireBallLifeTime = nowTime - startTime;
		const p = targetY - posiY; //到達点までの差
		push();
		fill(fireColor[0], fireColor[1], fireColor[2], 255);
		posiY += p * easing;
		ellipse(posiX + sin(fireBallLifeTime / 3) * 3, posiY, 30);
		pop();
		if (p > -8) { //お好みの値で
			fireBallLife = false;
			fireWorkEasing = 0;
			for (var i = 0; i < flowerNum; i++) {
				fireWork.push([posiX, posiY]);
			}
		}
	}

	this.fireWork = () => {
		const p = flowerSize - fireWorkEasing; //到達点までの差
		fireWorkEasing += p * easing;
		for (var i = 0; i < flowerNum; i++) {
			push();
			fill(fireColor[0], fireColor[1], fireColor[2], 255);
			fireWork[i][0] += Math.cos(i * 2 * Math.PI / flowerNum) * p * easing;
			fireWork[i][1] += Math.sin(i * 2 * Math.PI / flowerNum) * p * easing;
			ellipse(fireWork[i][0], fireWork[i][1], 10);
			pop();
		}
		if (p < 10) { //お好みの値で
			fireWorkLife = true;
		}
	}

	this.life = () => {
		return fireWorkLife;
	}
}