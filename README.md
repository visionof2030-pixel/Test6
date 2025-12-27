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
.wrapper{max-width:820px;margin:auto;padding:15px;}

.top-marquee{
position:fixed;top:0;left:0;right:0;width:100%;background:#044a35;color:#fff;
padding:7px;font-size:12px;z-index:300;overflow:hidden;
white-space:nowrap;border-bottom:2px solid #022e22;
}
.marquee-inner{
display:inline-block;
animation:scroll 25s linear infinite;
padding-right:100%;
}
@keyframes scroll{
0%{transform:translateX(100%);}
100%{transform:translateX(-100%);}
}

.btn-container{
text-align:center;padding:12px;background:#f5f5f5;position:fixed;top:32px;left:0;right:0;width:100%;z-index:200;
display:flex;gap:10px;justify-content:center;flex-wrap:wrap;box-shadow:0 3px 6px rgba(0,0,0,0.25);
}
button.main-btn{
background:#066d4d;color:#fff;border:none;padding:10px 20px;font-size:14px;border-radius:8px;cursor:pointer;
}

.execution-text{
text-align:center;width:100%;margin-top:5px;
color:#044a35;font-size:13px;font-weight:700;
}

.input-section{
background:#f8fdfb;padding:15px;border-radius:10px;margin-top:165px;border:1px solid #e0f0ea;
}

label{font-size:14px;font-weight:700;margin-top:15px;display:block;color:#083024;}
input,select,textarea{
width:100%;padding:10px;margin-top:6px;border:2px solid #066d4d;border-radius:8px;font-size:14px;background:#ffffff;
}
textarea{height:90px;resize:none;overflow:hidden;line-height:1.6;}

.auto-buttons button{
width:100%;margin-top:5px;padding:6px;background:none;
border:2px solid #066d4d;color:#066d4d;
border-radius:6px;font-size:12px;cursor:pointer;font-weight:700;
}

@media (max-width:600px){
button.main-btn{min-width:100px;font-size:12px;}
.info-grid,.info-grid2{grid-template-columns:repeat(2,1fr);}
.report-row{grid-template-columns:1fr;}
.image-evidence-grid{grid-template-columns:1fr;}
}

#report-content{width:100%;margin:20px auto;}

.header{
background:#083024;padding:8px;min-height:140px;position:relative;color:#fff;text-align:center;overflow:hidden;
display:flex;align-items:center;justify-content:center;
}
.header img{width:155px;}

.header-school-title{position:absolute;bottom:36px;right:8px;font-size:12px;font-weight:600;}
.header-school{position:absolute;bottom:20px;right:8px;font-size:12px;font-weight:700;}
.header-education{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:11px;font-weight:700;color:#d7f2ea;}
.header-date-box{position:absolute;top:6px;left:10px;font-size:11px;text-align:right;line-height:1.3;}

.info-grid{
display:grid;grid-template-columns:repeat(4,1fr);
gap:4px;margin-top:10px;
}
.info-grid2{
display:grid;grid-template-columns:repeat(3,1fr);
gap:4px;margin-bottom:8px;margin-top:10px;
}

.info-box{
background:#e8f2ee;border-radius:6px;height:34px;
display:flex;flex-direction:column;justify-content:center;align-items:center;
border:1px solid rgba(6,109,77,0.3);
}
.info-title{font-size:9px;font-weight:700;color:#083024;}
.info-value{font-size:10px;font-weight:700;color:#000000;}

.objective-box{
background:#f3f9f6;border:1px solid rgba(6,109,77,0.35);
padding:6px 10px;border-radius:8px;margin-bottom:10px;
min-height:120px;max-height:120px;overflow:hidden;
}
.objective-title{text-align:center;font-size:14px;font-weight:700;}
.objective-content{font-size:13px;line-height:1.6;}

.report-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;}
.report-box{
background:#ffffff;border-radius:8px;padding:6px;
border:1px solid rgba(6,109,77,0.35);min-height:130px;max-height:130px;overflow:hidden;
}
.report-box-title{text-align:center;font-size:13px;font-weight:700;color:#083024;}
.report-box-content{font-size:13px;line-height:1.6;}

.image-evidence-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.image-box{
min-height:140px;max-height:140px;border:1px dashed #066d4d;border-radius:8px;
display:flex;align-items:center;justify-content:center;background:#ffffff;
font-size:12px;color:#666;overflow:hidden;
}
.image-box img{max-width:100%;max-height:100%;object-fit:contain;}

.signature-section{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.signature-box{text-align:center;font-size:12px;color:#083024;font-weight:700;}
.signature-line{margin-top:6px;border-top:1px solid #083024;width:80%;margin:auto;}
.footer{text-align:center;font-size:10px;padding:6px;margin-top:20px;background:#083024;color:#fff;}
</style>
</head>
<body>

<div class="top-marquee">
<div class="marquee-inner">طريقة الاستخدام: اضغط على زر تعبئة 🔂 عدة مرات للحصول على نصوص مختلفة دون تمدد المربعات أو تلف المحتوى — طريقة الاستخدام: اضغط على زر تعبئة 🔂 عدة مرات للحصول على نصوص مختلفة دون تمدد المربعات أو تلف المحتوى —</div>
</div>

<div class="btn-container">
<button class="main-btn" onclick="saveData()">حفظ</button>
<button class="main-btn" onclick="clearData()">مسح</button>
<button class="main-btn" onclick="downloadPDF()">PDF</button>
<button class="main-btn" onclick="sharePDFWhatsApp()">واتساب</button>
</div>

<div class="execution-text">تنفيذ : المعلم فهد الخالدي</div>

<div class="wrapper">
<div class="input-section">

<label>إدارة التعليم</label>
<select id="education" oninput="updateReport()">
<option>الإدارة العامة للتعليم بمنطقة مكة المكرمة</option>
<option>الإدارة العامة للتعليم بمحافظة جدة</option>
</select>

<label>اسم المدرسة</label>
<input id="school" value="سعيد بن العاص" placeholder="أدخل اسم المدرسة" oninput="updateReport()">

<label>اسم التقرير</label>
<select id="reportType" oninput="handleReportType()">
<option>تقرير نشاط إثرائي</option>
<option>أخرى</option>
</select>
<input id="reportTypeInput" placeholder="أدخل اسم التقرير" oninput="updateReport()" style="display:none;">

<label>صفة المعلّم</label>
<select id="teacherType" oninput="updateReport()">
<option selected>المعلم</option>
<option>المعلمة</option>
</select>

<label>اسم المعلّم</label>
<input id="teacher" value="فهد الخالدي" placeholder="اسم المعلم" oninput="updateReport()">

<label>صفة المدير</label>
<select id="principalType" oninput="updateReport()">
<option selected>المدير</option>
<option>المديرة</option>
</select>

<label>اسم المدير</label>
<input id="principal" value="نايف اللحياني" placeholder="اسم مدير المدرسة" oninput="updateReport()">

<label>الصف</label>
<input id="grade" placeholder="مثال: ٥/٣" oninput="updateReport()">

<label>الفصل الدراسي</label>
<select id="term" oninput="updateReport()">
<option></option><option>الأول</option><option>الثاني</option>
</select>

<label>المادة</label>
<input id="subject" placeholder="مثال: لغتي – علوم – رياضيات" oninput="updateReport()">

<label>المستهدفون</label>
<input id="target" placeholder="مثال: جميع طلاب الصف" oninput="updateReport()">

<label>عدد الحضور</label>
<input id="count" placeholder="مثال: ٢٥ طالب" oninput="updateReport()">

<label>مكان التنفيذ</label>
<input id="place" placeholder="مثال: داخل الصف – المختبر" oninput="updateReport()">

<label>الهدف التربوي</label>
<textarea id="goal" placeholder="أدخل الهدف التربوي" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('goal')">🔂 تعبئة</button></div>

<label>نبذة مختصرة</label>
<textarea id="summary" placeholder="أدخل نبذة مختصرة" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('summary')">🔂 تعبئة</button></div>

<label>إجراءات التنفيذ</label>
<textarea id="steps" placeholder="كيف تم تنفيذ النشاط؟" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('steps')">🔂 تعبئة</button></div>

<label>الاستراتيجيات</label>
<textarea id="strategies" placeholder="ما هي الاستراتيجيات" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('strategies')">🔂 تعبئة</button></div>

<label>نقاط القوة</label>
<textarea id="strengths" placeholder="نقاط القوة" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('strengths')">🔂 تعبئة</button></div>

<label>نقاط التحسين</label>
<textarea id="improve" placeholder="نقاط تحتاج تطوير" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('improve')">🔂 تعبئة</button></div>

<label>التوصيات</label>
<textarea id="recomm" placeholder="توصيات مستقبلية" oninput="updateReport()"></textarea>
<div class="auto-buttons"><button onclick="autoFill('recomm')">🔂 تعبئة</button></div>

<label>الصورة 1</label>
<input type="file" accept="image/*" placeholder="ارفع صورة" onchange="loadImage(this,'imgBox1')">

<label>الصورة 2</label>
<input type="file" accept="image/*" placeholder="ارفع صورة" onchange="loadImage(this,'imgBox2')">

</div>
</div>
<div id="report-content" class="wrapper">

<div class="header">
<img src="https://i.ibb.co/1fc5gB6v/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png">
<div class="header-school-title">اسم المدرسة</div>
<div class="header-school" id="schoolBox"></div>
<div class="header-education" id="educationBox"></div>
<div class="header-date-box">
<span id="hDate"></span><br>
<span id="gDate"></span>
</div>
</div>

<div class="info-grid">
<div class="info-box"><div class="info-title">الفصل</div><div class="info-value" id="termBox"></div></div>
<div class="info-box"><div class="info-title">الصف</div><div class="info-value" id="gradeBox"></div></div>
<div class="info-box"><div class="info-title">المادة</div><div class="info-value" id="subjectBox"></div></div>
<div class="info-box"><div class="info-title">التقرير</div><div class="info-value" id="reportTypeBox"></div></div>
</div>

<div class="info-grid2">
<div class="info-box"><div class="info-title">المستهدفون</div><div class="info-value" id="targetBox"></div></div>
<div class="info-box"><div class="info-title">العدد</div><div class="info-value" id="countBox"></div></div>
<div class="info-box"><div class="info-title">المكان</div><div class="info-value" id="placeBox"></div></div>
</div>

<div class="objective-box"><div class="objective-title">الهدف التربوي</div><div class="objective-content" id="goalBox"></div></div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">النبذة</div><div class="report-box-content" id="summaryBox"></div></div>
<div class="report-box"><div class="report-box-title">إجراءات التنفيذ</div><div class="report-box-content" id="stepsBox"></div></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">الاستراتيجيات</div><div class="report-box-content" id="strategiesBox"></div></div>
<div class="report-box"><div class="report-box-title">نقاط القوة</div><div class="report-box-content" id="strengthsBox"></div></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">نقاط التحسين</div><div class="report-box-content" id="improveBox"></div></div>
<div class="report-box"><div class="report-box-title">التوصيات</div><div class="report-box-content" id="recommBox"></div></div>
</div>

<div class="image-evidence-grid">
<div class="image-box" id="imgBox1">صورة توثيقية ١</div>
<div class="image-box" id="imgBox2">صورة توثيقية ٢</div>
</div>

<div class="signature-section">
<div class="signature-box"><div id="teacherTypeBox"></div><span id="teacherBox"></span><div class="signature-line"></div></div>
<div class="signature-box"><div id="principalTypeBox"></div><span id="principalBox"></span><div class="signature-line"></div></div>
</div>

<div class="footer">وزارة التعليم – المملكة العربية السعودية</div>
</div>

<script>
const autoTexts={
goal:[
"تنمية مهارات التفكير وتنشيط الإبداع وتحقيق مشاركة فعالة ودعم التعاون بين الطلاب وتنمية مهارات حل المشكلات وصقل شخصية الطالب وتحقيق نواتج تعلم عالية الجودة وتعزيز الدافعية للتعلم وتعميق الفهم وبناء الثقة والاستقلالية لديهم.",
"تحقيق تفاعل إيجابي داخل الصف وتنمية مهارات التواصل والعمل الجماعي واستثمار قدراتهم الذاتية وتنمية جوانب الإبداع وزيادة دافعية الطلاب للتعلم وصنع بيئة تعليمية محفزة تعزز المهارات المستقبلية للطلاب جميعهم.",
"تنمية مهارات القراءة والفهم والمناقشة وترتيب الأفكار وتحسين قدراتهم اللغوية وتوسيع حصيلتهم العلمية وتحفيزهم للبحث والاستقصاء وتطبيق الاستراتيجيات التعليمية الحديثة لتعزيز مخرجات العملية التعليمية بشكل فعال ومتميز.",
"تعزيز التعاون وبناء الشخصية وتحسين مهارات العرض والتقديم وتنمية التفكير التحليلي والإبداعي وتحسين التحصيل الدراسي وتطوير المهارات الأساسية المرتبطة بالمنهج وتحقيق التعلم النشط بطريقة ممتعة وسهلة التطبيق ومستمرة التأثير.",
"توفير بيئة تعليمية تفاعلية تدعم الإبداع وتطوير المهارات المعرفية والاجتماعية والسلوكية لدى الطلاب وتحفيزهم للمشاركة الفعالة وتنمية قدراتهم على حل المشكلات واتخاذ القرارات المناسبة في مواقف التعلم المتنوعة."
],
summary:[
"تم تنفيذ النشاط داخل الصف بطريقة ممتعة ومشوقة وشارك جميع الطلاب بفعالية كبيرة مما ساعد على رفع مستوى التفاعل بينهم وتعزيز روح التعاون والتنافس الإيجابي.",
"شارك الطلاب في النشاط بحماس كبير وتم تحقيق أهداف الدرس من خلال تنفيذ مهام تعليمية محفزة وتحفيز المشاركة والتفاعل بين الطلاب بصورة مميزة.",
"كان هناك حضور قوي وتفاعل ملحوظ من جميع الطلاب خلال تنفيذ النشاط وظهرت نتائج إيجابية في تعزيز مفهوم الدرس لديهم مع تنمية مهاراتهم الأساسية.",
"أظهر الطلاب اهتمامًا كبيرًا بالنشاط وتم توظيف استراتيجيات تعلم ممتعة أسهمت في زيادة الفهم وتطبيق ما تعلموه خلال الدرس بشكل واضح.",
"ساعد النشاط في تعزيز التعلم النشط وتحسين التفاعل داخل الصف وخلق بيئة تعليمية محفزة تحقق أهداف الدرس وتلبي احتياجات الطلاب."
],
steps:[
"بدأ النشاط بعرض أهداف الدرس ثم تقسيم الطلاب إلى مجموعات صغيرة وتوزيع المهام عليهم مع متابعة أداء كل مجموعة وتشجيع التواصل بينهم لتحقيق أفضل النتائج.",
"شرح المعلم المهام المطلوبة وتوجيه الطلاب أثناء تنفيذ الأنشطة ومراقبة تقدمهم وتحفيزهم على التعاون لتحقيق مخرجات التعلم المطلوبة بكفاءة عالية.",
"تم توفير أدوات وأنشطة مناسبة للدرس وتم تكليف الطلاب بتنفيذ المهمة المطلوبة ضمن فرق تعاونية مع تقديم التغذية الراجعة أثناء التنفيذ لتحسين الأداء.",
"تطبيق استراتيجيات فعالة داخل الصف مع إدارة الوقت بشكل جيد وتوزيع الأدوار بين الطلاب لضمان مشاركة الجميع وتحقيق نتائج تعليمية واضحة.",
"تحفيز الطلاب على الأداء الفعال والتأكد من فهمهم لمهام النشاط مع توضيح خطوات التنفيذ وتقديم الدعم المستمر للطلاب الأكثر حاجة للمساندة."
],
strategies:[
"التعلم التعاوني وتبادل الأدوار بين الطلاب لتفعيل المشاركة وتحسين مستوى التعاون ومهارات التواصل.",
"العصف الذهني وتطوير التفكير الإبداعي وتشجيع الطلاب على طرح الأفكار والحلول وتبادل وجهات النظر.",
"المناقشة الصفية وطرح الأسئلة التحفيزية ودعم التفكير النقدي لتعزيز الفهم العميق للدرس.",
"استخدام التعلم النشط وتوظيف الوسائط المتعددة لزيادة تركيز الطلاب وجذب انتباههم.",
"توظيف التعليم التعاوني والعروض القصيرة لتحسين مهارات التعبير والاتصال والثقة بالنفس."
],
strengths:[
"تفاعل ممتاز من الطلاب أثناء النشاط وظهور مهارات تواصل قوية بينهم مع تطبيق الاستراتيجيات.",
"إقبال رائع على المشاركة واهتمام واضح بتحقيق أهداف الدرس مما ساعد في نجاح النشاط.",
"مستوى جيد من التنظيم داخل الصف وتعاون كبير بين الطلاب مما أسهم في نتائج مميزة.",
"تحسن واضح في الفهم لدى الطلاب وقدرة أكبر على تطبيق المفاهيم المكتسبة أثناء الدرس.",
"انضباط ممتاز داخل الصف مع دافعية عالية لدى الطلاب لتحقيق التميز خلال النشاط."
],
improve:[
"زيادة التركيز على دعم الطلاب المتعثرين وتوفير فرص تعلم إضافية مناسبة لقدراتهم.",
"العمل على تعزيز مهارات القراءة والكتابة لضمان استفادة أكبر من الأنشطة التعليمية.",
"التوسع في استخدام تقنيات تعليمية تزيد من التفاعل داخل الصف بطرق متنوعة.",
"تحسين إدارة الوقت أثناء تنفيذ الأنشطة للتأكد من استكمال جميع مراحل النشاط.",
"تقديم مزيد من الدعم للطلاب الأقل تفاعلاً لضمان مشاركتهم بفاعلية أكبر."
],
recomm:[
"الاستمرار في تطبيق الأنشطة التفاعلية داخل الصف وتوظيف التكنولوجيا في الدروس.",
"تنويع الأساليب التعليمية المستخدمة وتحفيز الطلاب على المشاركة المستمرة.",
"توفير دعم إضافي للطلاب المحتاجين وتعزيز مهارات التفكير لديهم.",
"زيادة الأنشطة التي تعزز العمل التعاوني بين الطلاب في الحصص القادمة.",
"تشجيع المبادرات الطلابية وتقدير الجهود المميزة لرفع الدافعية."
]
};

let counters={goal:0,summary:0,steps:0,strategies:0,strengths:0,improve:0,recomm:0};

function autoFill(id){
counters[id]=(counters[id]+1)%autoTexts[id].length;
document.getElementById(id).value=autoTexts[id][counters[id]];
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
teacherTypeBox.innerText=teacherType.value;
principalTypeBox.innerText=principalType.value;
reportTypeBox.innerText=(reportType.value==="أخرى")?reportTypeInput.value:reportType.value;
goalBox.innerText=goal.value;
summaryBox.innerText=summary.value;
stepsBox.innerText=steps.value;
strategiesBox.innerText=strategies.value;
strengthsBox.innerText=strengths.value;
improveBox.innerText=improve.value;
recommBox.innerText=recomm.value;
}

function handleReportType(){
reportTypeInput.style.display=(reportType.value==="أخرى")?"block":"none";
updateReport();
}

function loadImage(input,target){
let r=new FileReader();
r.onload=()=>document.getElementById(target).innerHTML=`<img src="${r.result}">`;
r.readAsDataURL(input.files[0]);
}

function saveData(){
["education","school","teacherType","teacher","principalType","principal","grade","term","subject","target","count","place"].forEach(i=>{
localStorage.setItem(i,document.getElementById(i).value);
});
alert("تم حفظ البيانات");
}

function clearData(){
localStorage.clear();
location.reload();
}

function downloadPDF(){
document.querySelector('.btn-container').style.display='none';
document.querySelector('.top-marquee').style.display='none';

html2pdf().set({
margin:0,
filename:"report.pdf",
html2canvas:{scale:3,scrollY:0,useCORS:true},
jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}
})
.from(document.getElementById("report-content"))
.save()
.then(()=>{
document.querySelector('.btn-container').style.display='flex';
document.querySelector('.top-marquee').style.display='block';
});
}

async function sharePDFWhatsApp(){
document.querySelector('.btn-container').style.display='none';
document.querySelector('.top-marquee').style.display='none';

let blob=await html2pdf().from(document.getElementById("report-content")).outputPdf("blob");

document.querySelector('.btn-container').style.display='flex';
document.querySelector('.top-marquee').style.display='block';

let url=URL.createObjectURL(blob);
window.open(`https://wa.me/?text=${encodeURIComponent(url)}`,"_blank");
}

async function loadDates(){
let g=new Date();
gDate.innerText=g.toLocaleDateString('ar-EG')+" م";
try{
let r=await fetch(`https://api.aladhan.com/v1/gToH?date=${g.getDate()}-${g.getMonth()+1}-${g.getFullYear()}`);
let j=await r.json();let h=j.data.hijri;
hDate.innerText=`${h.weekday.ar} ${h.day} ${h.month.ar} ${h.year} هـ`;
}catch{hDate.innerText="--";}
}

loadDates();
updateReport();
</script>

</body>
</html>