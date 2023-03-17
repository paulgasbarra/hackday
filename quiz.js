const rawGpt = `Problem-solving skills: The ability to break down complex problems and document solutions in a clear and concise manner is essential for this role./
Strong communication skills: This role involves working with various stakeholders across the organization, including executives, PMs, data scientists, and data analysts. Therefore, excellent communication skills are necessary to effectively convey ideas, insights, and findings to different audiences./
Teamwork and collaboration: The role involves partnering with infrastructure and product engineers, data analysts, and data scientists to design data models and build data pipelines. Therefore, the ability to work collaboratively with different teams is essential./
Adaptability and flexibility: The role involves working with a variety of online and offline data sets, not just big data, and may require learning new tools and technologies. Therefore, adaptability and flexibility are critical to succeed in this role./
Self-motivation and proactivity: The role involves working on a mission to democratize learning and build systems that enable company-wide analytics and experimentation. Therefore, self-motivation and proactivity are essential to drive direct business impact with executive-level visibility./`

const skillsFromGptResponseToKeywords = ["problem-solving skills", "complex problems", "document solutions", "communication skills", "stakeholders", "executives", "PMs", "data scientists", "data analysts", "convey ideas", "insights", "different audiences", "teamwork", "collaboration", "infrastructure", "product engineers", "data models", "data pipelines", "collaboratively", "adaptability", "flexibility", "online data sets", "offline data sets", "learning new tools", "technologies", "self-motivation", "proactivity", "democratize learning", "build systems", "company-wide analytics", "experimentation", "drive business impact", "executive-level visibility"]

const quizContainer = document.getElementById('quiz-container');

// create the form element
const quizForm = document.createElement('form');
quizForm.id = 'quiz-form';

// listen for form submission
quizForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent page from refreshing
  const formData = new FormData(event.target);
  const quizData = {};

  for (const [name, value] of formData.entries()) {
    quizData[name] = parseInt(value, 10);
  }

  console.log(JSON.stringify(quizData));
  window.location.href = 'results.html';
});

skillsFromGptResponseToKeywords.slice(0, 10).forEach(skill => {
  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');

  const skillLabel = document.createElement('label');
  skillLabel.textContent = skill;
  skillLabel.classList.add('skill-title');
  sliderContainer.appendChild(skillLabel);

  const leftLabel = document.createElement('label');
  leftLabel.textContent = '1';
  leftLabel.classList.add('slider-label', 'left-label');
  sliderContainer.appendChild(leftLabel);

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = 1;
  slider.max = 5;
  slider.value = 3;
  slider.classList.add('slider');
  slider.name = skill.toLowerCase(); // use the skill name as the input name
  sliderContainer.appendChild(slider);

  const rightLabel = document.createElement('label');
  rightLabel.textContent = '5';
  rightLabel.classList.add('slider-label', 'right-label');
  sliderContainer.appendChild(rightLabel);

  // add the slider container to the form
  quizForm.appendChild(sliderContainer);
});

// create the submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

// add the form and submit button to the quiz container
quizContainer.appendChild(quizForm);
quizForm.appendChild(submitButton);
