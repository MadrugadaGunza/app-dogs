// styles
import styles from './FeedModal.module.css';
// dependencies
import React from 'react'
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../services/photo';
// components
import Loading from '../../helpers/Loading';
import PhotoContent from '../photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
    }, [photo, request]);


    const dandleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalPhoto(null);
        }
    }

    return (
        <div className={styles.modal} onClick={dandleOutsideClick}>
            {error && <p>{error}</p>}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal
