// انتخاب المنت اصلی صفحه که شامل فرم‌ها و پنل‌ها است
const container = document.querySelector('.container');

// انتخاب دکمه مربوط به ثبت‌نام (برای تغییر حالت به فرم Register)
const registerBtn = document.querySelector('.register-btn');

// انتخاب دکمه مربوط به ورود (برای تغییر حالت به فرم Login)
const loginBtn = document.querySelector('.login-btn');

// افزودن یک Event Listener برای دکمه ثبت‌نام
// با کلیک روی این دکمه، کلاس 'active' به کانتینر اضافه می‌شود
// این کلاس معمولاً در CSS باعث جابه‌جایی فرم‌ها (با انیمیشن یا ترنزیشن) می‌شود
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// افزودن Event Listener برای دکمه ورود
// با کلیک روی این دکمه، کلاس 'active' از کانتینر حذف می‌شود
// در نتیجه دوباره فرم ورود نمایش داده می‌شود
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
