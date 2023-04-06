import styles from './Pratos.module.scss';
import { lazy } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';

const TagsPrato = lazy(() => import('components/TagsPrato'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function Pratos() {
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato) return <NotFound />;

  const navigate = useNavigate();

  return (
    <PaginaPadrao>
      <button
        className={styles.voltar}
        onClick={() => navigate(-1)}
      >
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
        </div>
        <TagsPrato {...prato} />
      </section>
    </PaginaPadrao>
  );
}
