# دليل البدء السريع - موقع جهاد أشرف

## التثبيت السريع

```bash
# 1. استنساخ المشروع
git clone [repository-url]
cd gehad-ashraf-website

# 2. تثبيت المتطلبات
npm install

# 3. تشغيل الخادم المحلي
npm run dev
```

الموقع سيكون متاحاً على: `http://localhost:3000`

## الهيكل السريع

```
├── app/                 # صفحات Next.js 14
├── components/          # مكونات React
├── public/             # الملفات العامة
├── styles/             # ملفات CSS
└── docs/               # الوثائق
```

## التخصيص السريع

### 1. تغيير المعلومات الأساسية

**الملف**: `components/Header.tsx`
```typescript
// البحث عن:
<h1>جهاد أشرف</h1>
<p>التدريب والاستشارات</p>
```

### 2. تحديث معلومات الاتصال

**الملف**: `components/Footer.tsx`
```typescript
// البحث عن:
href="mailto:info@gehad-ashraf.com"
href="tel:+966500000000"
```

### 3. إضافة برنامج جديد

**الملف**: `components/FeaturedPrograms.tsx`
```typescript
const programs = [
  // أضف برنامج جديد هنا
  {
    id: 5,
    title: 'اسم البرنامج الجديد',
    description: 'وصف البرنامج',
    duration: 'المدة',
    price: 'السعر',
    features: ['ميزة 1', 'ميزة 2']
  }
]
```

## الأوامر المفيدة

```bash
# تشغيل التطوير
npm run dev

# بناء للإنتاج
npm run build

# تشغيل الإنتاج محلياً
npm start

# فحص الأخطاء
npm run lint
```

## النشر السريع

### Vercel (الأسهل)
1. ادفع الكود إلى GitHub
2. اربط المستودع بـ Vercel
3. النشر التلقائي ✅

### Netlify
1. ادفع الكود إلى GitHub
2. اربط المستودع بـ Netlify
3. إعدادات البناء: `npm run build`
4. مجلد النشر: `.next`

## المساعدة السريعة

### مشاكل شائعة

**خطأ في التثبيت**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**خطأ في البناء**:
```bash
npm run lint
npm run build
```

**مشاكل الصور**:
- ضع الصور في مجلد `public/`
- استخدم مسارات نسبية: `/image.jpg`

### روابط مفيدة
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## الدعم

للحصول على المساعدة:
- راجع `README.md` للتفاصيل الكاملة
- راجع `ADMIN_GUIDE.md` لإدارة المحتوى
- تواصل مع فريق التطوير

---

**نصيحة**: احفظ هذا الملف كمرجع سريع أثناء التطوير! 🚀