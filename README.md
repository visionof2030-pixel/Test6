<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>أداة إصدار التقارير والشواهد</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html,body{font-family:'Cairo',sans-serif;background:#ffffff;direction:rtl;overflow-x:hidden;}
.wrapper{max-width:830px;margin:auto;padding:15px;}

.btn-container{
text-align:center;padding:12px;background:#f5f5f5;position:fixed;top:0;left:0;width:100%;z-index:20;
display:flex;gap:10px;justify-content:center;flex-wrap:wrap;box-shadow:0 3px 6px rgba(0,0,0,0.25);
}
button.main-btn{
background:#066d4d;color:#fff;border:none;padding:10px 20px;font-size:14px;border-radius:8px;cursor:pointer;
flex:1;min-width:110px;max-width:160px;
}

.input-section{
background:#f8fdfb;padding:15px;border-radius:10px;margin-top:90px;
border:1px solid #e0f0ea;max-width:100%;
}
label{font-size:15px;font-weight:700;margin-top:15px;display:block;color:#083024;}
input,select,textarea{
width:100%;padding:10px;margin-top:6px;border:2px solid #066d4d;border-radius:8px;
font-size:14px;background:#ffffff;
}
textarea{height:95px;resize:none;overflow-y:auto;}

.auto-buttons{
display:flex;justify-content:flex-end;margin-top:5px;
}
.auto-btn{
border:1px solid #066d4d;
background:#ffffff;color:#066d4d;
font-size:11px;font-weight:bold;border-radius:5px;
cursor:pointer;padding:4px 8px;
}

#report-content{width:100%;margin:20px auto;}

.header{
background:#083024;color:#fff;text-align:center;padding:10px;
min-height:120px;position:relative;
}
.header img{width:135px;}

.info-grid,.info-grid2{display:grid;gap:4px;margin-top:10px;}
.info-grid{grid-template-columns:repeat(4,1fr);}
.info-grid2{grid-template-columns:repeat(3,1fr);}

.info-box{
background:#e8f2ee;border-radius:6px;height:34px;
display:flex;flex-direction:column;justify-content:center;align-items:center;
border:1px solid rgba(6,109,77,0.3);
}
.info-title{font-size:9px;font-weight:700;}
.info-value{font-size:10px;font-weight:700;color:#000;}

.objective-box,.report-box{
background:#fff;border-radius:8px;padding:6px;border:1px solid rgba(6,109,77,0.35);
}
.objective-content,.report-box-content{font-size:13px;line-height:1.4;max-height:110px;overflow-y:auto;}

.report-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;}
.report-box-title{text-align:center;font-size:13px;font-weight:700;color:#083024;margin-bottom:4px;}

.image-evidence-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.image-box{
min-height:120px;border:1px dashed #066d4d;border-radius:8px;
display:flex;align-items:center;justify-content:center;background:#ffffff;overflow:hidden;
font-size:12px;
}
.image-box img{max-width:100%;max-height:100%;}

.signature-section{margin-top:15px;display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.signature-box{text-align:center;font-size:12px;font-weight:700;color:#083024;}
.signature-line{height:1px;background:#083024;margin:6px auto;width:80%;}

.footer{text-align:center;font-size:10px;padding:6px;margin-top:20px;background:#083024;color:#fff;}
</style>
</head>

<body>

<div class="btn-container">
<button class="main-btn" onclick="downloadPDF()">تنزيل PDF</button>
<button class="main-btn" onclick="sharePDFWhatsApp()">واتساب</button>
<button class="main-btn" onclick="saveData()">حفظ المدخلات</button>
<button class="main-btn" onclick="resetData()">مسح البيانات</button>
</div>

<div class="wrapper">
<div class="input-section">

<label>إدارة التعليم</label>
<select id="education" oninput="updateReport()">
<option value="">اختر إدارة التعليم</option>
<option>الإدارة العامة للتعليم بمنطقة مكة المكرمة</option>
<option>الإدارة العامة للتعليم بمحافظة جدة</option>
</select>

<label>اسم المدرسة</label>
<input id="school" placeholder="مثال: معاذ بن جبل" oninput="updateReport()">

<label>اسم التقرير</label>
<select id="reportType" oninput="updateReport()">
<option value="">اختر نوع التقرير</option>
<option selected>تقرير نشاط إثرائي</option>
</select>

<label>اسم المعلّم</label>
<input id="teacher" placeholder="اسم المعلّم" value="فهد الخالدي" oninput="updateReport()">

<label>اسم المدير</label>
<input id="principal" placeholder="اسم المدير" value="نايف اللحياني" oninput="updateReport()">

<label>الصف</label>
<input id="grade" oninput="updateReport()">

<label>الفصل الدراسي</label>
<select id="term" oninput="updateReport()">
<option value="">اختر الفصل</option>
<option>الأول</option>
<option>الثاني</option>
</select>

<label>المادة</label>
<input id="subject" oninput="updateReport()">

<label>المستهدفون</label>
<input id="target" oninput="updateReport()">

<label>العدد</label>
<input id="count" oninput="updateReport()">

<label>المكان</label>
<input id="place" oninput="updateReport()">

<label>الهدف التربوي</label>
<textarea id="goal" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('goal')">🔂</button></div>

<label>النبذة</label>
<textarea id="summary" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('summary')">🔂</button></div>

<label>إجراءات التنفيذ</label>
<textarea id="steps" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('steps')">🔂</button></div>

<label>الاستراتيجيات</label>
<textarea id="strategies" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('strategies')">🔂</button></div>

<label>نقاط القوة</label>
<textarea id="strengths" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('strengths')">🔂</button></div>

<label>نقاط التحسين</label>
<textarea id="improve" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('improve')">🔂</button></div>

<label>التوصيات</label>
<textarea id="recomm" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button class="auto-btn" onclick="rotateText('recomm')">🔂</button></div>

<label>صورة 1</label>
<input type="file" accept="image/*" onchange="loadImage(this,'imgBox1')">

<label>صورة 2</label>
<input type="file" accept="image/*" onchange="loadImage(this,'imgBox2')">

</div>
</div>

<div id="report-content" class="wrapper">

<div class="header">
<img src="https://i.ibb.co/1fc5gB6v/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png">
<div id="educationBox"></div>
</div>

<div class="info-grid">
<div class="info-box"><div class="info-title">الفصل</div><div class="info-value" id="termBox"></div></div>
<div class="info-box"><div class="info-title">الصف</div><div class="info-value" id="gradeBox"></div></div>
<div class="info-box"><div class="info-title">المادة</div><div class="info-value" id="subjectBox"></div></div>
<div class="info-box"><div class="info-title">المدرسة</div><div class="info-value" id="schoolBox"></div></div>
</div>

<div class="objective-box">
<div class="objective-content" id="goalBox"></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">النبذة</div><div class="report-box-content" id="summaryBox"></div></div>
<div class="report-box"><div class="report-box-title">الإجراءات</div><div class="report-box-content" id="stepsBox"></div></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">الاستراتيجيات</div><div class="report-box-content" id="strategiesBox"></div></div>
<div class="report-box"><div class="report-box-title">نقاط القوة</div><div class="report-box-content" id="strengthsBox"></div></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">التحسين</div><div class="report-box-content" id="improveBox"></div></div>
<div class="report-box"><div class="report-box-title">التوصيات</div><div class="report-box-content" id="recommBox"></div></div>
</div>

<div class="image-evidence-grid">
<div class="image-box" id="imgBox1">صورة ١</div>
<div class="image-box" id="imgBox2">صورة ٢</div>
</div>

<div class="signature-section">
<div class="signature-box">
<div>توقيع المعلم</div>
<div class="signature-line"></div>
<div id="teacherBox">فهد الخالدي</div>
</div>
<div class="signature-box">
<div>توقيع المدير</div>
<div class="signature-line"></div>
<div id="principalBox">نايف اللحياني</div>
</div>
</div>

<div class="footer">وزارة التعليم – المملكة العربية السعودية</div>
</div>

<script>
const texts={
goal:[
"تنمية مهارات الطلاب وتعزيز التفكير العلمي من خلال أنشطة تعليمية تفاعلية تحفز المشاركة.",
"اكتساب مهارات جديدة وتحسين التواصل والعمل التعاوني داخل البيئة الصفية.",
"تعزيز قدرات الطلاب على حل المشكلات عبر تجارب عملية وتطبيقات تعليمية محفزة.",
"رفع مستوى الفهم والإدراك عبر ربط الدروس بنشاطات ممتعة تحفز حب التعلم.",
"تنمية مهارات الإبداع لدى الطلاب وتوسيع مداركهم باستخدام أساليب حديثة."
],
summary:[
"أنشطة تعليمية ممتعة تعزز مشاركة الطلاب ورغبتهم في التعلم.",
"تنفيذ فعاليات محفزة تساهم في ترسيخ مفهوم الدرس لدى الطلاب.",
"إشراك الطلاب في مهام تفاعلية تعاونية تزيد من تفاعلهم داخل الصف.",
"تطبيق نشاط إثرائي يساعد على تحسين نواتج التعلم بشكل فعال.",
"تقديم تجربة صفية ممتعة ترفع الفهم والتحصيل الدراسي."
],
steps:[
"شرح توضيحي ثم تقسيم الطلاب لمجموعات والعمل الجماعي.",
"توزيع بطاقات تعليمية وتحفيز المنافسة الإيجابية بينهم.",
"تنفيذ أنشطة تطبيقية مرتبطة بالدرس ثم مناقشة النتائج.",
"تقديم أمثلة عملية ومشاركة الطلاب في الشرح التفاعلي.",
"متابعة تقدم الطلاب وتقديم التغذية الراجعة المباشرة لهم."
],
strategies:[
"التعلم التعاوني وتبادل الأدوار داخل المجموعات.",
"العصف الذهني وتنمية مهارات التفكير العليا.",
"استراتيجيات إثرائية تحفز المشاركة الفاعلة.",
"تطبيق التعلم النشط داخل البيئة الصفية.",
"دمج التقنية في تنفيذ الأنشطة الصفية."
],
strengths:[
"تفاعل ممتاز وارتفاع مستوى المشاركة بين الطلاب.",
"تحسن واضح في مهارات الفهم والتواصل لديهم.",
"مستوى الاهتمام بالدرس كان عالياً لدى الجميع.",
"ترابط تعاوني فعال بين جميع أفراد المجموعة.",
"تحقيق نتائج تعليمية ملحوظة ومُرضية جداً."
],
improve:[
"تكثيف الأنشطة للطلاب ذوي التحصيل الأقل دعماً لهم.",
"زيادة الوقت المخصص للاستنتاج والنقاش الجماعي.",
"تنويع أساليب الشرح وطرق التنفيذ التحفيزية.",
"دعم الطلاب بإرشادات إضافية خلال النشاط.",
"رفع مستوى التحدي بما يناسب قدرات الطلاب."
],
recomm:[
"الاستمرار في دمج التقنية لتحقيق تعلم أفضل.",
"تنظيم فعاليات مشابهة خلال باقي الفصول.",
"التركيز على تعزيز التعلم التعاوني أكثر.",
"توفير موارد وأنشطة إضافية للطلاب.",
"تخصيص وقت لمتابعة المتعثرين مستقبلاً."
]};

let index={goal:0,summary:0,steps:0,strategies:0,strengths:0,improve:0,recomm:0};

function rotateText(id){
index[id]=(index[id]+1)%5;
document.getElementById(id).value=texts[id][index[id]];
updateReport();
}

function updateReport(){
educationBox.innerText=education.value;
schoolBox.innerText=school.value;
termBox.innerText=term.value;
gradeBox.innerText=grade.value;
subjectBox.innerText=subject.value;
targetBox.innerText=target.value;
countBox.innerText=count.value;
placeBox.innerText=place.value;
teacherBox.innerText=teacher.value;
principalBox.innerText=principal.value;
goalBox.innerText=goal.value;
summaryBox.innerText=summary.value;
stepsBox.innerText=steps.value;
strategiesBox.innerText=strategies.value;
strengthsBox.innerText=strengths.value;
improveBox.innerText=improve.value;
recommBox.innerText=recomm.value;
}

function saveData(){
let fields=["education","school","teacher","principal","grade","term","subject","target","count","place","goal","summary","steps","strategies","strengths","improve","recomm"];
fields.forEach(id=>{
localStorage.setItem(id,document.getElementById(id).value);
});
alert("تم حفظ المدخلات");
}

function resetData(){
localStorage.clear();
location.reload();
}

function loadSavedData(){
let fields=["education","school","teacher","principal","grade","term","subject","target","count","place","goal","summary","steps","strategies","strengths","improve","recomm"];
fields.forEach(id=>{
let val=localStorage.getItem(id);
if(val!==null) document.getElementById(id).value=val;
});
updateReport();
}
loadSavedData();

function loadImage(input,target){
let r=new FileReader();
r.onload=()=>document.getElementById(target).innerHTML=`<img src="${r.result}">`;
r.readAsDataURL(input.files[0]);
}

function downloadPDF(){
document.querySelector('.btn-container').style.display='none';
html2pdf().from(document.getElementById("report-content")).save().then(()=>{
document.querySelector('.btn-container').style.display='flex';
});
}

async function makePDFBlob(){
return await html2pdf().from(document.getElementById("report-content")).outputPdf("blob");
}

async function sharePDFWhatsApp(){
let b=await makePDFBlob();
let f=new File([b],"report.pdf",{type:"application/pdf"});
if(navigator.canShare && navigator.canShare({files:[f]})){
await navigator.share({files:[f],title:"تقرير",text:"جاهز"});
}else{
window.open("https://wa.me/?text=تقرير جاهز","_blank");
}
}
</script>

</body>
</html>