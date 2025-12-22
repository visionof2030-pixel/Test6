<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>أداة إعداد التقارير التعليمية (نموذج تجريبي)</title>
<style>
body {
  font-family: Tahoma, Arial, sans-serif;
  background: #eef7f5;
  margin: 0;
  padding: 20px;
  font-size: 14px;
}
.tool {
  max-width: 900px;
  margin: auto;
  background: white;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,.1);
}
.tool h2 {
  text-align: center;
  color: #0a3b40;
  margin-bottom: 20px;
}
label {
  font-weight: 700;
  margin-top: 15px;
  display: block;
  color: #0a3b40;
}
input, textarea, select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
}
textarea {
  resize: vertical;
  min-height: 80px;
}
.small-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  margin: 15px 0;
}
.small-grid input,
.small-grid select {
  font-size: 11px;
  padding: 5px 4px;
  height: 35px;
}
.auto-row {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.auto-btn {
  flex: 1;
  background: #e0f2f1;
  border: 1px solid #0a3b40;
  color: #0a3b40;
  font-size: 13px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}
.clear-btn {
  background: #fdecea;
  border: 1px solid #c62828;
  color: #c62828;
}
button#printBtn {
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  background: #0a3b40;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}
.report {
  display: none;
}
@media print {
  body { background: white; padding: 0; }
  .tool { display: none; }
  .report { display: block; max-width: 210mm; margin: 0 auto; }
}
.header {
  background: #0a3b40;
  color: white;
  text-align: center;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 6px;
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ministry-title {
  font-size: 16pt;
  font-weight: bold;
}
.ministry-subtitle {
  font-size: 10pt;
}
.school-info div {
  font-weight: bold;
}
.top-info.two-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}
.top-row {
  display: grid;
  gap: 3px;
}
.top-row.first {
  grid-template-columns: repeat(3, 1fr);
}
.top-row.second {
  grid-template-columns: repeat(4, 1fr);
}
.box {
  border: 1px solid #0a3b40;
  padding: 2px;
  text-align: center;
  font-size: 6.5pt;
  min-height: 26px;
  border-radius: 3px;
  background: #f8f9fa;
}
.box strong {
  display: block;
  font-size: 6.5pt;
  color: #0a3b40;
}
.goal-section {
  background: #e8f5e9;
  border-right: 3px solid #2e7d32;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
  text-align: center;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}
.section {
  border: 1px solid #0a3b40;
  padding: 6px;
  border-radius: 6px;
}
.section.optional {
  border: 1px dashed #e6b800;
  background: #fff8cc;
  min-height: 60px;
  height: auto;
  padding: 4px;
  font-size: 7.5pt;
}
.section.optional strong {
  font-size: 8pt;
  margin-bottom: 2px;
}
.section.optional div {
  font-size: 7.5pt;
  line-height: 1.2;
}
.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 12px 0;
}
.images img {
  width: 100%;
  max-height: 144px;
  object-fit: cover;
  border-radius: 5px;
}
.signatures {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 9pt;
}
.teacher-signature, .principal-signature {
  text-align: center;
  width: 45%;
}
.teacher-signature input, .principal-signature input {
  width: 80%;
  font-size: 9pt;
  padding: 4px;
  margin-top: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.signature-label {
  font-weight: bold;
  color: #0a3b40;
  margin-bottom: 5px;
}
</style>
</head>
<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية (نموذج تجريبي)</h2>

<label>إدارة التعليم</label>
<select id="eduSelect" onchange="sync('edu',this.value)">
  <option value="الإدارة العامة للتعليم بمنطقة الرياض" selected>الإدارة العامة للتعليم بمنطقة الرياض</option>
</select>

<label>اسم المدرسة</label>
<input id="schoolInput" placeholder="أدخل اسم المدرسة هنا" oninput="sync('school',this.value)">

<div class="small-grid">
  <select onchange="sync('reportTitle',this.value); autoFillReport(this.value);" id="reportSelect">
    <option value="تقرير درس تم تنفيذه" selected>تقرير درس تم تنفيذه</option>
  </select>
  <input placeholder="المستهدفون (مثل: طلاب الصف الرابع)" oninput="sync('target',this.value)">
  <input placeholder="العدد" oninput="sync('count',this.value)">
  <input placeholder="مكان التنفيذ (مثل: الفصل الدراسي)" oninput="sync('location',this.value)">
  <select id="semesterSelect" onchange="sync('semester',this.value)">
    <option value="">اختر الفصل الدراسي</option>
    <option value="الفصل الدراسي الأول">الفصل الدراسي الأول</option>
    <option value="الفصل الدراسي الثاني">الفصل الدراسي الثاني</option>
  </select>
  <input placeholder="الصف (مثل: الرابع ابتدائي)" oninput="sync('grade',this.value)">
  <input placeholder="المادة (مثل: الرياضيات)" oninput="sync('subject',this.value)">
</div>

<div class="auto-row">
  <button class="auto-btn" onclick="autoFillReport(document.getElementById('reportSelect').value)">تعبئة تلقائية للتقرير</button>
  <button class="auto-btn clear-btn" onclick="clearAllFields()">مسح جميع الحقول</button>
</div>

<label>الهدف التربوي</label>
<textarea id="goalInput" oninput="sync('goal',this.value)"></textarea>

<label>وصف مختصر</label>
<textarea id="desc1Input" oninput="sync('desc1',this.value)"></textarea>

<label>إجراءات التنفيذ</label>
<textarea id="desc2Input" oninput="sync('desc2',this.value)"></textarea>

<label>النتائج</label>
<textarea id="desc3Input" oninput="sync('desc3',this.value)"></textarea>

<label>التوصيات</label>
<textarea id="desc4Input" oninput="sync('desc4',this.value)"></textarea>

<label>التحديات</label>
<textarea id="challengesInput" oninput="sync('challenges',this.value)"></textarea>

<label>نقاط القوة</label>
<textarea id="strengthsInput" oninput="sync('strengths',this.value)"></textarea>

<label>إرفاق الصور (اختياري)</label>
<input type="file" multiple accept="image/*" onchange="loadImages(this)">

<div class="signatures">
  <div class="teacher-signature">
    <div class="signature-label">اسم المعلم</div>
    <input type="text" id="teacherInput" placeholder="أدخل اسم المعلم" oninput="sync('teacherName', this.value)">
  </div>
  <div class="principal-signature">
    <div class="signature-label">اسم مدير المدرسة</div>
    <input type="text" id="principalInput" placeholder="أدخل اسم المدير" oninput="sync('principalName', this.value)">
  </div>
</div>

<button id="printBtn" onclick="window.print()">معاينة وطباعة التقرير</button>
</div>

<!-- قسم التقرير للطباعة -->
<div class="report">
<div class="header">
  <div class="header-content">
    <div class="ministry-title">وزارة التعليم</div>
    <div class="ministry-subtitle">Ministry of Education</div>
    <div class="school-info">
      <div id="edu"></div>
      <div id="school"></div>
    </div>
  </div>
</div>

<div class="top-info two-lines">
  <div class="top-row first">
    <div class="box"><strong>الفصل الدراسي</strong><div id="semester"></div></div>
    <div class="box"><strong>الصف</strong><div id="grade"></div></div>
    <div class="box"><strong>المادة</strong><div id="subject"></div></div>
  </div>
  <div class="top-row second">
    <div class="box"><strong>التقرير</strong><div id="reportTitle"></div></div>
    <div class="box"><strong>المستهدفون</strong><div id="target"></div></div>
    <div class="box"><strong>العدد</strong><div id="count"></div></div>
    <div class="box"><strong>مكان التنفيذ</strong><div id="location"></div></div>
  </div>
</div>

<div class="goal-section">
<strong>الهدف التربوي</strong>
<div id="goal"></div>
</div>

<div class="grid2">
  <div class="section"><strong>وصف مختصر</strong><div id="desc1"></div></div>
  <div class="section"><strong>إجراءات التنفيذ</strong><div id="desc2"></div></div>
</div>

<div class="grid2">
  <div class="section"><strong>النتائج</strong><div id="desc3"></div></div>
  <div class="section"><strong>التوصيات</strong><div id="desc4"></div></div>
</div>

<div class="grid2">
  <div class="section optional"><strong>التحديات</strong><div id="challenges"></div></div>
  <div class="section optional"><strong>نقاط القوة</strong><div id="strengths"></div></div>
</div>

<div class="images" id="imagesBox"></div>

<div class="signatures">
  <div class="teacher-signature">
    <div class="signature-label">المعلم</div>
    <div id="teacherName"></div>
  </div>
  <div class="principal-signature">
    <div class="signature-label">مدير المدرسة</div>
    <div id="principalName"></div>
  </div>
</div>
</div>

<script>
// النص التلقائي للتقرير التجريبي
const reportTexts = {
  "تقرير درس تم تنفيذه": {
    goal: "شرح مفهوم أساسي في المنهج وتطبيقه عبر أنشطة تفاعلية",
    desc1: "تنفيذ درس نموذجي يركز على الفهم العميق والتطبيق العملي للمفاهيم",
    desc2: "عرض المفهوم الجديد، مناقشة أمثلة توضيحية، أنشطة تطبيقية جماعية، حل تمارين فردية، تلخيص النقاط الرئيسية",
    desc3: "استيعاب غالبية الطلاب للمفهوم، مشاركة فعالة في الأنشطة، إنجاز التمارين بنجاح",
    desc4: "تكرار استخدام الأنشطة التفاعلية، تخصيص وقت للمراجعة، استخدام وسائل بصرية إضافية",
    challenges: "تفاوت سرعة الاستيعاب بين الطلاب، وقت الحصة المحدود",
    strengths: "تفاعل الطلاب الإيجابي، وضوح الشرح، تنوع الأنشطة"
  }
};

function sync(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

function autoFillReport(reportType) {
  const texts = reportTexts[reportType];
  if (!texts) return;

  document.getElementById('goalInput').value = texts.goal;
  document.getElementById('desc1Input').value = texts.desc1;
  document.getElementById('desc2Input').value = texts.desc2;
  document.getElementById('desc3Input').value = texts.desc3;
  document.getElementById('desc4Input').value = texts.desc4;
  document.getElementById('challengesInput').value = texts.challenges;
  document.getElementById('strengthsInput').value = texts.strengths;

  sync('goal', texts.goal);
  sync('desc1', texts.desc1);
  sync('desc2', texts.desc2);
  sync('desc3', texts.desc3);
  sync('desc4', texts.desc4);
  sync('challenges', texts.challenges);
  sync('strengths', texts.strengths);

  document.querySelector('input[placeholder="المستهدفون (مثل: طلاب الصف الرابع)"]').value = "طلاب الصف";
  document.querySelector('input[placeholder="العدد"]').value = "25";
  document.querySelector('input[placeholder="مكان التنفيذ (مثل: الفصل الدراسي)"]').value = "الفصل الدراسي";
  sync('target', "طلاب الصف");
  sync('count', "25");
  sync('location', "الفصل الدراسي");
}

function clearAllFields() {
  const fieldsToClear = [
    'goalInput', 'desc1Input', 'desc2Input', 'desc3Input', 'desc4Input',
    'challengesInput', 'strengthsInput', 'teacherInput', 'principalInput',
    'schoolInput'
  ];
  
  const placeholders = [
    'المستهدفون (مثل: طلاب الصف الرابع)',
    'العدد',
    'مكان التنفيذ (مثل: الفصل الدراسي)',
    'الصف (مثل: الرابع ابتدائي)',
    'المادة (مثل: الرياضيات)'
  ];
  
  fieldsToClear.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.value = '';
      const syncId = id.replace('Input', '');
      if (syncId !== 'teacher' && syncId !== 'principal' && syncId !== 'school') {
        sync(syncId, '');
      }
    }
  });
  
  placeholders.forEach(placeholder => {
    const input = document.querySelector(`input[placeholder="${placeholder}"]`);
    if (input) input.value = '';
  });
  
  sync('target', '');
  sync('count', '');
  sync('location', '');
  sync('grade', '');
  sync('subject', '');
  sync('teacherName', '');
  sync('principalName', '');
  
  document.getElementById('semesterSelect').selectedIndex = 0;
  sync('semester', '');
  
  document.getElementById('imagesBox').innerHTML = '';
}

function loadImages(input) {
  const box = document.getElementById("imagesBox");
  box.innerHTML = "";
  Array.from(input.files).slice(0, 2).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      box.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

// تعبئة أولية للمساعدة في التجربة
window.onload = function() {
  document.getElementById('schoolInput').value = "مدرسة التجربة النموذجية";
  sync('school', "مدرسة التجربة النموذجية");
  autoFillReport("تقرير درس تم تنفيذه");
};
</script>
</body>
</html>