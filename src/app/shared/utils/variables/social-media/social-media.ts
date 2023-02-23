import { facebook, instagram, whatsapp } from "../svg/svg";
import { whatsappNumber } from "../whatsapp-number/whatsapp-number";

export const socialMedia: Array<any> = [
    {
        name: 'whatsapp',
        icon: whatsapp,
        url: `https://wa.me/${whatsappNumber}?text=Olá,%20Tenho%20Interesse%20em%20utilizar%20o%20espaco%20La%20Torre!`
    },
    {
        name: 'instagram',
        icon: instagram,
        url: 'https://www.instagram.com/espacolato/'
    },
    {
        name: 'facebook',
        icon: facebook,
        url: 'https://www.facebook.com/latorrefestaseventos/'
    }
]