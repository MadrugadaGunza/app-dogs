import React from 'react'
import { POST_PHOTOS } from '../../services/photo';
import { useNavigate } from 'react-router-dom';

const UserPost = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const [banner, setBanner] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = window.localStorage.getItem(`token`);
        console.log({ banner, title, description, token })
        try {
            setError(null);
            setLoading(true);
            const { url, options } = POST_PHOTOS({ banner, title, description, token });
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result);
            navigate('/conta');
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

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
        <section className='container'>
            <h1 className='title'>Formulario de Postagem</h1>
            <form onSubmit={handleSubmit}>

                <input type='text' name='title' placeholder='Insira o título da postagem'
                    value={title} onChange={({ target }) => setTitle(target.value)}
                />
                <textarea rows={6} name='text' placeholder='Insira a descrição da postagem'
                    value={description} onChange={({ target }) => setDescription(target.value)}
                ></textarea>
                <input type='text' name='banner' placeholder='Insira a imagem da postagem'
                    value={banner} onChange={({ target }) => setBanner(target.value)}
                />
                {loading ? <button disabled>Postando...</button> : <button>Postar</button>}
            </form>
        </section>
    )
}

export default UserPost
