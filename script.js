// 存储简历数据的对象
let resumeData = {
    name: '',
    birth: '',
    gender: '',
    height: '',
    phone: '',
    email: '',
    education: [],
    customSections: [],
    photo: null,
    themeColor: '#9370DB',
    sectionTitles: {}
};

// 生成随机数据
function generateRandomData() {
    const surnames = ['张', '李', '王', '赵', '陈', '刘', '杨', '黄'];
    const names = ['伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '洋'];
    const universities = ['清华大学', '北京大学', '复旦大学', '浙江大学', '南京大学', '上海交通大学'];
    const majors = ['计算机科学与技术', '软件工程', '人工智能', '数据科学', '信息安全'];
    const degrees = ['学士', '硕士', '博士'];
    const courses = [
        'Java程序设计, Python编程, 数据结构与算法',
        'Web开发, 数据库系统, 操作系统原理',
        '机器学习, 深度学习, 计算机视觉',
        '软件工程, 项目管理, 系统架构'
    ];

    // 工作经验数据
    const companies = ['腾讯科技', '阿里巴巴', '字节跳动', '百度', '华为', '小米科技'];
    const positions = ['软件工程师', '前端开发工程师', '全栈工程师', '产品经理', '技术主管'];
    const responsibilities = [
        '负责公司核心产品的架构设计和开发工作',
        '带领团队完成多个重点项目的开发和上线',
        '优化系统性能，提升用户体验',
        '参与产品需求分析和技术方案设计',
        '负责团队的技术培训和代码审查工作'
    ];

    // 项目经验数据
    const projects = ['在线教育平台', '企业管理系统', '电商网站', '社交媒体APP', '智能推荐系统'];
    const technologies = ['React', 'Vue.js', 'Node.js', 'Python', 'Java', 'Spring Boot'];
    const achievements = [
        '系统性能提升30%，用户满意度提升25%',
        '日活用户增长50%，营收提升40%',
        '成功服务超过100万用户，获得多个行业奖项',
        '团队规模扩大3倍，项目按时保质完成'
    ];

    // 技能证书数据
    const skills = ['前端开发', '后端开发', '数据库设计', '系统架构', '项目管理', 'UI设计'];
    const certificates = [
        'AWS解决方案架构师认证',
        'PMP项目管理认证',
        'CCNA网络工程师认证',
        'Oracle数据库认证',
        'Google专业数据工程师认证'
    ];
    const languages = ['英语（流利）', '日语（N2）', '韩语（中级）', '法语（初级）'];

    const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
    const randomPhone = () => '1' + (Math.floor(Math.random() * 9) + 3) + Array(9).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
    const randomHeight = () => Math.floor(Math.random() * 20) + 165;
    const randomBirth = () => {
        const year = 1990 + Math.floor(Math.random() * 10);
        const month = Math.floor(Math.random() * 12) + 1;
        return `${year}-${month.toString().padStart(2, '0')}`;
    };

    // 基本信息
    resumeData.name = randomItem(surnames) + randomItem(names);
    resumeData.birth = randomBirth();
    resumeData.gender = Math.random() > 0.5 ? '男' : '女';
    resumeData.height = randomHeight().toString();
    resumeData.phone = randomPhone();
    resumeData.email = 'example' + Math.floor(Math.random() * 1000) + '@email.com';

    // 教育经历
    resumeData.education = [{
        school: randomItem(universities),
        major: randomItem(majors),
        degree: randomItem(degrees),
        period: '2018-09 至 2022-06',
        courses: randomItem(courses)
    }];

    // 工作经验
    const workExperience = {
        title: '工作经验',
        entries: [
            {
                title: `${randomItem(companies)} | ${randomItem(positions)}`,
                period: '2022-07 至今',
                description: randomItem(responsibilities) + '\n' + randomItem(responsibilities)
            },
            {
                title: `${randomItem(companies)} | ${randomItem(positions)}`,
                period: '2020-03 至 2022-06',
                description: randomItem(responsibilities)
            }
        ]
    };

    // 项目经验
    const projectExperience = {
        title: '项目经验',
        entries: [
            {
                title: randomItem(projects),
                period: '2023-01 至 2023-06',
                description: `技术栈：${randomItem(technologies)}, ${randomItem(technologies)}\n主要成就：${randomItem(achievements)}`
            },
            {
                title: randomItem(projects),
                period: '2022-07 至 2022-12',
                description: `技术栈：${randomItem(technologies)}, ${randomItem(technologies)}\n主要成就：${randomItem(achievements)}`
            }
        ]
    };

    // 专业技能
    const professionalSkills = {
        title: '专业技能',
        entries: [
            {
                title: '技术栈',
                period: '',
                description: `• ${randomItem(skills)}, ${randomItem(skills)}, ${randomItem(skills)}\n• ${randomItem(skills)}, ${randomItem(skills)}`
            },
            {
                title: '证书语言',
                period: '',
                description: `• 证书：${randomItem(certificates)}, ${randomItem(certificates)}\n• 语言：${randomItem(languages)}, ${randomItem(languages)}`
            }
        ]
    };

    // 设置自定义部分
    resumeData.customSections = [
        workExperience,
        projectExperience,
        professionalSkills
    ];
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 生成随机数据
    generateRandomData();
    
    // 初始化标签页切换
    initTabs();
    // 初始化主题颜色
    document.getElementById('theme-color').value = resumeData.themeColor;
    
    // 更新表单
    document.getElementById('name').value = resumeData.name;
    document.getElementById('birth').value = resumeData.birth;
    document.getElementById('gender').value = resumeData.gender;
    document.getElementById('height').value = resumeData.height;
    document.getElementById('phone').value = resumeData.phone;
    document.getElementById('email').value = resumeData.email;

    // 添加教育经历
    const educationContainer = document.getElementById('education-container');
    resumeData.education.forEach(edu => {
        const newEntry = document.createElement('div');
        newEntry.className = 'education-entry';
        newEntry.innerHTML = `
            <input type="text" placeholder="学校名称" class="school" value="${edu.school}" onchange="updateResume()">
            <input type="text" placeholder="专业" class="major" value="${edu.major}" onchange="updateResume()">
            <input type="text" placeholder="学位" class="degree" value="${edu.degree}" onchange="updateResume()">
            <input type="text" placeholder="时间段" class="period" value="${edu.period}" onchange="updateResume()">
            <input type="text" placeholder="主修课程" class="courses" value="${edu.courses}" onchange="updateResume()">
            <button class="delete-btn" onclick="this.parentElement.remove(); updateResume()">
                <span class="material-icons">delete</span>
            </button>
        `;
        educationContainer.appendChild(newEntry);
    });

    // 添加自定义部分
    const customContainer = document.getElementById('custom-sections-container');
    resumeData.customSections.forEach(section => {
        const newSection = document.createElement('div');
        newSection.className = 'section-entry';
        newSection.innerHTML = `
            <input type="text" placeholder="模块标题" class="section-title-input" value="${section.title}" onchange="updateResume()">
            <div class="entries-container">
                ${section.entries.map(entry => `
                    <div class="custom-entry">
                        <input type="text" placeholder="标题" class="entry-title" value="${entry.title}" onchange="updateResume()">
                        <input type="text" placeholder="时间段" class="entry-period" value="${entry.period}" onchange="updateResume()">
                        <textarea placeholder="描述" class="entry-description" onchange="updateResume()">${entry.description}</textarea>
                        <button class="delete-btn" onclick="this.parentElement.remove(); updateResume()">
                            <span class="material-icons">delete</span>
                        </button>
                    </div>
                `).join('')}
            </div>
            <button class="add-entry-btn" onclick="addCustomEntry(this)">
                <span class="material-icons">add</span>添加条目
            </button>
            <button class="delete-btn" onclick="this.parentElement.remove(); updateResume()">
                <span class="material-icons">delete</span>
            </button>
        `;
        customContainer.appendChild(newSection);
    });
    
    // 更新简历预览
    updateResume();
});

// 更改主题颜色
function changeThemeColor(color) {
    resumeData.themeColor = color;
    document.documentElement.style.setProperty('--primary-color', color);
    updateResume();
}

// 初始化标签页切换
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.form-group');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            sections[index].classList.add('active');
        });
    });
}

// 更新简历预览
function updateResume() {
    // 更新基本信息
    resumeData.name = document.getElementById('name').value;
    resumeData.birth = document.getElementById('birth').value;
    resumeData.gender = document.getElementById('gender').value;
    resumeData.height = document.getElementById('height').value;
    resumeData.phone = document.getElementById('phone').value;
    resumeData.email = document.getElementById('email').value;

    // 更新教育经历
    resumeData.education = [];
    document.querySelectorAll('.education-entry').forEach(entry => {
        resumeData.education.push({
            school: entry.querySelector('.school').value,
            major: entry.querySelector('.major').value,
            degree: entry.querySelector('.degree').value,
            period: entry.querySelector('.period').value,
            courses: entry.querySelector('.courses').value
        });
    });

    // 更新自定义模块
    resumeData.customSections = [];
    document.querySelectorAll('.section-entry').forEach(section => {
        const entries = [];
        section.querySelectorAll('.custom-entry').forEach(entry => {
            entries.push({
                title: entry.querySelector('.entry-title').value,
                period: entry.querySelector('.entry-period').value,
                description: entry.querySelector('.entry-description').value
            });
        });
        
        resumeData.customSections.push({
            title: section.querySelector('.section-title-input').value,
            entries: entries
        });
    });

    // 更新预览
    document.getElementById('resume-preview').innerHTML = generateResumeHTML();
    
    // 计算标题文字宽度
    setTimeout(() => {
        document.querySelectorAll('.section-title').forEach(title => {
            const span = title.querySelector('span');
            if (span && span.textContent.trim()) {
                // 获取文字宽度并添加少量padding
                const textWidth = span.offsetWidth;
                // 设置背景宽度为文字宽度加上8px的padding
                title.style.setProperty('--text-width', `${textWidth + 8}px`);
            } else {
                title.style.setProperty('--text-width', '0');
            }
        });
    }, 0);
}

// 生成简历HTML
function generateResumeHTML() {
    return `
        <div class="resume">
            <h1 class="resume-title">个人简历</h1>
            
            <div class="section">
                <h2 class="section-title"><span>基本信息</span></h2>
                ${resumeData.photo ? `
                    <div class="avatar">
                        <img src="${resumeData.photo}" alt="个人照片">
                    </div>
                ` : ''}
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">姓　　名：</span>
                        <span class="info-content">${resumeData.name || ''}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">出生年月：</span>
                        <span class="info-content">${resumeData.birth || ''}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">性　　别：</span>
                        <span class="info-content">${resumeData.gender || ''}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">身　　高：</span>
                        <span class="info-content">${resumeData.height ? resumeData.height + 'cm' : ''}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">电　　话：</span>
                        <span class="info-content">${resumeData.phone || ''}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">邮　　箱：</span>
                        <span class="info-content">${resumeData.email || ''}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title"><span>教育背景</span></h2>
                ${resumeData.education.map(edu => `
                    <div class="education-item">
                        <div class="education-header">
                            <span class="school-name">${edu.school}</span>
                            <span class="education-period">${edu.period}</span>
                        </div>
                        <div class="major-info">
                            <span>${edu.major}</span>
                            <span>${edu.degree ? ` | ${edu.degree}` : ''}</span>
                        </div>
                        ${edu.courses ? `
                            <div class="courses">
                                主修课程：${edu.courses}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            ${resumeData.customSections.map(section => {
                // 过滤掉没有内容的条目
                const validEntries = section.entries.filter(entry => 
                    entry.title.trim() !== '' || 
                    entry.period.trim() !== '' || 
                    entry.description.trim() !== ''
                );
                
                // 只有当有有效条目时才显示该部分
                return validEntries.length > 0 ? `
                    <div class="section">
                        <h2 class="section-title"><span>${section.title}</span></h2>
                        ${validEntries.map(entry => `
                            <div class="custom-item">
                                <div class="custom-header">
                                    ${entry.title ? `<span class="custom-title">${entry.title}</span>` : ''}
                                    ${entry.period ? `<span class="custom-period">${entry.period}</span>` : ''}
                                </div>
                                ${entry.description ? `
                                    <div class="custom-description">${entry.description.split('\n').map(line => 
                                        line.trim() ? `<div>${line}</div>` : ''
                                    ).join('')}</div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : '';
            }).join('')}
        </div>
    `;
}

// 添加教育经历
function addEducation() {
    const container = document.getElementById('education-container');
    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
        <input type="text" placeholder="学校名称" class="school" onchange="updateResume()">
        <input type="text" placeholder="专业" class="major" onchange="updateResume()">
        <input type="text" placeholder="学位" class="degree" onchange="updateResume()">
        <input type="text" placeholder="时间段" class="period" onchange="updateResume()">
        <input type="text" placeholder="主修课程" class="courses" onchange="updateResume()">
        <button class="delete-btn" onclick="this.parentElement.remove(); updateResume()">
            <span class="material-icons">delete</span>
        </button>
    `;
    container.appendChild(newEntry);
}

// 添加自定义模块
function addCustomSection() {
    const container = document.getElementById('custom-sections-container');
    const newSection = document.createElement('div');
    newSection.className = 'section-entry';
    newSection.innerHTML = `
        <input type="text" placeholder="模块标题" class="section-title-input" onchange="updateResume()">
        <div class="entries-container"></div>
        <button class="add-entry-btn" onclick="addCustomEntry(this)">
            <span class="material-icons">add</span>添加条目
        </button>
        <button class="delete-btn" onclick="this.parentElement.remove(); updateResume()">
            <span class="material-icons">delete</span>
        </button>
    `;
    container.appendChild(newSection);
}

// 添加自定义条目
function addCustomEntry(section) {
    const container = section.querySelector('.entries-container');
    const newEntry = document.createElement('div');
    newEntry.className = 'custom-entry';
    newEntry.innerHTML = `
        <input type="text" placeholder="标题" class="entry-title" onchange="updateResume()">
        <input type="text" placeholder="时间段" class="entry-period" onchange="updateResume()">
        <textarea placeholder="描述" class="entry-description" onchange="updateResume()"></textarea>
        <button class="delete-btn" onclick="this.parentElement.remove(); updateResume()">
            <span class="material-icons">delete</span>
        </button>
    `;
    container.appendChild(newEntry);
}

// 处理照片上传
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            resumeData.photo = e.target.result;
            document.getElementById('avatar-preview').src = e.target.result;
            updateResume();
        };
        reader.readAsDataURL(file);
    }
}

// 删除照片
function removePhoto() {
    resumeData.photo = null;
    document.getElementById('avatar-preview').src = 'https://via.placeholder.com/150';
    updateResume();
}

// 下载PDF
function downloadPDF() {
    const element = document.getElementById('resume-preview');
    const opt = {
        margin: 1,
        filename: '我的简历.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// 保存到本地
function saveLocally() {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('简历已保存');
}

// 从本地加载
function loadFromLocal() {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
        resumeData = JSON.parse(savedData);
        
        // 更新表单
        document.getElementById('name').value = resumeData.name || '';
        document.getElementById('birth').value = resumeData.birth || '';
        document.getElementById('gender').value = resumeData.gender || '';
        document.getElementById('height').value = resumeData.height || '';
        document.getElementById('phone').value = resumeData.phone || '';
        document.getElementById('email').value = resumeData.email || '';
        
        if (resumeData.photo) {
            document.getElementById('avatar-preview').src = resumeData.photo;
        }

        // 更新主题颜色
        document.getElementById('theme-color').value = resumeData.themeColor;
        document.documentElement.style.setProperty('--primary-color', resumeData.themeColor);
        
        // 更新预览
        updateResume();
        alert('简历已加载');
    } else {
        alert('未找到保存的简历数据');
    }
} 