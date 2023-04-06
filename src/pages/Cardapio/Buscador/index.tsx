import { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default memo(function Buscador({ busca, setBusca }: Props) {
  const icon = useMemo(() => {
    return <CgSearch size={20} color="#4C4D5E" />;
  }, []);
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
        type="text"
        placeholder='Buscar...'
      />
      {icon}
    </div>
  );
});