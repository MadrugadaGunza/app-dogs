import React from 'react'
import { GET_PHOTOS } from '../../services/photo';
import Card from './Card';

const Feed = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const findAllNews = async () => {
            try {
                setLoading(true);
                setError(null);
                const { url, options } = GET_PHOTOS();
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        findAllNews();
    }, []);

    if (loading) {
        return (
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                <h1 className='title'>Loading...</h1>
            </section>
        )
    }

    if (error) {
        return (
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                <h1 className='title-error'>Erro, tente novamente :(</h1>
            </section>
        )
    }

    return (
        <section className='feed'>
            {data && data.map((photos) => <Card key={photos.id} data={photos} />)}
        </section>
    )
}

export default Feed
