"use strict";

const navBurger = document.getElementById("navBurger");
const closeNavList = document.getElementById("closeNav");
const navMobileBlock = document.getElementById("navMobileBlock");

function handleHideShowNavListMobile(e) {
  navMobileBlock?.classList?.toggle("d-none");
}

navBurger.addEventListener("click", handleHideShowNavListMobile);
closeNavList.addEventListener("click", handleHideShowNavListMobile);

// FOOTER
const cateLists = document.querySelectorAll(".cate-list");

function handleHideShowList(event) {
  if (window.innerWidth <= 768) {
    const cateList = event.target.closest(".cate-list");

    const liTagChilds = cateList.querySelectorAll("li");

    if (liTagChilds?.[0].style.display != "block") {
      liTagChilds.forEach((li) => {
        li.style.display = "block";
      });
    } else {
      liTagChilds.forEach((li) => {
        li.style.display = "none";
      });
    }

    cateList
      .getElementsByClassName("icon-down")?.[0]
      ?.classList?.toggle("d-none");
    cateList
      .getElementsByClassName("icon-up")?.[0]
      ?.classList?.toggle("d-none");
  }
}

cateLists?.forEach((item) =>
  item.addEventListener("click", handleHideShowList)
);
