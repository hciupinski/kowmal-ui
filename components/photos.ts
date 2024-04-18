const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    {id: "8gVv6nxq6gY", width: 1080, height: 800},
    {id: "Dhmn6ete6g8", width: 1080, height: 1620},
    {id: "RkBTPqPEGDo", width: 1080, height: 720},
    {id: "Yizrl9N_eDA", width: 1080, height: 721},
    {id: "KG3TyFi0iTU", width: 1080, height: 1620},
    {id: "Jztmx9yqjBw", width: 1080, height: 607},
    {id: "-heLWtuAN3c", width: 1080, height: 608},
    {id: "xOigCUcFdA8", width: 1080, height: 720},
    {id: "1azAjl8FTnU", width: 1080, height: 1549},
    {id: "ALrCdq-ui_Q", width: 1080, height: 720},
    {id: "twukN12EN7c", width: 1080, height: 694},
    {id: "9UjEyzA6pP4", width: 1080, height: 1620},
    {id: "sEXGgun3ZiE", width: 1080, height: 720},
    {id: "S-cdwrx-YuQ", width: 1080, height: 1440},
    {id: "q-motCAvPBM", width: 1080, height: 1620},
    {id: "Xn4L310ztMU", width: 1080, height: 810},
    {id: "iMchCC-3_fE", width: 1080, height: 610},
    {id: "X48pUOPKf7A", width: 1080, height: 160},
    {id: "GbLS6YVXj0U", width: 1080, height: 810},
    {id: "9CRd1J1rEOM", width: 1080, height: 720},
    {id: "xKhtkhc9HbQ", width: 1080, height: 1440},
];

const photosSrc = [
    {id: '331732592_141272072184444_3387136078184038547_n.jpg', width: 640, height: 375},
    {id: '331741930_563575835538705_8065915801130473358_n.jpg', width: 640, height: 322},
    {id: '331742717_2930038823796713_542447237020906566_n.jpg', width: 640, height: 365},
    {id: '331746589_677149057520303_8486251040142590504_n.jpg', width: 640, height: 1101},
    {id: '331758891_1191127714872123_6729687756612481684_n.jpg', width: 640, height: 386},
    {id: '374679783_3118298945145338_5154446740066555297_n.jpg', width: 640, height: 1006},
    {id: '374686842_3118298855145347_7707574073621565407_n.jpg', width: 640, height: 338},
    {id: '374687971_3118298961812003_8851171575930480624_n.jpg', width: 640, height: 256},
    {id: '374737454_3118298878478678_5362385646195107803_n.jpg', width: 640, height: 305},
    {id: '374767849_3118298838478682_8880248769093104414_n.jpg', width: 640, height: 427},
    {id: '375067377_3118298918478674_3393410689280540197_n.jpg', width: 640, height: 427},
    {id: '418844797_3192746614367237_7588450478301126399_n.jpg', width: 640, height: 436},
    {id: '418864670_3192746517700580_1535888547674603622_n.jpg', width: 640, height: 1138},
    {id: '418873407_3192746514367247_1850768944287942490_n.jpg', width: 640, height: 398},
    {id: '418920249_3192746507700581_6432676410102865917_n.jpg', width: 640, height: 319},
    {id: '418929016_3192746611033904_5904033388979786948_n.jpg', width: 640, height: 427},
    {id: '419201812_3192746607700571_4107118466023361653_n.jpg', width: 640, height: 427 },
    {id: '421901058_3207121099596455_7343953857203521712_n.jpg', width: 640, height: 299},
    {id: '421909722_3207121096263122_3313087266988703889_n.jpg', width: 640, height: 248},
    {id: '421935951_3210155672626331_9094750742332743673_n.jpg', width: 640, height: 435},
    {id: '421951282_3210155535959678_3110171945485695014_n.jpg', width: 640, height: 886},
    {id: '421960859_3210155642626334_2769971892413183545_n.jpg', width: 640, height: 392},
    {id: '421965980_3210155782626320_7415036135834121562_n.jpg', width: 640, height: 949},
    {id: '424579277_3207121079596457_851282741115247076_n.jpg', width: 640, height: 1060},
    {id: '424667068_3210155529293012_466835859241701482_n.jpg', width: 640, height: 333},
    {id: '424742521_3207121179596447_3011092062085178110_n.jpg', width: 640, height: 822},
    {id: '424758806_3210155542626344_8364454985552306660_n.jpg', width: 640, height: 1123},
    {id: '424975044_3210155665959665_5577548686374192544_n.jpg', width: 640, height: 1120},
    {id: '434033711_3247013025607262_3849736458293091433_n.jpg', width: 640, height: 396},
    {id: '434090592_3247013028940595_8285795266966643458_n.jpg', width: 640, height: 427},
    {id: '434430258_3247013032273928_2082627243889247363_n.jpg', width: 640, height: 365},
    {id: '434460209_3247013112273920_3356785809039171459_n.jpg', width: 640, height: 314},
    {id: '434472890_3247013135607251_3839074510639486838_n.jpg', width: 640, height: 427},
]

const photos = photosSrc.map((photo) => ({
    src: `/img_thumb/${photo.id}`,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.width / photo.height) * breakpoint);
        return {
            src: `/img_thumb/${photo.id}`,
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;