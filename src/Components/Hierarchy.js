// "use client";
// import React, { useEffect } from "react";
// import OrgChart from "@balkangraph/orgchart.js";
// // import OrgChart from "../../public/orgchart";
// const data = [
//   {
//     id: 1,
//     name: "Denny Curtis",
//     title: "CEO",
//     img: "https://cdn.balkan.app/shared/2.jpg",
//   },
//   {
//     id: 2,
//     pid: 1,
//     name: "Ashley Barnett",
//     title: "Sales Manager",
//     img: "https://cdn.balkan.app/shared/3.jpg",
//   },
//   {
//     id: 3,
//     pid: 1,
//     name: "Caden Ellison",
//     title: "Dev Manager",
//     img: "https://cdn.balkan.app/shared/4.jpg",
//   },
//   {
//     id: 4,
//     pid: 2,
//     name: "Elliot Patel",
//     title: "Sales",
//     img: "https://cdn.balkan.app/shared/5.jpg",
//   },
//   {
//     id: 5,
//     pid: 2,
//     name: "Lynn Hussain",
//     title: "Sales",
//     img: "https://cdn.balkan.app/shared/6.jpg",
//   },
//   {
//     id: 6,
//     pid: 3,
//     name: "Tanner May",
//     title: "Developer",
//     img: "https://cdn.balkan.app/shared/7.jpg",
//   },
//   {
//     id: 7,
//     pid: 3,
//     name: "Fran Parsons",
//     title: "Developer",
//     img: "https://cdn.balkan.app/shared/8.jpg",
//   },
//   {
//     id: 8,
//     pid: 7,
//     name: "Fran Parsons",
//     title: "Developer",
//     img: "https://cdn.balkan.app/shared/8.jpg",
//   },
// ];


// export default function Hierarchy() {
//     const nodeBinding = {
//         field_0: "name",
//         field_1: "title",
//         img_0: "img",
//       };
//       useEffect(() => {
//         new OrgChart(document.getElementById("chart-container"), {
//           template: "ula",
//           enableSearch: false,
//           mouseScrool: OrgChart.action.none,
//           nodeBinding: nodeBinding,
//           nodes: data,
//         });
//         OrgChart.templates.ula.field='<text width="145" font-size= "18px" fill="#039BE5" x="100" y="55">{val}</text><text width ="145" "multiline" style="font-size: 14px;" fill="#afafaf" x="100" y="76">{val}</text>'
//     }, []);

//         return <div id="chart-container" style={{ height: "100vh" }}></div>;
// }
