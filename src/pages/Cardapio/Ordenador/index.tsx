import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { memo, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type OpcoesOrdenador = typeof opcoes[number]['value']

interface Props {
    ordenador: OpcoesOrdenador,
    setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

export default memo(function Ordenador({ ordenador, setOrdenador }:Props) {
  const [ordenadorAberto, setOrdenadorAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
      })}
      onClick={() => setOrdenadorAberto(!ordenadorAberto)}
      onBlur={() => setOrdenadorAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar por...'}</span>
      <MdKeyboardArrowUp
        size={20}
        style={{
          transition: '300ms',
          transform: `rotate(${ordenadorAberto ? 0 : 180}deg)`}}
      />
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: ordenadorAberto
      })}>
        {opcoes.map(opcao => (
          <div
            className={classNames({
              [styles.ordenador__option]: true,
              [styles['ordenador__option--ativo']]: ordenador === opcao.value
            })}
            key={opcao.value}
            onClick={() => ordenador === opcao.value ? setOrdenador('') : setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
});
