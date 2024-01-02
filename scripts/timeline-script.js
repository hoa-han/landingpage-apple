"use strict";

let randomColor = Math.floor(Math.random() * 16777215).toString(16);

const mockData = {
  id: "e501ef7b-c710-405d-0885-08db3641925b",
  name: "Phóng sự cưới hỏi ngày 22/5 24/5",
  orderCode: "SunnyYE9T0IBGVTTMDS4",
  address: "Hồng lĩnh",
  content:
    "- 2 thợ quay\n- Flycam\n- Video thời lượng 3-4p\n- Video full \n- 1 thợ chụp",
  description: "\n        ",
  price: 8500000,
  paidAmount: 8500000,
  jobDates: "22/05/2023 - 24/05/2023",
  userJobDtos: [
    {
      userId: "dadc9d93-d5fc-42a1-bb8f-08db363f7ad3",
      username: "thelong",
      fullName: "Nguyễn Thế Long",
      email: "thelong12@gmail.com",
      phone: "0967000440",
      roleInJob: null,
      salaryOnProfit: 0,
      jobId: "e501ef7b-c710-405d-0885-08db3641925b",
    },
    {
      userId: "fffa2938-7512-43c6-f3db-08db36454cff",
      username: "diem",
      fullName: "Nguyễn Văn Điểm",
      email: "diem@gmail.com",
      phone: "0877548866",
      roleInJob: null,
      salaryOnProfit: 0,
      jobId: "e501ef7b-c710-405d-0885-08db3641925b",
    },
    {
      userId: "9141d988-43e0-4bf2-1b02-08db3a61b48e",
      username: "tranhoang",
      fullName: "Trần Hoàng",
      email: "tranhoang@gmail.com",
      phone: "0354361136",
      roleInJob: "",
      salaryOnProfit: 0,
      jobId: "e501ef7b-c710-405d-0885-08db3641925b",
    },
    {
      userId: "73f64ed6-5730-41d8-d624-08db5547a27f",
      username: "Hongngoc06",
      fullName: "Phan Hồng Ngọc",
      email: "Hoangthuylinh1612yt@gmail.com",
      phone: "0364878024",
      roleInJob: "Hậu kỳ",
      salaryOnProfit: 0,
      jobId: "e501ef7b-c710-405d-0885-08db3641925b",
    },
    {
      userId: "2f0c059e-bd8b-4000-5bd0-08db5ec0ae20",
      username: "meit",
      fullName: "Nguyễn Như Ý",
      email: "flowerrd16@gmai.com",
      phone: "0384941417",
      roleInJob: "",
      salaryOnProfit: 0,
      jobId: "e501ef7b-c710-405d-0885-08db3641925b",
    },
  ],
  deliveryDate: "04/06/2023",
  jobType: "Phóng sự cưới",
  status: "Hoàn thành",
  customerName: "Phan khang",
  customerPhone: "0976662505",
  isShareInfo: false,
  isShareBillInfo: false,
  jobLinks: [
    {
      id: "c01937ee-9bde-439c-6d69-08db6899e844",
      shortLink: "link ảnh gốc",
      longLink:
        "https://lightroom.adobe.com/shares/ca3bdadeb6bc43dd9fec9fc270c12052",
      status: "Đã xong",
    },
    {
      id: "19c16c60-9f4a-43ae-6d6a-08db6899e844",
      shortLink: "video higtlight ",
      longLink:
        "https://drive.google.com/file/d/1NjRoP3KTjGllJWT0ueL1siAf28i095su/view?usp=share_link",
      status: "đã xong ",
    },
    {
      id: "2c5f3948-a4eb-4e2c-6d6b-08db6899e844",
      shortLink: "video dài ",
      longLink:
        "https://drive.google.com/open?id=1NPgklob_Z5Qadnt6lv1xhAa1zD8N5d75&usp=drive_fs",
      status: "đã xong ",
    },
    {
      id: "7bbf90ce-d449-4cb4-6d6c-08db6899e844",
      shortLink: "video hightlight Fix",
      longLink:
        "https://drive.google.com/open?id=1aK1UeT8Lgn-ANRA4O6EBds2T9i3Ydt5U&authuser=thelong12%40gmail.com&usp=drive_fs",
      status: "đã xong",
    },
  ],
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
  paymentInfoAdmin:
    "\n<strong> Thông tin thanh toán: </strong>\nTên tài khoản: Nguyễn Thị Ánh Nguyệt\nSố tài khoản: 3702383823086 AGRIBANK\n",
  linkQRCode:
    "https://api.vietqr.io/image/VBA-3702383823086-Y4snyhb.jpg?amount=0&addInfo=SunnyYE9T0IBGVTTMDS4",
};
