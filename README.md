<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>أداة إعداد التقارير التعليمية</title>

<style>
/* ================= العرض العادي ================= */
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

/* ================= شبكة المدخلات ================= */
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

/* ================= أزرار ================= */
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

/* ================= التقرير ================= */
.report { display: none; }

@media print {
  body { background: white; padding: 0; }
  .tool { display: none; }
  .report { display: block; }
}

/* ================= الهيدر مع الشعار ================= */
.header {
  background: #0a3b40;
  color: white;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  width: 70px;
}

.header-logo img {
  width: 100%;
}

.header-center {
  text-align: center;
  flex-grow: 1;
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

/* ================= مربعات المعلومات ================= */
.top-info.two-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}

.top-row {
  display: grid;
  gap: 4px;
}

.top-row.first { grid-template-columns: repeat(3, 1fr); }
.top-row.second { grid-template-columns: repeat(4, 1fr); }

.box {
  border: 1px solid #0a3b40;
  padding: 2px;
  text-align: center;
  font-size: 6.5pt;
  min-height: 26px;
  background: #f8f9fa;
  border-radius: 3px;
}

/* ================= الأقسام ================= */
.goal-section {
  background: #e8f5e9;
  border-right: 3px solid #2e7d32;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.section {
  border: 1px solid #0a3b40;
  padding: 6px;
  border-radius: 6px;
}

/* ================= الصور ================= */
.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.images img {
  width: 100%;
  border-radius: 5px;
}
</style>
</head>

<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية</h2>

<label>إدارة التعليم</label>
<select id="eduSelect" onchange="sync('edu',this.value)">
  <option value="الإدارة العامة للتعليم بمنطقة الرياض" selected>
    الإدارة العامة للتعليم بمنطقة الرياض
  </option>
</select>

<label>اسم المدرسة</label>
<input id="schoolInput" value="مدرسة النموذجية الابتدائية"
       oninput="sync('school',this.value)">

<div class="small-grid">
  <input placeholder="التقرير" oninput="sync('reportTitle',this.value)">
  <input placeholder="المستهدفون" oninput="sync('target',this.value)">
  <input placeholder="العدد" oninput="sync('count',this.value)">
  <input placeholder="مكان التنفيذ" oninput="sync('location',this.value)">
  <input placeholder="الفصل الدراسي" oninput="sync('semester',this.value)">
  <input placeholder="الصف" oninput="sync('grade',this.value)">
  <input placeholder="المادة" oninput="sync('subject',this.value)">
</div>

<label>الهدف التربوي</label>
<textarea oninput="sync('goal',this.value)"></textarea>

<label>التحديات</label>
<textarea oninput="sync('challenges',this.value)"></textarea>

<label>نقاط القوة</label>
<textarea oninput="sync('strengths',this.value)"></textarea>

<label>إرفاق الصور (حد أقصى صورتين)</label>
<input type="file" multiple accept="image/*" onchange="loadImages(this)">

<button id="printBtn" onclick="window.print()">تصدير PDF</button>
</div>

<!-- ================= التقرير ================= -->
<div class="report">

<div class="header">
  <div class="header-inner">
    <div class="header-logo">
      <img src="https://i.ibb.co/G43RzNZJ/E44-D2-E03-CF67-4-B72-B8-F2-9-DCAC583-CF31.png">
    </div>

    <div class="header-center">
      <div class="ministry-title">وزارة التعليم</div>
      <div class="ministry-subtitle">Ministry of Education</div>
      <div class="school-info">
        <div id="edu"></div>
        <div id="school"></div>
      </div>
    </div>

    <div class="header-logo">
      <img src="https://i.ibb.co/G43RzNZJ/E44-D2-E03-CF67-4-B72-B8-F2-9-DCAC583-CF31.png">
    </div>
  </div>
</div>

<div class="top-info two-lines">
  <div class="top-row first">
    <div class="box"><strong>الفصل</strong><div id="semester"></div></div>
    <div class="box"><strong>الصف</strong><div id="grade"></div></div>
    <div class="box"><strong>المادة</strong><div id="subject"></div></div>
  </div>
  <div class="top-row second">
    <div class="box"><strong>التقرير</strong><div id="reportTitle"></div></div>
    <div class="box"><strong>المستهدفون</strong><div id="target"></div></div>
    <div class="box"><strong>العدد</strong><div id="count"></div></div>
    <div class="box"><strong>المكان</strong><div id="location"></div></div>
  </div>
</div>

<div class="goal-section">
<strong>الهدف التربوي</strong>
<div id="goal"></div>
</div>

<div class="grid2">
  <div class="section"><strong>التحديات</strong><div id="challenges"></div></div>
  <div class="section"><strong>نقاط القوة</strong><div id="strengths"></div></div>
</div>

<div class="images" id="imagesBox"></div>

</div>

<script>
function sync(id,value){
  const el=document.getElementById(id);
  if(el) el.textContent=value;
}

function loadImages(input){
  const box=document.getElementById("imagesBox");
  box.innerHTML="";
  [...input.files].slice(0,2).forEach(f=>{
    const r=new FileReader();
    r.onload=e=>{
      const img=document.createElement("img");
      img.src=e.target.result;
      box.appendChild(img);
    };
    r.readAsDataURL(f);
  });
}
</script>

</body>
</html>