<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>أداة إعداد التقارير التعليمية (نموذج تجريبي)</title>
<style>
body {
  font-family: Tahoma, Arial, sans-serif;
  background: #eef7f5;
  margin: 0;
  padding: 20px;
  font-size: 12px;
}
.tool {
  max-width: 900px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
}
.tool h2 {
  text-align: center;
  color: #0a3b40;
  margin-bottom: 16px;
  font-size: 18px;
}
label {
  font-weight: 700;
  margin-top: 12px;
  display: block;
  color: #0a3b40;
  font-size: 11px;
}
input, textarea, select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 12px;
  box-sizing: border-box;
}
textarea {
  resize: vertical;
  min-height: 70px;
  max-height: 120px;
  overflow-y: auto;
}
.small-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin: 12px 0;
}
.small-grid input,
.small-grid select {
  font-size: 10px;
  padding: 4px 3px;
  height: 32px;
}
.auto-row {
  display: flex;
  gap: 6px;
  margin-top: 6px;
}
.auto-btn {
  flex: 1;
  background: #e0f2f1;
  border: 1px solid #0a3b40;
  color: #0a3b40;
  font-size: 11px;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.auto-btn:hover {
  background: #0a3b40;
  color: white;
  transform: translateY(-2px);
}
.auto-btn.enrichment {
  background: #e8f5e9;
  border-color: #2e7d32;
  color: #2e7d32;
}
.auto-btn.enrichment:hover {
  background: #2e7d32;
  color: white;
}
.auto-btn.remedial {
  background: #fff3e0;
  border-color: #f57c00;
  color: #f57c00;
}
.auto-btn.remedial:hover {
  background: #f57c00;
  color: white;
}
.clear-btn {
  background: #fdecea;
  border: 1px solid #c62828;
  color: #c62828;
}
.clear-btn:hover {
  background: #c62828;
  color: white;
}
.buttons-container {
  margin-top: 18px;
  display: flex;
  gap: 10px;
}
.buttons-container button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.3s ease;
}
#printBtn {
  background: #0a3b40;
  color: white;
}
#whatsappBtn {
  background: #25D366;
  color: white;
}
.buttons-container button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
  background: linear-gradient(rgba(10, 59, 64, 0.9), rgba(10, 59, 64, 0.95)), 
              url('https://i.ibb.co/PsvxS5Q6/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: center;
  padding: 8px 6px;
  margin-bottom: 8px;
  border-radius: 4px;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  z-index: 2;
  width: 100%;
}
.ministry-title {
  font-size: 13pt;
  font-weight: bold;
  margin-bottom: 2px;
}
.ministry-subtitle {
  font-size: 8pt;
  margin-bottom: 4px;
}
.school-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}
.edu-info {
  font-weight: bold;
  font-size: 9pt;
  line-height: 1.2;
}
.school-name {
  font-weight: bold;
  font-size: 9pt;
  line-height: 1.2;
}
.hijri-date {
  font-size: 7.5pt;
  margin-top: 2px;
  color: #e0f7fa;
}
.top-info.two-lines {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 8px;
}
.top-row {
  display: grid;
  gap: 2px;
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
  font-size: 5.5pt;
  min-height: 22px;
  max-height: 40px;
  border-radius: 2px;
  background: #f8f9fa;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box strong {
  display: block;
  font-size: 5.5pt;
  color: #0a3b40;
  margin-bottom: 1px;
}
.box div {
  font-size: 5.5pt;
  line-height: 1.2;
  max-height: 28px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goal-section {
  background: #e8f5e9;
  border-right: 2px solid #2e7d32;
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 8px;
  text-align: center;
  min-height: auto;
  max-height: 80px;
  overflow: hidden;
}
.goal-section strong {
  font-size: 10px;
  margin-bottom: 2px;
}
.goal-section div {
  font-size: 10px;
  line-height: 1.3;
  max-height: 55px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px;
}
.grid4 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px;
}
.section {
  border: 1px solid #0a3b40;
  padding: 5px;
  border-radius: 5px;
  font-size: 10px;
  max-height: 100px;
  overflow: hidden;
}
.section strong {
  font-size: 10px;
  margin-bottom: 2px;
  display: block;
}
.section div {
  font-size: 10px;
  line-height: 1.3;
  max-height: 75px;
  overflow-y: auto;
  padding-right: 3px;
}
.section.motivators {
  border: 1px solid #9ccc65;
  background: #f1f8e9;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.motivators strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #689f38;
}
.section.motivators div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.section.strengths {
  border: 1px solid #0d47a1;
  background: #e3f2fd;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.strengths strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #0d47a1;
}
.section.strengths div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.section.challenges {
  border: 1px solid #f57f17;
  background: #fffde7;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.challenges strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #f57f17;
}
.section.challenges div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.section.weaknesses {
  border: 1px solid #c62828;
  background: #ffebee;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.weaknesses strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #c62828;
}
.section.weaknesses div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 15px 0;
}
.images img {
  width: 100%;
  max-height: 185px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
.signatures {
  margin-top: 15px;
  padding-top: 8px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 8pt;
}
.teacher-signature, .principal-signature {
  text-align: center;
  width: 45%;
}
.teacher-signature input, .principal-signature input {
  width: 80%;
  font-size: 8pt;
  padding: 3px;
  margin-top: 3px;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.signature-label {
  font-weight: bold;
  color: #0a3b40;
  margin-bottom: 3px;
  font-size: 9px;
}
.whatsapp-icon {
  font-size: 16px;
}
.loading-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 9999;
  justify-content: center;
  align-items: center;
}
.loading-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}
.spinner {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #25D366;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@media (max-width: 768px) {
  .small-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .auto-row {
    flex-wrap: wrap;
  }
  .auto-btn {
    min-width: 120px;
  }
  .buttons-container {
    flex-direction: column;
  }
}
</style>
</head>
<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية (نموذج تجريبي)</h2>

<label>إدارة التعليم</label>
<select id="eduSelect" onchange="updateEduInfo(this.value)">
  <option value="">اختر إدارة التعليم</option>
  <option value="الإدارة العامة للتعليم بمنطقة الرياض" selected>الإدارة العامة للتعليم بمنطقة الرياض</option>
  <option value="الإدارة العامة للتعليم بمنطقة مكة المكرمة">الإدارة العامة للتعليم بمنطقة مكة المكرمة</option>
  <option value="الإدارة العامة للتعليم بمنطقة المدينة المنورة">الإدارة العامة للتعليم بمنطقة المدينة المنورة</option>
  <option value="الإدارة العامة للتعليم بالمنطقة الشرقية">الإدارة العامة للتعليم بالمنطقة الشرقية</option>
  <option value="الإدارة العامة للتعليم بمنطقة القصيم">الإدارة العامة للتعليم بمنطقة القصيم</option>
  <option value="الإدارة العامة للتعليم بمنطقة عسير">الإدارة العامة للتعليم بمنطقة عسير</option>
  <option value="الإدارة العامة للتعليم بمنطقة تبوك">الإدارة العامة للتعليم بمنطقة تبوك</option>
  <option value="الإدارة العامة للتعليم بمنطقة حائل">الإدارة العامة للتعليم بمنطقة حائل</option>
  <option value="الإدارة العامة للتعليم بمنطقة الحدود الشمالية">الإدارة العامة للتعليم بمنطقة الحدود الشمالية</option>
  <option value="الإدارة العامة للتعليم بمنطقة جازان">الإدارة العامة للتعليم بمنطقة جازان</option>
  <option value="الإدارة العامة للتعليم بمنطقة نجران">الإدارة العامة للتعليم بمنطقة نجران</option>
  <option value="الإدارة العامة للتعليم بمنطقة الباحة">الإدارة العامة للتعليم بمنطقة الباحة</option>
  <option value="الإدارة العامة للتعليم بمنطقة الجوف">الإدارة العامة للتعليم بمنطقة الجوف</option>
  <option value="الإدارة العامة للتعليم بمحافظة الأحساء">الإدارة العامة للتعليم بمحافظة الأحساء</option>
  <option value="الإدارة العامة للتعليم بمحافظة الطائف">الإدارة العامة للتعليم بمحافظة الطائف</option>
  <option value="الإدارة العامة للتعليم بمحافظة جدة">الإدارة العامة للتعليم بمحافظة جدة</option>
</select>

<label>اسم المدرسة</label>
<input id="schoolInput" placeholder="أدخل اسم المدرسة هنا" oninput="sync('school',this.value)">

<div class="small-grid">
  <select onchange="sync('reportTitle',this.value)" id="reportSelect">
    <option value="">اختر نوع التقرير</option>
    <option value="تقرير نشاط إثرائي" selected>تقرير نشاط إثرائي</option>
    <option value="تقرير خطة علاجية">تقرير خطة علاجية</option>
  </select>
  <input placeholder="المستهدفون" oninput="sync('target',this.value)" maxlength="30" title="الحد الأقصى 30 حرف">
  <input placeholder="العدد" oninput="sync('count',this.value)" maxlength="10" title="الحد الأقصى 10 أرقام">
  <input placeholder="مكان التنفيذ" oninput="sync('location',this.value)" maxlength="40" title="الحد الأقصى 40 حرف">
  <select id="semesterSelect" onchange="sync('semester',this.value)">
    <option value="">اختر الفصل الدراسي</option>
    <option value="الفصل الدراسي الأول">الفصل الدراسي الأول</option>
    <option value="الفصل الدراسي الثاني">الفصل الدراسي الثاني</option>
  </select>
  <input placeholder="الصف" oninput="sync('grade',this.value)" maxlength="20" title="الحد الأقصى 20 حرف">
  <input placeholder="المادة" oninput="sync('subject',this.value)" maxlength="25" title="الحد الأقصى 25 حرف">
</div>

<!-- اختيار النص التلقائي - محسنة مع ألوان مختلفة -->
<div class="auto-row">
  <button class="auto-btn enrichment" onclick="loadSmartText(1)">نشاط إثرائي 1<br><small>البحث العلمي</small></button>
  <button class="auto-btn enrichment" onclick="loadSmartText(2)">نشاط إثرائي 2<br><small>الابتكار التقني</small></button>
  <button class="auto-btn enrichment" onclick="loadSmartText(3)">نشاط إثرائي 3<br><small>المهارات القيادية</small></button>
  <button class="auto-btn clear-btn" onclick="clearAllFields()">مسح الحقول</button>
</div>
<div class="auto-row">
  <button class="auto-btn remedial" onclick="loadSmartText(4)">خطة علاجية 1<br><small>القراءة والكتابة</small></button>
  <button class="auto-btn remedial" onclick="loadSmartText(5)">خطة علاجية 2<br><small>المهارات الحسابية</small></button>
  <button class="auto-btn" onclick="loadSmartText(6)">نشاط إثرائي 4<br><small>الإبداع الفني</small></button>
</div>

<label>الهدف التربوي (الحد الأقصى: 150 حرف)</label>
<textarea id="goalInput" oninput="sync('goal',this.value)" maxlength="150" title="الحد الأقصى 150 حرف"></textarea>

<label>وصف مختصر (الحد الأقصى: 200 حرف)</label>
<textarea id="desc1Input" oninput="sync('desc1',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>

<label>إجراءات التنفيذ (الحد الأقصى: 300 حرف)</label>
<textarea id="desc2Input" oninput="sync('desc2',this.value)" maxlength="300" title="الحد الأقصى 300 حرف"></textarea>

<label>النتائج (الحد الأقصى: 250 حرف)</label>
<textarea id="desc3Input" oninput="sync('desc3',this.value)" maxlength="250" title="الحد الأقصى 250 حرف"></textarea>

<label>التوصيات (الحد الأقصى: 250 حرف)</label>
<textarea id="desc4Input" oninput="sync('desc4',this.value)" maxlength="250" title="الحد الأقصى 250 حرف"></textarea>

<!-- الصف الأول: المحفزات ونقاط القوة -->
<div class="grid2">
  <div>
    <label>المحفزات (الحد الأقصى: 200 حرف)</label>
    <textarea id="motivatorsInput" oninput="sync('motivators',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
  <div>
    <label>نقاط القوة (الحد الأقصى: 200 حرف)</label>
    <textarea id="strengthsInput" oninput="sync('strengths',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
</div>

<!-- الصف الثاني: التحديات ومواطن القصور -->
<div class="grid2">
  <div>
    <label>التحديات (الحد الأقصى: 200 حرف)</label>
    <textarea id="challengesInput" oninput="sync('challenges',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
  <div>
    <label>مواطن القصور (الحد الأقصى: 200 حرف)</label>
    <textarea id="weaknessesInput" oninput="sync('weaknesses',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
</div>

<label>إرفاق الصور (اختياري - الحد الأقصى: صورتين)</label>
<input type="file" multiple accept="image/*" onchange="loadImages(this)" title="يمكن إرفاق صورتين كحد أقصى">

<div class="signatures">
  <div class="teacher-signature">
    <div class="signature-label">اسم المعلم</div>
    <input type="text" id="teacherInput" placeholder="أدخل اسم المعلم" oninput="sync('teacherName', this.value)" maxlength="50">
  </div>
  <div class="principal-signature">
    <div class="signature-label">اسم مدير المدرسة</div>
    <input type="text" id="principalInput" placeholder="أدخل اسم المدير" oninput="sync('principalName', this.value)" maxlength="50">
  </div>
</div>

<div class="buttons-container">
  <button id="printBtn" onclick="window.print()">
    <span>🖨️</span> معاينة وطباعة التقرير
  </button>
  <button id="whatsappBtn" onclick="sendToWhatsApp()">
    <span class="whatsapp-icon">📱</span> إرسال التقرير بالواتساب
  </button>
</div>
</div>

<!-- قسم التقرير للطباعة -->
<div class="report" id="reportContent">
<div class="header">
  <div class="header-content">
    <div class="ministry-title">وزارة التعليم</div>
    <div class="ministry-subtitle">Ministry of Education</div>
    <div class="school-info">
      <div class="edu-info" id="eduHeader">الإدارة العامة للتعليم بمنطقة الرياض</div>
      <div class="school-name" id="school"></div>
    </div>
    <div class="hijri-date" id="hijriDate">جاري تحميل التاريخ الهجري...</div>
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

<!-- الصف الأول في التقرير: المحفزات ونقاط القوة -->
<div class="grid4">
  <div class="section motivators"><strong>المحفزات</strong><div id="motivators"></div></div>
  <div class="section strengths"><strong>نقاط القوة</strong><div id="strengths"></div></div>
</div>

<!-- الصف الثاني في التقرير: التحديات ومواطن القصور -->
<div class="grid4">
  <div class="section challenges"><strong>التحديات</strong><div id="challenges"></div></div>
  <div class="section weaknesses"><strong>مواطن القصور</strong><div id="weaknesses"></div></div>
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

<!-- نافذة التحميل -->
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-content">
    <div class="spinner"></div>
    <h3>جاري تحويل التقرير إلى PDF...</h3>
    <p>يرجى الانتظار، قد تستغرق العملية بضع ثوانٍ</p>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
// قاعدة البيانات للنصوص الذكية والمتنوعة (6 نصوص مختلفة)
const smartTextsDatabase = {
  // النصوص الإثرائية (1-3)
  1: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تنمية مهارات البحث العلمي والتفكير النقدي لدى الطلاب المتميزين من خلال مشاريع بحثية مبتكرة",
    desc1: "برنامج متكامل للبحث العلمي يهدف إلى تطوير قدرات الطلاب في مجال البحث والاستقصاء العلمي، مع التركيز على المنهجية العلمية الصحيحة",
    desc2: "تشكيل فريق بحثي، تدريب على منهجية البحث، اختيار موضوعات بحثية، إشراف أسبوعي، كتابة التقارير البحثية، عروض تقديمية، تقييم النتائج",
    desc3: "إنتاج 10 أبحاث علمية في مجالات متنوعة، تحسن ملحوظ في مهارات التحليل العلمي، زيادة الثقة بالنفس لدى الطلاب، فوز في مسابقة البحث العلمي على مستوى المنطقة",
    desc4: "توسيع نطاق البرنامج ليشمل صفوفاً دراسية أخرى، تدريب معلمين متخصصين في البحث العلمي، إنشاء مكتبة بحثية، تنظيم معرض سنوي للأبحاث الطلابية",
    motivators: "نشر الأبحاث في مجلة المدرسة، رحلات علمية لمراكز الأبحاث، شهادات تميز، مشاركة في المؤتمرات الطلابية، جوائز لأفضل الأبحاث",
    strengths: "كفاءة عالية للمعلمين المشرفين، توفر مصادر بحثية مناسبة، دعم إداري كامل، مشاركة فاعلة من الطلاب، بيئة محفزة للإبداع",
    challenges: "صعوبة الوصول للمراجع المتخصصة، محدودية الوقت المخصص للبحث، صعوبة بعض المفاهيم العلمية للطلاب، نقص بعض الأجهزة البحثية",
    weaknesses: "تفاوت مستوى الطلاب في مهارات البحث، ضعف الخلفية البحثية لبعض الطلاب، حاجة لمزيد من التمويل، محدودية الأماكن المخصصة للبحث"
  },
  2: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تنمية المهارات التقنية والابتكارية لدى الطلاب الموهوبين في مجال التكنولوجيا والبرمجة",
    desc1: "برنامج تقني متقدم يركز على تطوير مهارات البرمجة والتفكير الحاسوبي والابتكار التكنولوجي من خلال مشاريع عملية وتطبيقات حقيقية",
    desc2: "تقييم المهارات التقنية، ورش عمل في البرمجة، تصميم تطبيقات تعليمية، مسابقات برمجية، مشاريع تقنية جماعية، عروض تقديمية، تقييم المنتجات النهائية",
    desc3: "تصميم 15 تطبيقاً تعليمياً متكاملاً، فوز في مسابقات برمجية محلية، إنشاء نادٍ للتقنية والابتكار، اكتشاف 5 مواهب تقنية متميزة، تحسن مهارات البرمجة بنسبة 70%",
    desc4: "تطوير منهج تقني متكامل، تأهيل معلمين في مجال التقنية، إنشاء معمل تقني متطور، شراكات مع شركات تقنية، استمرارية النادي التقني طوال العام",
    motivators: "جوائز لأفضل التطبيقات، تدريبات في شركات تقنية، شهادات احترافية، رحلات لمعارض التقنية، نشر التطبيقات على متجر المدرسة",
    strengths: "معامل حاسب آلي مجهزة، معلمون متخصصون، مواد تعليمية متطورة، دعم تقني مستمر، بيئة محفزة للابتكار",
    challenges: "سرعة التطور التقني، صعوبة متابعة التحديثات، نقص الكوادر المتخصصة، ارتفاع تكلفة الأجهزة الحديثة، صعوبة البرامج للمبتدئين",
    weaknesses: "تفاوت المهارات التقنية للطلاب، محدودية الأجهزة المتطورة، نقص البرامج التعليمية المتخصصة، حاجة لمزيد من الوقت التدريبي"
  },
  3: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تنمية المهارات القيادية والعمل الجماعي والاتصال الفعال لدى الطلاب المتميزين من خلال أنشطة قيادية عملية",
    desc1: "برنامج قيادي متكامل يهدف إلى صقل المهارات القيادية وتعزيز روح العمل الجماعي والاتصال الفعال لدى النخبة الطلابية الواعدة",
    desc2: "اختيار الطلاب القياديين، تدريبات قيادية مكثفة، مشاريع جماعية، ورش عمل في الاتصال، تمارين قيادية عملية، زيارات لمؤسسات قيادية، تقييم الأداء القيادي",
    desc3: "تطوير 8 مشاريع قيادية ناجحة، تحسن مهارات الاتصال بنسبة 65%، زيادة الثقة بالنفس لدى المشاركين، اكتشاف 12 قائداً طلابياً، نجاح في تنظيم فعاليات مدرسية",
    desc4: "إنشاء مجلس قيادي طلابي، استمرارية البرنامج التدريبي، توسيع قاعدة المستفيدين، تدريب مدربين طلابيين، توثيق التجارب القيادية الناجحة",
    motivators: "شهادات قيادية معتمدة، رحلات لمراكز قيادية، فرص تمثيل المدرسة، جوائز للإنجازات القيادية، نشر قصص النجاح القيادي",
    strengths: "مدربون متخصصون في التنمية البشرية، بيئة داعمة للتطوير، دعم إداري كامل، مشاركة فاعلة، برنامج تدريبي متكامل",
    challenges: "اختلاف الشخصيات القيادية، صعوبة بعض المفاهيم القيادية، محدودية الوقت، حاجة لمتابعة مستمرة، تقييم المهارات القيادية",
    weaknesses: "نقص الخبرة العملية لبعض الطلاب، تفاوت الاستعداد القيادي، محدودية الموارد التدريبية، حاجة لمزيد من التمويل"
  },
  // النصوص العلاجية (4-5)
  4: {
    reportType: "تقرير خطة علاجية",
    goal: "معالجة الصعوبات القرائية والكتابية لدى الطلاب المتأخرين دراسياً وتحسين مستواهم في اللغة العربية",
    desc1: "برنامج علاجي مكثف وممنهج لمعالجة الضعف في مهارات القراءة والكتابة لدى الطلاب من خلال أنشطة علاجية فردية وجماعية",
    desc2: "تشخيص فردي للصعوبات، جلسات علاجية مكثفة، استخدام وسائل تعليمية مساعدة، أنشطة قرائية يومية، متابعة أسرية، تقييم أسبوعي، تعديل الخطة حسب التقدم",
    desc3: "تحسن مهارات القراءة بنسبة 75%، تحسن مهارات الكتابة بنسبة 68%، زيادة الحصيلة اللغوية، تحسن الثقة بالنفس، تفاعل إيجابي مع الأنشطة اللغوية",
    desc4: "تطوير بنك أنشطة علاجية، تدريب معلمين متخصصين، إنشاء غرفة مصادر متكاملة، تعزيز الشراكة مع أولياء الأمور، متابعة مستمرة للطلاب",
    motivators: "برامج تحفيزية أسبوعية، شهادات تحسن، نشر قصص نجاح، جوائز للتقدم الملحوظ، رحلات تعليمية، أنشطة ترفيهية مرتبطة بالتعلم",
    strengths: "معلمون متخصصون في صعوبات التعلم، وسائل تعليمية متنوعة، دعم إداري كامل، منهجية علاجية مثبتة، تعاون أولياء الأمور",
    challenges: "تفاوت مستويات الصعوبات، مقاومة بعض الطلاب للتعلم، ضعف المتابعة الأسرية، صعوبة التشخيص الدقيق، محدودية الوقت",
    weaknesses: "نقص الكوادر المتخصصة، محدودية الوقت العلاجي، صعوبة التشخيص الدقيق، تفاوت الاستجابة للعلاج"
  },
  5: {
    reportType: "تقرير خطة علاجية",
    goal: "تحسين المهارات الحسابية الأساسية ومعالجة الضعف الرياضي لدى الطلاب المتأخرين دراسياً في مادة الرياضيات",
    desc1: "برنامج علاجي متدرج يركز على تعزيز المهارات الحسابية الأساسية وفهم المفاهيم الرياضية من خلال أنشطة عملية وتطبيقات حياتية",
    desc2: "تقييم المهارات الحسابية، جلسات علاجية فردية، استخدام الوسائل التعليمية البصرية، أنشطة تطبيقية عملية، تمارين يومية، متابعة أسرية، تقييم شهري، تعديل الخطة حسب التقدم",
    desc3: "تحسن العمليات الحسابية بنسبة 80%، فهم المفاهيم الرياضية الأساسية، زيادة الثقة بالنفس، تحسن المشاركة في الحصص، تطبيق الرياضيات في الحياة اليومية",
    desc4: "إنشاء بنك الأنشطة العلاجية، تدريب معلمي الرياضيات على الأساليب العلاجية، تطوير مواد تعليمية مساعدة، تعزيز التعلم التطبيقي، متابعة مستمرة",
    motivators: "مسابقات حسابية أسبوعية، شهادات تقدم، نشر الإنجازات، رحلات تعليمية، ألعاب تعليمية، جوائز للتقدم المستمر",
    strengths: "وسائل تعليمية مبتكرة، معلمون متمرسون، بيئة تعلم محفزة، دعم نفسي مستمر، منهجية علاجية متدرجة",
    challenges: "صعوبة بعض المفاهيم الرياضية المجردة، تفاوت القدرات الاستيعابية، محدودية الوقت، خوف بعض الطلاب من الرياضيات، ضعف الخلفية الرياضية",
    weaknesses: "نقص الوسائل التعليمية المتخصصة، ضعف الخلفية الرياضية لدى بعض الطلاب، صعوبة الربط بالتطبيق العملي، محدودية الوقت العلاجي"
  },
  6: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تنمية المهارات الإبداعية والفنية لدى الطلاب الموهوبين وتعزيز التعبير الفني والجمالي من خلال أنشطة فنية متخصصة",
    desc1: "برنامج فني متكامل يهدف إلى اكتشاف وصقل المواهب الفنية لدى الطلاب وتنمية الإبداع والتعبير الجمالي من خلال مختلف الفنون التشكيلية",
    desc2: "اكتشاف المواهب الفنية، ورش عمل متخصصة (الرسم، النحت، الخط العربي، التصميم)، زيارات للمعارض الفنية، مشاريع فنية جماعية، معارض طلابية، تقييم الأعمال الفنية",
    desc3: "إنتاج 30 عملاً فنياً متميزاً، تنظيم معرض فني ناجح، اكتشاف 8 مواهب فنية متميزة، تحسن مهارات التعبير الفني، مشاركة في مسابقات فنية محلية، زيادة الوعي الجمالي",
    desc4: "تأسيس نادي فني دائم، استمرارية الورش الفنية، تدريب معلمين في التربية الفنية، إنشاء مرسم مدرسي، شراكات مع مؤسسات فنية، توثيق الأعمال الفنية",
    motivators: "معارض لأفضل الأعمال، نشر الأعمال في مجلة المدرسة، رحلات للمتاحف الفنية، شهادات تقدير، مشاركة في المسابقات الفنية، جوائز للإبداع الفني",
    strengths: "معلمون متخصصون في الفنون، مواد فنية متنوعة، دعم إداري كامل، بيئة محفزة للإبداع، مساحة مناسبة للفنون",
    challenges: "تكاليف المواد الفنية، محدودية المساحات الفنية، صعوبة تقييم الأعمال الفنية، تنوع المواهب الفنية، الحفاظ على استمرارية البرنامج",
    weaknesses: "نقص الخبرات المتخصصة، محدودية الميزانية الفنية، صعوبة قياس التطور الفني، حاجة لمعدات فنية متطورة"
  }
};

// تقصير النصوص الطويلة لعرضها في المربعات
function truncateText(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

// دالة للحصول على التاريخ الهجري من API خارجي
async function getHijriDate() {
  try {
    const response = await fetch('https://api.aladhan.com/v1/gToH');
    
    if (!response.ok) {
      throw new Error('فشل في الحصول على التاريخ الهجري');
    }
    
    const data = await response.json();
    
    if (data.code === 200 && data.data) {
      const hijri = data.data.hijri;
      const dateString = `${hijri.day} ${hijri.month.ar} ${hijri.year} هـ`;
      document.getElementById('hijriDate').textContent = `التاريخ الهجري: ${dateString}`;
    } else {
      document.getElementById('hijriDate').textContent = "التاريخ الهجري: غير متاح";
    }
  } catch (error) {
    console.error('خطأ في الحصول على التاريخ الهجري:', error);
    // تاريخ افتراضي في حالة الفشل
    const today = new Date();
    const hijriDate = today.toLocaleDateString('ar-SA', { calendar: 'islamic' });
    document.getElementById('hijriDate').textContent = `التاريخ الهجري: ${hijriDate}`;
  }
}

// دالة لتحديث معلومات إدارة التعليم في الهيدر
function updateEduInfo(value) {
  if (!value) return;
  const eduHeader = document.getElementById('eduHeader');
  if (eduHeader) {
    eduHeader.textContent = truncateText(value, 50);
  }
}

function sync(id, value) {
  const el = document.getElementById(id);
  if (el) {
    let maxLength;
    switch(id) {
      case 'goal': maxLength = 150; break;
      case 'desc1': maxLength = 200; break;
      case 'desc2': maxLength = 300; break;
      case 'desc3': maxLength = 250; break;
      case 'desc4': maxLength = 250; break;
      case 'motivators': maxLength = 200; break;
      case 'strengths': maxLength = 200; break;
      case 'challenges': maxLength = 200; break;
      case 'weaknesses': maxLength = 200; break;
      case 'target': maxLength = 30; break;
      case 'count': maxLength = 10; break;
      case 'location': maxLength = 40; break;
      case 'grade': maxLength = 20; break;
      case 'subject': maxLength = 25; break;
      default: maxLength = 100;
    }
    
    el.textContent = truncateText(value, maxLength);
  }
}

// دالة رئيسية لتحميل النص الذكي - محسنة
function loadSmartText(textNumber) {
  // الحصول على النص من قاعدة البيانات
  const textData = smartTextsDatabase[textNumber];
  if (!textData) {
    alert("النص غير متوفر، الرجاء المحاولة مرة أخرى");
    return;
  }
  
  // تحديث نوع التقرير في القائمة المنسدلة
  const reportSelect = document.getElementById('reportSelect');
  reportSelect.value = textData.reportType;
  sync('reportTitle', textData.reportType);
  
  // تعبئة الحقول مع النصوص
  document.getElementById('goalInput').value = textData.goal;
  document.getElementById('desc1Input').value = textData.desc1;
  document.getElementById('desc2Input').value = textData.desc2;
  document.getElementById('desc3Input').value = textData.desc3;
  document.getElementById('desc4Input').value = textData.desc4;
  document.getElementById('motivatorsInput').value = textData.motivators;
  document.getElementById('strengthsInput').value = textData.strengths;
  document.getElementById('challengesInput').value = textData.challenges;
  document.getElementById('weaknessesInput').value = textData.weaknesses;
  
  // مزامنة مع العرض
  sync('goal', textData.goal);
  sync('desc1', textData.desc1);
  sync('desc2', textData.desc2);
  sync('desc3', textData.desc3);
  sync('desc4', textData.desc4);
  sync('motivators', textData.motivators);
  sync('strengths', textData.strengths);
  sync('challenges', textData.challenges);
  sync('weaknesses', textData.weaknesses);
  
  // تعبئة تلقائية للحقول الأخرى بناءً على نوع التقرير
  if (textData.reportType === "تقرير نشاط إثرائي") {
    let targetText, countText, locationText;
    
    switch(textNumber) {
      case 1: // البحث العلمي
        targetText = "الطلاب المتميزون في البحث العلمي";
        countText = "15";
        locationText = "مختبر البحث العلمي";
        break;
      case 2: // الابتكار التقني
        targetText = "الطلاب الموهوبون في التقنية";
        countText = "12";
        locationText = "معمل الحاسب الآلي المتقدم";
        break;
      case 3: // المهارات القيادية
        targetText = "الطلاب ذوو الميول القيادية";
        countText = "10";
        locationText = "قاعة الأنشطة القيادية";
        break;
      case 6: // الإبداع الفني
        targetText = "الطلاب الموهوبون في الفنون";
        countText = "8";
        locationText = "المرسم المدرسي";
        break;
      default:
        targetText = "الطلاب المتميزين أكاديمياً";
        countText = "18";
        locationText = "المختبر العلمي المتقدم";
    }
    
    document.querySelector('input[placeholder="المستهدفون"]').value = targetText;
    document.querySelector('input[placeholder="العدد"]').value = countText;
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = locationText;
    
    sync('target', targetText);
    sync('count', countText);
    sync('location', locationText);
    
  } else if (textData.reportType === "تقرير خطة علاجية") {
    let targetText, countText, locationText;
    
    if (textNumber === 4) { // القراءة والكتابة
      targetText = "الطلاب المتأخرون في القراءة والكتابة";
      countText = "8";
      locationText = "غرفة مصادر التعلم";
    } else { // المهارات الحسابية
      targetText = "الطلاب المتأخرون في الرياضيات";
      countText = "10";
      locationText = "معمل الرياضيات العلاجي";
    }
    
    document.querySelector('input[placeholder="المستهدفون"]').value = targetText;
    document.querySelector('input[placeholder="العدد"]').value = countText;
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = locationText;
    
    sync('target', targetText);
    sync('count', countText);
    sync('location', locationText);
  }
  
  // إشعار للمستخدم
  alert(`تم تحميل ${textData.reportType} - النص ${textNumber} بنجاح!`);
}

function clearAllFields() {
  const fieldsToClear = [
    'goalInput', 'desc1Input', 'desc2Input', 'desc3Input', 'desc4Input',
    'motivatorsInput', 'strengthsInput', 'challengesInput', 'weaknessesInput',
    'teacherInput', 'principalInput', 'schoolInput'
  ];
  
  const placeholders = [
    'المستهدفون',
    'العدد',
    'مكان التنفيذ',
    'الصف',
    'المادة'
  ];
  
  fieldsToClear.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.value = '';
      const syncId = id.replace('Input', '');
      if (!['teacher', 'principal', 'school'].includes(syncId)) {
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
  
  // إعادة تعيين نوع التقرير
  document.getElementById('reportSelect').selectedIndex = 0;
  sync('reportTitle', '');
}

function loadImages(input) {
  const box = document.getElementById("imagesBox");
  box.innerHTML = "";
  const files = Array.from(input.files).slice(0, 2);
  if (files.length > 2) {
    alert("يمكنك إرفاق صورتين كحد أقصى");
  }
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      box.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

// دالة لتحويل التقرير إلى PDF باستخدام jsPDF + html2canvas
async function generatePDF() {
  return new Promise(async (resolve, reject) => {
    try {
      const { jsPDF } = window.jspdf;
      const element = document.getElementById('reportContent');
      
      // حفظ الحالة الأصلية للعرض
      const originalDisplay = element.style.display;
      element.style.display = 'block';
      
      // استخدام html2canvas لالتقاط الصورة
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      // إعادة عرض التقرير إلى حالته الأصلية
      element.style.display = originalDisplay;
      
      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pdfWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;
      
      // إضافة الصفحة الأولى
      pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
      
      // إضافة صفحات إضافية إذا كان المحتوى طويلاً
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      
      // حفظ PDF
      pdf.save(`تقرير_تعليمي_${Date.now()}.pdf`);
      resolve();
      
    } catch (error) {
      reject(error);
    }
  });
}

// دالة لإرسال التقرير بالواتساب
async function sendToWhatsApp() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  
  try {
    // التحقق من البيانات الأساسية
    const schoolName = document.getElementById('school').textContent;
    const reportTitle = document.getElementById('reportTitle').textContent;
    
    if (!schoolName || schoolName === '' || !reportTitle || reportTitle === '') {
      alert("الرجاء تعبئة البيانات الأساسية للمدرسة ونوع التقرير قبل الإرسال");
      return;
    }
    
    // عرض نافذة التحميل
    loadingOverlay.style.display = 'flex';
    
    // إنشاء نص للرسالة
    const messageText = `📋 *تقرير تعليمي*
    
🔹 *نوع التقرير:* ${reportTitle}
🔹 *المدرسة:* ${schoolName}
🔹 *التاريخ:* ${document.getElementById('hijriDate').textContent}
🔹 *المادة:* ${document.getElementById('subject').textContent || 'غير محدد'}
🔹 *الصف:* ${document.getElementById('grade').textContent || 'غير محدد'}
    
📊 *الهدف التربوي:*
${document.getElementById('goal').textContent || 'غير محدد'}
    
✅ *النتائج:*
${document.getElementById('desc3').textContent || 'غير محدد'}
    
📝 تم إنشاء التقرير باستخدام أداة إعداد التقارير التعليمية.
    
مع تحيات وزارة التعليم 🇸🇦`;
    
    // إنشاء PDF
    await generatePDF();
    
    // إخفاء نافذة التحميل
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
      
      // تشفير النص للواتساب
      const encodedMessage = encodeURIComponent(messageText);
      
      // إنشاء رابط الواتساب
      const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
      
      // عرض تعليمات للمستخدم
      const userConfirmed = confirm(`تم حفظ التقرير كملف PDF على جهازك بنجاح!

الآن، لإرساله عبر الواتساب:
1. سيتم فتح صفحة الواتساب
2. اختر الشخص أو المجموعة المراد الإرسال لها
3. أرفق ملف PDF الذي تم حفظه للتو

هل تريد المتابعة إلى الواتساب؟`);
      
      if (userConfirmed) {
        // فتح الواتساب في نافذة جديدة
        window.open(whatsappUrl, '_blank');
        
        // تذكير إضافي
        setTimeout(() => {
          alert("تذكر: بعد فتح الواتساب، قم بإرفاق ملف PDF الذي تم حفظه للتو من جهازك.");
        }, 500);
      }
    }, 1500);
    
  } catch (error) {
    console.error('خطأ في إنشاء أو إرسال التقرير:', error);
    loadingOverlay.style.display = 'none';
    
    alert(`حدث خطأ أثناء إنشاء التقرير: ${error.message}
    
يرجى المحاولة مرة أخرى أو استخدام زر الطباعة ثم حفظ كـ PDF يدوياً.`);
  }
}

// تعبئة أولية للمساعدة في التجربة
window.onload = async function() {
  document.getElementById('schoolInput').value = "مدرسة التجربة النموذجية";
  sync('school', "مدرسة التجربة النموذجية");
  updateEduInfo("الإدارة العامة للتعليم بمنطقة الرياض");
  
  // جلب التاريخ الهجري عند تحميل الصفحة
  await getHijriDate();
  
  // تحميل نص تجريبي عند بدء التشغيل
  setTimeout(() => {
    loadSmartText(1);
  }, 500);
};
</script>
</body>
</html>