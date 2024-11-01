// styles
import styles from './FeedPhotos.module.css';
// dependencies
import React from 'react';
import useFetch from './../../hooks/useFetch';
import { PHOTOS_GET } from '../../services/photo';
// components
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../../helpers/Loading';

const FeedPhotos = () => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const findAllPhotos = async () => {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            request(url, options);
        }
        findAllPhotos();
    }, [request]);

    if (loading) return <Loading />
    if (error) return <h1 className='title'>Erro: {error}</h1>
    if (data)
        return (
            <ul className={styles.feed}>
                {data && data.map((photo) => <FeedPhotosItem key={photo.id} photo={photo} />)}
            </ul>
        )
    else return null;
}

export default FeedPhotos
