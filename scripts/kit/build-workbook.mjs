import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

// Run with the bundled Node runtime. All numbers are explicitly fictional.
const root = path.resolve(import.meta.dirname, '../..');
const out = path.join(root, 'public/downloads/launch-kit');
const qa = '/private/tmp/guildframe-kit-qa';
await fs.mkdir(out, { recursive: true });
await fs.mkdir(qa, { recursive: true });
const wb = Workbook.create();
const names = ['Start', 'Funding', 'Rewards', 'Costs', 'Shipping', 'Cash', 'Launch plan', 'Ad tests', 'Sources', 'Reviewers', 'Live ops', 'Production'];
const sheets = Object.fromEntries(names.map(n => [n, wb.worksheets.add(n)]));
const C = { dark: '#18282D', teal: '#165B55', pale: '#EDF4F0', input: '#EAF2FF', blue: '#1758A8', green: '#22734D', muted: '#667570', red: '#A62929' };
const money = '#,##0.00;(#,##0.00);"-"';
const put = (s, a, v) => sheets[s].getRange(a).values = [[v]];
const formula = (s, a, v) => { const r = sheets[s].getRange(a); r.formulas = [[v]]; r.format.font.color = v.includes('!') ? C.green : '#000000'; };
const input = (s, a, fmt) => { const r = sheets[s].getRange(a); r.format.fill = C.input; r.format.font.color = C.blue; if (fmt) r.setNumberFormat(fmt); };
function heading(s, title, note, end = 'H', rows = 40) {
  const w = sheets[s];
  w.showGridLines = false; w.tabColor = C.teal;
  const body = w.getRange(`A1:${end}${rows}`);
  body.format.font.name = 'Arial'; body.format.font.size = 10;
  body.format.verticalAlignment = 'center'; body.format.rowHeight = 25;
  body.format.columnWidth = 18;
  w.getRange(`A1:${end}2`).merge(); put(s, 'A1', title);
  w.getRange(`A1:${end}2`).format.fill = C.dark;
  w.getRange('A1').format.font.color = '#FFFFFF'; w.getRange('A1').format.font.bold = true; w.getRange('A1').format.font.size = 16;
  w.getRange(`A3:${end}4`).merge(); put(s, 'A3', note);
  w.getRange(`A3:${end}4`).format.wrapText = true;
  w.getRange(`A3:${end}4`).format.font.color = C.muted;
  if (s !== 'Start') { put(s, 'A5', 'Selected case'); formula(s, 'B5', '=Start!B8'); w.freezePanes.freezeRows(6); }
}
function table(s, row, headers, data, widths) {
  const w = sheets[s], end = String.fromCharCode(64 + headers.length);
  w.getRange(`A${row}:${end}${row}`).values = [headers];
  const hdr = w.getRange(`A${row}:${end}${row}`);
  hdr.format.fill = C.teal; hdr.format.font.color = '#FFFFFF'; hdr.format.font.bold = true; hdr.format.wrapText = true; hdr.format.rowHeight = 39;
  if (data.length) w.getRange(`A${row+1}:${end}${row+data.length}`).values = data;
  const body = w.getRange(`A${row+1}:${end}${row+data.length}`);
  body.format.wrapText = true; body.format.rowHeight = 44;
  body.format.borders = {preset:'inside',style:'thin',color:'#D9E2DC'};
  for(let i=0;i<data.length;i++) if(i%2===1) w.getRange(`A${row+i+1}:${end}${row+i+1}`).format.fill = '#F5F7F5';
  widths?.forEach((width, i) => w.getRange(`${String.fromCharCode(65+i)}:${String.fromCharCode(65+i)}`).format.columnWidth = width);
  if (data.length) { const t=w.tables.add(`A${row}:${end}${row+data.length}`,true, s.replace(/ /g,'')+'Records'+row); t.showFilterButton=true; }
}

heading('Start', 'GUILDFRAME  Tabletop Campaign Launch Kit', 'WORKED EXAMPLE  All project details, quotes, costs and results are fictional. Save a copy, replace blue inputs and retain formulas. Amounts use the campaign currency.', 'H', 48);
const start = [
 ['Project','Harbor Council','Replace with your project'],
 ['Product type','Board game','Physical and digital tiers can coexist'],
 ['Launch date',new Date('2027-03-02T00:00:00Z'),'Change dates in every dependent schedule'],
 ['Selected case','Base','One selector controls the financial build'],
 ['Driver','Active value','What it means'],
 ['Pledged backers',null,'Whole backer count before failed payments'],
 ['Failed payments',null,'Expected uncollected share; estimate, not a benchmark'],
 ['Contingency',null,'Applied to fixed, manufacturing, other and postage costs'],
 ['Opening project cash',2000,'Cash committed and available to this project'],
 ['Platform rate',0.05,'Kickstarter US example; replace for chosen platform'],
 ['Processor rate',0.03,'Kickstarter US standard pledge example'],
 ['Processor fixed fee',0.30,'Per collected pledge, not per item'],
 ['Micropledge threshold',10,'US pledges under this amount use the next two rates'],
 ['Micropledge rate',0.05,'US processing on pledges below threshold'],
 ['Micropledge fixed fee',0.08,'US fixed processing on pledges below threshold'],
 ['Shipping timing','Later','At pledge = charged in campaign; Later = separate receipts'],
 ['Later collection fee',0.05,'Illustrative combined later collection percentage, verify provider'],
 ['Later fixed fee',0.30,'Illustrative additional charge fee per physical backer'],
 ['Tax reserve',0,'Creator funded reserve; obtain your actual tax plan'],
 ['Refund reserve',0,'Additional cash reserve; do not also deduct as failed payments'],
 ['Cash payout lag days',14,'Planning assumption; confirm actual payment timing'],
 ['Currency','USD','All monetary inputs must use this same currency'],
 ['Country','United States','Fee defaults apply only to Kickstarter US campaigns'],
 ['Bank and identity verified','No','Unresolved launch prerequisite'],
 ['Shipping quotes confirmed','No','Demo shipping is illustrative, not a carrier quote'],
 ['Production quote confirmed','No','Demo costs are illustrative, not a manufacturer quote'],
];
sheets.Start.getRange('A5:C30').values=start;
sheets.Start.getRange('A:A').format.columnWidth=31; sheets.Start.getRange('B:B').format.columnWidth=24; sheets.Start.getRange('C:C').format.columnWidth=58;
sheets.Start.getRange('C5:C30').format.wrapText=true;
sheets.Start.getRange('A5:C30').format.rowHeight=30;
for (let r=5;r<=30;r++) if(![9,10,11,12].includes(r))input('Start',`B${r}`);
sheets.Start.getRange('B7').setNumberFormat('d-mmm-yyyy');
sheets.Start.getRange('B8').dataValidation={rule:{type:'list',values:['Conservative','Base','Optimistic']}};
sheets.Start.getRange('B20').dataValidation={rule:{type:'list',values:['Later','At pledge','Included']}};
sheets.Start.getRange('B28:B30').dataValidation={rule:{type:'list',values:['No','Yes']}};
sheets.Start.getRange('E8:G8').values=[['Conservative','Base','Optimistic']];
sheets.Start.getRange('D9:G9').values=[['Case inputs','Conservative','Base','Optimistic']];
sheets.Start.getRange('D10:G12').values=[['Backers',350,500,800],['Failed payments',0.04,0.02,0.01],['Contingency',0.15,0.10,0.10]];
input('Start','E10:G12'); sheets.Start.getRange('E11:G12').setNumberFormat('0.0%');
for (const r of [10,11,12]) formula('Start',`B${r}`,`=INDEX(E${r}:G${r},1,MATCH(B8,E8:G8,0))`);
for(const r of [11,12,14,15,18,21])sheets.Start.getRange(`B${r}`).setNumberFormat('0.0%');
for(const r of [13,16,19,22,23,24])sheets.Start.getRange(`B${r}`).setNumberFormat(money);
sheets.Start.getRange('B11:B12').dataValidation={rule:{type:'decimal',operator:'between',formula1:0,formula2:0.99}};
for(const a of ['B14:B15','B18','B21','E11:G12'])sheets.Start.getRange(a).dataValidation={rule:{type:'decimal',operator:'between',formula1:0,formula2:0.99}};
sheets.Start.getRange('E10:G10').dataValidation={rule:{type:'whole',operator:'between',formula1:0,formula2:10000000}};
put('Start','D16','INPUT LEGEND'); put('Start','D17','Blue fill / blue text'); put('Start','E17','Replace these inputs');
put('Start','D18','Black formulas'); put('Start','E18','Same tab calculation'); put('Start','D19','Green formulas'); put('Start','E19','Linked from another tab');
sheets.Start.getRange('D21:H23').merge();put('Start','D21','Rates use a Kickstarter US example checked 29 Oct 2026. For Gamefound, replace fees, the small pledge threshold, payout timing and later collection terms. Confirm the actual project setup. See Examples and Sources for both platforms.');sheets.Start.getRange('D21:H23').format.wrapText=true;
sheets.Start.getRange('D25:H28').merge();put('Start','D25','First session: enter costs and a confirmed manufacturing MOQ. Replace reward prices and mix. Set shipping timing and zones. Read Funding, then Cash. If either shows a shortfall, revise before choosing a public goal.');sheets.Start.getRange('D25:H28').format.wrapText=true;
sheets.Start.getRange('A37:H39').merge();put('Start','A37','This model plans one manufactured product SKU used by the physical tiers, plus digital rewards. Cost additional SKUs separately before setting a goal. Demand uses all pledged backers conservatively, while cash deducts expected failed payments. No future sales of remaining inventory are counted as cash. Fees assume one collected transaction per pledge. Installments or multiple charges need an expanded fee and cash schedule.');sheets.Start.getRange('A37:H39').format.wrapText=true;

heading('Costs','Costs and supplier assumptions','Replace the demo with dated quotes. Unit cost below must include inbound freight and duties. Do not add those again if your quote already includes them.','H',35);
sheets.Costs.getRange('A7:C13').values=[['Manufactured SKU','HC-BASE','One physical product shared by the physical tiers'],['Landed cost per unit',14,'Factory price plus inbound freight and duties'],['Minimum order quantity',500,'Supplier minimum'],['Order increment',1,'Supplier quantity step; must be at least 1'],['Spare units',0,'Units held for replacements'],['Quote date',new Date('2026-10-29T00:00:00Z'),'Fictional example date'],['Quote expiry',new Date('2026-11-29T00:00:00Z'),'Replace with supplier terms']];
sheets.Costs.getRange('A:A').format.columnWidth=31;sheets.Costs.getRange('B:B').format.columnWidth=22;sheets.Costs.getRange('C:C').format.columnWidth=62;
input('Costs','B7:B13');sheets.Costs.getRange('B8').setNumberFormat(money);sheets.Costs.getRange('B12:B13').setNumberFormat('d-mmm-yyyy');
sheets.Costs.getRange('B9:B11').dataValidation={rule:{type:'whole',operator:'between',formula1:0,formula2:10000000}};
sheets.Costs.getRange('B10').dataValidation={rule:{type:'whole',operator:'between',formula1:1,formula2:10000000}};
table('Costs',16,['Fixed work','Amount','Basis and evidence'],[['Art and graphic design',2500,'Fictional estimate; replace with quote'],['Development and testing',1500,'Include prototypes, proofs and testing'],['Editing and rules',1000,'Include rulebook or text editing'],['Prelaunch marketing',1000,'A budget cap, not a promise of demand'],['Other fixed work',0,'Licensing, tooling or other committed work']],[31,22,62]);input('Costs','B17:B21',money);
put('Costs','A23','Total fixed costs');formula('Costs','B23','=SUM(B17:B21)');sheets.Costs.getRange('B23').setNumberFormat(money);
table('Costs',26,['Supplier comparison','Currency','Quote total','Scope','Incoterm','Lead time','Expiry','Next action'],[['Supplier A','USD',0,'Enter written quote','Confirm','Confirm','Confirm','Request excluded costs'],['Supplier B','USD',0,'Enter written quote','Confirm','Confirm','Confirm','Ask about proof and QC']],[25,12,18,30,16,16,16,30]);input('Costs','A27:H28');

heading('Shipping','Shipping zones and collection','Zone mix is the expected share of physical backers. All example rates are invented. Later shipping receipts never become money available for an earlier deposit.','J',26);
table('Shipping',7,['Zone','Mix','Postage','Pick and pack','Packaging','Buffer','Cost per backer','Charge','Quote date','Evidence and limits'],[['Domestic',0.65,6,2,1,0.10,null,12,'Unconfirmed','One parcel with one physical reward'],['Canada',0.10,12,2,1,0.10,null,20,'Unconfirmed','Duties and taxes require separate decision'],['United Kingdom',0.15,15,2,1,0.10,null,25,'Unconfirmed','Confirm VAT and import treatment'],['European Union',0.10,17,2,1,0.10,null,28,'Unconfirmed','Confirm destination support'],['Other',0,0,0,0,0,null,0,'Unconfirmed','Unsupported until quoted']],[24,12,16,16,16,12,20,16,20,55]);input('Shipping','B8:F12');input('Shipping','H8:J12');
for(let r=8;r<=12;r++)formula('Shipping',`G${r}`,`=SUM(C${r}:E${r})*(1+F${r})`);
sheets.Shipping.getRange('B8:B12').setNumberFormat('0.0%');sheets.Shipping.getRange('F8:F12').setNumberFormat('0.0%');sheets.Shipping.getRange('C8:E12').setNumberFormat(money);sheets.Shipping.getRange('G8:H15').setNumberFormat(money);
put('Shipping','A14','Zone mix total');formula('Shipping','B14','=SUM(B8:B12)');sheets.Shipping.getRange('B14').setNumberFormat('0.0%');
put('Shipping','A15','Weighted cost / charge');formula('Shipping','G15','=SUMPRODUCT(B8:B12,G8:G12)');formula('Shipping','H15','=SUMPRODUCT(B8:B12,H8:H12)');
put('Shipping','A18','Zone mix check');formula('Shipping','B18','=IF(ABS(B14-1)<0.000001,"OK","Mix must total 100%")');
sheets.Shipping.getRange('A20:J22').merge();put('Shipping','A20','Two copies may need a larger parcel. Put any incremental parcel cost in Rewards other cost, or replace the weighted cost with your actual tier quote. This starter model uses one weighted parcel per physical backer and does not calculate tariffs or VAT.');sheets.Shipping.getRange('A20:J22').format.wrapText=true;

heading('Rewards','Reward prices and lifetime contribution','Prices exclude separately charged shipping. One fixed processor fee applies per pledge. Add on units share the pledge fee; enter their combined bundle as a tier. Blue cells are editable.','M',24);
table('Rewards',7,['Reward','Price','Backer mix','Units','Other cost','Postage cost','Shipping now','Proc rate','Fixed fee','Campaign net','Total cost','Later net','Contribution'],[['Base game',35,0.75,1,3,null,null,null,null,null,null,null,null],['Two copies',65,0.20,2,5,null,null,null,null,null,null,null,null],['Digital print and play',8,0.05,0,0.5,null,null,null,null,null,null,null,null]],[27,15,15,12,15,17,17,14,14,18,18,18,18]);
input('Rewards','A8:E10');sheets.Rewards.getRange('B8:B10').setNumberFormat(money);sheets.Rewards.getRange('C8:C10').setNumberFormat('0.0%');sheets.Rewards.getRange('E8:M13').setNumberFormat(money);
for(let r=8;r<=10;r++){
 formula('Rewards',`F${r}`,`=IF(D${r}>0,Shipping!$G$15,0)`);
 formula('Rewards',`G${r}`,`=IF(AND(D${r}>0,Start!$B$20="At pledge"),Shipping!$H$15,0)`);
 formula('Rewards',`H${r}`,`=IF(B${r}+G${r}<Start!$B$17,Start!$B$18,Start!$B$15)`);
 formula('Rewards',`I${r}`,`=IF(B${r}+G${r}<Start!$B$17,Start!$B$19,Start!$B$16)`);
 formula('Rewards',`J${r}`,`=(B${r}+G${r})*(1-Start!$B$14-H${r})-I${r}`);
 formula('Rewards',`K${r}`,`=D${r}*Costs!$B$8+E${r}+F${r}`);
 formula('Rewards',`L${r}`,`=IF(AND(D${r}>0,Start!$B$20="Later"),Shipping!$H$15*(1-Start!$B$21)-Start!$B$22,0)`);
 formula('Rewards',`M${r}`,`=J${r}+L${r}-K${r}`);
}
sheets.Rewards.getRange('H8:H10').setNumberFormat('0.0%');
put('Rewards','A12','Mix total');formula('Rewards','C12','=SUM(C8:C10)');sheets.Rewards.getRange('C12').setNumberFormat('0.0%');
put('Rewards','A13','Weighted contribution');formula('Rewards','M13','=SUMPRODUCT(C8:C10,M8:M10)');
put('Rewards','A15','Mix check');formula('Rewards','B15','=IF(ABS(C12-1)<0.000001,"OK","Mix must total 100%")');
put('Rewards','A17','Contribution check');formula('Rewards','B17','=IF(MIN(M8:M10)<=0,"At least one tier loses money","All demo tiers contribute")');
sheets.Rewards.getRange('A19:M21').merge();put('Rewards','A19','Contribution estimates each fulfilled pledge using a per unit manufacturing allocation. Funding instead purchases the full supplier order including MOQ and spares. A positive contribution does not mean the campaign has enough cash. Digital rewards have zero physical units and postage.');sheets.Rewards.getRange('A19:M21').format.wrapText=true;

heading('Funding','Funding and full order economics','This is the active scenario, not a recommended public funding goal. Expected failed payments reduce cash. Manufacturing demand conservatively covers every pledged backer.','J',46);
table('Funding',7,['Reward','Pledged backers','Expected collected','Campaign gross','Campaign fees','Other costs','Unit demand','Postage costs','Later shipping gross','Later fees'],[Array(10).fill(null),Array(10).fill(null),Array(10).fill(null)],[27,19,21,21,20,18,18,20,22,20]);
for(let r=8;r<=10;r++) {
 formula('Funding',`A${r}`,`=Rewards!A${r}`);
 formula('Funding',`B${r}`,r<10?`=ROUND(Start!$B$10*Rewards!C${r},0)`:'=Start!$B$10-SUM(B8:B9)');
 formula('Funding',`C${r}`,`=B${r}*(1-Start!$B$11)`);
 formula('Funding',`D${r}`,`=C${r}*(Rewards!B${r}+Rewards!G${r})`);
 formula('Funding',`E${r}`,`=D${r}*(Start!$B$14+Rewards!H${r})+C${r}*Rewards!I${r}`);
 formula('Funding',`F${r}`,`=B${r}*Rewards!E${r}`);
 formula('Funding',`G${r}`,`=B${r}*Rewards!D${r}`);
 formula('Funding',`H${r}`,`=B${r}*Rewards!F${r}`);
 formula('Funding',`I${r}`,`=IF(AND(Rewards!D${r}>0,Start!$B$20="Later"),C${r}*Shipping!$H$15,0)`);
 formula('Funding',`J${r}`,`=IF(I${r}>0,I${r}*Start!$B$21+C${r}*Start!$B$22,0)`);
}
put('Funding','A12','Totals');for (const c of 'BCDEFGHIJ')formula('Funding',`${c}12`,`=SUM(${c}8:${c}10)`);
sheets.Funding.getRange('D8:F12').setNumberFormat(money);sheets.Funding.getRange('H8:J12').setNumberFormat(money);sheets.Funding.getRange('B8:B12').setNumberFormat('#,##0');sheets.Funding.getRange('C8:C12').setNumberFormat('0.0');sheets.Funding.getRange('G8:G12').setNumberFormat('#,##0');
const fr=[
 [14,'Physical units pledged','=G12'],
 [15,'Units ordered','=IF(B14=0,0,CEILING(MAX(Costs!B9,B14+Costs!B11),MAX(1,Costs!B10)))'],
 [16,'Remaining inventory','=B15-B14'],
 [17,'Manufacturing cash','=B15*Costs!B8'],
 [18,'Fixed costs','=Costs!B23'],
 [19,'Other reward costs','=F12'],
 [20,'Postage and fulfillment','=H12'],
 [21,'Contingency reserve','=SUM(B17:B20)*Start!B12'],
 [22,'Tax and refund reserves','=SUM(Start!B23:B24)'],
 [24,'Net campaign receipts','=D12-E12'],
 [25,'Net later shipping receipts','=I12-J12'],
 [26,'Opening cash','=Start!B13'],
 [27,'Total cash and expected receipts','=SUM(B24:B26)'],
 [28,'Costs and reserves','=SUM(B17:B22)'],
 [29,'Lifetime cash surplus or gap','=B27-B28'],
 [31,'Cash excluding later receipts','=B26+B24-B28'],
 [33,'Reward mix check','=IF(ABS(Rewards!C12-1)<0.000001,"OK","Fix reward mix")'],
 [34,'Shipping mix check','=IF(OR(B14=0,ABS(Shipping!B14-1)<0.000001),"OK","Fix shipping mix")'],
 [35,'Quantity check','=IF(OR(Start!B10<0,MIN(Rewards!D8:D10)<0,Costs!B9<0,Costs!B10<1,Costs!B11<0),"Fix quantity inputs","OK")'],
 [36,'Input completeness','=IF(OR(IF(Start!B8="Conservative",COUNTBLANK(Start!E10:E12),IF(Start!B8="Base",COUNTBLANK(Start!F10:F12),COUNTBLANK(Start!G10:G12)))>0,COUNTBLANK(Rewards!B8:E10)>0,COUNTBLANK(Costs!B8:B11)>0),"Missing required input","Inputs populated")'],
 [37,'Quote check','=IF(AND(Start!B29="Yes",Start!B30="Yes"),"Confirmed by creator","Confirm production and shipping quotes")'],
 [38,'Price and cost check','=IF(OR(MIN(Rewards!B8:B10)<0,MIN(Rewards!E8:E10)<0,Costs!B8<0,MIN(Costs!B17:B21)<0),"Fix negative price or cost","OK")'],
 [39,'Fee and reserve check','=IF(OR(Start!B11<0,Start!B11>=1,Start!B12<0,Start!B14<0,Start!B15<0,Start!B14+Start!B15>=1,Start!B18<0,Start!B14+Start!B18>=1,Start!B16<0,Start!B19<0,Start!B21<0,Start!B21>=1,Start!B22<0,Start!B23<0,Start!B24<0),"Fix fee or reserve assumptions","OK")'],
];
for(const[r,l,f]of fr){put('Funding',`A${r}`,l);formula('Funding',`B${r}`,f);}
sheets.Funding.getRange('A14:A39').format.columnWidth=35;sheets.Funding.getRange('B17:B31').setNumberFormat(money);
sheets.Funding.getRange('B33:D39').format.wrapText=true;sheets.Funding.getRange('A33:D39').format.rowHeight=44;
for(let r=33;r<=39;r++)sheets.Funding.getRange(`B${r}:D${r}`).merge();
for(const r of [29,31]){sheets.Funding.getRange(`A${r}:B${r}`).format.fill=C.pale;sheets.Funding.getRange(`A${r}:B${r}`).format.font.bold=true;}
sheets.Funding.getRange('A41:J44').merge();put('Funding','A41','Read Cash for timing. A lifetime surplus can hide an earlier shortfall. Unsold stock is not cash. The model excludes future retail income and does not calculate country specific taxes. If rates, quantities, reward mix or quotes are missing or invalid, resolve the checks before using totals.');sheets.Funding.getRange('A41:J44').format.wrapText=true;

heading('Cash','Cash calendar','Replace demo dates with supplier terms and payout expectations. Enter extra payments in blue rows. Positive amounts only. The lowest balance is the amount you must finance before proceeding.','G',30);
table('Cash',7,['Date','Event','Cash received','Cash paid','Opening cash','Closing cash','Basis'],[
 [null,'Art and development deposits',0,null,null,null,'Half of fixed costs before launch'],
 [null,'Remaining fixed work',0,null,null,null,'Balance before launch'],
 [null,'Campaign payout',null,0,null,null,'Expected receipts after campaign and payout lag'],
 [null,'Factory deposit',0,null,null,null,'50% manufacturing deposit'],
 [null,'Factory balance',0,null,null,null,'50% manufacturing balance'],
 [null,'Later shipping collection',null,0,null,null,'Separate later receipt, net of fees'],
 [null,'Other reward costs',0,null,null,null,'Other per pledge costs'],
 [null,'Shipping and fulfillment',0,null,null,null,'Estimated postage and fulfillment'],
 [null,'Reserve cash held aside',0,null,null,null,'Reserve treated as unavailable cash'],
 [null,'Additional receipt or payment',0,0,null,null,'Enter a real committed event'],
 [null,'Additional receipt or payment',0,0,null,null,'Keep dates chronological'],
],[19,34,22,22,22,22,58]);
const offsets=[-60,-14,44,50,110,115,120,125,126,130,140];
for(let r=8;r<=18;r++){
 formula('Cash',`A${r}`,`=Start!B7+${offsets[r-8]}`);
 formula('Cash',`E${r}`,r===8?'=Start!B13':`=F${r-1}`);
 formula('Cash',`F${r}`,`=E${r}+C${r}-D${r}`);
}
formula('Cash','A10','=Start!B7+30+Start!B25');
formula('Cash','D8','=Costs!B23*0.5');formula('Cash','D9','=Costs!B23*0.5');formula('Cash','C10','=Funding!B24');
formula('Cash','D11','=Funding!B17*0.5');formula('Cash','D12','=Funding!B17*0.5');formula('Cash','C13','=Funding!B25');
formula('Cash','D14','=Funding!B19');formula('Cash','D15','=Funding!B20');formula('Cash','D16','=SUM(Funding!B21:B22)');
input('Cash','A8:A18','d-mmm-yyyy');input('Cash','B8:B18');input('Cash','C17:D18',money);sheets.Cash.getRange('C8:F18').setNumberFormat(money);
put('Cash','A21','Minimum cash balance');formula('Cash','C21','=MIN(Start!B13,F8:F18)');
put('Cash','A22','Additional cash needed');formula('Cash','C22','=MAX(0,-C21)');
put('Cash','A23','Ending cash');formula('Cash','C23','=F18');
put('Cash','A24','Date order check');formula('Cash','C24','=IF(SUMPRODUCT(--(A9:A18<A8:A17))>0,"Reorder rows by date","Chronological")');
sheets.Cash.getRange('C21:C23').setNumberFormat(money);
put('Cash','A26','Timing change');put('Cash','B26','Edit dates if deposits fall before payout. Do not sort only the date column.');sheets.Cash.getRange('B26:G27').merge();sheets.Cash.getRange('B26:G27').format.wrapText=true;

const plan=[
 ['P01',-84,'Product','Freeze testable prototype','Creator','None','Rules and current prototype link','Not started'],
 ['P02',-77,'Research','Run observed playtests or fit tests','Creator','P01','Notes, issues and retest','Not started'],
 ['P03',-70,'Costs','Request manufacturing and shipping quotes','Operations','P01','Quote with MOQ, expiry and exclusions','Not started'],
 ['P04',-63,'Positioning','Choose one audience and product promise','Creator','P02','One page creative brief','Not started'],
 ['P05',-56,'Creative','Capture real prototype and use footage','Creative','P01 P04','Labelled prototype photos and video','Not started'],
 ['P06',-49,'Audience','Publish an opted in landing page','Marketing','P04 P05','Signup and delivery verified','Not started'],
 ['P07',-49,'Reviewers','Offer relevant reviewers a prototype','Marketing','P01 P05','Permission and agreed timing','Not started'],
 ['P08',-42,'Ads','Run a capped creative test','Marketing','P06','Test record and decision','Not started'],
 ['P09',-35,'Numbers','Check tiers, MOQ and cash gap','Creator','P03 P08','Funding and Cash reviewed','Not started'],
 ['P10',-28,'Campaign','Draft page, risks and rewards','Creator','P05 P09','Editable campaign copy','Not started'],
 ['P11',-21,'Platform','Complete identity and submit review','Creator','P10','Current platform status','Not started'],
 ['P12',-14,'Operations','Confirm delivery scope and help owner','Operations','P03 P09','Fulfillment plan and source files','Not started'],
 ['P13',-7,'QA','Test page, links, mobile and email','Creator','P10 P11','QA checklist with evidence','Not started'],
 ['P14',-1,'Launch','Confirm dates, prices and send segments','Marketing','P13','Correct timezone and suppressed backers','Not started'],
 ['P15',0,'Launch','Launch and verify campaign before email','Creator','P14','Live reward prices and links checked','Not started'],
 ['P16',1,'Live','Answer questions and log source data','Support','P15','Live ops log','Not started'],
 ['P17',15,'Live','Publish a factual progress update','Creator','P16','Verified progress and next action','Not started'],
 ['P18',28,'Close','Check final reminders and capacity','Creator','P17','No unsupported stretch promises','Not started'],
 ['P19',30,'Close','Reconcile outcome and explain next steps','Creator','P18','Funded or unsuccessful email','Not started'],
 ['P20',45,'Handoff','Approve production and pledge manager plan','Operations','P19','Signed sample, SKU mapping and cash','Not started'],
];
heading('Launch plan','Launch schedule and evidence','An editable 12 week runway. Dates do not prove readiness. Dependencies reference task IDs. Change owners, offsets and evidence to fit your project.','I',32);
table('Launch plan',7,['Task ID','Days from launch','Due date','Workstream','Action','Owner','Depends on','Evidence needed','Status'],plan.map(v=>[v[0],v[1],null,...v.slice(2)]),[13,19,20,19,48,22,20,56,20]);
for(let r=8;r<28;r++)formula('Launch plan',`C${r}`,`=Start!B7+B${r}`);
sheets['Launch plan'].getRange('C8:C27').setNumberFormat('d-mmm-yyyy');input('Launch plan','B8:B27');input('Launch plan','F8:I27');sheets['Launch plan'].getRange('I8:I27').dataValidation={rule:{type:'list',values:['Not started','In progress','Blocked','Done']}};

heading('Ad tests','Audience and creative tests','Fictional capped test examples. CTR = clicks / impressions. CPC = spend / clicks. CPL = spend / unique opt ins. Cheap leads do not establish buying intent.','M',24);
table('Ad tests',7,['Test ID','Audience and hypothesis','Hook and asset','Spend cap','Spend','Impressions','Clicks','Unique opt ins','Qualified actions','CTR','CPC','CPL','Decision'],[
 ['T01','Strategy players who enjoy negotiation','One turn and a visible hard choice',100,80,12000,140,32,5,null,null,null,'Example only. Review feedback before repeating'],
 ['T02','Couples who play short card games','Setup to first decision in 15 seconds',100,65,9000,100,24,3,null,null,null,'Example only. Change one hook, keep audience'],
 ['T03','Your next audience hypothesis','Enter an original creative angle',0,0,0,0,0,0,null,null,null,'Set cap, dates and success criterion before spend'],
],[13,48,49,18,16,18,16,19,22,14,16,16,56]);input('Ad tests','A8:I10');input('Ad tests','M8:M10');
for(let r=8;r<=10;r++){formula('Ad tests',`J${r}`,`=IF(F${r}>0,G${r}/F${r},"n.a.")`);formula('Ad tests',`K${r}`,`=IF(G${r}>0,E${r}/G${r},"n.a.")`);formula('Ad tests',`L${r}`,`=IF(H${r}>0,E${r}/H${r},"n.a.")`);}
sheets['Ad tests'].getRange('J8:J10').setNumberFormat('0.0%');sheets['Ad tests'].getRange('K8:L10').setNumberFormat(money);
table('Ad tests',14,['Test planning field','Your input','Example'],[['Observation period','Enter start and stop dates','Seven days or chosen fixed sample'],['Qualified action definition','Enter meaningful observed action','Rules download plus reply, or test session booked'],['Decision rule','Set before running test','Stop at cap. Compare relevant actions and replies'],['Next change','Change one main variable','Same audience, new gameplay hook']],[32,49,65]);input('Ad tests','B15:B18');

heading('Sources','Marketing source registry','Use Kickstarter generated referral tags for Kickstarter. On Gamefound, use its available campaign reporting and links. Keep own site UTMs separate. Platform attribution does not prove causal or cross device tracking.','J',26);
table('Sources',7,['Source ID','Channel and placement','Destination URL or tag','Date live','Spend','Visits','Opt ins','Pledges','Collected amount','Evidence and period'],[
 ['S01','Email launch broadcast','Paste chosen platform campaign tracking URL','Not live',0,0,0,0,0,'Record dashboard export and date range'],
 ['S02','Reviewer video','Paste unique link agreed with reviewer','Not live',0,0,0,0,0,'Record paid or free and publication permission'],
 ['S03','Prelaunch landing page ad','Paste own site UTM URL','Not live',0,0,0,0,0,'Do not combine unrelated reporting windows'],
 ['S04','Unknown or unattributed','Record unattributed platform totals','Not live',0,0,0,0,0,'Keep unknown visible; do not invent a source'],
],[15,38,65,21,16,15,15,15,23,60]);input('Sources','A8:J11');
put('Sources','A15','Primary references');
const refs=[['Fees','https://www.kickstarter.com/help/fees?country=US'],['Funding and goals','https://www.kickstarter.com/help/handbook/funding'],['Platform rules','https://www.kickstarter.com/rules'],['Marketing tools','https://updates.kickstarter.com/new-tools-to-help-creators-market-their-projects/'],['Pledge manager','https://start.kickstarter.com/pledge-manager-release-notes'],['Terms and data','https://legal.kickstarter.com/'],['Gamefound fees','https://help.gamefound.com/article/284-fees-for-projects-funded-on-gamefound'],['Gamefound stages','https://help.gamefound.com/article/285-getting-started-with-crowdfunding'],['Gamefound testing','https://help.gamefound.com/article/366-tester-mode'],['Closing rules','https://help.gamefound.com/article/434-endgame'],['Gamefound fees','https://help.gamefound.com/article/284-fees-for-projects-funded-on-gamefound'],['Gamefound stages','https://help.gamefound.com/article/285-getting-started-with-crowdfunding'],['Gamefound testing','https://help.gamefound.com/article/366-tester-mode'],['Closing rules','https://help.gamefound.com/article/434-endgame']];
for(let i=0;i<refs.length;i++){put('Sources',`A${17+i}`,refs[i][0]);sheets.Sources.getRange(`B${17+i}:F${17+i}`).merge();put('Sources',`B${17+i}`,refs[i][1]);}

heading('Reviewers','Reviewer outreach and prototype log','Use relevant public business contacts and each outlet policy. Obtain permission for quote reuse. A prototype or paid feature does not promise favorable coverage.','J',22);
table('Reviewers',7,['Outlet or person','Relevance evidence','Public contact source','Policy and cost','Prototype and shipping','First contact','Agreed date','Status','Permission and disclosure','Next action'],[
 ['Research a relevant outlet','Link one recent related review','Record business contact URL','Check current submission policy','Current prototype; confirm destination','Not sent','Not agreed','Research','No quote permission yet','Read policy and personalize the draft'],
 ['Your next relevant outlet','Explain product and audience fit','Public business contact only','Free or paid; record exact scope','Digital quickstart or physical sample','Not sent','Not agreed','Research','Confirm paid disclosure when applicable','Ask about availability without implying agreement'],
],[32,49,54,47,49,23,23,22,55,55]);input('Reviewers','A8:J9');sheets.Reviewers.getRange('H8:H9').dataValidation={rule:{type:'list',values:['Research','Draft','Sent','Agreed','Declined','Hold','Published']}};

heading('Live ops','Campaign operations and issue log','Launch only after the campaign is checked. Every draft uses verified amounts, dates and current availability. Pledges are not the same as collected cash.','H',27);
table('Live ops',7,['Checkpoint','Action','Owner','Evidence','Status','Next check','Audience','Suppression'],[
 ['Launch','Verify live URL, prices, quantities and shipping','Creator','Paste live check','Not started','At launch','Opted in launch list','Suppress known backers from acquisition asks'],
 ['First hour','Check questions and broken links','Support','Issue log','Not started','After first replies','Relevant audience','No duplicate send'],
 ['Daily','Record source snapshots and unresolved issues','Creator','Dashboard export date','Not started','Next working day','Backers for project updates','Newsletter permission remains separate'],
 ['Final 48 hours','Verify deadline timezone and capacity','Creator','Current platform deadline','Not started','Before reminder','Relevant subscribers','Suppress known backers from pledge reminder'],
 ['Close','Reconcile funded or unsuccessful outcome','Creator','Final platform status','Not started','After close','Backers and opted in subscribers','Use matching outcome draft'],
 ['After close','Publish the next dated production update','Operations','Approved handoff','Not started','Date you can meet','Project backers','Use required project communication channels'],
],[25,62,23,44,23,30,48,61]);input('Live ops','C8:H13');
table('Live ops',17,['Date and timezone','Issue or question','Severity','Owner','Action','Due','Evidence','State'],[['Enter date and timezone','Enter a real observed issue','Choose impact','Name owner','Specific next action','Choose due date','Link or receipt','Open'],['Enter date and timezone','Enter a real observed issue','Choose impact','Name owner','Specific next action','Choose due date','Link or receipt','Open']],[25,62,23,23,55,25,48,25]);input('Live ops','A18:H19');

heading('Production','Production and fulfillment handoff','Record an approved sample and the exact version used. Do not share customer addresses in this reusable workbook. Keep personal data in the selected fulfillment system.','I',29);
const prod=[
 ['P01','Product','SKU and reward mapping','Operations','Approved component list and tier mapping','Before order','Not confirmed','None','Confirm every included item'],
 ['P02','Files','Print or sculpt files version','Creative','Link named export with date and rights record','Before proof','Not confirmed','P01','Confirm fonts, bleed, scale or supports'],
 ['P03','Sample','Proof and signed sample','Creator','Physical or digital test and written approval','Before balance','Not confirmed','P02','Record defects and acceptance'],
 ['P04','Quality','Inspection criteria','Operations','Counts, dimensions, finish and damage criteria','Before production','Not confirmed','P03','Agree rework responsibility'],
 ['P05','Order','Quantity and spare stock','Operations','Funding order quantity and quote scope','Before deposit','Not confirmed','P01','Confirm cash before commitment'],
 ['P06','Packout','Parcel and carton specification','Fulfillment','Photo and weight of complete test parcel','Before freight','Not confirmed','P03','Confirm bundle parcel costs'],
 ['P07','Tax','Shipping and tax plan','Creator','Provider settings and jurisdiction review','Before survey','Not confirmed','P06','State later charges clearly'],
 ['P08','Addresses','Survey and address lock','Fulfillment','System date and reminder plan','Before labels','Not confirmed','P07','Restrict access to personal data'],
 ['P09','Test shipment','Pilot parcel','Fulfillment','Tracking and contents verified','Before batch','Not confirmed','P06 P08','Fix packing or label errors'],
 ['P10','Support','Missing and damaged rewards','Support','Owner, reserve stock and response template','Before dispatch','Not confirmed','P09','Publish how backers contact you'],
 ['P11','Digital','Digital files and access test','Creator','Test download and license text','Before delivery','Not confirmed','P02','Use zero physical units for digital tier'],
 ['P12','Close','Delivery and final reconciliation','Creator','Shipment / download evidence and cash record','After delivery','Not confirmed','P10 P11','Report exceptions honestly'],
];
table('Production',7,['ID','Workstream','Deliverable','Owner','Acceptance evidence','When','Status','Dependency','Next action'],prod,[13,23,39,23,64,25,25,24,56]);input('Production','D8:I19');sheets.Production.getRange('G8:G19').dataValidation={rule:{type:'list',values:['Not confirmed','In progress','Blocked','Approved','Not applicable']}};

// Dynamic warnings on finance outputs, without green success banners.
for(const [s,a]of [['Funding','B29'],['Funding','B31'],['Cash','C21'],['Rewards','M8:M10']])sheets[s].getRange(a).conditionalFormats.add('cellIs',{operator:'lessThan',formula:0,format:{fill:'#FCE7E7',font:{color:C.red,bold:true}}});
wb.recalculate();

// Check the same live build by changing real inputs, then restoring them.
const read=(s,a)=>sheets[s].getRange(a).values[0][0];
const tests=[];
const check=(label,actual,expected,tol=0.0001)=>{assert.ok(Math.abs(actual-expected)<=tol,`${label}: ${actual} != ${expected}`);tests.push({label,actual,expected});};
const snapshot={};for(const[s,a]of [['Start','B8'],['Start','B11'],['Start','B12'],['Start','B13'],['Start','B20'],['Start','F10'],['Rewards','C8'],['Rewards','C9'],['Rewards','C10'],['Costs','B8'],['Costs','B9'],['Shipping','B8'],['Shipping','B9'],['Shipping','B10'],['Shipping','B11'],['Shipping','C8'],['Shipping','D8'],['Shipping','E8'],['Shipping','F8'],['Shipping','H8']])snapshot[s+'!'+a]={value:read(s,a),formula:sheets[s].getRange(a).formulas[0][0]};
put('Start','B8','Base');put('Start','B11',0);put('Start','B12',0);put('Start','B13',0);put('Start','B20','Included');put('Rewards','C8',1);put('Rewards','C9',0);put('Rewards','C10',0);
for(const a of ['C8','D8','E8','F8'])put('Shipping',a,0);put('Shipping','B8',1);for(const a of ['B9','B10','B11'])put('Shipping',a,0);
put('Start','F10',403);wb.recalculate();check('MOQ deficit at 403',read('Funding','B29'),-1353.3);check('MOQ purchase',read('Funding','B15'),500);
put('Start','F10',450);wb.recalculate();check('MOQ surplus at 450',read('Funding','B29'),5);check('Inventory left',read('Funding','B16'),50);
put('Rewards','C8',0);put('Rewards','C10',1);wb.recalculate();check('Digital no factory order',read('Funding','B15'),0);check('Digital no postage',read('Funding','B20'),0);
put('Start','F10',0);wb.recalculate();check('Zero backers no fee',read('Funding','E12'),0);check('Zero backers no order',read('Funding','B15'),0);
put('Start','F10',500);put('Rewards','C8',1);put('Rewards','C10',0);put('Start','B20','Later');put('Shipping','C8',10);put('Shipping','H8',12);wb.recalculate();check('Later shipping not in campaign',read('Funding','D12'),17500);check('Later receipt fees',read('Funding','B25'),5550);
const latercash=read('Funding','B24');put('Start','B20','At pledge');wb.recalculate();check('Shipping charged now increases campaign net',read('Funding','B24')-latercash,5520);
for(const[k,v]of Object.entries(snapshot)){const[s,a]=k.split('!');if(v.formula)formula(s,a,v.formula);else put(s,a,v.value);}
wb.recalculate();
const base=read('Funding','B29');put('Start','B8','Conservative');wb.recalculate();assert.notEqual(read('Funding','B29'),base);tests.push({label:'Case selector changes financial build',actual:read('Funding','B29'),base});put('Start','B8','Base');wb.recalculate();
check('Cash detects pre payout gap',read('Cash','C21'),-4000);
const price=read('Rewards','B8');put('Rewards','B8',-1);wb.recalculate();assert.equal(read('Funding','B38'),'Fix negative price or cost');tests.push({label:'Negative price warning',actual:read('Funding','B38')});put('Rewards','B8',price);
const mix=read('Rewards','C8');put('Rewards','C8',mix+.1);wb.recalculate();assert.equal(read('Funding','B33'),'Fix reward mix');tests.push({label:'Invalid mix warning',actual:read('Funding','B33')});put('Rewards','C8',mix);
const fee=read('Start','B14');put('Start','B14',1);wb.recalculate();assert.equal(read('Funding','B39'),'Fix fee or reserve assumptions');tests.push({label:'Fee limit warning',actual:read('Funding','B39')});put('Start','B14',fee);
put('Start','E10',null);wb.recalculate();assert.equal(read('Funding','B36'),'Inputs populated');tests.push({label:'Blank inactive case does not block active case',actual:read('Funding','B36')});put('Start','E10',350);
put('Start','F10',null);wb.recalculate();assert.equal(read('Funding','B36'),'Missing required input');tests.push({label:'Blank active case is reported',actual:read('Funding','B36')});put('Start','F10',500);wb.recalculate();
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:50},maxChars:3000});
await fs.writeFile(path.join(qa,'workbook-formula-scan.txt'),errors.ndjson);
const inspection=await wb.inspect({kind:'table',range:'Funding!A14:C37',include:'values,formulas',tableMaxRows:25,tableMaxCols:3,maxChars:7000});
await fs.writeFile(path.join(qa,'workbook-funding-inspect.txt'),inspection.ndjson);
await fs.writeFile(path.join(qa,'workbook-tests.json'),JSON.stringify({tests,baseSurplus:base,formulaScan:errors.ndjson},null,2));
const xlsx=await SpreadsheetFile.exportXlsx(wb);await xlsx.save(path.join(out,'Tabletop-Launch-Planner.xlsx'));
try{await fs.rename(path.join(out,'Tabletop-Launch-Planner.xlsx.inspect.ndjson'),path.join(qa,'export-inspect.ndjson'));}catch{}
const lastRows={'Start':39,'Funding':44,'Rewards':21,'Costs':28,'Shipping':22,'Cash':27,'Launch plan':27,'Ad tests':18,'Sources':26,'Reviewers':9,'Live ops':19,'Production':19};
for(const n of names){const end=n==='Rewards'?'M':n==='Funding'||n==='Shipping'||n==='Sources'||n==='Reviewers'?'J':n==='Ad tests'?'M':n==='Launch plan'||n==='Production'?'I':'H';try{const blob=await wb.render({sheetName:n,range:`A1:${end}${lastRows[n]}`,scale:1.3,format:'png'});await fs.writeFile(path.join(qa,`sheet-${n.replace(/ /g,'-')}.png`),new Uint8Array(await blob.arrayBuffer()));}catch(e){await fs.writeFile(path.join(qa,`render-${n.replace(/ /g,'-')}.txt`),String(e));}}
console.log(JSON.stringify({output:path.join(out,'Tabletop-Launch-Planner.xlsx'),sheets:names.length,tests:tests.length,baseSurplus:base,formulaScan:errors.ndjson}));
