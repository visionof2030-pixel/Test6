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

.container {
  max-width: 900px;
  margin: auto;
  background: #fff;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,.1);
}

h2 {
  text-align: center;
  color: #0a3b40;
  margin-bottom: 20px;
}

/* ===== المربعات الصغيرة ===== */
.top-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 15px;
}

.top-row {
  display: grid;
  gap: 4px;
}

.top-row.first {
  grid-template-columns: repeat(3, 1fr);
}

.top-row.second {
  grid-template-columns: repeat(4, 1fr);
}

.box {
  border: 1px solid #0a3b40;
  background: #f8f9fa;
  border-radius: 4px;
  padding: 4px;
  font-size: 7pt;
  text-align: center;
  min-height: 30px;
}

.box strong {
  display: block;
  font-size: 7pt;
  color: #0a3b40;
  margin-bottom: 2px;
}

.box div {
  font-size: 6.5pt;
}

/* ===== الأقسام ===== */
.section {
  border: 1px solid #0a3b40;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 12px;
  background: #fff;
}

.section strong {
  display: block;
  border-bottom: 1px solid #0a3b40;
  margin-bottom: 6px;
  padding-bottom: 4px;
  color: #0a3b40;
}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* ===== الاختيارية ===== */
.section.optional {
  border: 1px dashed #e6b800;
  background: #fff8cc;
}

/* ===== الصور ===== */
.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 10px;
}

.images img {
  width: 100%;
  border-radius: 6px;
  max-height: 180px;
  object-fit: cover;
}

/* ===== طباعة ===== */
@media print {
  body {
    background: #fff;
    padding: 0;
  }
}
</style>
</head>

<body>

<div class="container">
<h2>تقرير نشاط</h2>

<!-- ===== المربعات الصغيرة ===== -->
<div class="top-info">

  <div class="top-row first">
    <div class="box"><strong>الفصل الدراسي</strong><div id="semester"></div></div>
    <div class="box"><strong>الصف</strong><div id="grade"></div></div>
    <div class="box"><strong>المادة</strong><div id="subject"></div></div>
  </div>

  <div class="top-row second">
    <div class="box"><strong>التقرير</strong><div id="report"></div></div>
    <div class="box"><strong>المستهدفون</strong><div id="target"></div></div>
    <div class="box"><strong>العدد</strong><div id="count"></div></div>
    <div class="box"><strong>مكان التنفيذ</strong><div id="location"></div></div>
  </div>

</div>

<!-- ===== الهدف ===== -->
<div class="section">
  <strong>الهدف التربوي</strong>
  <div id="goal"></div>
</div>

<!-- ===== وصف + إجراءات ===== -->
<div class="grid2">
  <div class="section">
    <strong>وصف مختصر</strong>
    <div id="desc1"></div>
  </div>
  <div class="section">
    <strong>إجراءات التنفيذ</strong>
    <div id="desc2"></div>
  </div>
</div>

<!-- ===== نتائج + توصيات ===== -->
<div class="grid2">
  <div class="section">
    <strong>النتائج</strong>
    <div id="desc3"></div>
  </div>
  <div class="section">
    <strong>التوصيات</strong>
    <div id="desc4"></div>
  </div>
</div>

<!-- ===== التحديات + نقاط القوة ===== -->
<div class="grid2">
  <div class="section optional">
    <strong>التحديات</strong>
    <div id="challenges"></div>
  </div>
  <div class="section optional">
    <strong>نقاط القوة</strong>
    <div id="strengths"></div>
  </div>
</div>

<!-- ===== الصور ===== -->
<div class="section">
  <strong>صور النشاط</strong>
  <input type="file" multiple accept="image/*" onchange="loadImages(this)">
  <div class="images" id="imagesBox"></div>
</div>

</div>

<script>
function loadImages(input) {
  const box = document.getElementById("imagesBox");
  box.innerHTML = "";
  [...input.files].slice(0,2).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      box.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}
</script>

</body>
</html>