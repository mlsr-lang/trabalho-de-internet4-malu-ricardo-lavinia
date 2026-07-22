/* ==========================================================================
   script.js
   A navegação entre páginas agora é feita com <a href="..."> reais
   (ver index.html, biblioteca.html, resultados.html, etc.), então este
   arquivo cuida apenas do que continua sendo dinâmico no cliente:
   - montar os resultados de pesquisa (mock) a partir da query string
   - montar a lista de cursos (mock) a partir da categoria escolhida
   ========================================================================== */

(() => {
  function getParam(nome) {
    return new URLSearchParams(window.location.search).get(nome) || '';
  }

  /* ---------- Página: resultados.html ---------- */
  function montarResultados() {
    const tabela = document.getElementById('tabelaResultados');
    if (!tabela) return;

    const termo = getParam('q') || 'inteligência artificial';
    const campoBusca = document.getElementById('searchResultado');
    if (campoBusca) campoBusca.value = termo;

    tabela.innerHTML = `
      <tr><td><a href="#">"${termo}" — Fundamentos e aplicações</a></td><td>CCSA</td></tr>
      <tr><td><a href="#">"${termo}" — Práticas avançadas</a></td><td>CCEN</td></tr>
      <tr><td><a href="#">"${termo}" — Estudos de caso</a></td><td>CT</td></tr>
    `;
  }

  /* ---------- Página: curso-unidade.html ---------- */
  function montarCursosPorCategoria() {
    const lista = document.getElementById('listaCursosResultado');
    if (!lista) return;

    const categoria = getParam('categoria') || 'Graduação';
    const nomeUnidade = document.getElementById('nomeUnidade');
    if (nomeUnidade) {
      nomeUnidade.textContent = `CCHSA - CAVN - COLÉGIO AGRÍCOLA VIDAL DE NEGREIROS · ${categoria}`;
    }

    lista.innerHTML = `
      <div class="curso-item d-flex flex-wrap align-items-center gap-3 px-4 py-3 mb-2">
        <strong>Curso de ${categoria} (exemplo)</strong>
        <span class="badge rounded-pill text-bg-warning">${categoria}</span>
        <span class="badge rounded-pill text-bg-warning">A Distância</span>
      </div>
      <div class="curso-item d-flex flex-wrap align-items-center gap-3 px-4 py-3 mb-2">
        <strong>Curso Avançado em ${categoria}</strong>
        <span class="badge rounded-pill text-bg-warning">${categoria}</span>
      </div>
    `;
  }

  /* ---------- Página: login (simulação, usada em várias páginas) ---------- */
  document.querySelectorAll('[data-action="login"]').forEach((botao) => {
    botao.addEventListener('click', () => alert('Área de login (simulação)'));
  });

  document.querySelector('[data-action="outras-bibliotecas"]')?.addEventListener('click', (evento) => {
    evento.preventDefault();
    alert('Outras bibliotecas (simulação)');
  });

  montarResultados();
  montarCursosPorCategoria();
})();
