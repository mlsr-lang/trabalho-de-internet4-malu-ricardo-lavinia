[README.md](https://github.com/user-attachments/files/30249394/README.md)
# SIGAA · Redesign com Bootstrap

Redesign do Portal Público do SIGAA (Sistema Integrado de Gestão de Atividades Acadêmicas) da UFPB, feito como trabalho da disciplina de Desenvolvimento Web Front-end. O objetivo foi pegar uma interface antiga, pouco responsiva e com navegação simulada em JavaScript, e reconstruí-la usando **Bootstrap 5**, com páginas reais interligadas por links e componentes nativos do framework.

## Tecnologias utilizadas

- **HTML5** semântico (`header`, `main`, `nav`, `footer`, `section`)
- **Bootstrap 5.3** (via CDN) — grid, navbar, cards, botões, tabelas, badges, formulários
- **Font Awesome 6** — ícones
- **CSS customizado** (`custom.css`) — restrito à identidade visual (cores da marca) e ao ajuste de proporção das fotos, que o Bootstrap não cobre nativamente
- **JavaScript** (`script.js`) — apenas para montar dados dinâmicos (resultados de busca simulados e lista de cursos por categoria); a navegação entre páginas usa `<a href="...">` reais, não mais JS escondendo `<section>`

## Estrutura do projeto

```
├── index.html                 → Página inicial
├── biblioteca.html            → Acervo da biblioteca (galeria + busca)
├── resultados.html            → Resultados de pesquisa + Pesquisa e Extensão
├── livros.html                → Resultados filtrados por Livros
├── artigos.html                → Resultados filtrados por Artigos
├── processos-seletivos.html   → Categorias de cursos/processos seletivos
├── curso-unidade.html         → Cursos de uma unidade específica
├── servicos.html               → Serviços administrativos e diplomas
├── custom.css                  → Identidade visual (cores, proporção de fotos)
├── script.js                   → Lógica de dados dinâmicos (busca, categorias)
├── ufpb.jpg
├── biblioteca central.png
├── biblioteca setorial do cchla.png
├── bibiloteca setorial do ccen.png
└── alunos.jpeg
```

## Páginas e navegação

O site tem **6 páginas reais**, interligadas por uma navbar fixa (Bootstrap `navbar`) presente em todas elas:

| Página | Conteúdo |
|---|---|
| `index.html` | Boas-vindas, foto do campus, atalhos para as demais páginas |
| `biblioteca.html` | Galeria de bibliotecas, filtros (Livros/Artigos) e busca no acervo |
| `resultados.html` | Tabela de resultados da pesquisa (Bootstrap `table`) + seção "Pesquisa e Extensão" |
| `livros.html` | Resultados filtrados por Livros (cópia de `resultados.html` sem a seção "Pesquisa e Extensão") |
| `artigos.html` | Resultados filtrados por Artigos (cópia de `resultados.html` sem a seção "Pesquisa e Extensão") |
| `processos-seletivos.html` | Banner e categorias de cursos (Técnico, Graduação, etc.) |
| `curso-unidade.html` | Lista de cursos da unidade, conforme a categoria escolhida |
| `servicos.html` | Serviços administrativos, consulta de diplomas e autenticação de documentos |

## Responsividade

Todas as páginas usam o sistema de grid do Bootstrap (`row`, `col-*`, `col-lg-*`, `col-md-*`) e classes utilitárias (`d-flex`, `flex-wrap`, `gap-*`, `g-*`), garantindo adaptação mobile-first: colunas empilham em telas pequenas, a navbar vira um menu colapsável (`navbar-toggler`) e os botões/cards se reorganizam em grades menores conforme o breakpoint.

## Antes e Depois

### Página Inicial

**Antes:** layout fixo em `px`, sem breakpoints reais, botões em grid CSS customizado que não se adaptava bem a telas pequenas, navegação simulada por `display:none`/`display:block` em JavaScript.

**Depois:** navbar Bootstrap fixa e responsiva, grid `row`/`col-lg-*` que empilha corretamente no mobile, botões com componentes nativos (`btn`, `btn-outline-primary`), foto real do campus com proporção controlada.

<img width="1600" height="568" alt="antes e depois home" src="https://github.com/user-attachments/assets/addab300-83e2-4d55-b4c7-4d8868605366" />

### Biblioteca

**Antes:** galeria de imagens com CSS manual (`flex`, `aspect-ratio` escritos à mão), busca sem `<form>` real, resultado tratado só via JavaScript.

**Depois:** galeria com `row`/`col-6` do Bootstrap, formulário HTML real (`<form method="get">`) que envia a busca por query string para `resultados.html`, sem depender de JS para navegar.

<img width="1600" height="571" alt="Antes e depois biblioteca" src="https://github.com/user-attachments/assets/8ee6016d-025e-47a6-87fe-fdc5aecc4057" /><img width="1600" height="574" alt="antes e depois processo seletivo" src="https://github.com/user-attachments/assets/11523aa6-92ea-4cef-8f8f-f387886f85de" />


### Processos Seletivos / Cursos

**Antes:** menu de categorias como botões JS que trocavam o conteúdo de uma `<section>` escondida, sem URL própria para cada categoria.

**Depois:** cada categoria é um link real (`<a href="curso-unidade.html?categoria=...">`) para uma página própria, o que permite compartilhar/favoritar o link de uma categoria específica — algo impossível na versão anterior.

<img width="1600" height="574" alt="antes e depois processo seletivo" src="https://github.com/user-attachments/assets/f553c621-567e-4c3a-bb47-6d52c2401682" />
<img width="1275" height="721" alt="pesquisa processo seletivo depois" src="https://github.com/user-attachments/assets/5f2c44f9-e402-4516-9056-896fad63ae76" />



### Resultados / Pesquisa e Extensão

**Antes:** a pesquisa integrada não existia como página própria — a busca só filtrava um bloco de texto dentro da mesma tela, sem uma seção dedicada a programas de pesquisa e extensão.

**Depois:** `resultados.html` tem uma tabela Bootstrap (`table`, `table-striped`) para os resultados e, abaixo, uma seção "Pesquisa e Extensão" com os mesmos atalhos do SIGAA original (Ações de Extensão, Cursos e Eventos, Pesquisadores, Bases de Pesquisa, Iniciação Científica etc.), em botões `btn-primary` organizados numa grade `row-cols-md-2` responsiva.

<img width="1600" height="570" alt="antes e depois pesquisa e extensao" src="https://github.com/user-attachments/assets/58eece39-538a-44a6-ac62-cbedb750cf46" />

### Livros e Artigos

**Antes:** os filtros "Livros" e "Artigos" da biblioteca só trocavam o termo pesquisado dentro da mesma tela de resultados, sem URL própria para cada filtro.

**Depois:** `livros.html` e `artigos.html` são páginas dedicadas (cópias de `resultados.html` sem a seção "Pesquisa e Extensão", que não faz sentido nesse contexto), cada uma com sua própria URL — permitindo voltar, compartilhar ou favoritar o filtro específico.

<img width="1600" height="571" alt="antes e depois livro" src="https://github.com/user-attachments/assets/da19ac72-1337-4816-bb14-80b5603b57d2" />

<img width="1600" height="574" alt="antes e depois artigo" src="https://github.com/user-attachments/assets/44ff21a1-72ca-4780-9cb0-d38e883dc74e" />


### Serviços

**Antes:** botões de serviços administrativos e diplomas em um grid CSS manual, sem hierarquia visual clara entre as duas áreas.

**Depois:** grid Bootstrap (`row-cols-2`/`row-cols-md-3`) para os botões administrativos e uma coluna dedicada, com botões grandes em destaque (`btn-outline-primary`), para consulta de diplomas e autenticação de documentos.

<img width="1600" height="575" alt="antes e depois academico" src="https://github.com/user-attachments/assets/41561c94-1e48-4b5f-8203-28bf15d95ca3" />

## Justificativa das melhorias de UI/UX

- **Consistência visual:** todos os botões, cards e tabelas agora seguem o mesmo sistema de design (Bootstrap), eliminando inconsistências de espaçamento e cor que existiam no CSS manual original.
- **Hierarquia visual mais clara:** uso de `lead`, `fw-semibold`, `text-sigaa` e tamanhos de fonte do Bootstrap para destacar títulos e chamadas de ação.
- **Navegação real:** páginas próprias com URLs específicas melhoram acessibilidade, permitem voltar/avançar pelo navegador e favoritar páginas — o site antigo simulava tudo em uma única página.
- **Responsividade de verdade:** o grid e os breakpoints do Bootstrap garantem que a interface não quebre em celulares, o que não era garantido no layout original.
- **Acessibilidade:** uso de `alt` descritivo nas imagens, `aria-label` nos botões de ícone e contraste adequado nas cores herdadas do Bootstrap.

## Como rodar localmente

Basta abrir `index.html` no navegador — não há dependência de servidor. Para melhor compatibilidade (evitar bloqueios de `file://`), recomenda-se usar a extensão **Live Server** do VS Code ou publicar em GitHub Pages/Vercel/Netlify.

## Deploy

Link do site publicado: `[adicionar aqui após o deploy]`

## Repositório

Link do repositório no GitHub: `[adicionar aqui]`

## Autor(es)

`[adicionar nome(s) e matrícula(s) aqui]`
