import React, { useState } from 'react';
import styles from './App.module.css';
import boloLimao from './assets/bolo-limao.jpg';
import boloMorango from './assets/bolo-morango.jpg';
import boloBrigadeiro from './assets/bolo-brigadeiro.jpg';

function App() {
  const [actualId, setActualId] = useState(1);
  const [dadosProduto, setDadosProduto] = useState({});

  const produtos = [
    {
      codigo: 1,
      descricao: 'Bolo de Brigadeiro',
      imagem: boloBrigadeiro,
      estoque: 6,
      valor: 53.5,
      especificacoes: [
        'Cobertura de brigadeiro',
        'Recheio de chocolate',
        'Muito saboroso',
      ],
      avaliacoes: [
        {
          nome: 'Maria',
          comentario: 'Fiz em casa e todos gostaram',
        },
      ],
    },
    {
      codigo: 2,
      descricao: 'Bolo de Limão',
      imagem: boloLimao,
      estoque: 3,
      valor: 22.0,
      especificacoes: ['Cobertura de Mousse de limão', 'Recheio de limão'],
      avaliacoes: [
        {
          nome: 'Alex',
          comentario: 'Vale a pena',
        },
        {
          nome: 'Gilberto',
          comentario: 'Adorei',
        },
      ],
    },
    {
      codigo: 3,
      descricao: 'Bolo de Morango',
      imagem: boloMorango,
      estoque: 2,
      valor: 41.5,
      especificacoes: [
        'Cobertura de creme',
        'Recheio de morango',
        'Pedaços de morango',
      ],
      avaliacoes: [
        {
          nome: 'João',
          comentario: 'Muito bom! 10/10',
        },
      ],
    },
  ];

  const handleChangeRadio = ({ target }) => {
    setActualId(target.id);
  };

  React.useEffect(() => {
    produtos.forEach((produtoAtual) => {
      if (produtoAtual.codigo == actualId) {
        setDadosProduto(produtoAtual);
      }
    });
  }, [actualId]);

  React.useEffect(() => {
    console.log(dadosProduto);
  });

  return (
    <>
      <ul className={styles.tabela}>
        <li className={styles.row}>
          <p className={styles.label}></p>
          <p className={styles.label}>Foto</p>
          <p className={styles.label}>Código</p>
          <p className={styles.label}>Descrição</p>
          <p className={styles.label}>Em estoque</p>
          <p className={styles.label}>Valor unitário</p>
        </li>

        {produtos.map((produtoAtual) => (
          <>
            <label htmlFor={produtoAtual.codigo}>
              <li className={styles.row} key={produtoAtual.codigo}>
                <div className={styles.dataCell}>
                  <input
                    type='radio'
                    name={produtoAtual.codigo}
                    checked={actualId == produtoAtual.codigo}
                    onChange={handleChangeRadio}
                    id={produtoAtual.codigo}
                  />
                </div>
                <div className={styles.fotoContainer}>
                  <img
                    className={' ' + styles.foto}
                    src={produtoAtual.imagem}
                    alt={produtoAtual.descricao}
                  />
                </div>
                <p className={styles.dataCell}>{produtoAtual.codigo}</p>
                <p className={styles.dataCell}>{produtoAtual.descricao}</p>
                <p className={styles.dataCell}>{produtoAtual.estoque}</p>
                <p className={styles.dataCell}>
                  R$ {produtoAtual.valor.toFixed(2).replace('.', ',')}
                </p>
              </li>
            </label>
          </>
        ))}
      </ul>

      <h2 className={styles.descricaoTitulo}>Descrição</h2>

      <h3 className={styles.caracteristicasTitulo}>
        Características do Produto
      </h3>

      <label className={styles.especificacoesTitulo} htmlFor='especificacoes'>
        Especificações
      </label>
      {dadosProduto.codigo && (
        <div key={dadosProduto.codigo}>
          <ul className={styles.especificacoesList} id='especificacoes'>
            {dadosProduto.especificacoes.map((especificacao) => (
              <li key={especificacao}>{especificacao}</li>
            ))}
          </ul>

          <h3 className={styles.avaliacoesTitulo}>Avaliação do produto</h3>
          {dadosProduto.avaliacoes.map((avaliacao) => (
            <dl className={styles.avaliacoesList}>
              <div>
                <dt>{avaliacao.nome} disse:</dt>
                <dd>{avaliacao.comentario}</dd>
              </div>
            </dl>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
