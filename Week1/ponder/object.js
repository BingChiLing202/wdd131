//创建课程对象aCourse
const aCourse = {
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credit : 2,
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTH',
            instructor: 'Bro T',
        
        },
        {
            sectionNum: 2,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'MWF',
            instructor: 'Brother Warner',
        }
    ], //sections是一个array（数组），数组里有两个对象，每个对象代表一个班级
    enrolled : function(sectionNumber){//在aCourse对象里定义一个函数enrolled，sectionNumber参数用来接收传入的值
        console.log(this.name);//this指当前对象aCourse
    }
}

console.log(aCourse.name);//name：访问对象里面的name属性。aCourse：之前创建的课程对象

aCourse.enrolled(1);//调用aCourse对象里面的enrolled函数，并传入参数1

//监听按钮点击事件
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    //获取用户输入
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();
    //forEach（）：依次访问数组中的每一个元素
    aCourse.sections.forEach(section => {
        if(section.sectionNum == sectionNumber) {//如果当前对象的Section number等于用户输入的section number
            section.enrolled += 1;//增加学生人数
        }

        console.log(section.sectionNum);
        console.log(section.enrolled);
    });
    //find（）找到用户选择的section，并增加学生人数。找到数组中第一个符合条件的元素，并返回这个元素
    aCourse.sections.find(section => section.sectionNum == sectionNumber).enrolled++;
    //renderSections（）重新更新网页表格
    renderSections(aCourse.sections);
});

//定义一个函数
function sectionTemplate(section) {//section是参数，代表传入的一个课程section对象
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);



