<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>أداة إعداد التقارير التعليمية</title>

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

.report { display: none; }

@media print {
  body { background: white; padding: 0; }
  .tool { display: none; }
  .report { display: block; }
}

/* ===== الهيدر ===== */
.header {
  background: #0a3b40;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
}

/* حاوية الهيدر */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* الشعارات */
.header-logo {
  width: 70px;
  flex-shrink: 0;
}

.header-logo img {
  width: 100%;
  height: auto;
}

/* النص في المنتصف */
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
  margin-top: 2px;
}

/* ===== مربعات المعلومات ===== */

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
  max-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;
  background: #f8f9fa;
}

.box strong {
  font-size: 6.5pt;
  color: #0a3b40;
}

.box div {
  font-size: 6pt;
  line-height: 1.1;
}

/* ===== باقي التنسيق ===== */

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
<button onclick="window.print()">تصدير PDF</button>
</div>

<!-- ===== التقرير ===== -->
<div class="report">

<div class="header">
  <div class="header-inner">

    <!-- شعار يمين -->
    <div class="header-logo">
      <img src="https://i.ibb.co/G43RzNZJ/E44-D2-E03-CF67-4-B72-B8-F2-9-DCAC583-CF31.png" alt="شعار وزارة التعليم">
    </div>

    <!-- النص -->
    <div class="header-center">
      <div class="ministry-title">وزارة التعليم</div>
      <div class="ministry-subtitle">Ministry of Education</div>
      <div class="school-info">
        <div id="edu">الإدارة العامة للتعليم بمنطقة الرياض</div>
        <div id="school">مدرسة النموذجية الابتدائية</div>
      </div>
    </div>

    <!-- شعار يسار -->
    <div class="header-logo">
      <img src="https://i.ibb.co/G43RzNZJ/E44-D2-E03-CF67-4-B72-B8-F2-9-DCAC583-CF31.png" alt="شعار وزارة التعليم">
    </div>

  </div>
</div>

<!-- مربعات المعلومات -->
<div class="top-info two-lines">

  <div class="top-row first">
    <div class="box"><strong>الفصل الدراسي</strong><div id="semester">الفصل الأول</div></div>
    <div class="box"><strong>الصف</strong><div id="grade">الصف الثالث</div></div>
    <div class="box"><strong>المادة الدراسية</strong><div id="subject">التربية الفنية</div></div>
  </div>

  <div class="top-row second">
    <div class="box"><strong>التقرير</strong><div id="reportTitle">تقرير نشاط إثرائي</div></div>
    <div class="box"><strong>المستهدفون</strong><div id="target">طلاب الصف الثالث</div></div>
    <div class="box"><strong>العدد</strong><div id="count">25 طالب</div></div>
    <div class="box"><strong>مكان التنفيذ</strong><div id="location">قاعة الأنشطة</div></div>
  </div>

</div>

<div class="goal-section">
<strong>الهدف التربوي</strong>
<div id="goal">تنمية المواهب والقدرات الإبداعية لدى الطلاب</div>
</div>

</div>

</body>
</html>