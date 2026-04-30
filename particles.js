(function(){
  const c=document.getElementById('bg'); if(!c) return;
  const x=c.getContext('2d');
  let w,h,p=[];
  const n=90;
  const resize=()=>{w=c.width=innerWidth;h=c.height=innerHeight;};
  resize(); addEventListener('resize',resize);
  for(let i=0;i<n;i++) p.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35});
  (function a(){
    x.clearRect(0,0,w,h);
    for(const s of p){
      s.x+=s.vx; s.y+=s.vy;
      if(s.x<0||s.x>w) s.vx*=-1;
      if(s.y<0||s.y>h) s.vy*=-1;
      x.fillStyle='rgba(255,70,70,.78)';
      x.beginPath(); x.arc(s.x,s.y,1.3,0,Math.PI*2); x.fill();
    }
    for(let i=0;i<p.length;i++) for(let j=i+1;j<p.length;j++){
      const a=p[i],b=p[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<130){
        const o=(1-d/130)*.2;
        x.strokeStyle=`rgba(120,20,20,${o})`;
        x.beginPath(); x.moveTo(a.x,a.y); x.lineTo(b.x,b.y); x.stroke();
      }
    }
    requestAnimationFrame(a);
  })();
})();

