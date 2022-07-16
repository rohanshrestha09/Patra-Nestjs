const db: { id: number; name: string; imgurl: string; mesg: string[] }[] = [
  {
    id: 1,
    name: "rohanshrestha.rs",
    imgurl:
      "https://th.bing.com/th/id/R.97afcdac68ce28f01c3705edb834097d?rik=AZtrVmXQr2iJmg&pid=ImgRaw&r=0",
    mesg: [
      "Proident enim commodo",
      "Aliqua eu eu do enim exercitation incididunt esse officia incididunt tempor.",
      "cillum aliquip labore non proident do.",
      "in amet ipsum",
      "Amet dolor veniam ad sint.",
      "Mollit duis non ut nostrud duis consectetur elit proident.",
      "Cupidatat anim est fugiat consectetur proident anim.",
      "Et veniam reprehenderit dolore nisi.",
      "Et incididunt ea ut officia sunt anim ut dolor reprehenderit aliqua enim do commodo mollit.",
      "Aliqua aliqua elit nulla commodo magna adipisicing elit incididunt anim reprehenderit aliquip deserunt officia quis.",
    ],
  },
  {
    id: 2,
    name: "markruf.py",
    imgurl:
      "https://th.bing.com/th/id/OIP.Ygwe7YdOgbhHqV9s_-OkZQHaGV?pid=ImgDet&rs=1",
    mesg: [
      "Est velit ullamco sint commodo",
      "Nostrud elit exercitation enim occaecat ",
      " ex qui incididunt ipsum proident amet.",
      "aliqua labore anim nostrud deserunt fugiat duis laboris commodo.",
      "Voluptate magna nostrud id nulla.",
      "",
      "Tempor consectetur ex veniam dolore deserunt aliquip est sunt consectetur.",
      "Voluptate laborum culpa laborum adipisicing deserunt nisi magna cillum.",
      "Ad Lorem dolor do anim.",
    ],
  },
  {
    id: 3,
    name: "tonyzes.c",
    imgurl:
      "https://th.bing.com/th/id/R.347e375cd640aa727b9b05fa873fd2e7?rik=ek7uzBK1iSQgrw&pid=ImgRaw&r=0",
    mesg: [
      "In non consectetur esse est",
      " nulla officia sunt voluptate occaecat occaecat sit.",
      "Ad deserunt dolore elit do laborum amet est et aliquip deserunt in ullamco.",
      "Cillum ullamco eiusmod eiusmod eu.",
      "Duis ipsum sint anim fugiat amet est labore ea non.",
    ],
  },
  {
    id: 4,
    name: "angeline.go",
    imgurl:
      "https://th.bing.com/th/id/OIP.yNSj0in0KrnQVDW7l3L4bgAAAA?pid=ImgDet&rs=1",
    mesg: [
      "Anim ut proident sint qui ipsum ",
      "nostrud elit dolor mollit amet est dolor Lorem labore.",
      "Cillum minim ex pariatur veniam id non reprehenderit ullamco commodo.",
      "Nostrud eiusmod proident nisi in amet ad laborum ipsum deserunt qui et culpa elit.",
      "Duis nostrud eiusmod nulla eiusmod eiusmod aliqua pariatur minim dolore aliqua adipisicing ipsum.",
    ],
  },
  {
    id: 5,
    name: "walter_white.php",
    imgurl: "https://getwallpapers.com/wallpaper/full/f/7/e/56284.jpg",
    mesg: [
      "Voluptate magna nostrud id nulla.",
      "Est velit ullamco sint commodo",
      "Nostrud elit exercitation enim occaecat ",
      " ex qui incididunt ipsum proident amet.",
      "aliqua labore anim nostrud deserunt fugiat duis laboris commodo.",
      "",
      "Tempor consectetur ex veniam dolore deserunt aliquip est sunt consectetur.",
      "Voluptate laborum culpa laborum adipisicing deserunt nisi magna cillum.",
      "Ad Lorem dolor do anim.",
    ],
  },
  {
    id: 6,
    name: "jessie.dart",
    imgurl:
      "https://th.bing.com/th/id/R.692a48bf148fe115d68042857cd76bd2?rik=EpZ1nz6%2f6NFJeQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f165531-anime_boys-Naruto_Shippuuden-daggers-Uzumaki_Naruto.jpg&ehk=TUFEZyQW5zD2ydoEx6Onf%2fF3YVuV%2fzWBuTyy1eWoOSI%3d&risl=&pid=ImgRaw&r=0",
    mesg: [
      "Mollit et nulla cupidatat veniam proident consectetur ullamco anim et.",
      "Reprehenderit et cillum culpa fugiat dolor sit minim.",
      "Cillum commodo deserunt mollit ut Lorem laboris deserunt ad esse qui aute esse.",
      "Excepteur pariatur deserunt ex eu labore proident velit consequat.",
      "Incididunt consequat veniam dolore elit consectetur duis anim exercitation deserunt aute reprehenderit irure veniam.",
    ],
  },
  {
    id: 7,
    name: "sophie.json",
    imgurl:
      "https://lh5.googleusercontent.com/proxy/i6FQngKOsX7sbmCSgLj1V3qOxtZS00oJJ2N3avS7B0a1E4Z1x9tUCHpGKxMZnir-eOFuKZj5FDb7hpiPvKKsid1lighSXWLc_NJo6wfl2SQwP5P8sXI3CSVImokK1JDYJ_oLzgCwQ-9ARQ=w1200-h630-p-k-no-nu",
    mesg: [
      "cillum incididunt reprehenderit",
      "Esse consequat laboris deserunt nulla ",
      " dolore Lorem nostrud sit.",
      "Id ut est aliqua sit culpa.",
      "Ad elit et quis eiusmod magna voluptate mollit.",
      "In excepteur laborum nulla id.",
    ],
  },
  {
    id: 8,
    name: "sid.txt",
    imgurl:
      "https://th.bing.com/th/id/R.cef1c0ad51bf66cf759ca8929d08f8d0?rik=hlFGVg%2flnIhuCw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ptk_ooL9LfM%2fTiWHrHjuzlI%2fAAAAAAAAAFA%2fOcaJ6YhjJt4%2fs1600%2f193918_113278248752855_100002120422793_118702_6106822_o.jpg&ehk=c%2f1NV%2fUJQMef86RqNy304km9RHjZGHXLhluYYa3dr7w%3d&risl=&pid=ImgRaw&r=0",
    mesg: [
      "Tempor consectetur occaecat elit magna.",
      "Sunt non sunt et consectetur aute sint eiusmod eu do nostrud commodo est sit aute.",
      "Adipisicing incididunt voluptate incididunt veniam eu reprehenderit.",
      "Laborum proident cillum esse nulla consectetur irure.",
    ],
  },
];

export default db;
