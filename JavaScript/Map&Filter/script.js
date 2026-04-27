// ========== 第1部分：数组基础操作 ==========

// 创建一个数组
let fruits = ["苹果", "香蕉", "橙子"];
console.log("初始数组:", fruits);

// 1. push() - 在末尾添加元素
fruits.push("葡萄");
console.log("push 后:", fruits);  // ["苹果", "香蕉", "橙子", "葡萄"]

// 2. pop() - 删除末尾元素
let last = fruits.pop();
console.log("pop 后:", fruits);   // ["苹果", "香蕉", "橙子"]
console.log("被删除的:", last);    // "葡萄"

// 3. unshift() - 在开头添加元素
fruits.unshift("草莓");
console.log("unshift 后:", fruits);  // ["草莓", "苹果", "香蕉", "橙子"]

// 4. shift() - 删除开头元素
let first = fruits.shift();
console.log("shift 后:", fruits);    // ["苹果", "香蕉", "橙子"]
console.log("被删除的:", first);     // "草莓"

// ========== 第2部分：map 和 filter（面试必考）==========

// 原始数据
const numbers = [1, 2, 3, 4, 5];
console.log("原始数组:", numbers);

// 5. map() - 对每个元素做转换，返回新数组
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("map 乘以2:", doubled);  // [2, 4, 6, 8, 10]

// map 的简化写法（箭头函数，需要现代浏览器）
// const doubled = numbers.map(num => num * 2);

// 6. filter() - 筛选符合条件的元素，返回新数组
const evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("filter 偶数:", evens);  // [2, 4]

// filter 简化写法
// const evens = numbers.filter(num => num % 2 === 0);

// 实际应用场景：处理用户数据
const users = [
    { name: "张三", age: 25, city: "北京" },
    { name: "李四", age: 17, city: "上海" },
    { name: "王五", age: 30, city: "北京" },
    { name: "赵六", age: 16, city: "深圳" }
];

// 提取所有名字（map）
const names = users.map(function(user) {
    return user.name;
});
console.log("所有名字:", names);  // ["张三", "李四", "王五", "赵六"]

// 筛选成年人（filter）
const adults = users.filter(function(user) {
    return user.age >= 18;
});
console.log("成年人:", adults);

// 链式调用：先筛选北京用户，再提取名字
const beijingNames = users
    .filter(function(user) {
        return user.city === "北京";
    })
    .map(function(user) {
        return user.name;
    });
console.log("北京用户名字:", beijingNames);  // ["张三", "王五"]

// ========== 第3部分：页面交互 ==========

// 获取元素
const pushBtn = document.getElementById('pushBtn');
const popBtn = document.getElementById('popBtn');
const mapBtn = document.getElementById('mapBtn');
const filterBtn = document.getElementById('filterBtn');
const arrayDisplay = document.getElementById('arrayDisplay');

// 当前显示的数据（用于演示）
let demoArray = [5, 10, 15, 20];

function updateDisplay() {
    arrayDisplay.textContent = JSON.stringify(demoArray);
}

// 初始化显示
updateDisplay();

// push 按钮
pushBtn.addEventListener('click', function() {
    const newValue = demoArray.length * 5 + 5;
    demoArray.push(newValue);
    updateDisplay();
    console.log("push 后:", demoArray);
});

// pop 按钮
popBtn.addEventListener('click', function() {
    const removed = demoArray.pop();
    updateDisplay();
    console.log("pop 后:", demoArray, "删除:", removed);
});

// map 按钮（演示转换）
mapBtn.addEventListener('click', function() {
    const mapped = demoArray.map(function(num) {
        return num * 2;
    });
    arrayDisplay.textContent = JSON.stringify(mapped);
    console.log("map (×2):", mapped);
    
    // 3秒后恢复原数组显示
    setTimeout(function() {
        updateDisplay();
    }, 3000);
});

// filter 按钮（演示筛选）
filterBtn.addEventListener('click', function() {
    const filtered = demoArray.filter(function(num) {
        return num > 10;
    });
    arrayDisplay.textContent = JSON.stringify(filtered);
    console.log("filter (>10):", filtered);
    
    setTimeout(function() {
        updateDisplay();
    }, 3000);
});

console.log("========== Day 3 学习总结 ==========");
console.log("1. push/pop - 末尾增删");
console.log("2. unshift/shift - 开头增删");
console.log("3. map - 转换每个元素");
console.log("4. filter - 筛选元素");
console.log("5. 点击按钮测试上面的方法");