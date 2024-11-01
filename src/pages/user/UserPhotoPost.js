import styles from './UserPhotoPost.module.css';
import React from 'react';
import useFetch from './../../hooks/useFetch';
import { PHOTO_POST } from '../../services/photo';
import { useNavigate } from 'react-router-dom';
// components
import Input from './../../components/forms/Input';
import Button from './../../components/forms/Button';

const UserPhotoPost = () => {
    const [nome, setNome] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [img, setImg] = React.useState({});
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('idade', idade);
        formData.append('peso', peso);
        formData.append('img', img.raw);
        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);
        await request(url, options);
    }

    const handleImgChange = ({ target }) => {
        setImg({
            raw: target.files[0],
            preview: URL.createObjectURL(target.files[0]),
        })
    }

    React.useEffect(() => {
        if (data) navigate('/conta');
    }, [data, navigate])

    if (error) return <h1 className='title'>Erro: {error}</h1>

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label='Nome' type='text' name='nome' id='nome' placeholder='Digite o nome'
                    value={nome} onChange={({ target }) => setNome(target.value)}
                />
                <Input label='Idade' type='number' name='idade' id='idade' placeholder='Digite a idade'
                    value={idade} onChange={({ target }) => setIdade(target.value)}
                />
                <Input label='Peso' type='number' name='peso' id='peso' placeholder='Digite o peso'
                    value={peso} onChange={({ target }) => setPeso(target.value)}
                />
                <input type='file' id='img' name='img' className='input-file'
                    onChange={handleImgChange}
                />
                {loading ? <Button disabled>Postando...</Button> : <Button>Postar</Button>}
            </form>
            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    >
                    </div>
                )
                }
            </div>
        </section>
    )
}

export default UserPhotoPost
