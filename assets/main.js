// Menu mobile
(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰';});}
})();
// Simulateur de prix : 3 €/m² (6 €/m² hauteur / très sale), minimum 50 €
(function(){
  var s=document.getElementById('sim-m2'); if(!s) return;
  var h=document.getElementById('sim-hard'),out=document.getElementById('sim-price'),sap=document.getElementById('sim-sap'),det=document.getElementById('sim-detail');
  function fmt(v){return v.toLocaleString('fr-FR',{minimumFractionDigits:0,maximumFractionDigits:2})+' €';}
  function calc(){
    var m=parseFloat(String(s.value).replace(',','.'))||0, rate=h&&h.checked?6:3, p=m*rate, min=false;
    if(m>0&&p<50){p=50;min=true;}
    out.textContent=m>0?fmt(p):'—';
    det.textContent=m>0?(m+' m² × '+rate+' €/m²'+(min?' → minimum d\'intervention 50 €':'')):'Indiquez votre surface vitrée';
    sap.textContent=m>0?('Particulier éligible au service à la personne : '+fmt(p/2)+' après avance immédiate de 50 %'):'';
  }
  s.addEventListener('input',calc); if(h) h.addEventListener('change',calc); calc();
})();
