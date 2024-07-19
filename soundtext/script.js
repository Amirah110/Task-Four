var recognition;

function recordAndConvertSpeech() {
  // التحقق مما إذا كان المتصفح يدعم تسجيل الصوت
  if ('webkitSpeechRecognition' in window) {
    console.log('تسجيل الصوت مدعوم');
    
    //  تقنية التعرف على الصوت
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; // تحديد اللغة إلى الإنجليزية
    
    // التعامل مع النص المحول من الصوت
    recognition.onresult = function(event) {
      var result = event.results[0][0].transcript;
      console.log('النص المحول:', result);
      
      // عرض النص في عنصر النص
      document.getElementById('output').value = result;
      
      // تمكين زر حفظ البيانات بعد تحويل النص
      document.getElementById('saveButton').disabled = false;
    };
    
    // التعامل مع حدوث خطأ في التعرف على الصوت
    recognition.onerror = function(event) {
      console.error('حدث خطأ في التعرف على الصوت:', event.error);
    };
    
    // بدء تسجيل الصوت عند النقر على زر "تسجيل"
    document.getElementById('recordButton').addEventListener('click', function() {
      recognition.start();
    });
    
    // إيقاف تسجيل الصوت عند النقر على زر "إيقاف"
    document.getElementById('stopButton').addEventListener('click', function() {
      recognition.stop();
    });
    
    // حفظ البيانات عند النقر على زر "حفظ البيانات"
    document.getElementById('saveButton').addEventListener('click', function() {
      var text = document.getElementById('output').value;
      saveText(text);
    });
  } else {
    console.log('تسجيل الصوت غير مدعوم في هذا المتصفح.');
  }
}

function saveText(text) {
function saveText(text) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'save.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('تم حفظ النص في قاعدة البيانات.');
    }
  };
  xhr.send('text=' + encodeURIComponent(text));
}}