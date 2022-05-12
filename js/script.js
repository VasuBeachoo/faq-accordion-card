const imgSection = document.querySelector(".img-section");

let faqAnswers = []; // Initialize array with FAQ answers
for (let i = 0; i < 5; i++) {
  faqAnswers[i] = document.createElement("p");
  faqAnswers[i].className = "faq-answer regular-text dark-blue-text";
  if (i === 0) {
    faqAnswers[i].innerText =
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
    faqAnswers[i].id = "answer-0";
  } else if (i === 1) {
    faqAnswers[i].innerText =
      "No more than 2GB. All files in your account must fit your allotted storage space.";
    faqAnswers[i].id = "answer-1";
  } else if (i === 2) {
    faqAnswers[i].innerText =
      'Click "Forgot password" from the login page or "Change password" from your profile page. A reset link will be emailed to you.';
    faqAnswers[i].id = "answer-2";
  } else if (i === 3) {
    faqAnswers[i].innerText =
      "Yes! Send us a message and we'll process your request no questions asked.";
    faqAnswers[i].id = "answer-3";
  } else if (i === 4) {
    faqAnswers[i].innerText =
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
    faqAnswers[i].id = "answer-4";
  }
}

const faqQuestionContainers = Array.from(
  document.querySelectorAll(".faq-question-container")
);

function removeAnswer(answerNum) {
  const answerRemove = document.querySelector("#answer-" + answerNum);
  if (answerRemove) answerRemove.remove();
}

function removeAnswers() {
  for (let i = 0; i < 5; i++) {
    removeAnswer(i);
  }
}

let faqItem, faqQuestion, faqArrow, faqAnswer;
faqQuestionContainers.forEach((container) => {
  container.addEventListener("click", (e) => {
    let containerId = e.target.id;
    faqAnswer = document.querySelector(
      "#answer-" + containerId.charAt(containerId.length - 1)
    );
    if (faqAnswer) {
      faqAnswer.remove();
    } else {
      if (containerId === "question-0") {
        faqAnswer = faqAnswers[0];
      } else if (containerId === "question-1") {
        faqAnswer = faqAnswers[1];
      } else if (containerId === "question-2") {
        faqAnswer = faqAnswers[2];
      } else if (containerId === "question-3") {
        faqAnswer = faqAnswers[3];
      } else if (containerId === "question-4") {
        faqAnswer = faqAnswers[4];
      }
      faqItem = document.querySelector(
        "#item-" + containerId.charAt(containerId.length - 1)
      );
      if (faqAnswer) faqItem.append(faqAnswer);
    }
    faqQuestion = document.querySelector(
      "#question-text-" + containerId.charAt(containerId.length - 1)
    );
    if (faqQuestion)
      if (
        faqQuestion.className !== "faq-question bold-text very-dark-blue-text"
      ) {
        faqQuestion.className = "faq-question bold-text very-dark-blue-text";
      } else {
        faqQuestion.className = "faq-question regular-text soft-red-text";
      }

    faqArrow = document.querySelector(
      "#arrow-" + containerId.charAt(containerId.length - 1)
    );
    if (faqArrow)
      if (faqArrow.className === "arrow down-arrow") {
        faqArrow.className = "arrow up-arrow";
      } else {
        faqArrow.className = "arrow down-arrow";
      }
  });

  container.addEventListener("mouseover", (e) => {
    let containerId = e.target.id;
    e.target.className = "faq-question-container container-hover";
    faqQuestion = document.querySelector(
      "#question-text-" + containerId.charAt(containerId.length - 1)
    );
    if (faqQuestion)
      if (
        faqQuestion.className !== "faq-question bold-text very-dark-blue-text"
      ) {
        faqQuestion.className = "faq-question regular-text soft-red-text";
      }
  });

  container.addEventListener("mouseleave", (e) => {
    let containerId = e.target.id;
    e.target.className = "faq-question-container container-hover";
    faqQuestion = document.querySelector(
      "#question-text-" + containerId.charAt(containerId.length - 1)
    );
    if (faqQuestion)
      if (
        faqQuestion.className !== "faq-question bold-text very-dark-blue-text"
      ) {
        faqQuestion.className = "faq-question regular-text very-dark-blue-text";
      }
  });
});

function removeImages() {
  const imgPattern = document.querySelector(".img-pattern");
  imgPattern && imgPattern.remove();

  const imgBox = document.querySelector(".img-box");
  imgBox && imgBox.remove();

  const imgWoman = document.querySelector(".img-woman");
  imgWoman && imgWoman.remove();
}

function displayMobile() {
  removeImages();

  const imgPattern = document.createElement("img");
  imgPattern.src = "./images/bg-pattern-mobile.svg";
  imgPattern.className = "img-pattern img-pattern-mobile";

  const imgWoman = document.createElement("img");
  imgWoman.src = "./images/illustration-woman-online-mobile.svg";
  imgWoman.className = "img-woman img-woman-mobile";

  imgSection.append(imgPattern, imgWoman);
}

function displayDesktop() {
  removeImages();

  const imgPattern = document.createElement("img");
  imgPattern.src = "./images/bg-pattern-desktop.svg";
  imgPattern.className = "img-pattern img-pattern-desktop";

  const imgWoman = document.createElement("img");
  imgWoman.src = "./images/illustration-woman-online-desktop.svg";
  imgWoman.className = "img-woman img-woman-desktop";

  const imgBox = document.createElement("img");
  imgBox.src = "./images/illustration-box-desktop.svg";
  imgBox.className = "img-box img-box-desktop";

  imgSection.append(imgPattern, imgWoman, imgBox);
}

function resizeWindow() {
  if (window.innerWidth < 1000) {
    displayMobile();
  } else {
    displayDesktop();
  }
}

window.addEventListener("resize", resizeWindow);

resizeWindow();
