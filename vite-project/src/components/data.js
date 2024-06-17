import { useTranslation } from 'react-i18next';

function data() {
    const { t } = useTranslation();
    const { l1, l2, l3, l4, l5, l6, l7, l8, l9, para, para1 } = t("description");
    const countries = [
        {
            image: "/images/Brazil.jpg",
            title: l1
        },
        {
            image: "/images/Norway.jpg",
            title: l2,
        },
        {
            image: "/images/France.jpg",
            title: l3,
        },
        {
            image: "/images/Japan.jpg",
            title: l4,
        },
        {
            image: "/images/China.jpg",
            title: l5,
        },
        {
            image: "/images/Brazil.jpg",
            title: l6
        },
        {
            image: "/images/Norway.jpg",
            title: l7
        },
        {
            image: "/images/France.jpg",
            title: l8
        },
        {
            image: "/images/China.jpg",
            title: l9
        },
    ];

    return countries;
}

export default data
