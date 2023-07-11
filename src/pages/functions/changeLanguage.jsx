import { Button } from 'react-bootstrap';

export default function ChangeLanguage({ title, locale }) {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

    const handleLocaleChange = () => {
        const newUrl = baseUrl + '/' + locale;
        window.location.assign(newUrl);
    };

    return (
        <>
            <Button className="btn btn-outline-warning" onClick={handleLocaleChange}>{title}</Button>
        </>

    )
}
