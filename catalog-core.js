/* Price and eligibility rules shared by the browser and regression tests. */
(function(root){
'use strict';
const present=v=>v!==null&&v!==undefined&&v!=='';
const active=(r,date)=>!r.start||r.start<=date ? (!r.end||date<=r.end) : false;
function malaysiaDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kuala_Lumpur',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
function rank(r,p){const own=['TV','DG'].includes(p.department);return ((own?(r.source==='TV'||r.source==='DG'||r.source==='Apple'):r.source==='ME')?1000:0)+(r.priority||0);}
function resolve(p,date){
 const rows=p.records.filter(r=>active(r,date)).map(r=>{let x={...r};if((r.instantEnd&&date>r.instantEnd)||(r.instantDates&&!r.instantDates.includes(date))){delete x.instant;delete x.voucher;}return x;}).sort((a,b)=>rank(b,p)-rank(a,p)||(b.start||'').localeCompare(a.start||''));
 if(!rows.length)return null;
 const ordinary=rows.filter(r=>!['redemption','gift-item','conditional','compatibility','bundle','staff'].includes(r.kind));
 const pick=(key,rs=ordinary)=>rs.find(r=>present(r[key]));
 const prices=ordinary.filter(r=>['final','promo','member'].some(k=>typeof r[k]==='number'));
 const priceRow=prices[0];let price=null,priceLabel='Check system',priceConflict=false;
 const rateRow=pick('rate'),instantRow=pick('instant'),lineRow=pick('line'),rcpRow=pick('rcp');const instant=instantRow?.instant??null;
 if(priceRow){
  const listed=priceRow.final??priceRow.promo??priceRow.member;
  // An explicit FINAL already contains its row's Instant Save. Replace that amount, never deduct it twice.
  price=listed+(priceRow.final!=null?(priceRow.instant||0):0)-(instant||0);
  price=Math.round(price*100)/100;
  priceLabel=instant>0?'After Instant Save':priceRow.final!=null||priceRow.promo!=null?'Promo price':'Listed price';
  const packageMatch=String(priceRow.note||'').match(/package price\s*(\d[\d,]*(?:\.\d+)?)/i);
  if(packageMatch&&Number(packageMatch[1].replaceAll(',',''))!==price){priceConflict=true;price=null;priceLabel='Confirm package price';}
  if(priceRow.priceConflictAfter&&date>priceRow.priceConflictAfter){priceConflict=true;price=null;priceLabel='Confirm rebate validity';}
 }
 const staff=rows.find(r=>typeof r.shooting==='number'||typeof r.psPoints==='number');
 const tags=[];if(rateRow?.rate!=null)tags.push('S-Coin');if(instant>0)tags.push('Instant Save');
 if(rows.some(r=>r.clearance||['X','3X'].includes(r.line)))tags.push('Clearance');
 if(rows.some(r=>present(r.gift)&&r.gift!=='0'))tags.push('Free gift');
 if(rows.some(r=>r.kind==='redemption'||r.redemptionCode))tags.push('Redemption');
 if(rows.some(r=>r.kind==='bundle'))tags.push('Bundle');
 if(rows.some(r=>r.kind==='installation'))tags.push('Installation');
 if(rows.some(r=>r.tng>0))tags.push('Brand reward');
 if(rows.some(r=>r.trade>0))tags.push('Trade-in');
 if(rows.some(r=>r.nur>0))tags.push('NUR@PETRA');
 if(rows.some(r=>r.kind==='conditional'))tags.push('PWP / MBO');
 const line=lineRow?.line||'';const baskets=[...new Set(rows.filter(r=>!['staff','redemption','gift-item','compatibility'].includes(r.kind)).flatMap(r=>[r.basket,r.line]).filter(Boolean))];
 if(baskets.some(b=>b.startsWith('FUG'))&&!baskets.includes('UG'))baskets.push('UG');
 return {...p,rows,price,priceLabel,priceConflict,priceRow,rate:rateRow?.rate??null,rateRow,instant,instantRow,line,baskets,rcp:rcpRow?.rcp??null,tags,shooting:staff?.shooting??(staff?.psPoints!=null?staff.psPoints/100:null),staff};
}
const normalize=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]/g,'');
const api={active,malaysiaDate,resolve,normalize};if(typeof module!=='undefined')module.exports=api;else root.CatalogCore=api;
})(typeof window!=='undefined'?window:globalThis);
