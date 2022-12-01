import Web from "../assets/Images/whatwedo/wd.png";
import Digital from "../assets/Images/whatwedo/dm.png";
import Ui from "../assets/Images/whatwedo/uiux.png";
import Graphic from "../assets/Images/whatwedo/gd.png";
import Content from "../assets/Images/whatwedo/cw.png";
import Seo from "../assets/Images/whatwedo/seo.png";
import { BsArrowRight } from "react-icons/bs";

const data = [
    {
        id:1,
        image : <img src={Web} />,
        title : 'Development',
        desc : 'Lorem ipsum dolor sit amet consectetur. Amet venenatis vitae sed nulla lectus ac orci. Dictum nunc velit vel amet feugiat.',
        button : 'View More',
        icon : <BsArrowRight />
    },
    {
        id:2,
        image : <img src={Digital} />,
        title : 'Digital Marketing',
        desc : 'Lorem ipsum dolor sit amet consectetur. Amet venenatis vitae sed nulla lectus ac orci. Dictum nunc velit vel amet feugiat.',
        button : 'View More',
        icon : <BsArrowRight />
    },
    {
        id:3,
        image : <img src={Ui} />,
        title : 'Ui/Ux Design',
        desc : 'Lorem ipsum dolor sit amet consectetur. Amet venenatis vitae sed nulla lectus ac orci. Dictum nunc velit vel amet feugiat.',
        button : 'View More',
        icon : <BsArrowRight />
    },
    {
        id:4,
        image : <img src={Graphic} />,
        title : 'Graphic Design',
        desc : 'Lorem ipsum dolor sit amet consectetur. Amet venenatis vitae sed nulla lectus ac orci. Dictum nunc velit vel amet feugiat.',
        button : 'View More',
        icon : <BsArrowRight />
    },
    {
        id:5,
        image : <img src={Content} />,
        title : 'Content Writing',
        desc : 'Lorem ipsum dolor sit amet consectetur. Amet venenatis vitae sed nulla lectus ac orci. Dictum nunc velit vel amet feugiat.',
        button : 'View More',
        icon : <BsArrowRight />
    },
    {
        id:6,
        image : <img src={Seo} />,
        title : 'SEO',
        desc : 'Lorem ipsum dolor sit amet consectetur. Amet venenatis vitae sed nulla lectus ac orci. Dictum nunc velit vel amet feugiat.',
        button : 'View More',
        icon : <BsArrowRight />
    }
]

export default data;