//link section----------------
let itemContainer = document.querySelector(".main-grid-container");

//Data section----------------
const blogData = [
  {
    id: "1",
    title: "Front-End vs Back-End Developer: What's the Difference?",
    date: "January 3, 2023",
    love: false,
    loveCount: "4,0k",
    srcImage: "Image-0.jpg",
    altText: "two people talking",
    done: false,
    srcLink:
      "https://www.computerscience.org/bootcamps/resources/frontend-vs-backend/#:~:text=What's%20the%20Difference%20Between%20Front,system%2C%20data%2C%20and%20logic.",
    hide: false,
  },
  {
    id: "2",
    title: "What is a Full Stack Developer?",
    date: "January 12, 2023",
    love: false,
    loveCount: "3,2 k",
    srcImage: "Image-1.jpg",
    done: false,
    altText: "look like a call center agent",
    srcLink:
      "https://www.indeed.com/career-advice/finding-a-job/full-stack-developer-definition",
    hide: false,
  },
  {
    id: "3",
    title: "What are Soft Skills and How Do They Benefit Your Career?",
    date: "January 22, 2023",
    love: true,
    loveCount: "2,6 k",
    srcImage: "Image-2.jpg",
    altText: "robo cap?",
    done: true,
    srcLink:
      "https://www.indeed.com/career-advice/interviewing/why-are-soft-skills-important",
    hide: false,
  },
  {
    id: "4",
    title: "IT Jobs: In-Demand, Available to Everyone, Ripe With Opportunity",
    date: "January 29, 2023",
    love: true,
    loveCount: "7,6 k",
    srcImage: "Image-3.jpg",
    altText: "picture of binary numbers",
    done: true,
    srcLink:
      "https://blog.edx.org/it-jobs-in-demand-available-to-everyone-ripe-with-opportunity",
    hide: false,
  },
  {
    id: "5",
    title: "7 Learning Tips for Data Science Self-study",
    date: "February 1, 2023",
    love: false,
    loveCount: "1,5 k",
    srcImage: "Image-4.jpg",
    altText: "a cyborg-woman typing on a laptop",
    done: false,
    srcLink:
      "https://skill-lync.com/blogs/7-learning-tips-for-data-science-self-study",
    hide: false,
  },
  {
    id: "6",
    title: "Hard Skills vs. Soft Skills: Do You Really Need Both? Why?",
    date: "February 10, 2023",
    love: false,
    loveCount: "4,9 k",
    srcImage: "Image-5.jpg",
    altText: "A person wearing furistic astronaut-like suit",
    done: false,
    srcLink:
      "https://www.indeed.com/career-advice/resumes-cover-letters/hard-skills-vs-soft-skills",
    hide: false,
  },
  {
    id: "7",
    title: "What is Javascript?",
    date: "February 16, 2023",
    love: false,
    loveCount: "3,1 k",
    srcImage: "Image-6.jpg",
    altText: "a woman using furistic eye glasses",
    done: false,
    srcLink:
      "https://codeinstitute.net/global/blog/what-is-javascript-and-why-should-i-learn-it/",
    hide: false,
  },
  {
    id: "8",
    title: "Who is a Business Analyst: Roles, Skills, Salaries, Job Prospects",
    date: "February 22, 2023",
    love: false,
    loveCount: "2,4 k",
    srcImage: "Image-7.jpg",
    altText: "picture of a time-machine capsule",
    done: false,
    srcLink:
      "https://www.knowledgehut.com/blog/business-management/business-analyst-job-description",
    hide: false,
  },
  {
    id: "9",
    title: "How Much Do Data Analysts Make? 2023 Salary Guide",
    date: "February 24, 2023",
    love: true,
    loveCount: "2,6 k",
    srcImage: "Image-8.jpg",
    altText: "a man wearing furistic suit, watching out-of-world view",
    done: true,
    srcLink:
      "https://brainstation.io/career-guides/how-much-do-data-analysts-make",
    hide: false,
  },
];

//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//----------------------- MAIN Functions -------------------------------------
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

//UI display function
const displayerFunction = (arrayOfObject) => {
  itemContainer.innerHTML = "";

  arrayOfObject.forEach((each) => {
    let myHeartStatus;
    let myHeartShape;
    let isItDone;

    each.done ? (isItDone = `initialState done markdone`) : (isItDone = `done`);

    each.love
      ? (myHeartStatus = `fav-heart fav-heart-blue`) &&
        (myHeartShape = `&#9829;`)
      : (myHeartStatus = `fav-heart`) && (myHeartShape = `&#9825;`);

    const html = `
       <div class="grid-item" id="item-${each.id}">
          <span id="x-${each.id}" class="icon-cross" onclick="deleteElement(this)"
            >&#10005;</span
          >
          <img
            src="assets/img-photo/${each.srcImage}"
            alt="${each.altText}"
          />
          <div class="card-overlay"></div>
          <div class="card-info">
            <span id="check-${each.id}" class="${isItDone}" onclick="doneElement(this)"
              >&check;</span
            >
            <h3 class="title-card">
             <a href="${each.srcLink} "class="dynamic-link" target="iframe_for_content" id="done-${each.id}"
            onclick="openModal(this)">${each.title}</a
          >
            </h3>
            <div class="title-description">
              <hr />
              <div class="post-info">
                <div class="date">
                  <span>${each.date}</span>
                </div>
                <div class="favorite">
                  <span
                    id="heart-${each.id}"
                    class="${myHeartStatus}"
                    onclick="changeOfHeart(this)"
                    >${myHeartShape}</span
                  >
                  <span class="fav-count">${each.loveCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
    itemContainer.insertAdjacentHTML("beforeend", html);

    if (each.done === true) {
      document.getElementById(`check-${each.id}`).classList.toggle("show");
    }
  });
};

//Delete Element
const deleteElement = (obj) => {
  const deleteElementID = document.getElementById(obj.id).parentElement.id;
  const deleteElementIDNumber = deleteElementID.slice(-1);
  let index = blogData.findIndex((x) => x.id == deleteElementIDNumber);
  blogData[index].hide = true;
  document.getElementById(deleteElementID).remove();
};

//Dropdown for Mobile
const mobileDropDown = () => {
  document.querySelector(".menu").classList.toggle("show-mobile");
  document.querySelector(".static").classList.toggle("mobile");
};

//Mark done function
const doneElement = (obj) => {
  const doneElems = document.getElementById(obj.id);
  doneElems.classList.toggle("show");
  doneElems.classList.toggle("markdone");
  doneElems.classList.remove("initialState");
};

//Add to favorite
const changeOfHeart = (obj) => {
  const heart = document.getElementById(obj.id);
  if (heart.textContent == `♥`) {
    heart.textContent = "♡";
  } else {
    heart.textContent = "♥";
  }
  heart.classList.toggle("fav-heart-blue");
};

//open modal functionality
let iddone;
let iddoneNumber;

const openModal = (obj) => {
  //when modal is opened, get the id from the card where its belongs
  iddone = document.getElementById(obj.id).id;
  //then get the object id number
  iddoneNumber = iddone.slice(-1);
  //show modal
  document.querySelector(".content-container").classList.toggle("show");
};

//once it closed, update the mark element to unread icon to its source card
const closeModal = () => {
  document.querySelector(".content-container").classList.toggle("show");

  const registered = document.getElementById(`check-${iddoneNumber}`);
  if (registered.matches(`.markdone`)) {
    registered.classList.toggle("markdone");
    registered.classList.toggle("show");
  }
  document
    .getElementById(`check-${iddoneNumber}`)
    .classList.remove("initialState");
};

//once it done, update the mark element to read icon to its source card
const registerDone = () => {
  document.querySelector(".content-container").classList.toggle("show");

  const registered = document.getElementById(`check-${iddoneNumber}`);
  //code here is self-explainatory
  if (!registered.matches(`.markdone`)) {
    registered.classList.toggle("markdone");
    registered.classList.toggle("show");
  }
};

//Initialize.................
displayerFunction(blogData);

//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//----------------------- EXTRA COMPONENT Functions -------------------------------------

//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

//show the extra component
const showExtra = () => {
  document.querySelector(".extra-container").classList.toggle("hide");
};
//search function
let inputValue = document.getElementById("search-input");

const search = () => {
  blogData
    .filter((i) => !i.hide)
    .forEach((item) => {
      // test if the value of input text into object title
      let x = item.title.toLocaleLowerCase().includes(inputValue.value);

      if (inputValue.value == "") {
        if (document.getElementById(`item-${item.id}`).matches(".hide"))
          document.getElementById(`item-${item.id}`).classList.remove("hide");
      }
      //if not match hide the card(s)
      if (!x) {
        document.getElementById(`item-${item.id}`).classList.toggle("hide");
      }
    });
};

//reset input field
function resetfield() {
  inputValue.value = "";
  blogData
    .filter((i) => !i.hide)
    .forEach((item) =>
      document.getElementById(`item-${item.id}`).classList.remove("hide")
    );
}

const sorted = () => {
  const sort = blogData.sort(function (a, b) {
    let textA = a.title;
    let textB = b.title;
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  displayerFunction(sort.filter((i) => !i.hide)); //just display the card which not been hidden
};

const reversed = () => {
  const reverse = blogData.sort(function (a, b) {
    let textA = a.title;
    let textB = b.title;
    return textA > textB ? -1 : textA < textB ? 1 : 0;
  });
  displayerFunction(reverse.filter((i) => !i.hide)); //just display the card which not been hidden
};
const exitRestore = (obj) => {
  document.getElementById(obj.id).parentElement.classList.toggle("hide");
  displayerFunction(blogData.filter((i) => !i.hide));
};
