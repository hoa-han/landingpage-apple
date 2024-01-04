"use strict";

const mockData = {
  jobTimeLines: [
    {
      id: "84f763b3-076a-4823-ebab-08db68a16178",
      date: "2023-05-22T00:00:00",
      startTime: "06:00:00",
      endTime: "07:00:00",
      timeLine: "06:00 - 07:00",
      description: "cô dâu make",
    },
    {
      id: "fdbff8aa-7d52-48f6-ebac-08db68a16178",
      date: "2023-05-22T00:00:00",
      startTime: "07:00:00",
      endTime: "12:00:00",
      timeLine: "07:00 - 12:00",
      description:
        "Số nhà 9 ngõ 21B đường nguyễn đổng chi (ngõ đối diện nhà hàng hoàng quân)",
    },
    {
      id: "faa216bd-a1d7-410e-ebad-08db68a16178",
      date: "2023-05-24T00:00:00",
      startTime: "09:00:00",
      endTime: "10:00:00",
      timeLine: "09:00 - 10:00",
      description: "17 đường trần phú thị xã hồng lĩnh",
    },
    {
      id: "03c37e56-12c1-408e-ebae-08db68a16178",
      date: "2023-05-24T00:00:00",
      startTime: "10:00:00",
      endTime: "13:00:00",
      timeLine: "10:00 - 13:00",
      description: "đưa dâu",
    },
  ],
};

const timelineSection = document.getElementById("timeline");

function renderTimeline(timelinedata) {
  timelinedata.forEach((data) => {
    let randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    const timelineDetail = document.createElement("div");
    timelineDetail.classList.add("timeline-detail");

    const timelineDetailDate = document.createElement("div");
    timelineDetailDate.classList.add("timeline-detail-date");

    timelineDetailDate.style.setProperty("--color", `#${randomColor}`);

    timelineDetailDate.textContent = data?.date
      ? new Date(data.date).toLocaleString()?.slice(9, 18)
      : "";

    const timelineDetailInfo = document.createElement("div");
    timelineDetailInfo.innerHTML = ` 
    <div class="timeline-detail-time">${
      data?.timeLine ? data?.timeLine : ""
    }</div>
    <p>${data?.description ? data?.description : ""}</p>`;

    timelineDetail.insertAdjacentElement("beforeend", timelineDetailDate);
    timelineDetail.insertAdjacentElement("beforeend", timelineDetailInfo);
    timelineSection.insertAdjacentElement("beforeend", timelineDetail);
  });
}

renderTimeline(mockData.jobTimeLines);
