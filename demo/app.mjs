import { probabilities, sample } from './policy.mjs';
const $ = id => document.getElementById(id);
const sets = {health:['Turn left','Turn right','Move forward'],basic:['Move left','Move right','Attack'],defend:['Turn left','Turn right','Attack']};
let values = [1,2,4], names = sets.health, current;
function update() {
  current = probabilities(values,$('policy').value,Number($('parameter').value));
  $('parameter-value').value = Number($('parameter').value).toFixed(1);
  $('bars').replaceChildren(...names.map((name,i)=>{
    const row=document.createElement('div');row.className='bar-row';
    const caption=document.createElement('div');caption.className='bar-caption';
    caption.textContent=`${name} · Q = ${values[i].toFixed(1)}`;
    const result=document.createElement('strong');result.textContent=`${(100*current[i]).toFixed(1)}%`;caption.append(result);
    const track=document.createElement('div');track.className='bar-track';
    const fill=document.createElement('div');fill.className='bar-fill';fill.style.width=`${100*current[i]}%`;track.append(fill);row.append(caption,track);return row;
  }));
  $('chosen').textContent='—';$('counts').textContent='Adjust a value to update the probabilities.';
}
function controls() {
  $('q-controls').replaceChildren(...names.map((name,i)=>{
    const wrap=document.createElement('div'),label=document.createElement('label'),input=document.createElement('input'),out=document.createElement('output');
    input.type='range';input.id=`q-${i}`;input.min='-5';input.max='8';input.step='.1';input.value=values[i];label.htmlFor=input.id;label.textContent=`${name} · Q`;out.value=values[i].toFixed(1);label.append(out);
    input.addEventListener('input',()=>{values[i]=Number(input.value);out.value=values[i].toFixed(1);update()});wrap.append(label,input);return wrap;
  }));update();
}
$('scenario').addEventListener('change',()=>{names=sets[$('scenario').value];controls()});
$('policy').addEventListener('change',()=>{
  const epsilon=$('policy').value==='epsilon';
  $('parameter-label').textContent=epsilon?'Exploration ε':'Temperature';
  Object.assign($('parameter'),{min:epsilon?'0':'.1',max:epsilon?'1':'5',step:epsilon?'.05':'.1',value:epsilon?'.2':'1'});update();
});
$('parameter').addEventListener('input',update);
$('sample').addEventListener('click',()=>{$('chosen').textContent=names[sample(current,Math.random())];$('counts').textContent='One random draw from the displayed distribution.'});
$('repeat').addEventListener('click',()=>{
  const counts=[0,0,0];for(let i=0;i<400;i++)counts[sample(current,Math.random())]++;
  $('chosen').textContent='400 draws';$('counts').textContent=counts.map((n,i)=>`${names[i]}: ${n}`).join(' · ');
});
$('reset').addEventListener('click',()=>{values=[1,2,4];$('scenario').value='health';names=sets.health;$('policy').value='softmax';Object.assign($('parameter'),{min:'.1',max:'5',step:'.1',value:'1'});$('parameter-label').textContent='Temperature';controls()});
$('clip').addEventListener('change',()=>{
  $('video').pause();$('video').src=`media/${$('clip').value}.mp4`;$('video').load();
  $('clip-caption').textContent=($('clip').value==='navigation'?'Navigation and health collection':'Turn and shoot')+' · original 2016 recording, converted from OGV.';
});
controls();
