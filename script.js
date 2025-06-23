// تعريف عداد لت numer الترقيم
let carCounter = 1;

// تحميل السجلات المحفوظة عند فتح الصفحة
window.onload = function () {
    loadCars();
};

function addCar() {
    const vehicle = document.getElementById('vehicle').value;
    const owner = document.getElementById('owner').value;
    const number = document.getElementById('number').value;
    const amount = document.getElementById('amount').value;
    const notes = document.getElementById('notes').value;

    if (!vehicle || !owner || !number || !amount) {
        alert("الرجاء ملء جميع الحقول المطلوبة");
        return;
    }

    const record = `${carCounter} - ${vehicle} - ${owner} - ${number} - ${amount} - ${notes}`;
    carCounter++;

    // حفظ في التخزين المحلي
    let cars = JSON.parse(localStorage.getItem("cars") || "[]");
    cars.push(record);
    localStorage.setItem("cars", JSON.stringify(cars));

    displayCar(record);
    clearForm();
}

function loadCars() {
    const cars = JSON.parse(localStorage.getItem("cars") || "[]");
    carCounter = cars.length + 1;
    cars.forEach(displayCar);
}

function displayCar(record) {
    const list = document.getElementById('car-list');
    const item = document.createElement('li');
    item.textContent = record;
    list.appendChild(item);
}

function clearForm() {
    document.getElementById('vehicle').value = '';
    document.getElementById('owner').value = '';
    document.getElementById('number').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('notes').value = '';
}