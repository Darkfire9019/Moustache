nx = 0;
ny = 0;
function preload(){
    cn = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
c = createCanvas(300,300)
c.center()
wc = createCapture(VIDEO)
wc.hide()
wc.size(300,300)
ml5er = ml5.poseNet(wc,n)
ml5er.on('pose',n_placer)
}
function draw(){
image(wc,0,0,300,300);
image(cn,nx,ny,60,30)
}
function Snapper(){
    save('heheboiii.jpg')
}
function n(){

}
function n_placer(results){
    console.log(results);
    nx = results[0].pose.nose.x + -25;
    ny = results[0].pose.nose.y + 0;
    
}