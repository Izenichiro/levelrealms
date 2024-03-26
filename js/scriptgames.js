// Таймер на кнопку с загрузкой - своеобразное ограничение кликов для рулетки предметов
function validate(){

  var  myButton= document.getElementById('myButton');
  var  myImage= document.getElementById('myImage');

  var hide_timeout = 1; // задержка 0.001 сек перед тем как спрятать кнопку;
  var show_timeout = 9100; // задержка 9.1 сек перед тем как показать кнопку;

  setTimeout (function(){
    myButton.style.display ='none';
    myImage.style.display ='inline';
  },hide_timeout);

  setTimeout (function(){
    myButton.style.display ='inline';
    myImage.style.display ='none';    
  },show_timeout);

}
// Скрипт для прокрутки рандомайзера с предметами
$(function(){
   
  var rendertime = 0;
  $('.button1l').on('click',function(){
    
    var right = 0;    
    render();
    var count=0;
    var speed=50;
    // Скорость прокрутки предметов
    var timer = setInterval(function(){
       
          right+=speed;
          count++;
          $('.lootbox-wrapper').css('right',right+'px');
      
          if(count>=150 ){
              speed=30;
          }
          if(count>=200){
              speed=20;
          }
          if(count>=250){
              speed=10;
          }
          if(count>=300){
              speed=5;
          }
          if(count>=320){
              speed=4;
          }
          if(count>=340){
              speed=3;
          }
          if(count>=360){
              speed=2;
          }
          if(count>=380){
              speed=1;
          }
          if(count>=419){
              clearInterval(timer);
              rendertime++;
              var copy= $.clone($('.loot-item')[50]);
              $('.rewards').append(copy);
          }
      },20)
  })

})

// Предметы
// Легендарные предметы
var gold1l = '<div class="loot-item"><span class="gold1l">Лег.</span><img src="/img/lootbox/dragonweapon.png" class="img-fluid" width="130px" alt="dragonweapon"></div>';
var gold2l = '<div class="loot-item"><span class="gold1l">Лег.</span><img src="/img/lootbox/eldenstars.png" class="img-fluid" width="130px" alt="eldenstars"></div>';
var gold3l = '<div class="loot-item"><span class="gold1l">Лег.</span><img src="/img/lootbox/miniranni.png" class="img-fluid" width="130px" alt="miniranni"></div>';
var gold4l = '<div class="loot-item"><span class="gold1l">Лег.</span><img src="/img/lootbox/boltofgransaxspear.png" class="img-fluid" width="130px" alt="boltofgransaxspear"></div>';
// Эпические предметы
var purple1l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/dragonseal.png" class="img-fluid" width="130px" alt="dragonseal"></div>';
var purple2l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/blackknife.png" class="img-fluid" width="130px" alt="blackknife"></div>';
var purple3l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/blasphemousblade.png" class="img-fluid" width="130px" alt="blasphemousblade"></div>';
var purple4l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/magmawhip.png" class="img-fluid" width="130px" alt="magmawhip"></div>';
var purple5l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/boltofgransax.png" class="img-fluid" width="130px" alt="boltofgransax"></div>';
var purple6l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/dragonlightningspear.png" class="img-fluid" width="130px" alt="dragonlightningspear"></div>';
var purple7l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/reduvia.png" class="img-fluid" width="130px" alt="reduvia"></div>';
var purple8l = '<div class="loot-item"><span class="purple1l">Эпич.</span><img src="/img/lootbox/ringofashes.png" class="img-fluid" width="130px" alt="ringofashes"></div>';
// Редкие предметы
var blue1l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/dragonpraybook.png" class="img-fluid" width="130px" alt="dragonpraybook"></div>';
var blue2l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/dragonroar.png" class="img-fluid" width="130px" alt="dragonroar"></div>';
var blue3l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/kindredofrotring.png" class="img-fluid" width="130px" alt="kindredofrotring"></div>';
var blue4l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/summonsword.png" class="img-fluid" width="130px" alt="summonsword"></div>';
var blue5l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/lordrune.png" class="img-fluid" width="130px" alt="lordrune"></div>';
var blue6l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/Frenziedburst.png" class="img-fluid" width="130px" alt="Frenziedburst"></div>';
var blue7l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/carriancrest.png" class="img-fluid" width="130px" alt="carriancrest"></div>';
var blue8l = '<div class="loot-item"><span class="blue1l">Редк.</span><img src="/img/lootbox/armament.png" class="img-fluid" width="130px" alt="armament"></div>';
// Необычные предметы
var green1l = '<div class="loot-item"><span class="green1l">Необ.</span><img src="/img/lootbox/dragoncrest.png" class="img-fluid" width="130px" alt="dragoncrest"></div>';
var green2l = '<div class="loot-item"><span class="green1l">Необ.</span><img src="/img/lootbox/sunflower.png" class="img-fluid" width="130px" alt="sunflower"></div>';
var green3l = '<div class="loot-item"><span class="green1l">Необ.</span><img src="/img/lootbox/jar.png" class="img-fluid" width="130px" alt="jar"></div>';

// Обработка шансов выпадения
function render(){
  console.log('start render');
  $('.lootbox-wrapper').empty();

  for(var i=0;i<100;i++){
      var num = parseInt((Math.random()*100)+1);
    
      if(num >=1 && num <=5){ // 5%
        $('.lootbox-wrapper').append(gold1l, gold2l, gold3l, gold4l);
      }else if(num >=6 && num <=15){ // 10%
        $('.lootbox-wrapper').append(purple1l, purple2l, purple3l, purple4l, purple5l, purple6l, purple7l, purple8l);
      }else if(num >=16 && num <=35){ // 20%
        $('.lootbox-wrapper').append(blue1l, blue2l, blue3l, blue4l, blue5l, blue6l, blue7l, blue8l);
      }else if(num >=36 && num <=100){ // 65% (никогда не добавлять 4-ую переменную в необычных предметах, оно как-то ломает моё казино!)
        $('.lootbox-wrapper').append(green1l, green2l, green3l);
      }
  }
  console.log('finish');
}
// Рандомайзер для игр в виде текста
var nameArray = ["Counter-Strike 2", "Apex Legends", "Genshin Impact", "Call of Duty Warzone", "Rocket League", "League of Legends", "Minecraft", "PUBG", "Palworld", "Enshrouded", "Lost Ark", "DayZ", "THE FINALS", "Monster Hunter: World", "Helldivers 2", "Baldur's Gate 3", "Crab Game", "Unturned", "Team Fortress 2", "三国.群将传", "For Honor", "Persona 3 Reload", "Granblue Fantasy: Relink", "Sons Of The Forest", "The Outlast Trials", "Like a Dragon: Infinite Wealth"]; //Один из них будет выбран случайным образом

var lastIndex = 0; //Используется для запоминания последнего выбранного слова

var domHeaderName = document.getElementsByClassName("nameContainer")[0]; //Поместите сюда идентификатор элемента DOM, который вы хотите изменить.

var bWhichContainer = 0;

//Эта функция получит случайное значение INT, которое позже будет использоваться в качестве индекса массива.
function getRandomInt(iMin, iMax) {
    var newIndex = Math.floor(Math.random() * (iMax - iMin)) + iMin;
    while( lastIndex == newIndex ){
        var newIndex = Math.floor(Math.random() * (iMax - iMin)) + iMin;
    }
  lastIndex = newIndex;  
  return newIndex;
}

function switchContainer( domContainer, index ) {
    
    document.getElementsByClassName("nameContainer")[bWhichContainer].classList.add("hidden");
    
    if( bWhichContainer == 0){
        bWhichContainer = 1;
    }
    else {
        bWhichContainer = 0;
    }
    document.getElementsByClassName("nameContainer")[bWhichContainer].classList.remove("hidden");
    document.getElementsByClassName("nameContainer")[bWhichContainer].innerHTML = nameArray[index];
}

function pickRandomName() {
    var randomIndex = getRandomInt(0, nameArray.length);
    switchContainer(domHeaderName, randomIndex);
    setTimeout(pickRandomName, 8000); //зациклить каждые 8000ms (8s)
}

pickRandomName();

// Сборки - процессинг карточек
let cards =  document.querySelectorAll('.card');
cards.forEach((card)=>{
card.addEventListener('mousemove',(e)=>{
  conicBg(card,e)
  tiltEle(card,e)
  //console.log(alpha);
})
  card.addEventListener('mouseenter',(e)=>{
  card.classList.add('bg');
})
card.addEventListener('mouseleave',(e)=>{
  card.classList.remove('bg');
  tiltEle(card,e,1);
})

})

function conicBg(card,e){
  let cardDim = card.getBoundingClientRect();
  //console.log(cardDim);
  let centerX = cardDim.width/2;
  let centerY = cardDim.height/2;
  let cursorX = e.clientX-cardDim.x;
  let cursorY = e.clientY-cardDim.y;
  let cursorPercentX = (cursorX/cardDim.width)*100;
  let cursorPercentY = (cursorY/cardDim.width)*100;
  let base = centerX - cursorX;
  let height = centerY - cursorY;
   //console.log(cursorX,cursorY);
  let hypotenuse = Math.hypot(base, height);
  let alpha=Math.asin(height/hypotenuse) * (180/3.14);
    
  card.style.backgroundPosition = `${(cursorPercentX)*0.03}% ${(cursorPercentY)*0.8}%`;
  
  console.log(cursorPercentX+50);
  if(base>0 && height>0){
    card.style.setProperty('--deg',(alpha+270)+'deg');
  }
  if(base>0 && height<0){
    card.style.setProperty('--deg',(alpha+270)+'deg');
  }
  if(base<0 && height>0){
    card.style.setProperty('--deg',(-(alpha-180-270))+'deg');
  }
  if(base<0 && height<0){
     card.style.setProperty('--deg',(-(alpha-180-270))+'deg');
  }
}
function tiltEle(ele,e,reset){
  if(reset){
    ele.style.transform = 'rotateY('+0+'deg) rotateX('+0+'deg)';
    return 
  }
   let eledim = ele.getBoundingClientRect();
  
    let x = -(e.offsetX-(eledim.width/2))/10;
    let y = -(e.offsetY-(eledim.height/2))/10;
   ele.style.transform = 'rotateY('+x+'deg) rotateX('+-y+'deg)';
  
}

// Таймер
var target_date = new Date().getTime() + (1000*3600*48); // начальное время таймера
var minutes, seconds; // переменные таймера

var countdown = document.getElementById("tiles"); // сюда элемент к которому он применяется

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// найти количество «секунд» между настоящим моментом и целью
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// форматировать строку обратного отсчета + установить значение тега
	countdown.innerHTML = "<span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

// Человеки-работы
// Они под таймером ходят и что-то делают
"use strict";
///////////////// worker thread code ///////////////////
const theLastExperience = noWorkers => {
	"use strict";
	// ---- биология робото-человеков ----
	const struct = {
		points: [
			{
				x: 0,
				y: -4,
				f(s, d) {
					this.y -= 0.01 * s * ts;
				}
			},
			{
				x: 0,
				y: -16,
				f(s, d) {
					this.y -= 0.02 * s * d * ts;
				}
			},
			{
				x: 0,
				y: 12,
				f(s, d) {
					this.y += 0.02 * s * d * ts;
				}
			},
			{ x: -12, y: 0 },
			{ x: 12, y: 0 },
			{
				x: -3,
				y: 34,
				f(s, d) {
					if (d > 0) {
						this.x += 0.01 * s * ts;
						this.y -= 0.015 * s * ts;
					} else {
						this.y += 0.02 * s * ts;
					}
				}
			},
			{
				x: 3,
				y: 34,
				f(s, d) {
					if (d > 0) {
						this.y += 0.02 * s * ts;
					} else {
						this.x -= 0.01 * s * ts;
						this.y -= 0.015 * s * ts;
					}
				}
			},
			{
				x: -28,
				y: 0,
				f(s, d) {
					this.x += this.vx * 0.025 * ts;
					this.y -= 0.001 * s * ts;
				}
			},
			{
				x: 28,
				y: 0,
				f(s, d) {
					this.x += this.vx * 0.025 * ts;
					this.y -= 0.001 * s * ts;
				}
			},
			{
				x: -3,
				y: 64,
				f(s, d) {
					this.y += 0.015 * s * ts;
					if (d > 0) {
						this.y -= 0.01 * s * ts;
					} else {
						this.y += 0.05 * s * ts;
					}
				}
			},
			{
				x: 3,
				y: 64,
				f(s, d) {
					this.y += 0.015 * s * ts;
					if (d > 0) {
						this.y += 0.05 * s * ts;
					} else {
						this.y -= 0.01 * s * ts;
					}
				}
			}
		],
		links: [
			{ p0: 3, p1: 7, size: 12, lum: 0.5 },
			{ p0: 1, p1: 3, size: 24, lum: 0.5 },
			{ p0: 1, p1: 0, size: 60, lum: 0.5, disk: 1 },
			{ p0: 5, p1: 9, size: 16, lum: 0.5 },
			{ p0: 2, p1: 5, size: 32, lum: 0.5 },
			{ p0: 1, p1: 2, size: 50, lum: 1 },
			{ p0: 6, p1: 10, size: 16, lum: 1.5 },
			{ p0: 2, p1: 6, size: 32, lum: 1.5 },
			{ p0: 4, p1: 8, size: 12, lum: 1.5 },
			{ p0: 1, p1: 4, size: 24, lum: 1.5 }
		]
	};
	class Robot {
		constructor(color, light, size, x, y, struct) {
			this.x = x;
			this.points = [];
			this.links = [];
			this.frame = 0;
			this.dir = 1;
			this.size = size;
			this.color = Math.round(color);
			this.light = light;
			// ---- создать точки соединения, но не сами соединения ----
			for (const p of struct.points) {
				this.points.push(new Robot.Point(size * p.x + x, size * p.y + y, p.f));
			}
			// ---- создать что-то вроде соединения ----
			for (const link of struct.links) {
				const p0 = this.points[link.p0];
				const p1 = this.points[link.p1];
				const dx = p0.x - p1.x;
				const dy = p0.y - p1.y;
				this.links.push(
					new Robot.Link(
						this,
						p0,
						p1,
						Math.sqrt(dx * dx + dy * dy),
						link.size * size / 3,
						link.lum,
						link.force,
						link.disk
					)
				);
			}
		}
		update() {
			if (++this.frame % Math.round(20 / ts) === 0) this.dir = -this.dir;
			if (this === pointer.dancerDrag && this.size < 16 && this.frame > 600) {
				pointer.dancerDrag = null;
				dancers.push(
					new Robot(
						this.color + 90,
						this.light * 1.25,
						this.size * 2,
						pointer.x,
						pointer.y - 100 * this.size * 2,
						struct
					)
				);
				dancers.sort(function(d0, d1) {
					return d0.size - d1.size;
				});
			}
			// ---- обновить ссылки ----
			for (const link of this.links) link.update();
			// ---- точки обновления ----
			for (const point of this.points) point.update(this);
			// ---- заземление ----
			for (const link of this.links) {
				const p1 = link.p1;
				if (p1.y > canvas.height * ground - link.size * 0.5) {
					p1.y = canvas.height * ground - link.size * 0.5;
					p1.x -= p1.vx;
					p1.vx = 0;
					p1.vy = 0;
				}
			}
			// ---- центральное положение ----
			this.points[3].x += (this.x - this.points[3].x) * 0.001;
		}
		draw() {
			for (const link of this.links) {
				if (link.size) {
					const dx = link.p1.x - link.p0.x;
					const dy = link.p1.y - link.p0.y;
					const a = Math.atan2(dy, dx);
					// ---- тени ----
					ctx.save();
					ctx.translate(link.p0.x + link.size * 0.25, link.p0.y + link.size * 0.25);
					ctx.rotate(a);
					ctx.drawImage(
						link.shadow,
						-link.size * 0.5,
						-link.size * 0.5
					);
					ctx.restore();
					// ---- гладкость ----
					ctx.save();
					ctx.translate(link.p0.x, link.p0.y);
					ctx.rotate(a);
					ctx.drawImage(
						link.image,
						-link.size * 0.5,
						-link.size * 0.5
					);
					ctx.restore();
				}
			}
		}
	}
	Robot.Link = class Link {
		constructor(parent, p0, p1, dist, size, light, force, disk) {
			this.p0 = p0;
			this.p1 = p1;
			this.distance = dist;
			this.size = size;
			this.light = light || 1.0;
			this.force = force || 0.5;
			this.image = this.stroke(
				"hsl(" + parent.color + " ,30%, " + parent.light * this.light + "%)",
				true, disk, dist, size
			);
			this.shadow = this.stroke("rgba(0,0,0,0.5)", false, disk, dist, size);
		}
		update() {
			const p0 = this.p0;
			const p1 = this.p1;
			const dx = p1.x - p0.x;
			const dy = p1.y - p0.y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			if (dist > 0.0) {
				const tw = p0.w + p1.w;
				const r1 = p1.w / tw;
				const r0 = p0.w / tw;
				const dz = (this.distance - dist) * this.force;
				const sx = dx / dist * dz;
				const sy = dy / dist * dz;
				p1.x += sx * r0;
				p1.y += sy * r0;
				p0.x -= sx * r1;
				p0.y -= sy * r1;
			}
		}
		stroke(color, axis, disk, dist, size) {
			let image;
			if (noWorkers) {
				image = document.createElement("canvas");
				image.width = dist + size;
				image.height = size;
			} else {
				image = new OffscreenCanvas(dist + size, size);
			}
			const ict = image.getContext("2d");
			ict.beginPath();
			ict.lineCap = "round";
			ict.lineWidth = size;
			ict.strokeStyle = color;
			if (disk) {
				ict.arc(size * 0.5 + dist, size * 0.5, size * 0.5, 0, 2 * Math.PI);
				ict.fillStyle = color;
				ict.fill();
			} else {
				ict.moveTo(size * 0.5, size * 0.5);
				ict.lineTo(size * 0.5 + dist, size * 0.5);
				ict.stroke();
			}
			if (axis) {
				const s = size / 10;
				ict.fillStyle = "#000";
				ict.fillRect(size * 0.5 - s, size * 0.5 - s, s * 2, s * 2);
				ict.fillRect(size * 0.5 - s + dist, size * 0.5 - s, s * 2, s * 2);
			}
			return image;
		}
	};
	Robot.Point = class Point {
		constructor(x, y, fn, w) {
			this.x = x;
			this.y = y;
			this.w = w || 0.5;
			this.fn = fn || null;
			this.px = x;
			this.py = y;
			this.vx = 0.0;
			this.vy = 0.0;
		}
		update(robot) {
			// ---- танцы ----
			if (robot !== pointer.dancerDrag) {
				this.fn && this.fn(16 * Math.sqrt(robot.size), robot.dir);
			}
			// ---- верлетная интеграция ----
			this.vx = this.x - this.px;
			this.vy = this.y - this.py;
			this.px = this.x;
			this.py = this.y;
			this.vx *= 0.995;
			this.vy *= 0.995;
			this.x += this.vx;
			this.y += this.vy + 0.01 * ts;
		}
	};
	// ---- исходные переменные ----
	const dancers = [];
	let ground = 1.0;
	let canvas = { width: 0, height: 0, resize: true };
	let ctx = null;
	let pointer = { x: 0, y: 0, dancerDrag: null, pointDrag: null };
	let ts = 1;
	let lastTime = 0;
	// ---- сообщения из основной темы ----
	const message = e => {
		switch (e.data.msg) {
			case "start":
				canvas.elem = e.data.elem;
				canvas.width = canvas.elem.width;
				canvas.height = canvas.elem.height;
				ctx = canvas.elem.getContext("2d");
				initRobots();
				requestAnimationFrame(run);
				break;
			case "resize":
				canvas.width = e.data.width;
				canvas.height = e.data.height;
				canvas.resize = true;
				break;
			case "pointerMove":
				pointer.x = e.data.x;
				pointer.y = e.data.y;
				break;
			case "pointerDown":
				pointer.x = e.data.x;
				pointer.y = e.data.y;
				for (const dancer of dancers) {
					for (const point of dancer.points) {
						const dx = pointer.x - point.x;
						const dy = pointer.y - point.y;
						const d = Math.sqrt(dx * dx + dy * dy);
						if (d < 60) {
							pointer.dancerDrag = dancer;
							pointer.pointDrag = point;
							dancer.frame = 0;
						}
					}
				}
				break;
			case "pointerUp":
				pointer.dancerDrag = null;
				break;
		}
	};
	// ---- изменить размер экрана ----
	const resize = () => {
		canvas.elem.width = canvas.width;
		canvas.elem.height = canvas.height;
		canvas.resize = false;
		ground = canvas.height > 500 ? 0.85 : 1.0;
		for (let i = 0; i < dancers.length; i++) {
			dancers[i].x = (i + 2) * canvas.width / 9;
		}
	}
	// ---- основной цикл ----
	const run = (time) => {
		requestAnimationFrame(run);
		if (canvas.resize === true) resize();
		// ---- настроить скорость в соответствии с частотой экрана ----
		if (lastTime !== 0) {
			const t = (time - lastTime) / 16;
			ts += (t - ts) * 0.1;
			if (ts > 1) ts = 1;
		}
		lastTime = time;
		// ---- очистить экран ----
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#222";
		ctx.fillRect(0, 0, canvas.width, canvas.height * 0.15);
		ctx.fillRect(0, canvas.height * 0.85, canvas.width, canvas.height * 0.15);
		// ---- анимированные робото-человеки ----
		for (const dancer of dancers) {
			dancer.update();
			dancer.draw();
		}
	};
	const initRobots = () => {
		// ---- создавать экземпляры роботов ----
		ground = canvas.height > 500 ? 0.85 : 1.0;
		for (let i = 0; i < 6; i++) {
			dancers.push(
				new Robot(
					i * 360 / 7,
					80,
					Math.sqrt(Math.min(canvas.width, canvas.height)) / 6,
					(i + 2) * canvas.width / 9,
					canvas.height * 0.5 - 100,
					struct
				)
			);
		}
	};
	// ---- основной поток против рабочего
	if (noWorkers) {
		// ---- эмулировать интерфейс postMessage ----
		return {
			postMessage(data) {
				message({ data: data });
			}
		};
	} else {
		// ---- обмен сообщениями между работниками ----
		onmessage = message;
	}
};
///////////////// main thread code ///////////////////
let worker = null;
const createWorker = fn => {
	const URL = window.URL || window.webkitURL;
	return new Worker(URL.createObjectURL(new Blob(["(" + fn + ")()"])));
};
// ---- инициализация холста----
const canvas = document.querySelector("canvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
// ---- экземпляр работника ----
if (window.Worker && window.OffscreenCanvas) {
	// создание экземпляра фонового работника из функции
	worker = createWorker(theLastExperience);
	// клонирование OffscreenCanvas
	const offscreen = canvas.transferControlToOffscreen();
	// отправка данных работнику
	worker.postMessage({ msg: "start", elem: offscreen }, [offscreen]);
} else {
	// возврат выполнения к основному потоку
	worker = theLastExperience(true);
	worker.postMessage({ msg: "start", elem: canvas });
}
// ---- изменить размер события ----
window.addEventListener(
	"resize",
	() => {
		worker.postMessage({
			msg: "resize",
			width: canvas.offsetWidth,
			height: canvas.offsetHeight
		});
	},
	false
);





