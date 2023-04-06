import { Prato } from 'types/Prato';
import styles from './TagsPrato.module.scss';

export default function TagsPrato(prato: Prato) {
  return (
    <div className={styles.tags}>
      <div className={`${styles.tags__tipo} ${styles[`tags__tipo__${prato.category.label.toLowerCase()}`]}`}>
        {prato.category.label}
      </div>
      <div className={styles.tags__porcao}>
        {prato.size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
                Serve {prato.serving} pessoa{prato.serving > 1 ? 's' : ''}
      </div>
      <div className={styles.tags__valor}>
        {prato.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
    </div>
  );
}
