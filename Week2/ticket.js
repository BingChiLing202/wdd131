// 从html里找到对应的元素
const form = document.querySelector("#ticketForm");
const type = document.querySelector('#type');
const noteContainer = document.querySelector('#noteContainer');
const output = document.querySelector('#output');
const studentID = document.querySelector('#studentID');
const student = document.querySelector('#hello');
const code = document.querySelector('#zj');
const id = document.querySelector('#accessCode')

//upDateNotesField（）函数：根据用户选择的 Student 或 Guest，改变页面显示的内容，以及哪些输入框是必填的
function upDateNotesField(){
    if(type.value === 'student'){ //获取用户当前选择的类型
        //classList可以操作html元素的class，remove（‘hidden'）是从这个元素的class中删除hidden
        student.classList.remove('hidden');
        //student id输入框为必填
        studentID.required = true;
        //access code不再是必填
        id.required = false;
        //给guest code区域增加hidden
        code.classList.add('hidden');
        
    }
    if(type.value === 'guest'){
        //隐藏student id区域
        student.classList.add('hidden');
        //student id不再必填
        studentID.required = false;
        //access code成为必填
        id.required = true;
        //显示guest code区域
        code.classList.remove('hidden')
    }
}

//监听用户选择：当用户改变type时，执行upDateNotesField（）
type.addEventListener('change', upDateNotesField);
//让函数在页面加载时立即执行一次
upDateNotesField();

//isPastDate（）函数：检查用户选择的日期是否早于当前日期
function isPastDate(value){ 
    //获取今天的日期
    const today = new Date();
    //获取用户选择的日期
    const chosen = new Date(value);
    //比较日期
    return chosen < today
}

//监听表单提交：当用户提交整个表单时，执行里面的函数
form.addEventListener('submit', function (event) {
    //阻止默认提交
    event.preventDefault();
    //把用户输入的email打印到浏览器的console
    console.log(event.target.email.value);//event.target表示触发事件的元素。value是获取html输入元素里面的值
    //清空之前的结果
    output.textContent = "";

    //获取用户输入的信息
    const firstName = form.firstName.value.trim();//trim：删除字符串开头和结尾的空格
    const lastName = form.lastName.value.trim();//value获取用户真正填写的内容
    const email = form.email.value.trim();
    const type = form.type.value;
    const date = form.date.value;

    if(type === 'guest'){

        //如果id不等于
        if(id.value !== 'Event131'){
            //输出结果
            output.textContent = 'wrong code';
            //停止执行
            return
        }
    }


    if(type === 'student'){
        //检查长度是否为9，length获取字符串的长度，||表示或者
        if(studentID.value.trim() === ''|| studentID.value.length !== 9 || isNaN(Number(studentID.value))){ //isNaN(Number(studentID.value))：检查是否为数字
            output.textContent = 'Student ID must be 9 digits';
            return;
        }
    }

    

    //调用前面定义的函数，并传入date
    if(isPastDate(date)){
        output.textContent = 'choose a later date';
        return
    }

    //创建ticket，这是程序最后的部分，当用户通过前面的检查时，程序才会执行到这里
    //反引号：允许在字符串中写多行内容
    output.innerHTML=`
    <h2>Ticket Created</h2>
    <p>${firstName},${lastName}</p>
    <p>${type}</p>
    <p>${date}</p>
    `
    
})

