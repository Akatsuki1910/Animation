function setup() {
	createCanvas(400, 400); //初期化
	fw.push(new fireWorks());
	noStroke();
	background(0);
}

let fw = [];

function draw() {
	background(0, 10); //背景色 兼 消す

	if (random(1) < 0.08) { //ランダム生成
		fw.push(new fireWorks());
	}

	for (let i = 0; i < fw.length; i++) {
		fw[i].update();
		if (fw[i].life()) {
			fw.splice(i, 1);
		}
	}

}


function fireWorks() {
	let easingOut = 0.035; //いーじんぐ
	let splitWindow = 10; //画面分割用変数
	let nowTime = 0; //今の時間
	let posiX = random(0, windowWidth); //X
	let posiY = random(windowHeight * (splitWindow - 1) / splitWindow, windowHeight); //Y
	let targetY = random(10, windowHeight / 2); //到達点
	let fireColor = [random(0, 256), random(0, 256), random(0, 256)]; //色

	let fireBallLife = true; //玉生存
	let fireWorkLife = false; //花生存

	let fireWorkEasingOut = 0; //いーじんぐで使う
	let flowerSize = random(100, 300); //大きさ
	let flowerNum = 40; //花の量
	let fireWork = []; // 花配列

	this.update = function() {
		nowTime++;
		if (fireBallLife) {
			this.fireBallMove();
		} else if (fireWorkLife) {
			this.fireWorkMove();
		}
	}

	this.fireBallMove = function() {
		let p = targetY - posiY; //到達点までの差
		//push();
		fill(fireColor[0], fireColor[1], fireColor[2]);
		posiY += p * easingOut;
		ellipse(posiX + sin(nowTime / 3) * 3, posiY, 30);
		//pop();
		if (p > -8) { //お好みの値で
			fireBallLife = false;
			fireWorkLife = true;
			for (let i = 0; i < flowerNum; i++) {
				fireWork.push([posiX, posiY]);
			}
		}
	}

	this.fireWorkMove = function() {
		let p = flowerSize - fireWorkEasingOut; //到達点までの差
		fireWorkEasingOut += p * easingOut;
		for (let i = 0; i < flowerNum; i++) {
			//push();
			fill(fireColor[0], fireColor[1], fireColor[2], 255);
			fireWork[i][0] += cos(i * 2 * PI / flowerNum) * p * easingOut;
			fireWork[i][1] += sin(i * 2 * PI / flowerNum) * p * easingOut;
			ellipse(fireWork[i][0], fireWork[i][1], 10);
			//pop();
		}
		if (p < 10) { //お好みの値で
			fireWorkLife = false;
		}
	}

	this.life = function() {
		let flg = false;
		if (!fireBallLife && !fireWorkLife) {
			flg = true;
		}
		return flg;
	}
}