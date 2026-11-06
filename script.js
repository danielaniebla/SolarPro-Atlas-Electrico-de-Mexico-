window.SOLARPRO_CFE_REGIONS=[{"id":1,"nombre":"Baja California","servicios_miles":2032,"media_tension_km":21606,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":3.82,"perdidas_no_tecnicas_pct":3.02,"anio":2023},{"id":2,"nombre":"Noroeste","servicios_miles":2284,"media_tension_km":42343,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":4.3,"perdidas_no_tecnicas_pct":6.19,"anio":2023},{"id":3,"nombre":"Norte","servicios_miles":2415,"media_tension_km":41142,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":3.97,"perdidas_no_tecnicas_pct":12.49,"anio":2023},{"id":4,"nombre":"Golfo Norte","servicios_miles":3732,"media_tension_km":47661,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":3.25,"perdidas_no_tecnicas_pct":12.99,"anio":2023},{"id":5,"nombre":"Golfo Centro","servicios_miles":2155,"media_tension_km":31647,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":5.19,"perdidas_no_tecnicas_pct":4.7,"anio":2023},{"id":6,"nombre":"Bajío","servicios_miles":4944,"media_tension_km":69044,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":4.98,"perdidas_no_tecnicas_pct":6.98,"anio":2023},{"id":7,"nombre":"Jalisco","servicios_miles":3595,"media_tension_km":36059,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":4.64,"perdidas_no_tecnicas_pct":6.76,"anio":2023},{"id":8,"nombre":"Centro Occidente","servicios_miles":2590,"media_tension_km":32647,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":5.37,"perdidas_no_tecnicas_pct":2.94,"anio":2023},{"id":9,"nombre":"Centro Sur","servicios_miles":3193,"media_tension_km":39438,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":6.43,"perdidas_no_tecnicas_pct":4.08,"anio":2023},{"id":10,"nombre":"Centro Oriente","servicios_miles":3543,"media_tension_km":28117,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":4.79,"perdidas_no_tecnicas_pct":6.27,"anio":2023},{"id":11,"nombre":"Oriente","servicios_miles":3329,"media_tension_km":45734,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":6.36,"perdidas_no_tecnicas_pct":13.83,"anio":2023},{"id":12,"nombre":"Sureste","servicios_miles":4071,"media_tension_km":66354,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":7.99,"perdidas_no_tecnicas_pct":7.6,"anio":2023},{"id":13,"nombre":"Peninsular","servicios_miles":2205,"media_tension_km":21953,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":3.94,"perdidas_no_tecnicas_pct":5.02,"anio":2023},{"id":14,"nombre":"Valle de México Norte","servicios_miles":3106,"media_tension_km":10540,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":3.84,"perdidas_no_tecnicas_pct":12.36,"anio":2023},{"id":15,"nombre":"Valle de México Centro","servicios_miles":2167,"media_tension_km":5771,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":3.8,"perdidas_no_tecnicas_pct":11.82,"anio":2023},{"id":16,"nombre":"Valle de México Sur","servicios_miles":2924,"media_tension_km":11409,"baja_tension_km":null,"total_mt_bt_km":null,"perdidas_tecnicas_pct":4.28,"perdidas_no_tecnicas_pct":9.03,"anio":2023}];
'use strict';
const $=id=>document.getElementById(id);
const navButtons=[...document.querySelectorAll('[data-view]')];
function showView(view){document.querySelectorAll('.view').forEach(e=>e.classList.toggle('shown',e.id===view));navButtons.forEach(e=>e.classList.toggle('active',e.dataset.view===view));$('sidebar').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});}
navButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));$('menuToggle').addEventListener('click',()=>{const opened=$('sidebar').classList.toggle('open');$('menuToggle').setAttribute('aria-expanded',String(opened));});$('brandHome').addEventListener('click',e=>{e.preventDefault();showView('inicio');});
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('selected',x===b));document.querySelectorAll('.tabview').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab));}));
const items=[
['Gas natural','fósil','Recurso','Combustible fósil que alimenta principalmente centrales de ciclo combinado y turbogás.'],
['Carbón mineral','fósil','Recurso','Combustible fósil empleado en centrales carboeléctricas.'],
['Combustóleo','fósil','Combustible','Derivado del petróleo utilizado en ciertas centrales termoeléctricas.'],
['Diésel','fósil','Combustible','Derivado del petróleo que puede alimentar motores de combustión interna.'],
['Petróleo crudo','fósil','Recurso','Recurso primario del que se obtienen combustóleo, diésel y otros derivados.'],
['Uranio','nuclear','Recurso','Combustible nuclear: la fisión libera calor sin combustión química.'],
['Fisión nuclear','nuclear','Proceso','Proceso nuclear asociado a la categoría nuclear, no un combustible.'],
['Central nucleoeléctrica','nuclear','Tecnología','Utiliza la fisión de combustible nuclear para generar calor y electricidad.'],
['Radiación solar','renovable','Recurso','Recurso renovable capturado por módulos fotovoltaicos.'],
['Viento','renovable','Recurso','Su energía cinética se transforma en energía mecánica y eléctrica.'],
['Energía hidráulica','renovable','Recurso','Se aprovecha la energía potencial o cinética del agua.'],
['Calor geotérmico','renovable','Recurso','Calor del subsuelo aprovechado para generación geotérmica.'],
['Biomasa renovable','renovable','Recurso','Materia orgánica renovable, bajo condiciones de manejo sostenible.'],
['Biogás renovable','renovable','Combustible','Gas procedente de la descomposición de materia orgánica renovable.'],
['Central eólica','renovable','Tecnología','Aprovecha la energía cinética del viento mediante aerogeneradores.'],
['Central fotovoltaica','renovable','Tecnología','Convierte radiación solar directamente en electricidad.'],
['Central de ciclo combinado','depende','Tecnología','Suele operar con gas natural, pero la tecnología se clasifica por su proceso, no por un combustible único.'],
['Central de vapor convencional','depende','Tecnología','Puede utilizar combustibles diferentes según su diseño: carbón, combustóleo, gas u otros.']
];let ci=0,cs=0,answered=false;
function drawClass(){const a=items[ci];$('classCount').textContent=`Tarjeta ${ci+1} de ${items.length}`;$('classProgress').value=ci;$('classScore').textContent=`Aciertos: ${cs}`;$('classType').textContent=a[2].toUpperCase();$('classTitle').textContent=a[0];$('classHint').textContent='¿A qué categoría corresponde en este contexto?';$('classFeedback').textContent='';$('classFeedback').className='feedback';$('classNext').disabled=true;answered=false;document.querySelectorAll('[data-choice]').forEach(b=>b.disabled=false);$('classNext').textContent=ci===items.length-1?'Ver resultado':'Siguiente tarjeta →';}
document.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{if(answered)return;answered=true;const a=items[ci],ok=b.dataset.choice===a[1];if(ok)cs++;$('classScore').textContent=`Aciertos: ${cs}`;$('classFeedback').textContent=(ok?'✓ Correcto. ':'✕ No exactamente. Respuesta esperada: '+a[1]+'. ')+a[3];$('classFeedback').className='feedback '+(ok?'good':'bad');$('classNext').disabled=false;document.querySelectorAll('[data-choice]').forEach(x=>x.disabled=true);}));$('classNext').addEventListener('click',()=>{if(ci===items.length-1){$('classProgress').value=items.length;$('classFeedback').textContent=`Actividad terminada: ${cs} de ${items.length} aciertos. Puedes reiniciarla para practicar.`;$('classNext').disabled=true;return;}ci++;drawClass();});$('classReset').addEventListener('click',()=>{ci=0;cs=0;drawClass();});drawClass();
const flows=[
{n:'Gas natural',steps:[['Gas natural','Combustible fósil que almacena energía química.'],['Combustión','La reacción con oxígeno libera energía térmica.'],['Turbina','El gas caliente o vapor produce movimiento rotatorio, según el diseño.'],['Generador','Convierte energía mecánica en electricidad por inducción electromagnética.'],['Electricidad','Energía eléctrica disponible a la salida del generador.']]},
{n:'Carbón',steps:[['Carbón','Combustible sólido fósil.'],['Combustión','La energía química se convierte en calor.'],['Vapor','El calor produce vapor de agua a alta presión.'],['Turbina','La expansión del vapor impulsa la turbina.'],['Generador','El eje impulsa un generador eléctrico.']]},
{n:'Uranio',steps:[['Uranio','Material nuclear usado como combustible.'],['Fisión','La ruptura de núcleos atómicos libera energía.'],['Calor','La energía térmica se transfiere a un circuito de trabajo.'],['Vapor y turbina','El vapor acciona la turbina.'],['Generador','La rotación se convierte en electricidad.']]},
{n:'Radiación solar',steps:[['Radiación','La luz solar transporta energía electromagnética.'],['Célula fotovoltaica','Los fotones permiten generar pares de cargas y una diferencia de potencial.'],['Corriente continua','El módulo entrega electricidad de corriente continua.'],['Inversor','Convierte corriente continua en alterna para su uso en red.']]},
{n:'Viento',steps:[['Viento','Movimiento del aire con energía cinética.'],['Rotor','Las palas extraen parte de la energía cinética.'],['Generador','El movimiento mecánico acciona el generador.'],['Electricidad','La energía se acondiciona para su integración a la red.']]},
{n:'Agua',steps:[['Agua','La altura y/o movimiento del agua aportan energía.'],['Flujo','El agua atraviesa conductos y entrega energía a una turbina.'],['Turbina','La energía hidráulica se transforma en rotación.'],['Generador','La energía mecánica se convierte en electricidad.']]}
];
flows.forEach((f,i)=>{const o=document.createElement('option');o.value=i;o.textContent=f.n;$('flowSelect').appendChild(o);});function drawFlow(){const f=flows[Number($('flowSelect').value)];$('flowSteps').replaceChildren();f.steps.forEach((s,i)=>{const b=document.createElement('button');b.className='flow-step'+(i===0?' active':'');b.textContent=s[0];b.addEventListener('click',()=>{document.querySelectorAll('.flow-step').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('flowExplain').textContent=s[1];});$('flowSteps').appendChild(b);});$('flowExplain').textContent=f.steps[0][1];}$('flowSelect').addEventListener('change',drawFlow);drawFlow();
const resources=[
{name:'Gas natural',cat:'Fósil',renew:'No',process:'Combustión y ciclos térmicos',control:'Generalmente despachable, sujeto a combustible',emission:'Emisiones directas de combustión'},
{name:'Carbón',cat:'Fósil',renew:'No',process:'Combustión, vapor y turbina',control:'Generalmente despachable, sujeto a combustible',emission:'Emisiones directas de combustión'},
{name:'Uranio',cat:'Nuclear',renew:'No',process:'Fisión, calor, vapor y turbina',control:'Generación controlable con restricciones operativas',emission:'Sin CO₂ directo por combustión; ciclo de vida no nulo'},
{name:'Radiación solar',cat:'Renovable',renew:'Sí',process:'Efecto fotovoltaico',control:'Variable según irradiación',emission:'Sin CO₂ directo por combustión; ciclo de vida no nulo'},
{name:'Viento',cat:'Renovable',renew:'Sí',process:'Rotor y generador',control:'Variable según condiciones meteorológicas',emission:'Sin CO₂ directo por combustión; ciclo de vida no nulo'},
{name:'Agua',cat:'Renovable',renew:'Sí',process:'Turbina hidráulica y generador',control:'Depende de caudal, almacenamiento y restricciones',emission:'Sin CO₂ directo por combustión; ciclo de vida variable'},
{name:'Calor geotérmico',cat:'Renovable',renew:'Sí',process:'Calor, fluido de trabajo y generador',control:'Habitualmente gestionable dentro de límites del recurso',emission:'Emisiones directas variables según el yacimiento'}
];let selected=new Set(['Gas natural','Radiación solar']);resources.forEach(r=>{const l=document.createElement('label');const c=document.createElement('input');c.type='checkbox';c.checked=selected.has(r.name);c.addEventListener('change',()=>{c.checked?selected.add(r.name):selected.delete(r.name);drawCompare();});l.append(c,document.createTextNode(' '+r.name));$('compareChecks').append(l);});function drawCompare(){$('compareOutput').replaceChildren();if(selected.size<2){$('compareOutput').textContent='Selecciona al menos dos recursos.';return;}resources.filter(r=>selected.has(r.name)).forEach(r=>{const a=document.createElement('article');const h=document.createElement('h3');h.textContent=r.name;a.append(h);[['Categoría',r.cat],['Renovable',r.renew],['Conversión',r.process],['Disponibilidad',r.control],['Emisiones',r.emission],['CO₂e/kWh','Dato no disponible']].forEach(([k,v])=>{const p=document.createElement('p');const b=document.createElement('b');b.textContent=k+': ';p.append(b,document.createTextNode(v));a.append(p);});$('compareOutput').append(a);});}drawCompare();
// IPCC AR5 WGIII Annex III, Table A.III.2 (2014): g CO2e/kWh.
// Direct medians only where the table explicitly reports them; zero entries reflect
// direct combustion-related emissions in the IPCC table, not absence of all operational releases.
const ipccFactors=[
 {name:'Carbón pulverizado',life:820,direct:760,range:'740–910',group:'fossil'},
 {name:'Gas natural · ciclo combinado',life:490,direct:370,range:'410–650',group:'fossil'},
 {name:'Biomasa dedicada',life:230,direct:null,range:'130–420',group:'renewable'},
 {name:'Solar FV · gran escala',life:48,direct:0,range:'18–180',group:'renewable'},
 {name:'Solar FV · tejados',life:41,direct:0,range:'26–60',group:'renewable'},
 {name:'Geotermia',life:38,direct:null,range:'6–79',group:'renewable'},
 {name:'Hidroeléctrica',life:24,direct:null,range:'1–2200',group:'renewable'},
 {name:'Nuclear',life:12,direct:0,range:'3.7–110',group:'nuclear'},
 {name:'Eólica terrestre',life:11,direct:0,range:'7–56',group:'renewable'}
];
function drawEmissions(){const mode=$('emissionsMode').value;const target=$('emissionsChart');target.replaceChildren();const max=mode==='lifecycle'?820:760;
 ipccFactors.forEach(d=>{const val=mode==='lifecycle'?d.life:d.direct;const line=document.createElement('div');line.className='emission-row';const label=document.createElement('span');label.textContent=d.name;const track=document.createElement('div');track.className='emission-track';const fill=document.createElement('div');fill.className='emission-fill '+d.group;fill.style.width=val===null?'0%':(100*val/max)+'%';track.append(fill);const num=document.createElement('strong');num.textContent=val===null?'N/D':val.toLocaleString('es-MX');line.append(label,track,num);if(mode==='lifecycle')line.title='Rango reportado: '+d.range+' g CO₂e/kWh';target.append(line);});
 $('emissionsExplanation').textContent=mode==='lifecycle'?'La mediana compara estudios de ciclo de vida. Las barras no muestran incertidumbre: consulta el rango de cada tecnología al colocar el cursor. Las emisiones reales varían según el proyecto y la metodología.':'Valores directos según la definición del IPCC AR5. Cero representa ausencia de emisiones directas de combustión fósil, no ausencia de otras emisiones operativas. En geotermia, hidroeléctrica y biomasa se indica N/D porque el alcance no es comparable.';
}
$('emissionsMode').addEventListener('change',drawEmissions);drawEmissions();
const indicators=[['Dependencia fósil · 2022','68.8 % de la generación nacional, según PRODESEN p. 59.'],['Energías renovables','Dato no disponible: la proporción limpia de 31.2 % no equivale a renovable.'],['Participación nuclear','Dato no disponible: falta separar generación nuclear de otras energías limpias.'],['Evolución tecnológica','Dato no disponible: series nacionales comparables por tecnología 2022–2024 pendientes.'],['Implicaciones ambientales','Combustión fósil: emisiones directas; otras tecnologías: impactos de ciclo de vida que requieren factores documentados.']];indicators.forEach(([a,b])=>{const d=document.createElement('div'),h=document.createElement('b'),p=document.createElement('span');h.textContent=a;p.textContent=b;d.append(h,p);$('indicators').append(d);});
const questions=[
{q:'La generación limpia representa 31.2 % en 2022. ¿Qué podemos concluir sobre la participación renovable?',a:['También es 31.2 %.','No se puede deducir sin separar nuclear y otras tecnologías limpias.','Toda la generación restante es carbón.'],correct:1,why:'La clasificación limpia no equivale a renovable; puede incluir energía nuclear y otras tecnologías conforme al marco normativo.'},
{q:'Dos centrales entregan la misma potencia nominal. ¿Cuál produce más energía anual?',a:['Siempre producen la misma energía.','La que opera más horas equivalentes a plena carga.','La que tiene mayor tensión eléctrica.'],correct:1,why:'La energía depende de la potencia y del tiempo de operación: E = P × t, si la potencia se mantiene constante.'},
{q:'Un parque solar y una central de gas tienen la misma capacidad instalada. ¿Se puede afirmar que generan lo mismo al año?',a:['Sí, porque ambas tienen los mismos MW.','No, depende de la disponibilidad y el perfil de operación.','Sí, porque toda energía limpia es continua.'],correct:1,why:'La capacidad instalada expresa potencia; la generación anual depende de condiciones y horas efectivas de operación.'},
{q:'¿Qué comparación de emisiones sería metodológicamente válida?',a:['Comparar emisiones directas de una tecnología con emisiones de ciclo de vida de otra sin aclararlo.','Utilizar factores documentados del mismo alcance y unidad funcional.','Asignar cero emisiones totales a toda tecnología renovable.'],correct:1,why:'La comparación requiere el mismo alcance (directas o ciclo de vida) y unidades consistentes, por ejemplo g CO₂e/kWh.'},
{q:'Una central de vapor convencional puede operar con distintos combustibles. ¿Qué clasificación es más rigurosa?',a:['La tecnología siempre es renovable.','Distinguir tecnología de generación y combustible utilizado.','Toda central de vapor utiliza carbón.'],correct:1,why:'La tecnología describe el proceso y los equipos; la fuente energética depende del combustible y del diseño de la central.'}
];let qi=0,qs=0,qAnswered=false;function drawQuestion(){$('questionCount').textContent=`Pregunta ${qi+1} de ${questions.length}`;$('questionProgress').value=qi;$('questionScore').textContent=`Aciertos: ${qs}`;$('questionTitle').textContent=questions[qi].q;$('questionOptions').replaceChildren();questions[qi].a.forEach((answer,i)=>{const b=document.createElement('button');b.className='question-option';b.textContent=answer;b.addEventListener('click',()=>{if(qAnswered)return;qAnswered=true;const ok=i===questions[qi].correct;if(ok)qs++;$('questionScore').textContent=`Aciertos: ${qs}`;$('questionFeedback').className='feedback '+(ok?'good':'bad');$('questionFeedback').textContent=(ok?'✓ Correcto. ':'✕ Revisa la interpretación. ')+questions[qi].why;document.querySelectorAll('.question-option').forEach(x=>x.disabled=true);$('questionNext').disabled=false;});$('questionOptions').append(b);});$('questionFeedback').textContent='';$('questionFeedback').className='feedback';$('questionNext').disabled=true;$('questionNext').textContent=qi===questions.length-1?'Ver resultado':'Siguiente pregunta →';qAnswered=false;}$('questionNext').addEventListener('click',()=>{if(qi===questions.length-1){$('questionProgress').value=questions.length;$('questionFeedback').textContent=`Terminaste con ${qs} de ${questions.length} aciertos.`;$('questionNext').disabled=true;return;}qi++;drawQuestion();});$('questionReset').addEventListener('click',()=>{qi=0;qs=0;drawQuestion();});drawQuestion();

// Fuente: SENER, PLADESE 2025–2039, tabla 2.2, generación neta inyectada al SEN.
// No incluye generación distribuida ni autoabasto local. Los renglones listados
// constituyen un SUBCONJUNTO documentado, no un desglose exhaustivo.
const nationalSeries={
 '2022':{total:340713,clean:31.2,fossil:68.8,scope:'Generación total SEN, incluye GD según PRODESEN 2023–2037',source:'PRODESEN 2023–2037, capítulo 4, p. 59',technologies:[]},
 '2023':{total:346504,clean:null,fossil:null,scope:'Generación neta inyectada a la red; excluye GD y autoabasto local',source:'PLADESE 2025–2039, tabla 2.2',technologies:[['Ciclo combinado',205598],['Térmica convencional',30358],['Carboeléctrica',14230],['Turbogás',12336],['Combustión interna',3621]]},
 '2024':{total:352305,clean:23.4,fossil:76.6,scope:'Generación neta inyectada a la red; excluye GD y autoabasto local',source:'PLADESE 2025–2039, tabla 2.2 y sección 2.2.2',technologies:[['Ciclo combinado',212819],['Térmica convencional',28228],['Carboeléctrica',12968],['Turbogás',12017],['Combustión interna',3847],['Solar fotovoltaica',18640],['Eólica',19987]]}
};
const fmt=n=>n.toLocaleString('es-MX');
function drawNational(){const year=$('energyYear').value,d=nationalSeries[year];$('energyData').hidden=year!=='2022';$('energyUnavailable').hidden=true;const host=$('energyTechnology');host.replaceChildren();
 const title=document.createElement('h3');title.textContent=`Generación mexicana ${year} · ${fmt(d.total)} GWh`;host.append(title);
 const scope=document.createElement('p');scope.className='note';scope.textContent=`Cobertura: ${d.scope}. Fuente: ${d.source}.`;host.append(scope);
 if(d.clean!==null){const summary=document.createElement('p');summary.textContent=`Participación oficial: ${d.clean.toFixed(1)} % limpia y ${d.fossil.toFixed(1)} % convencional/fósil, conforme a la clasificación del documento.`;host.append(summary);}
 if(d.technologies.length){const sub=document.createElement('h3');sub.textContent='Tecnologías con cifras verificadas (selección, no suma total)';host.append(sub);
 d.technologies.forEach(([name,value])=>{const row=document.createElement('div');row.className='bar-line';const label=document.createElement('span');label.textContent=name;const track=document.createElement('div');track.className='bar-track';const fill=document.createElement('div');fill.className='bar-fill '+(/solar|eólica/i.test(name)?'clean':'fossil');fill.style.width=(100*value/d.total).toFixed(2)+'%';track.append(fill);const val=document.createElement('strong');val.textContent=`${fmt(value)} GWh`;row.append(label,track,val);host.append(row);});}
 else {const p=document.createElement('p');p.textContent='El desglose por tecnología de 2022 queda pendiente de extracción y conciliación documental.';host.append(p);}
 const warning=document.createElement('p');warning.className='note';warning.textContent='No comparar directamente los totales 2022 y 2023–2024 como una misma serie: cambia el alcance de generación. No sumar las tecnologías mostradas como si representaran el 100 %.';host.append(warning);
 const link=document.createElement('a');link.href=year==='2022'?'https://www.gob.mx/sener/es/articulos/programa-de-desarrollo-del-sistema-electrico-nacional-2023-2037':'https://sidof.segob.gob.mx/notas/docFuente/5770297';link.target='_blank';link.rel='noopener noreferrer';link.textContent='Consultar fuente oficial ↗';host.append(link);
}
$('energyYear').addEventListener('change',drawNational);drawNational();

// Comparación internacional: porcentajes históricos publicados por Ember (no inferidos del PRODESEN).
const worldComparison={
 '2022':{worldFossil:61.0,worldClean:39.0,mxFossil:68.8,mxClean:31.2,worldPrecision:0},
 '2023':{worldFossil:60.6,worldClean:39.4,mxFossil:null,mxClean:null,worldPrecision:1},
 '2024':{worldFossil:59.1,worldClean:40.9,mxFossil:76.6,mxClean:23.4,worldPrecision:1}
};
function renderComparison(){
 const year=$('compareYear').value,d=worldComparison[year],head=$('comparisonHeadline'),bars=$('comparisonBars');bars.replaceChildren();
 head.textContent=year==='2023'?'Mundo 2023 · México: clasificación no homologada en esta serie':'México y mundo · '+year;
 function addBar(label,value,type,source){
  const line=document.createElement('div');line.className='global-bar-row';
  const top=document.createElement('div');top.className='global-bar-caption';
  const name=document.createElement('span');name.textContent=label;
  const val=document.createElement('strong');val.textContent=value===null?'Dato no disponible':value.toFixed(source==='MX'?1:d.worldPrecision)+' %';
  top.append(name,val);line.append(top);
  const track=document.createElement('div');track.className='global-track';
  if(value!==null){const fill=document.createElement('div');fill.className='global-fill '+type;fill.style.width=value+'%';track.append(fill);}line.append(track);bars.append(line);
 }
 addBar('México · generación fósil',d.mxFossil,'fossil','MX');
 addBar('Mundo · generación fósil',d.worldFossil,'fossil','world');
 addBar('México · energías limpias (definición PRODESEN)',d.mxClean,'clean','MX');
 addBar('Mundo · generación baja en carbono (Ember)',d.worldClean,'clean','world');
 $('comparisonInterpretation').textContent=year==='2022'?'Diferencia descriptiva: 7.8 puntos porcentuales de participación fósil, calculada con cifras redondeadas. Las definiciones y coberturas no son idénticas.':year==='2024'?'Diferencia descriptiva: 17.5 puntos porcentuales de participación convencional/fósil. México excluye GD y autoabasto local; Ember utiliza otra cobertura y clasificación. No interpretar como una comparación perfectamente homologada.':'El porcentaje mexicano de 2023 reportado por PRODESEN 2024–2038 (24.32 % limpio) incluye generación distribuida, mientras que esta matriz utiliza generación neta inyectada. Se omite el porcentaje mexicano aquí para evitar mezclar denominadores.';
}
$('compareYear').addEventListener('change',renderComparison);renderComparison();

// Etapa 5: inventario histórico verificado. Sin geolocalización inferida.
const genRecords=[{"nombre": "Infiernillo", "estado": "Guerrero", "municipio": "La Unión", "tecnologia": "Hidroeléctrica", "capacidad_mw": 1200, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "La Villita", "estado": "Michoacán", "municipio": "Lázaro Cárdenas", "tecnologia": "Hidroeléctrica", "capacidad_mw": 320, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Tula", "estado": "Hidalgo", "municipio": "Tula", "tecnologia": "Térmica convencional / ciclo combinado", "capacidad_mw": 1881, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Petacalco", "estado": "Guerrero", "municipio": "La Unión", "tecnologia": "Carboeléctrica", "capacidad_mw": 2778, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Angostura", "estado": "Chiapas", "municipio": "Venustiano Carranza", "tecnologia": "Hidroeléctrica", "capacidad_mw": 900, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Chicoasén", "estado": "Chiapas", "municipio": "Chicoasén", "tecnologia": "Hidroeléctrica", "capacidad_mw": 2400, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Malpaso", "estado": "Chiapas", "municipio": "Tecpatán", "tecnologia": "Hidroeléctrica", "capacidad_mw": 1080, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Peñitas", "estado": "Chiapas", "municipio": "Ostuacán", "tecnologia": "Hidroeléctrica", "capacidad_mw": 420, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Temascal", "estado": "Oaxaca", "municipio": "San Miguel", "tecnologia": "Hidroeléctrica", "capacidad_mw": 354, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Caracol", "estado": "Guerrero", "municipio": "Apaxtla", "tecnologia": "Hidroeléctrica", "capacidad_mw": 600, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Humero", "estado": "Puebla", "municipio": "Chignahuapan", "tecnologia": "Geotérmica", "capacidad_mw": 69, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Laguna Verde", "estado": "Veracruz", "municipio": "Alto Lucero", "tecnologia": "Nuclear", "capacidad_mw": 1608, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Tuxpan", "estado": "Veracruz", "municipio": "Tuxpan", "tecnologia": "Térmica convencional", "capacidad_mw": 1750, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Aguamilpa", "estado": "Nayarit", "municipio": "El Nayar", "tecnologia": "Hidroeléctrica", "capacidad_mw": 960, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "El Cajón", "estado": "Nayarit", "municipio": "Santa María del Oro", "tecnologia": "Hidroeléctrica", "capacidad_mw": 750, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Los Azufres", "estado": "Michoacán", "municipio": "Ciudad Hidalgo", "tecnologia": "Geotérmica", "capacidad_mw": 245, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "El Novillo", "estado": "Sonora", "municipio": "Soyopa", "tecnologia": "Hidroeléctrica", "capacidad_mw": 135, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Agua Prieta II", "estado": "Sonora", "municipio": "Agua Prieta", "tecnologia": "Ciclo combinado", "capacidad_mw": 409, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Cerro Prieto I–IV", "estado": "Baja California", "municipio": "Mexicali", "tecnologia": "Geotérmica", "capacidad_mw": 340, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Valladolid III", "estado": "Yucatán", "municipio": "Valladolid", "tecnologia": "Ciclo combinado", "capacidad_mw": 525, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Río Escondido y Carbón II", "estado": "Coahuila", "municipio": "Río Escondido", "tecnologia": "Carboeléctrica", "capacidad_mw": 2600, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}, {"nombre": "Punta Prieta", "estado": "Baja California Sur", "municipio": "La Paz", "tecnologia": "Térmica convencional", "capacidad_mw": 113, "anio": 2018, "fuente": "SENER PRODESEN 2019-2033, tabla 5.2, pp. 23-24", "coordenadas": null}];
const genSearch=$('genSearch'),genState=$('genState'),genTech=$('genTech');
function genOptions(select,values){[...new Set(values)].sort((a,b)=>a.localeCompare(b,'es')).forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;select.append(o);});}
genOptions(genState,genRecords.map(r=>r.estado));genOptions(genTech,genRecords.map(r=>r.tecnologia));
function getVisibleGeneration(){const q=genSearch.value.trim().toLocaleLowerCase('es');return genRecords.filter(r=>(!q||(r.nombre+' '+r.municipio).toLocaleLowerCase('es').includes(q))&&(!genState.value||r.estado===genState.value)&&(!genTech.value||r.tecnologia===genTech.value));}
function renderFilteredTech(rows){
 const target=$('filteredTech');target.replaceChildren();
 const byTech=new Map();for(const r of rows)byTech.set(r.tecnologia,(byTech.get(r.tecnologia)||0)+r.capacidad_mw);
 const sorted=[...byTech].sort((a,b)=>b[1]-a[1]);
 if(!sorted.length){target.textContent='Sin resultados.';return;}
 const max=sorted[0][1];
 for(const [name,value] of sorted){const item=document.createElement('div');item.className='national-bar';const top=document.createElement('div');top.className='national-bar-label';const label=document.createElement('span');label.textContent=name;const val=document.createElement('strong');val.textContent=value.toLocaleString('es-MX')+' MW';top.append(label,val);const track=document.createElement('div');track.className='national-bar-track';const fill=document.createElement('div');fill.className='national-bar-fill filtered';fill.style.width=(value/max*100)+'%';track.append(fill);item.append(top,track);target.append(item);}
}
function renderGeneration(){const rows=getVisibleGeneration();$('genCount').textContent=rows.length;$('genStates').textContent=new Set(rows.map(r=>r.estado)).size;$('genMW').textContent=rows.reduce((s,r)=>s+r.capacidad_mw,0).toLocaleString('es-MX')+' MW';const target=$('genRows');target.replaceChildren();for(const r of rows){const tr=document.createElement('tr');if(selectedPlant===r.nombre)tr.classList.add('selected-plant');for(const v of [r.nombre,r.estado,r.municipio,r.tecnologia,r.capacidad_mw.toLocaleString('es-MX')]){const td=document.createElement('td');td.textContent=v;tr.append(td);}const td=document.createElement('td');const b=document.createElement('button');b.type='button';b.className='secondary plant-open';b.textContent=geoCatalog2016.some(p=>p.nombre===r.nombre)?'Ver en mapa':'Sin coordenadas';b.disabled=!geoCatalog2016.some(p=>p.nombre===r.nombre);b.addEventListener('click',()=>selectPlant(r.nombre,true));td.append(b);tr.append(td);target.append(tr);}$('genEmpty').hidden=rows.length>0;if(mapMarkers)renderMapMarkers();renderFilteredTech(rows);}
[genSearch,genState,genTech].forEach(el=>el.addEventListener(el===genSearch?'input':'change',renderGeneration));



// Geometrías documentadas WRI / SENER-NACEI (año 2016), vinculadas manualmente por nombre al catálogo 2018.
const geoCatalog2016=[{"nombre":"Infiernillo","id_wri":"MEX0001854","lat":18.2711,"lon":-101.8939,"capacidad_wri_2016_mw":1200,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Guerrero"},{"nombre":"La Villita","id_wri":"MEX0001864","lat":18.0457,"lon":-102.1825,"capacidad_wri_2016_mw":320,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Michoacán"},{"nombre":"Petacalco","id_wri":"MEX0001765","lat":17.9837,"lon":-102.1154,"capacidad_wri_2016_mw":2778.4,"combustible_wri":"Coal","anio_geografia":2016,"estado_catalogo_2018":"Guerrero"},{"nombre":"Angostura","id_wri":"MEX0001857","lat":16.4018,"lon":-92.7784,"capacidad_wri_2016_mw":900,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Chiapas"},{"nombre":"Chicoasén","id_wri":"MEX0001853","lat":16.9428,"lon":-93.1012,"capacidad_wri_2016_mw":2400,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Chiapas"},{"nombre":"Malpaso","id_wri":"MEX0001855","lat":17.1806,"lon":-93.5973,"capacidad_wri_2016_mw":1080,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Chiapas"},{"nombre":"Peñitas","id_wri":"MEX0001862","lat":17.4463,"lon":-93.4628,"capacidad_wri_2016_mw":420,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Chiapas"},{"nombre":"Temascal","id_wri":"MEX0001863","lat":18.2324,"lon":-96.4115,"capacidad_wri_2016_mw":354,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Oaxaca"},{"nombre":"Caracol","id_wri":"MEX0001860","lat":17.9505,"lon":-99.9943,"capacidad_wri_2016_mw":600,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Guerrero"},{"nombre":"Humero","id_wri":"MEX0006617","lat":19.6465,"lon":-97.4375,"capacidad_wri_2016_mw":68.6,"combustible_wri":"Geothermal","anio_geografia":2016,"estado_catalogo_2018":"Puebla"},{"nombre":"Laguna Verde","id_wri":"MEX0001769","lat":19.7208,"lon":-96.4064,"capacidad_wri_2016_mw":1510,"combustible_wri":"Nuclear","anio_geografia":2016,"estado_catalogo_2018":"Veracruz"},{"nombre":"Tuxpan","id_wri":"MEX0001766","lat":21.0151,"lon":-97.3334,"capacidad_wri_2016_mw":2100,"combustible_wri":"Oil","anio_geografia":2016,"estado_catalogo_2018":"Veracruz"},{"nombre":"Aguamilpa","id_wri":"MEX0001856","lat":21.8395,"lon":-104.8038,"capacidad_wri_2016_mw":960,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Nayarit"},{"nombre":"El Cajón","id_wri":"MEX0001858","lat":21.4279,"lon":-104.4507,"capacidad_wri_2016_mw":750,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Nayarit"},{"nombre":"Los Azufres","id_wri":"MEX0001870","lat":19.791,"lon":-100.6669,"capacidad_wri_2016_mw":225,"combustible_wri":"Geothermal","anio_geografia":2016,"estado_catalogo_2018":"Michoacán"},{"nombre":"El Novillo","id_wri":"MEX0001872","lat":28.978,"lon":-109.642,"capacidad_wri_2016_mw":135,"combustible_wri":"Hydro","anio_geografia":2016,"estado_catalogo_2018":"Sonora"},{"nombre":"Cerro Prieto I–IV","id_wri":"MEX0001868","lat":32.3916,"lon":-115.2252,"capacidad_wri_2016_mw":570,"combustible_wri":"Geothermal","anio_geografia":2016,"estado_catalogo_2018":"Baja California"},{"nombre":"Valladolid III","id_wri":"MEX0001790","lat":20.6931,"lon":-88.2675,"capacidad_wri_2016_mw":525,"combustible_wri":"Gas","anio_geografia":2016,"estado_catalogo_2018":"Yucatán"},{"nombre":"Punta Prieta","id_wri":"MEX0001850","lat":24.2233,"lon":-110.3093,"capacidad_wri_2016_mw":112.5,"combustible_wri":"Oil","anio_geografia":2016,"estado_catalogo_2018":"Baja California Sur"}];
const auditCatalog=[{"nombre":"Infiernillo","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"La Villita","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Petacalco","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Diferencia menor ≤0.5 MW, compatible con redondeo; no demostrada","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"},{"nombre":"Angostura","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Chicoasén","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Malpaso","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Peñitas","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Temascal","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Caracol","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Humero","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Diferencia menor ≤0.5 MW, compatible con redondeo; no demostrada","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"},{"nombre":"Laguna Verde","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Diferencia material; alcance/unidades no conciliados","estado_auditoria":"Provisional: sin segunda referencia geográfica ni conciliación de unidades","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"},{"nombre":"Tuxpan","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Diferencia material; alcance/unidades no conciliados","estado_auditoria":"Provisional: sin segunda referencia geográfica ni conciliación de unidades","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"},{"nombre":"Aguamilpa","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"El Cajón","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Los Azufres","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Diferencia material; alcance/unidades no conciliados","estado_auditoria":"Provisional: sin segunda referencia geográfica ni conciliación de unidades","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"},{"nombre":"El Novillo","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Cerro Prieto I–IV","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Diferencia material; alcance/unidades no conciliados","estado_auditoria":"Provisional: sin segunda referencia geográfica ni conciliación de unidades","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"},{"nombre":"Valladolid III","verificacion":"Pendiente de cotejo individual con fila original","tipo_diferencia":"Sin diferencia","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Capacidades históricas coinciden numéricamente"},{"nombre":"Punta Prieta","verificacion":"Confirmada en CSV publicado, ID/capacidad/coordenadas","tipo_diferencia":"Diferencia menor ≤0.5 MW, compatible con redondeo; no demostrada","estado_auditoria":"Provisional: falta verificación geográfica independiente","nota":"Diferencia histórica de capacidad: revisar alcance/unidades"}];
// Etapa 5.5: cartografía vectorial LOCAL. No utiliza Leaflet, servidores de teselas ni claves API.
// Las líneas costeras son contexto geográfico, nunca evidencia de coordenadas de centrales.
const SVG_NS='http://www.w3.org/2000/svg';
const mapBounds={west:-119,east:-85,north:34,south:13};
const svgEl=(tag,attrs={})=>{const e=document.createElementNS(SVG_NS,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));return e;};
const xy=(lon,lat)=>[(lon+119)/34*1100,(34-lat)/21*690];
let svgMap=null,mapViewport=null,mapMarkers=null,mapView={x:0,y:0,w:1100,h:690};
let importedPoints=[],officialPoints=[];let selectedPlant=null;
function drawMap(){
 const container=$('genMap');container.replaceChildren();
 svgMap=svgEl('svg',{viewBox:'0 0 1100 690',role:'img','aria-label':'Mapa geográfico vectorial con costas y fronteras, sin ubicaciones de centrales inventadas'});
 svgMap.style.width='100%';svgMap.style.height='100%';svgMap.style.display='block';
 const defs=svgEl('defs');const pattern=svgEl('pattern',{id:'mapGrid',width:110,height:115,patternUnits:'userSpaceOnUse'});pattern.append(svgEl('path',{d:'M 110 0 L 0 0 0 115',fill:'none',stroke:'#2b5671','stroke-width':1,opacity:.45}));defs.append(pattern);svgMap.append(defs);
 mapViewport=svgEl('g');mapViewport.append(svgEl('rect',{x:0,y:0,width:1100,height:690,fill:'#082239'}));mapViewport.append(svgEl('rect',{x:0,y:0,width:1100,height:690,fill:'url(#mapGrid)'}));
 const g=window.SOLARPRO_OFFLINE_MAP;
 if(!g){$('mapStatus').textContent='Falta offline-map.js. Vuelve a extraer el ZIP completo.';return;}
 for(const d of g.land)mapViewport.append(svgEl('path',{d,fill:'#174a52',stroke:'#3b8a8a','stroke-width':1.3,'stroke-linejoin':'round'}));
 for(const d of g.coast)mapViewport.append(svgEl('path',{d,fill:'none',stroke:'#66b9ae','stroke-width':1.3}));
 for(const d of g.border)mapViewport.append(svgEl('path',{d,fill:'none',stroke:'#7cb6a5','stroke-width':1.1,'stroke-dasharray':'4 3'}));
 const label=svgEl('text',{x:520,y:310,fill:'#b8f22b','font-size':30,'font-weight':800,'letter-spacing':5,'text-anchor':'middle',opacity:.85});label.textContent='MÉXICO';mapViewport.append(label);
 const ocean=svgEl('text',{x:150,y:480,fill:'#7aa4c2','font-size':20,'text-anchor':'middle',opacity:.75});ocean.textContent='OCÉANO PACÍFICO';mapViewport.append(ocean);
 const gulf=svgEl('text',{x:790,y:255,fill:'#7aa4c2','font-size':19,'text-anchor':'middle',opacity:.75});gulf.textContent='GOLFO DE MÉXICO';mapViewport.append(gulf);
 mapMarkers=svgEl('g');mapViewport.append(mapMarkers);svgMap.append(mapViewport);container.append(svgMap);applyMapView();renderMapMarkers();
 let drag=null;
 svgMap.addEventListener('pointerdown',e=>{if(e.target.closest('[data-marker]'))return;drag={x:e.clientX,y:e.clientY,view:{...mapView}};svgMap.setPointerCapture(e.pointerId);});
 svgMap.addEventListener('pointermove',e=>{if(!drag)return;const r=svgMap.getBoundingClientRect();mapView.x=drag.view.x-(e.clientX-drag.x)/r.width*drag.view.w;mapView.y=drag.view.y-(e.clientY-drag.y)/r.height*drag.view.h;applyMapView();});
 svgMap.addEventListener('pointerup',()=>{drag=null;});svgMap.addEventListener('pointercancel',()=>{drag=null;});
 svgMap.addEventListener('wheel',e=>{e.preventDefault();zoomMap(e.deltaY<0?.83:1.2);},{passive:false});
 container.addEventListener('keydown',e=>{if(e.key==='+'||e.key==='=')zoomMap(.8);if(e.key==='-')zoomMap(1.25);if(e.key==='Escape')resetMap();});
}
function applyMapView(){mapView.w=Math.max(160,Math.min(1100,mapView.w));mapView.h=mapView.w*690/1100;mapView.x=Math.max(0,Math.min(1100-mapView.w,mapView.x));mapView.y=Math.max(0,Math.min(690-mapView.h,mapView.y));if(svgMap)svgMap.setAttribute('viewBox',`${mapView.x} ${mapView.y} ${mapView.w} ${mapView.h}`);}
function zoomMap(f){const w=mapView.w*f,h=w*690/1100;mapView.x+=(mapView.w-w)/2;mapView.y+=(mapView.h-h)/2;mapView.w=w;mapView.h=h;applyMapView();}
function resetMap(){mapView={x:0,y:0,w:1100,h:690};applyMapView();}
$('mapZoomIn').addEventListener('click',()=>zoomMap(.75));$('mapZoomOut').addEventListener('click',()=>zoomMap(1.33));$('mapReset').addEventListener('click',resetMap);
function validPoint(lon,lat){return Number.isFinite(lon)&&Number.isFinite(lat)&&lon>=-119&&lon<=-85&&lat>=13&&lat<=34;}
const geoByName=new Map(geoCatalog2016.map(p=>[p.nombre,p]));
const auditByName=new Map(auditCatalog.map(p=>[p.nombre,p]));
const nationalTechData={
  '2022':{total:340713,scope:'Generación nacional total reportada en PRODESEN 2023–2037, p. 59; distinta cobertura de la generación neta inyectada 2023–2024.',tech:[]},
  '2023':{total:346504,scope:'Generación neta inyectada a la red, sin GD ni autoabasto local (PLADESE 2025–2039, tabla 2.2).',tech:[['Ciclo combinado',205598],['Térmica convencional',30358],['Carboeléctrica',14230],['Turbogás',12336],['Combustión interna',3621]]},
  '2024':{total:352305,scope:'Generación neta inyectada a la red, sin GD ni autoabasto local (PLADESE 2025–2039, tabla 2.2).',tech:[['Ciclo combinado',212819],['Térmica convencional',28228],['Carboeléctrica',12968],['Turbogás',12017],['Combustión interna',3847],['Solar fotovoltaica',18640],['Eólica',19987]]}
};
function renderNationalTech(){
 const y=$('natYear').value,d=nationalTechData[y],list=$('natTechBars');
 $('natTotal').textContent=d.total.toLocaleString('es-MX')+' GWh';
 $('natScope').textContent=d.scope;
 list.replaceChildren();
 if(!d.tech.length){const p=document.createElement('p');p.textContent='No se incorporan categorías de 2022 sin tabla homologada en la documentación revisada. Consulta el total nacional y su alcance.';list.append(p);return;}
 for(const [name,value] of d.tech){const row=document.createElement('div');row.className='national-bar';const header=document.createElement('div');header.className='national-bar-label';const a=document.createElement('span');a.textContent=name;const b=document.createElement('strong');b.textContent=value.toLocaleString('es-MX')+' GWh · '+(100*value/d.total).toFixed(1)+' %';header.append(a,b);const track=document.createElement('div');track.className='national-bar-track';const fill=document.createElement('div');fill.className='national-bar-fill';fill.style.width=(100*value/d.total)+'%';track.append(fill);row.append(header,track);list.append(row);}
}
$('natYear').addEventListener('change',renderNationalTech);
renderNationalTech();

const techColors={'Hidroeléctrica':'#39B5FF','Geotérmica':'#B8F22B','Nuclear':'#A78BFA','Carboeléctrica':'#FFBE45','Térmica convencional':'#FFBE45','Ciclo combinado':'#FFBE45'};
function selectPlant(name,focus){const r=genRecords.find(x=>x.nombre===name),g=geoByName.get(name);if(!r||!g)return;selectedPlant=name;const info=$('mapInfo');info.replaceChildren();const h=document.createElement('h3');h.textContent=r.nombre;info.append(h);
 const fields=[['Estado (SENER 2018)',r.estado],['Municipio (SENER 2018)',r.municipio],['Tecnología (SENER 2018)',r.tecnologia],['Capacidad histórica (SENER 2018)',r.capacidad_mw.toLocaleString('es-MX')+' MW'],['Capacidad histórica (WRI/NACEI 2016)',g.capacidad_wri_2016_mw.toLocaleString('es-MX')+' MW'],['Coordenadas publicadas (2016)',g.lat.toFixed(4)+', '+g.lon.toFixed(4)],['Identificador geográfico',g.id_wri]];
 for(const [k,v] of fields){const p=document.createElement('p');const b=document.createElement('b');b.textContent=k+': ';p.append(b,document.createTextNode(String(v)));info.append(p);}
 const audit=auditByName.get(name);
 if(audit){
  const ah=document.createElement('h4');ah.textContent='Estado de verificación';info.append(ah);
  for(const [label,value] of [['Registro original WRI',audit.verificacion],['Conciliación de capacidad',audit.tipo_diferencia],['Estado documental',audit.estado_auditoria]]){
    const line=document.createElement('p');const bold=document.createElement('b');bold.textContent=label+': ';line.append(bold,document.createTextNode(value));info.append(line);
  }
 }
 const nd=document.createElement('p');nd.textContent='Generación individual 2022 / 2023 / 2024: N/D / N/D / N/D (sin series medidas por central verificadas).';info.append(nd);
 if(name==='Tuxpan'){const alias=document.createElement('p');alias.textContent='Nombre del registro WRI: Adolfo López Mateos (Tuxpan).';info.append(alias);}
 if(name==='Cerro Prieto I–IV'){const warning=document.createElement('p');warning.textContent='Advertencia: WRI incluye registros geotérmicos y solares distintos bajo el nombre Cerro Prieto. No se equiparan automáticamente las unidades.';info.append(warning);}
 const note=document.createElement('p');note.textContent='Coincidencia de nombre revisada manualmente entre los inventarios de 2016 y 2018. La ubicación procede de la base WRI/NACEI; las capacidades NO se mezclan ni se consideran vigentes.';info.append(note);
 const a=document.createElement('a');a.href='https://github.com/wri/global-power-plant-database/blob/master/source_databases_csv/database_MEX.csv';a.target='_blank';a.rel='noopener noreferrer';a.textContent='Consultar coordenadas y registro original WRI';info.append(a);
 if(focus){const [x,y]=xy(g.lon,g.lat);mapView.w=340;mapView.h=mapView.w*690/1100;mapView.x=x-mapView.w/2;mapView.y=y-mapView.h/2;applyMapView();$('genMap').scrollIntoView({behavior:'smooth',block:'center'});}
 renderMapMarkers();const trs=$('genRows').querySelectorAll('tr');trs.forEach(tr=>tr.classList.toggle('selected-plant',tr.firstElementChild?.textContent===name));
}
function renderMapMarkers(){if(!mapMarkers)return;mapMarkers.replaceChildren();
 const allowed=new Set(getVisibleGeneration().map(r=>r.nombre));
 const points=geoCatalog2016.filter(p=>allowed.has(p.nombre));$('geoVisibleCount').textContent=points.length+' centrales georreferenciadas visibles de '+geoCatalog2016.length+' vinculadas (referencia 2016)';
 for(const p of points){const r=genRecords.find(x=>x.nombre===p.nombre);const [x,y]=xy(p.lon,p.lat);const dot=svgEl('circle',{cx:x,cy:y,r:selectedPlant===p.nombre?10:7,fill:techColors[r.tecnologia]||'#B8F22B',stroke:selectedPlant===p.nombre?'#ffffff':'#061321','stroke-width':selectedPlant===p.nombre?3:2,tabindex:0,role:'button','aria-label':p.nombre+'; abrir ficha','data-marker':'1'});dot.style.cursor='pointer';const title=svgEl('title');title.textContent=p.nombre+' · '+r.tecnologia;dot.append(title);const show=()=>selectPlant(p.nombre,false);dot.addEventListener('click',show);dot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}});mapMarkers.append(dot);}
 for(const p of [...officialPoints,...importedPoints]){const [x,y]=xy(p.lon,p.lat);const dot=svgEl('circle',{cx:x,cy:y,r:5,fill:p.kind==='official'?'#B8F22B':'#FFBE45',stroke:'#061321','stroke-width':1,tabindex:0,role:'button','aria-label':p.name,'data-marker':'1'});dot.style.cursor='pointer';const show=()=>{$('mapInfo').replaceChildren();const title=document.createElement('strong');title.textContent=p.name;$('mapInfo').append(title);for(const [label,value] of Object.entries(p.info||{})){const line=document.createElement('p');line.textContent=label+': '+value;$('mapInfo').append(line);}const note=document.createElement('small');note.textContent=p.kind==='official'?'Capa histórica externa; no vinculada automáticamente al catálogo SENER.':'Importación provisional sin validación.';$('mapInfo').append(note);};dot.addEventListener('click',show);dot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}});mapMarkers.append(dot);}
}
drawMap();renderGeneration();
$('mapStatus').textContent='Mapa vectorial integrado: no necesita internet, servidor de teselas ni clave API. Los puntos geográficos requieren fuentes documentadas.';

document.querySelectorAll('[data-trans-answer]').forEach(button=>{
 button.addEventListener('click',()=>{
  const correct=button.dataset.transAnswer==='correct';
  document.querySelectorAll('[data-trans-answer]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
  document.getElementById('transFeedback').textContent=correct
  ? 'Correcto: I = P / (√3 · V · cos φ). Al duplicar V, la corriente se reduce a la mitad y las pérdidas resistivas a una cuarta parte, si R no cambia.'
  : 'Revisa I = P / (√3 · V · cos φ): con P y factor de potencia constantes, I es inversamente proporcional a V.';
 });
});

// Etapa 6.2: información documental de sistemas, sin coordenadas ni geometrías supuestas.
const transmissionSystems={
 sin:{title:'Sistema Interconectado Nacional (SIN)',description:'Sistema eléctrico principal de México. La definición regulatoria lo describe como el sistema que abastece desde Puerto Peñasco hasta Cozumel. Se distingue de los sistemas separados de la península de Baja California.',source:'DOF, definiciones del Sistema Eléctrico Nacional (2017).'},
 bca:{title:'Sistema Interconectado Baja California',description:'Abastece comunidades de Ensenada, Tijuana, Tecate y Mexicali, así como San Luis Río Colorado, Sonora. Tiene interconexión con la red eléctrica del oeste de Estados Unidos y opera separado del SIN, Baja California Sur y Mulegé.',source:'CENACE, resolución de transparencia 2024; Bases del Mercado Eléctrico.'},
 bcs:{title:'Sistema Interconectado Baja California Sur',description:'Sistema que abarca desde Loreto hasta Los Cabos. Se encuentra aislado del SIN, del Sistema Interconectado Baja California y del Sistema Interconectado Mulegé según la definición regulatoria.',source:'DOF, definiciones del Sistema Eléctrico Nacional (2017).'},
 mul:{title:'Sistema Interconectado Mulegé',description:'Abastece comunidades del municipio de Mulegé, al norte de Baja California Sur, y Bahía de los Ángeles, Baja California. Las Bases del Mercado Eléctrico lo consideran un pequeño sistema eléctrico en régimen de operación simplificada hasta que se interconecte físicamente con uno de los grandes sistemas.',source:'DOF, Bases del Mercado Eléctrico, base 7; definiciones de 2017.'}
};
const transmissionDetail=document.getElementById('systemDetail');
document.querySelectorAll('[data-system]').forEach(button=>button.addEventListener('click',()=>{
 const item=transmissionSystems[button.dataset.system];if(!item||!transmissionDetail)return;
 document.querySelectorAll('[data-system]').forEach(other=>{const selected=other===button;other.classList.toggle('selected',selected);other.setAttribute('aria-pressed',String(selected));});
 transmissionDetail.replaceChildren();const title=document.createElement('h3');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;const source=document.createElement('p');const strong=document.createElement('strong');strong.textContent='Fuente: ';source.append(strong,document.createTextNode(item.source));transmissionDetail.append(title,description,source);
}));

// SolarPro 6.3 — Modelo trifásico equilibrado; cifras simuladas, no mediciones.
(function initTransmissionSimulator(){
 const specs=[['Power',100,' MW'],['Voltage',230,' kV'],['PF',1,''],['Length',100,' km'],['R',0.05,' Ω/km']];
 const inputs=Object.fromEntries(specs.map(([name])=>[name,document.getElementById('sim'+name)]));
 if(Object.values(inputs).some(v=>!v))return;
 const format=(n,d=2)=>n.toLocaleString('es-MX',{minimumFractionDigits:d,maximumFractionDigits:d});
 const calc=(P,V,pf,L,r)=>{const I=P*1e6/(Math.sqrt(3)*V*1e3*pf),R=L*r,loss=3*I*I*R/1e6;return {I,R,loss,send:P+loss,eff:100*P/(P+loss)};};
 function update(){const values=Object.fromEntries(specs.map(([name])=>[name,Number(inputs[name].value)]));
 for(const [name,,unit] of specs)document.getElementById('sim'+name+'Out').textContent=(name==='PF'?values[name].toFixed(2):name==='R'?values[name].toFixed(2):format(values[name],0))+unit;
 const {Power:P,Voltage:V,PF:pf,Length:L,R:r}=values;
 const result=calc(P,V,pf,L,r);
 document.getElementById('simCurrent').textContent=format(result.I,1);
 document.getElementById('simResistance').textContent=format(result.R);
 document.getElementById('simLoss').textContent=format(result.loss);
 document.getElementById('simEfficiency').textContent=format(result.eff);
 document.getElementById('simSend').textContent=format(result.send);
 const bars=document.getElementById('simBars');bars.replaceChildren();const cases=[...new Set([115,230,400,V])].sort((a,b)=>a-b).map(kV=>({kV,loss:calc(P,kV,pf,L,r).loss,selected:kV===V}));const max=Math.max(...cases.map(x=>x.loss));
 for(const item of cases){const row=document.createElement('div');row.className='sim-bar-row';const head=document.createElement('div');head.className='sim-bar-caption';const left=document.createElement('span');left.textContent=item.kV+' kV'+(item.selected?' · seleccionada':'');if(item.selected)row.classList.add('sim-bar-selected');const right=document.createElement('strong');right.textContent=format(item.loss)+' MW';head.append(left,right);const track=document.createElement('div');track.className='sim-bar-track';const fill=document.createElement('div');fill.className='sim-bar-fill';fill.style.width=100*item.loss/max+'%';track.append(fill);row.append(head,track);bars.append(row);}
 }
 for(const input of Object.values(inputs))input.addEventListener('input',update);
 document.getElementById('simReset').addEventListener('click',()=>{for(const [name,defaultValue] of specs)inputs[name].value=String(defaultValue);update();});
 update();
})();

// SolarPro 6.4: indicadores observados, transcritos de informes anuales CFE 2022, 2023, 2024.
(function initTransmissionStats(){
 const select=document.getElementById('transStatMetric'),bars=document.getElementById('transStatBars'),summary=document.getElementById('transStatSummary');
 if(!select||!bars||!summary)return;
 const records=[{year:2022,km:110449,subs:2279,mva:165541},{year:2023,km:110559,subs:2302,mva:164992},{year:2024,km:111138,subs:2317,mva:168981}];
 const metrics={km:{label:'Longitud de líneas',unit:'km'},subs:{label:'Subestaciones',unit:'unidades'},mva:{label:'Capacidad de transformación',unit:'MVA'}};
 const fmt=n=>n.toLocaleString('es-MX');
 function update(){const key=select.value,metric=metrics[key],max=Math.max(...records.map(r=>r[key]));bars.replaceChildren();
  for(const r of records){const row=document.createElement('div');row.className='trans-stat-row';const year=document.createElement('span');year.textContent=r.year;const track=document.createElement('div');track.className='trans-stat-track';const fill=document.createElement('div');fill.className='trans-stat-fill';fill.style.width=(r[key]/max*100).toFixed(3)+'%';track.append(fill);const val=document.createElement('strong');val.textContent=fmt(r[key])+' '+metric.unit;row.append(year,track,val);bars.append(row);}
  const first=records[0][key],last=records[2][key],diff=last-first,pct=diff/first*100;
  summary.textContent=metric.label+': cambio 2022–2024 de '+(diff>=0?'+':'')+fmt(diff)+' '+metric.unit+' ('+(pct>=0?'+':'')+pct.toFixed(2)+' %). Comparación histórica, no pronóstico.';
  bars.setAttribute('aria-label',metric.label+': '+records.map(r=>r.year+', '+fmt(r[key])+' '+metric.unit).join('; '));
 }
 select.addEventListener('change',update);update();
})();


// SolarPro 7.2: mapa topológico interactivo 2024, sin rutas físicas inventadas.
(function initTransmission2024(){
 const host=document.getElementById('transGeoMap'), panel=document.getElementById('v72SystemDetail');if(!host||!panel)return;
 const NS='http://www.w3.org/2000/svg';
 const S=(tag,attrs={},text)=>{const el=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,String(v));if(text!==undefined)el.textContent=text;return el;};
 const svg=S('svg',{viewBox:'0 0 1100 690',role:'img','aria-label':'Mapa esquemático de sistemas eléctricos de México, año de referencia 2024'});
 const background=S('g');background.append(S('rect',{x:0,y:0,width:1100,height:690,fill:'#0b192c'}));
 const map=window.SOLARPRO_OFFLINE_MAP;
 if(map){for(const path of map.land)background.append(S('path',{d:path,fill:'#174a52',stroke:'#4c8d89','stroke-width':1,'pointer-events':'none'}));for(const path of map.border)background.append(S('path',{d:path,fill:'none',stroke:'#91c3b6','stroke-width':1,'stroke-dasharray':'4 3','pointer-events':'none'}));}
 svg.append(background);
 const systems={
  sin:{name:'Sistema Interconectado Nacional',state:'Interconectado',coverage:'La mayor parte del México continental; siete regiones de control interconectadas.',connection:'Red nacional principal. En 2024 no existía una conexión operativa con el sistema de Baja California por Sonora.',capacity:'No disponible por sistema en las fuentes cotejadas',generation:'No verificada para esta ficha',position:'Zona continental central',color:'#b8f22b'},
  bc:{name:'Sistema Interconectado Baja California',state:'Interconectado internacionalmente',coverage:'Norte de Baja California y área de San Luis Río Colorado, Sonora.',connection:'Conectado con la red occidental de Estados Unidos mediante dos enlaces de 230 kV; la interconexión hacia Sonora/Sistema Interconectado Nacional se representa solo como proyecto.',capacity:'No disponible por sistema en las fuentes cotejadas',generation:'No verificada para esta ficha',position:'Tijuana y Mexicali (zona aproximada)',color:'#39b5ff'},
  mul:{name:'Sistema Interconectado Mulegé',state:'Aislado',coverage:'Zona central/norte de la península de Baja California; sistema eléctrico separado.',connection:'Sin interconexión operativa con los otros tres sistemas representados.',capacity:'No disponible por sistema en las fuentes cotejadas',generation:'No verificada para esta ficha',position:'Mulegé (zona aproximada)',color:'#ff9a4d'},
  bcs:{name:'Sistema Interconectado Baja California Sur',state:'Aislado',coverage:'Zona sur de la península de Baja California, incluyendo La Paz y Los Cabos.',connection:'Sin interconexión operativa con Mulegé, Baja California o la red nacional principal.',capacity:'No disponible por sistema en las fuentes cotejadas',generation:'No verificada para esta ficha',position:'La Paz y Los Cabos (zona aproximada)',color:'#ff9a4d'}
 };
 const links=S('g',{id:'v72Links','aria-label':'Relaciones eléctricas esquemáticas'});svg.append(links);
 const link=(points,kind,related)=>{const el=S('polyline',{points,fill:'none','stroke-linecap':'round','stroke-linejoin':'round','stroke-width':5,'vector-effect':'non-scaling-stroke','data-kind':kind,'data-related':related,'pointer-events':'stroke',tabindex:0,role:'button','aria-label':kind==='project'?'Proyecto de interconexión Baja California con el Sistema Interconectado Nacional por Sonora; no operativo en 2024':kind==='international'?'Conexión internacional Baja California con red occidental de Estados Unidos':'Red interna conceptual del Sistema Interconectado Nacional'});links.append(el);return el;};
 // Coordenadas de DISEÑO para representar relaciones; no son puntos de torres, líneas ni subestaciones.
 link('167,141 139,100 109,71','international','bc');
 link('188,159 284,194 410,244 535,290 650,329 754,369','project','bc sin');
 [['600,330 704,282 819,320 895,389','internal','sin'],['600,330 638,435 748,464 895,389','internal','sin'],['704,282 748,464','internal','sin'],['819,320 748,464','internal','sin']].forEach(a=>link(...a));
 const nodes=S('g',{id:'v72Nodes'});svg.append(nodes);
 const defs=[
  {id:'bc',x:183,y:154,label:['Sistema Interconectado','Baja California'],w:205},
  {id:'mul',x:266,y:310,label:['Sistema Interconectado','Mulegé'],w:205},
  {id:'bcs',x:353,y:438,label:['Sistema Interconectado','Baja California Sur'],w:220},
  {id:'sin',x:754,y:369,label:['Sistema Interconectado','Nacional'],w:218}
 ];
 const nodeElements={};
 for(const a of defs){const g=S('g',{'data-system':a.id,tabindex:0,role:'button','aria-label':systems[a.id].name,style:'cursor:pointer'});
  g.append(S('circle',{cx:a.x,cy:a.y,r:9,fill:systems[a.id].color,stroke:'#f4f9ff','stroke-width':2}));
  const x=Math.max(12,Math.min(1100-a.w-12,a.x-a.w/2)),y=a.y+15;
  g.append(S('rect',{x,y,width:a.w,height:49,rx:10,fill:'#071321',stroke:systems[a.id].color,'stroke-width':2}));
  a.label.forEach((t,i)=>g.append(S('text',{x:x+a.w/2,y:y+19+i*17,'text-anchor':'middle',fill:'#f4f9ff','font-size':13,'font-weight':700,'pointer-events':'none'},t)));
  g.addEventListener('click',()=>choose(a.id));g.addEventListener('mouseenter',()=>{if(selected==='all')show(a.id);});g.addEventListener('focus',()=>{if(selected==='all')show(a.id);});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(a.id);}});
  nodes.append(g);nodeElements[a.id]=g;
 }
 const wecc=S('g',{'aria-label':'Red occidental de Estados Unidos'});wecc.append(S('rect',{x:10,y:31,width:191,height:38,rx:9,fill:'#071321',stroke:'#39b5ff','stroke-width':2}));wecc.append(S('text',{x:105,y:55,'text-anchor':'middle',fill:'#f4f9ff','font-size':13},'Red Occidental EE. UU.'));svg.append(wecc);
 const note=S('g');note.append(S('rect',{x:475,y:596,width:600,height:75,rx:10,fill:'#071321',stroke:'#5d768c'}));note.append(S('text',{x:492,y:622,fill:'#b8f22b','font-size':15,'font-weight':700},'Trazos sobre el mapa = esquema topológico'));note.append(S('text',{x:492,y:646,fill:'#f4f9ff','font-size':13},'No representan rutas reales de transmisión ni límites de servicio.'));svg.append(note);
 host.replaceChildren(svg);
 const controls=[...document.querySelectorAll('[data-sys-filter]')];let selected='all';
 const checked=id=>document.getElementById(id)?.checked!==false;
 function show(id){const a=systems[id];if(!a)return;panel.replaceChildren();const h=document.createElement('h4');h.textContent=a.name;panel.append(h);
  for(const [k,v] of [['Estado',a.state],['Cobertura regional',a.coverage],['Conexiones',a.connection],['Capacidad instalada',a.capacity],['Generación principal',a.generation],['Referencia de ubicación',a.position]]){const p=document.createElement('p');const b=document.createElement('strong');b.textContent=k+': ';p.append(b,document.createTextNode(v));panel.append(p);}
  const foot=document.createElement('p');foot.className='gen-note';foot.textContent='Indicadores de longitud, niveles de tensión y transformación: cifras nacionales CFE 2024 en el panel de estadísticas; no se atribuyen a este sistema.';panel.append(foot);
 }
 function redraw(){controls.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sysFilter===selected)));
  Object.entries(nodeElements).forEach(([id,g])=>{const visible=selected==='all'||selected===id;const isolated=(id==='mul'||id==='bcs');g.style.opacity=(!checked('layerIsolated')&&isolated)?'0':visible?'1':'.17';g.style.pointerEvents=(!checked('layerIsolated')&&isolated)?'none':'auto';});
  links.querySelectorAll('polyline').forEach(l=>{const kind=l.dataset.kind;const related=l.dataset.related.split(' ');const on=selected==='all'||related.includes(selected);
   const allowed=kind==='internal'?checked('layerInternal'):kind==='international'?checked('layerInternational'):checked('layerProject');
   l.style.display=allowed?'':'none';l.style.opacity=on?'1':'.12';l.setAttribute('stroke',kind==='project'?'#ffbe45':kind==='international'?'#39b5ff':'#b8f22b');l.setAttribute('stroke-dasharray',kind==='project'?'2 13':kind==='international'?'13 8':'none');l.setAttribute('stroke-width',on?'5':'3');
  });
 }
 function choose(id){selected=id;show(id==='all'?'sin':id);redraw();}
 controls.forEach(b=>b.addEventListener('click',()=>choose(b.dataset.sysFilter)));
 for(const id of ['layerInternal','layerInternational','layerProject','layerIsolated'])document.getElementById(id)?.addEventListener('change',redraw);
 links.querySelectorAll('polyline').forEach(l=>{const id=l.dataset.kind==='internal'?'sin':'bc';l.addEventListener('click',()=>choose(id));l.addEventListener('mouseenter',()=>{if(selected==='all')show(id);});l.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(id);}});});
 let view={x:0,y:0,w:1100,h:690};function apply(){view.w=Math.max(220,Math.min(1100,view.w));view.h=view.w*690/1100;view.x=Math.max(0,Math.min(1100-view.w,view.x));view.y=Math.max(0,Math.min(690-view.h,view.y));svg.setAttribute('viewBox',[view.x,view.y,view.w,view.h].join(' '));}
 function zoom(f){const w=view.w*f;view.x+=(view.w-w)/2;view.y+=(view.h-w*690/1100)/2;view.w=w;apply();}
 document.getElementById('transGeoPlus')?.addEventListener('click',()=>zoom(.78));document.getElementById('transGeoMinus')?.addEventListener('click',()=>zoom(1.3));document.getElementById('transGeoReset')?.addEventListener('click',()=>{view={x:0,y:0,w:1100,h:690};apply();});
 let drag=null;svg.addEventListener('pointerdown',e=>{if(e.target.closest('[data-system],polyline'))return;drag={x:e.clientX,y:e.clientY,view:{...view}};svg.setPointerCapture(e.pointerId);});svg.addEventListener('pointermove',e=>{if(!drag)return;const r=svg.getBoundingClientRect();view.x=drag.view.x-(e.clientX-drag.x)/r.width*drag.view.w;view.y=drag.view.y-(e.clientY-drag.y)/r.height*drag.view.h;apply();});svg.addEventListener('pointerup',()=>drag=null);svg.addEventListener('pointercancel',()=>drag=null);
 choose('all');
})();

// SolarPro 9.5: recorrido educativo único, sin duplicación sobre el mapa.
(function(){
 const detail=document.getElementById('distDetail');if(!detail)return;
 const stages=[
 {title:'Subestación de distribución',role:'Recibe energía desde niveles superiores de tensión y la transforma para alimentar circuitos de distribución.',idea:'El transformador adapta niveles de tensión; en un modelo ideal, la potencia aparente se conserva aproximadamente.',scope:'El nivel exacto depende de la red y del proyecto. No se atribuye aquí un voltaje universal.'},
 {title:'Alimentador primario',role:'Transporta electricidad desde la subestación hacia diferentes áreas de consumo mediante circuitos de media tensión.',idea:'Para una potencia dada, una tensión mayor permite reducir la corriente y las pérdidas resistivas, bajo las hipótesis del modelo.',scope:'El diagrama no reproduce alimentadores físicos de CFE.'},
 {title:'Transformador de distribución',role:'Reduce la tensión de media a baja tensión, adecuada para la red secundaria y los usuarios.',idea:'Modelo ideal monofásico: V₁/V₂ = N₁/N₂ y V₁I₁ = V₂I₂. En equipos reales hay pérdidas.',scope:'Los valores nominales concretos dependen del equipo y la instalación.'},
 {title:'Red secundaria',role:'Distribuye energía en baja tensión desde los transformadores hasta las acometidas de los usuarios.',idea:'Las caídas de tensión dependen de la corriente, la impedancia y la longitud del circuito.',scope:'Las rutas reales de esta red no se han georreferenciado.'},
 {title:'Usuario final',role:'La instalación recibe energía a través de la acometida y del equipo de medición, de acuerdo con las condiciones del suministro.',idea:'La energía consumida se mide en kWh; la potencia se expresa en W o kW.',scope:'No confundir potencia instantánea con energía acumulada.'}
 ];

 const buttons=[...document.querySelectorAll('[data-dist-step]')];let active=0;
 function select(i){active=Math.max(0,Math.min(4,i));const x=stages[active];
 buttons.forEach((b,j)=>{b.classList.toggle('selected',j===active);b.setAttribute('aria-pressed',String(j===active));});
 document.getElementById('distDetailTitle').textContent=x.title;detail.replaceChildren();
 for(const [label,val] of [['Función',x.role],['Concepto TE1020',x.idea],['Alcance',x.scope]]){const p=document.createElement('p'),strong=document.createElement('strong');strong.textContent=label+': ';p.append(strong,document.createTextNode(val));detail.append(p);}
 const sim=document.getElementById('distSimulatorPanel');if(sim)sim.hidden=active!==2;
 document.getElementById('distProgress').textContent=`Etapa ${active+1} de ${stages.length}`;
 document.getElementById('distPrev').disabled=active===0;document.getElementById('distNext').disabled=active===4;
 }
 buttons.forEach((b,i)=>b.addEventListener('click',()=>select(i)));
 document.getElementById('distPrev').addEventListener('click',()=>select(active-1));document.getElementById('distNext').addEventListener('click',()=>select(active+1));document.getElementById('distReset').addEventListener('click',()=>select(0));select(0);
})();

// Etapa 7, fase 2: simulación de circuito equivalente monofásico puramente resistivo.
(function(){
 const ids=['distSimVin','distSimRatio','distSimLoad','distSimRw','distSimCore'];
 if(!document.getElementById('distSimChart'))return;
 const defaults=[13200,110,12,.5,30];
 const fmt=(v,d=2)=>new Intl.NumberFormat('es-MX',{maximumFractionDigits:d,minimumFractionDigits:0}).format(v);
 const ns='http://www.w3.org/2000/svg';
 function node(name,attrs={},text){
  const e=document.createElementNS(ns,name);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,String(v)));if(text!==undefined)e.textContent=text;return e;
 }
 function update(){
  const [vin,ratio,load,rw,core]=ids.map(id=>Number(document.getElementById(id).value));
  const vIdeal=vin/ratio, current=vIdeal/(load+rw), vLoad=current*load;
  const useful=current*current*load, copper=current*current*rw, loss=copper+core, input=useful+loss;
  const eta=input>0?100*useful/input:0;
  const labels=[`${fmt(vin,0)} V`,fmt(ratio,0),`${fmt(load,0)} Ω`,`${fmt(rw,1)} Ω`,`${fmt(core,0)} W`];
  ids.forEach((id,i)=>{document.getElementById(id+'Out').textContent=labels[i];});
  [['distSimIdeal',`${fmt(vIdeal)} V`],['distSimVload',`${fmt(vLoad)} V`],['distSimI',`${fmt(current)} A`],['distSimPout',`${fmt(useful)} W`],['distSimLoss',`${fmt(loss)} W`],['distSimEta',`${fmt(eta,1)} %`]].forEach(([id,value])=>document.getElementById(id).textContent=value);
  const svg=document.getElementById('distSimChart');svg.replaceChildren();
  const bars=[{label:'Potencia útil',value:useful,color:'#b8f22b'},{label:'Pérdidas',value:loss,color:'#ffbe45'}];
  const max=Math.max(input,1);
  bars.forEach((b,i)=>{
   const y=45+i*88, width=455*b.value/max;
   svg.append(node('text',{x:14,y:y-12,fill:'#f4f9ff','font-size':17},b.label));
   svg.append(node('rect',{x:14,y,width:455,height:30,rx:7,fill:'#142e44'}));
   svg.append(node('rect',{x:14,y,width:Math.max(width,0),height:30,rx:7,fill:b.color}));
   svg.append(node('text',{x:480,y:y+22,fill:'#f4f9ff','font-size':17,'font-weight':700},`${fmt(b.value)} W`));
  });
  svg.append(node('text',{x:14,y:210,fill:'#a2b6c7','font-size':15},`Potencia de entrada estimada: ${fmt(input)} W`));
 }
 ids.forEach(id=>document.getElementById(id).addEventListener('input',update));
 document.getElementById('distSimReset').addEventListener('click',()=>{ids.forEach((id,i)=>{document.getElementById(id).value=defaults[i];});update();});
 update();
})();

// SolarPro 9.3: formateo único de indicadores regionales oficiales.
(function(){
 const fmt=n=>new Intl.NumberFormat('es-MX',{maximumFractionDigits:0}).format(n);
 const pct=n=>new Intl.NumberFormat('es-MX',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+' %';
 window.SOLARPRO_CFE_METRICS=r=>`<div class="regional-metrics"><article><small>Servicios de suministro · 2023</small><strong>${fmt(r.servicios_miles)} mil</strong></article><article><small>Media tensión · 2023</small><strong>${fmt(r.media_tension_km)} km</strong></article><article><small>Baja tensión regional</small><strong>Sin dato público regional</strong></article><article><small>Total MT + BT regional</small><strong>Sin dato público regional</strong></article><article><small>Pérdidas técnicas</small><strong>${pct(r.perdidas_tecnicas_pct)}</strong></article><article><small>Pérdidas no técnicas</small><strong>${pct(r.perdidas_no_tecnicas_pct)}</strong></article></div>`;
})();

// SolarPro 9.5 · Silueta digitalizada de la referencia suministrada por el usuario.
(function(){
 const svg=document.getElementById('sigSvg'),valley=document.getElementById('sigValley');if(!svg||!valley)return;
 const data=window.SOLARPRO_CFE_REGIONS,shapes=window.SOLARPRO_REFERENCE_SHAPES;if(!data||!shapes)return;
 const ns='http://www.w3.org/2000/svg';const mk=(tag,attrs={},txt)=>{const e=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,String(v)));if(txt!==undefined)e.textContent=txt;return e;};
 svg.replaceChildren();valley.replaceChildren();
 svg.append(mk('path',{d:shapes.mexico,fill:'#174A5E',stroke:'#68C9DB','stroke-width':3,'stroke-linejoin':'round'}));
 valley.append(mk('path',{d:shapes.valle,fill:'#174A5E',stroke:'#68C9DB','stroke-width':3,'stroke-linejoin':'round'}));
 const points=[[214,75],[465,266],[648,313],[840,322],[876,497],[776,524],[693,600],[792,640],[877,729],[954,664],[1007,664],[1035,792],[1330,592],[724,853],[779,937],[718,978]];
 // Conexión cartográfica fija: la ampliación inferior corresponde al Valle de México.
 // No apunta a una división particular ni implica límites geográficos.
 const link=mk('g',{'aria-label':'Flecha desde la ampliación hacia la ubicación aproximada del Valle de México','pointer-events':'none'});
 link.append(mk('path',{d:'M 720 845 Q 775 790 845 718 T 905 660',fill:'none',stroke:'#F59E0B','stroke-width':5,'stroke-dasharray':'12 10','stroke-linecap':'round'}));
 link.append(mk('path',{d:'M 905 660 L 876 678 L 889 694 Z',fill:'#F59E0B',stroke:'#FFF1BF','stroke-width':2}));
 link.append(mk('circle',{cx:905,cy:660,r:12,fill:'none',stroke:'#F59E0B','stroke-width':4}));
 link.style.transition='opacity .22s ease';
 const caption=mk('text',{x:650,y:830,fill:'#FBBF24','font-size':20,'font-weight':800,'text-anchor':'end'},'AMPLIACIÓN DEL VALLE DE MÉXICO');
 link.append(caption);svg.append(link);
 const directory=document.getElementById('sigDirectory');directory.replaceChildren();const buttons=[],nodes=[];
 const title=document.getElementById('sigSelectedTitle'),body=document.getElementById('sigSelectedBody'),status=document.getElementById('sigStatus');
 function select(i){buttons.forEach((b,k)=>{b.classList.toggle('is-selected',k===i);b.setAttribute('aria-pressed',String(k===i));});nodes.forEach((g,k)=>{const c=g.querySelector('circle');c.setAttribute('fill',k===i?'#F59E0B':'#14617E');c.setAttribute('stroke',k===i?'#FFF0BB':'#39B5FF');c.setAttribute('stroke-width',k===i?5:3);c.setAttribute('filter',k===i?'url(#spMarkerGlow)':'none');g.querySelector('text').setAttribute('fill',k===i?'#0B1120':'#FFFFFF');});
 // Iluminar la conexión con la ampliación solo al activar divisiones 14, 15 o 16.
 const valleyActive=i>=13;
 link.setAttribute('filter',valleyActive?'url(#spMarkerGlow)':'none');
 link.setAttribute('opacity',valleyActive?'1':'0.55');
 const arrowLine=link.querySelector('path');
 arrowLine.setAttribute('stroke-width',valleyActive?'8':'5');
 arrowLine.setAttribute('stroke',valleyActive?'#FFD166':'#F59E0B');
 link.querySelector('circle').setAttribute('stroke-width',valleyActive?'6':'4');
 caption.setAttribute('fill',valleyActive?'#FFF2C5':'#FBBF24');
 const r=data[i];
 title.textContent=String(i+1).padStart(2,'0')+' · '+r.nombre;body.innerHTML=window.SOLARPRO_CFE_METRICS(r)+'<p class="regional-source">CFE · PAM RGD 2024–2038 · tablas III.1 y V.5 · cierre 2023.</p>';status.textContent='División seleccionada: '+r.nombre+'. Marcador de referencia, no límite de cobertura.';}
 for(const host of [svg,valley]){const defs=mk('defs');const filter=mk('filter',{id:'spMarkerGlow',x:'-100%',y:'-100%',width:'300%',height:'300%'});filter.append(mk('feGaussianBlur',{stdDeviation:7,result:'blur'}));const merge=mk('feMerge');merge.append(mk('feMergeNode',{in:'blur'}));merge.append(mk('feMergeNode',{in:'SourceGraphic'}));filter.append(merge);defs.append(filter);host.append(defs);}
 data.forEach((r,i)=>{const b=document.createElement('button');b.type='button';b.className='sig-region-button';b.textContent=String(i+1).padStart(2,'0')+' · '+r.nombre;b.setAttribute('aria-label','Seleccionar división '+r.nombre);b.addEventListener('click',()=>select(i));directory.append(b);buttons.push(b);
 const [cx,cy]=points[i],host=i<13?svg:valley;const g=mk('g',{role:'button',tabindex:0,'aria-label':String(i+1).padStart(2,'0')+' '+r.nombre,'data-region':i+1,style:'cursor:pointer'});
 g.append(mk('circle',{cx,cy,r:i<13?25:20,fill:'#14617E',stroke:'#39B5FF','stroke-width':3}));g.append(mk('text',{x:cx,y:cy+6,'text-anchor':'middle','font-size':i<13?18:16,'font-weight':800,fill:'#fff'},String(i+1).padStart(2,'0')));g.append(mk('title',{},r.nombre));g.addEventListener('click',()=>select(i));g.addEventListener('mouseenter',()=>select(i));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i);}});host.append(g);nodes.push(g);});select(0);
})();

// SolarPro 9.3: comparación independiente, sin duplicar fichas regionales.
(function(){
 const a=document.getElementById('regCompareA'),b=document.getElementById('regCompareB'),m=document.getElementById('regCompareMetric'),host=document.getElementById('regCompareChart');if(!a||!b||!m||!host)return;
 const data=window.SOLARPRO_CFE_REGIONS;
 for(const sel of [a,b])data.forEach((r,i)=>{const o=document.createElement('option');o.value=i;o.textContent=r.nombre;sel.append(o);});b.value='1';
 const fmt=(v,key)=>new Intl.NumberFormat('es-MX',{maximumFractionDigits:key.includes('pct')?2:0}).format(v);
 function render(){const x=data[+a.value],y=data[+b.value],key=m.value,max=Math.max(x[key],y[key],.0001);host.replaceChildren();
 for(const r of [x,y]){const row=document.createElement('div');row.className='reg-compare-row';const label=document.createElement('strong');label.textContent=r.nombre;const track=document.createElement('div');track.className='reg-compare-track';const fill=document.createElement('div');fill.className='reg-compare-fill';fill.style.width=(r[key]/max*100).toFixed(2)+'%';track.append(fill);const value=document.createElement('span');value.textContent=fmt(r[key],key)+(key.includes('pct')?' %':key==='servicios_miles'?' mil':' km');row.append(label,track,value);host.append(row);}
 const diff=document.createElement('p');diff.className='regional-source';const d=x[key]-y[key];diff.textContent='Diferencia A − B: '+(d>0?'+':'')+fmt(d,key)+(key.includes('pct')?' puntos porcentuales':key==='servicios_miles'?' mil servicios':' km');host.append(diff);
 }[a,b,m].forEach(e=>e.addEventListener('change',render));render();
})();

(function(){const svg=document.getElementById('homeMapSvg'),map=window.SOLARPRO_OFFLINE_MAP;if(!svg||!map)return;for(const d of map.land||[]){const el=document.createElementNS('http://www.w3.org/2000/svg','path');el.setAttribute('d',d);el.setAttribute('fill','#164456');el.setAttribute('stroke','#4ab5cc');el.setAttribute('stroke-width','1');svg.append(el);}})();

/* SolarPro 11.5: montaje HD, fondo sólido sin logo: completo de 10 s, cierre solar protagonista. Audio inicia por acción del usuario. */
(function(){
 const video=document.getElementById('solarHeroVideo'),hero=document.querySelector('#inicio .hero-cinematic'),start=document.getElementById('heroStart'),skip=document.getElementById('heroSkip'),replay=document.getElementById('heroReplay');
 if(!video||!hero||!start||!skip||!replay)return;
 const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function finish(){video.pause();hero.classList.remove('hero-playing','hero-opening-ready');hero.classList.add('hero-finished');}
 function begin(){hero.classList.remove('hero-finished','hero-opening-ready');hero.classList.add('hero-playing');video.currentTime=0;video.muted=false;video.volume=0.85;const p=video.play();if(p&&p.catch)p.catch(()=>{hero.classList.remove('hero-playing');hero.classList.add('hero-opening-ready');start.textContent='▶ Toca para activar video y sonido';});}
 video.addEventListener('ended',finish);
 video.addEventListener('error',finish);
 start.addEventListener('click',begin);
 replay.addEventListener('click',begin);
 skip.addEventListener('click',finish);
 if(reduced)finish();
})();

// SolarPro 12.0 — transformador ideal monofásico y selector de modelos.
(function(){
 const ideal=document.getElementById('trafoIdealPanel'),loss=document.getElementById('trafoLossPanel');
 const bi=document.getElementById('trafoIdealBtn'),bl=document.getElementById('trafoLossBtn');
 if(!ideal||!loss||!bi||!bl)return;
 function mode(isIdeal){ideal.hidden=!isIdeal;loss.hidden=isIdeal;bi.classList.toggle('is-active',isIdeal);bl.classList.toggle('is-active',!isIdeal);bi.setAttribute('aria-pressed',String(isIdeal));bl.setAttribute('aria-pressed',String(!isIdeal));}
 bi.addEventListener('click',()=>mode(true));bl.addEventListener('click',()=>mode(false));
 const defaults={idealVin:13200,idealRatio:110,idealKva:10};
 const inputs=Object.fromEntries(Object.keys(defaults).map(k=>[k,document.getElementById(k)]));
 const fmt=(n,d=2)=>n.toLocaleString('es-MX',{maximumFractionDigits:d});
 function update(){const Vp=Number(inputs.idealVin.value),n=Number(inputs.idealRatio.value),S=Number(inputs.idealKva.value)*1000;const Vs=Vp/n;
 const values={idealVinOut:fmt(Vp,0)+' V',idealRatioOut:fmt(n,0)+':1',idealKvaOut:fmt(S/1000,0)+' kVA',idealVs:fmt(Vs,2)+' V',idealIp:fmt(S/Vp,3)+' A',idealIs:fmt(S/Vs,3)+' A',idealS:fmt(S/1000,0)+' kVA'};
 for(const [k,v] of Object.entries(values))document.getElementById(k).textContent=v;
 }
 Object.values(inputs).forEach(el=>el.addEventListener('input',update));
 document.getElementById('idealReset').addEventListener('click',()=>{for(const [k,v] of Object.entries(defaults))inputs[k].value=v;update();});mode(true);update();
})();
