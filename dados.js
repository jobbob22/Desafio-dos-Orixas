// Lista de orixás com suas respectivas características, oferendas, músicas e mais
const orixas = [
    {
        nome: "Ogum ⚔️", // Nome do orixá
        sincretismo: ["São Jorge"], // Sincretismo com santo católico
        cores: ["azul", "vermelho"], // Cores associadas ao orixá
        elementos: ["ferro", "fogo"], // Elementos relacionados
        dominio: "guerra, trabalho, justiça", // Áreas de domínio
        oferendas: ["espada", "bebida alcoólica", "carne vermelha"], // Oferendas típicas
        caracteristicas: "guerreiro, protetor, justo", // Características do orixá
        descricao: "Ogum, na Umbanda, é reverenciado como o orixá guerreiro, protetor e patrono de diversas atividades. Associado à coragem, à força e à justiça, ele é o senhor do ferro e das ferramentas, simbolizando a criação e a transformação. Ogum é o guia dos caminhos, abrindo portas e protegendo seus filhos. No sincretismo religioso, Ogum é frequentemente associado a São Jorge, o santo guerreiro.", // Descrição detalhada
        link: "https://www.significados.com.br/ogum/", // Link com mais informações
        imagem: "imagens/ogum09.jpg", // Caminho da imagem
        _tags: ["coragem, poder, determinação, estratégia, líder, conquista, proteção, força de vontade"], // Tags para busca
        musica: 'musicas/ogum.mp3' // Caminho para a música associada
    },
    {
        nome: "Oxum",
        sincretismo: "Nossa Senhora Aparecida",
        cores: ["amarelo", "ouro"],
        elementos: ["água doce"],
        dominio: "amor, fertilidade, beleza",
        oferendas: ["mel", "doces", "flores amarelas"],
        caracteristicas: "amorosa, maternal, sensual",
        descricao: "A orixá da beleza, da doçura e dos rios. É a protetora dos enamorados e simboliza a fertilidade e a sensualidade.",
        link: "https://www.significados.com.br/oxum/",
        imagem: "imagens/oxum09.jpg",
        _tags: ["beleza, amor, fertilidade, prosperidade, sensualidade, proteção materna, paz, abundância"], // Tags adicionadas para busca
        musica: 'musicas/aguas_de_oxum.mp3' // Aqui você adiciona o caminho para a música
    },
    
    {
        nome: "Xangô",
        sincretismo: "São João",
        cores: ["vermelho", "branco"],
        elementos: ["raios", "trovões"],
        dominio: "justiça, poder, lei",
        oferendas: ["melão", "quiabo", "azeite de dendê"],
        caracteristicas: "justo, forte, imponente",
        descricao: "O rei de Oyó, é o orixá dos raios e trovões, detentor de uma justiça inabalável. Com seu martelo, o oxê, ele estabelece a ordem e pune os injustos.",
        link: "https://www.significados.com.br/xango/",
        imagem: "imagens/xango06.jpeg",
        _tags: ["justiça, raios, autoridade, equilíbrio, sabedoria, decisão, líder, força moral"], // Tags adicionadas para busca
        musica: 'musicas/xango_meu_pai_de_fe.mp3' // Aqui você adiciona o caminho para a música
    
    },
    {
        nome: "Iansã⚔️",
        sincretismo: "Santa Bárbara",
        cores: ["amarelo ouro", "vermelho"],
        elementos: ["vento", "raios"],
        dominio: "guerras, transformações",
        oferendas: ["mel", "azeite de dendê", "pimenta"],
        caracteristicas: "guerreira, apaixonada, independente",
        descricao: "A orixá dos ventos, é a personificação da força impetuosa da natureza. Sua energia vibrante e indomável a torna a guerreira dos orixás, sempre pronta para a luta.",
        link: "https://www.significados.com.br/iansa-quem-e-a-deusa-dos-ventos-das-religioes-afro-brasileiras/",
        imagem: "imagens/iansa01.jpg",
        _tags: ["tempestade, vento, transformação, paixão, impulsividade, revolução, coragem feminina"], // Tags adicionadas para busca
        musica: 'musicas/sarava_iansa.mp3' // Aqui você adiciona o caminho para a música

    
    },
    {
        nome: "Iemanjá",
        sincretismo: "Nossa Senhora dos Navegantes",
        cores: ["azul claro", "branco"],
        elementos: ["mar"],
        dominio: "maternidade, fertilidade",
        oferendas: ["flores brancas", "espelhos", "perfumes"],
        caracteristicas: "maternal, protetora, serena",
        descricao: "A mãe de todos os orixás, é a rainha dos mares e a protetora dos pescadores. Sua energia maternal e acolhedora traz paz e tranquilidade.",
        link: "https://www.significados.com.br/iemanja/",
        imagem: "imagens/iemanja02.jpg",
        _tags: [" maternidade, proteção familiar, segurança, serenidade, vida marinha, sabedoria, calma, fluidez"], // Tags adicionadas para busca
        musica: 'musicas/lindo_canto_de_iemanja.mp3' // Aqui você adiciona o caminho para a música



    },
    {
        nome: "Oxalá",
        sincretismo: "Jesus Cristo",
        cores: ["branco"],
        elementos: ["algodão"],
        dominio: "criação, paz",
        oferendas: ["mel", "frutas brancas"],
        caracteristicas: "pacífico, justo, criador",
        descricao: "Oxalá é considerado o criador de todos os seres e o rei dos Orixás. Ele representa a paz, a pureza e a ordem.",
        link: "https://www.significados.com.br/oxala/",
        imagem: "imagens/oxala01.jpg",
        _tags: ["paz, sabedoria, pureza, criador, justiça, tranquilidade, harmonia, autoridade moral, perfeição, espiritualidade elevada"], // Tags adicionadas para busca
        musica: 'musicas/saudacao_ao_pai_oxala.mp3' // Aqui você adiciona o caminho para a música



    },
    {
        nome: "Oxóssi",
        sincretismo: "São Sebastião",
        cores: ["verde"],
        elementos: ["floresta", "arco e flecha"],
        dominio: "caça, natureza",
        oferendas: ["frutas", "mel", "tabaco"],
        caracteristicas: "caçador, protetor da natureza",
        descricao: "O caçador, senhor das matas e dos animais. Representa a intuição, a sabedoria e a conexão com a natureza.",
        link: "https://www.significados.com.br/oxossi/",
        imagem: "imagens/oxossi03.jpg",
        _tags: [" caça, foco, sabedoria natural, independência, conexão com a natureza, liberdade, agilidade"], // Tags adicionadas para busca
        musica: 'musicas/saudacao_ao_caboclo_junco_verde.mp3' // Aqui você adiciona o caminho para a música



    },
    {

    nome: "Nanã Buruquê",
    sincretismo: "Santa Ana",
    cores: ["marrom"],
    elementos: ["terra"],
    dominio: "ancestralidade, morte",
    oferendas: ["farinha de mandioca", "azeite de dendê"],
    caracteristicas: "ancestral, sábia, paciente",
    descricao:"A orixá da criação, da terra e dos ancestrais. É a mais velha dos orixás e simboliza a sabedoria e a experiência.",
    link:"https://www.significados.com.br/nana/",
    imagem:"imagens/nana01.jpg",
    _tags: [" ancestralidade, morte, sabedoria, reflexão, paciência, renovação, mistério, purificação"], // Tags adicionadas para busca
    musica: 'musicas/dombenedetto-nana-buruque-a-forca-da-criacao-00b7e8e3 (1).mp3' // Aqui você adiciona o caminho para a música

},
{
    nome: "Exu",
    sincretismo: "São Pedro",
    cores: ["preto", "vermelho"],
    elementos: ["encruzilhadas"],
    dominio: "mensageiro, caminhos",
    oferendas: ["cigarro", "bebida", "doces"],
    caracteristicas: "trapaceiro, protetor, comunicador",
    descricao:"Mensageiro dos Orixás, responsável por abrir e fechar os caminhos. É uma figura complexa, associada tanto ao bem quanto ao mal.",
    link:"https://www.significados.com.br/exu/",
    imagem:"imagens/exu01.jpg",
    _tags: ["comunicação, travessia, mistério, transformação, conhecimento profundo, mediador, dinamisma"], // Tags adicionadas para busca
    musica: 'musicas/ponto_de_trabalho_do_seu_tranca_rua_das_almas.mp3' // Aqui você adiciona o caminho para a música

},
{
    nome: "Omolu",
    sincretismo: "São Lázaro",
    cores: ["branco", "roxo"],
    elementos: ["doenças", "cura"],
    dominio: "saúde, doença, transformação",
    oferendas: ["mel", "azeite de dendê", "frutas"],
    caracteristicas: "sábio, paciente, transformador",
    descricao:"Orixá da saúde, das doenças e da transformação. É o senhor dos ossos e da regeneração.",
    link:"https://www.significados.com.br/obaluae-omolu-historia-do-orixa-da-cura/",
    imagem:"imagens/omolu01.jpg",
    _tags: ["cura, renovação, finitude, resiliência, transformação espiritual, conhecimento ancestral, doenças, proteção"], // Tags adicionadas para busca
    musica: 'musicas/ALABE-omolu-324d47c0.mp3' // Aqui você adiciona o caminho para a música

},
{
    nome: "Obá",
    sincretismo: "Santa Bárbara",
    cores: ["vermelho", "branco"],
    elementos: ["raios", "trovões"],
    dominio: "guerras, transformações",
    oferendas: ["mel", "azeite de dendê", "pimenta"],
    caracteristicas: "guerreira, apaixonada, independente",
    descricao:"Obá é uma orixá guerreira, associada à justiça e à paixão. É esposa de Xangô e representa a força feminina.",
    link:"https://www.significados.com.br/oba-quem-e-a-orixa-das-aguas-doces-das-religioes-afro-brasileiras/",
    imagem:"imagens/oba04.jpg",
    _tags: ["lealdade, sacrifício, determinação, resiliência, força feminina, ciúmes, superação, orgulho, estratégia"], // Tags adicionadas para busca
    musica: 'ALABE-09-oba.mp3' // Aqui você adiciona o caminho para a música

},
{
    nome: "Ossain",
    sincretismo: "São Cosme e Damião",
    cores: ["verde"],
    elementos: ["floresta", "ervas"],
    dominio: "medicina, natureza",
    oferendas: ["ervas", "mel", "tabaco"],
    caracteristicas: "sábio, conhecedor das plantas",
    descricao:"O Senhor das Plantas: Ossain é o Orixá das plantas medicinais e sagradas. Ele detém o conhecimento sobre as propriedades curativas das ervas e é considerado um mestre em botânica.",
    link:"https://www.costamaris.com.br/ossain-na-umbanda",
    imagem:"imagens/ossain1.jpg",
    _tags: ["conhecimento, ervas, sabedoria natural, curandeiro, medicina, feitiçaria, isolamento, segredeiro, autossuficiência"], // Tags adicionadas para busca
    musica: 'ALABE-04-ssain.mp3' // Aqui você adiciona o caminho para a música

}
];// Criação do array 'entidades' contendo objetos com informações sobre diferentes entidades espirituais
const entidades = [
    {
        
        linha: "Malandros", // Linha espiritual
        nomePopular: "Zé Pilintra", // Nome popular da entidade
        caracteristicas: "Esperto, brincalhão, sedutor, charmoso, sagaz", // Características da entidade
        historia: "É um espírito livre e aventureiro, conhecido por suas histórias de amor e jogo.", // História associada à entidade
        oferendas: "Cachaça, cigarros, doces, dinheiro", // Oferendas típicas para a entidade
        dominio: "Jogo, bebida, amor, sedução", // Áreas de influência da entidade
        simbolos: "Chapéu, cartas de baralho, dado", // Símbolos associados à entidade
        cores: "Vermelho, preto, amarelo", // Cores típicas da entidade
        habilidades: "Manipulação, sorte, persuasão", // Habilidades da entidade
        manias: "Fumar charuto, jogar dados, contar histórias", // Manias da entidade
        descricao: "Linha de Malandros é uma linha de entidades que atua no campo da sabedoria popular, esperteza e proteção dos menos favorecidos. Essas entidades são conhecidas por sua capacidade de navegar pelas situações da vida com astúcia e sagacidade.", // Descrição geral da linha
        link: "https://www.teussp.com.br/linha-dos-malandros-na-umbanda/#:~:text=A%20Linha%20dos%20Malandros%20na,pra%20tr%C3%A1s%20e%20tudo%20vai", // Link para mais informações
        imagem: "imagens/malandros02.jpg", // Caminho para a imagem da entidade
        _tags: ["sabedoria popular", "esperteza", "proteção", "jogo", "carisma", "sagacidade", "injustiça"], // Tags para busca e categorização
        musica: 'sambistagabrielmaia-tributo-a-ze-pilintra-e-maria-navalha-70674227.mp3' // Caminho para o arquivo de música associado à entidade
    },
    {
        

        linha: "Caboclos",
        nomePopular: "Jaci",
        caracteristicas: "Guerreiro, protetor da natureza, sábio",
        historia: "É um espírito guerreiro que protege a floresta e seus habitantes.",
        oferendas: "Tabaco, mel, frutas silvestres",
        dominio: "Floresta, animais",
        simbolos: "Arco e flecha, penas",
        cores: "Verde, marrom",
        habilidades: "Cura, proteção, comunicação com os animais",
        manias: "Fumar cachimbo, tocar flauta",
        descricao: "A Linha dos Caboclos é composta por espíritos de antigos guerreiros e protetores da natureza. Eles atuam na cura e na proteção dos seres vivos, mantendo a harmonia entre o ser humano e a natureza.",
        link: "https://www.astrocentro.com.br/blog/umbanda/caboclos-na-umbanda/",
        imagem: "imagens/caboclos01.jpg",
        _tags: ["natureza", "caça", "proteção", "sabedoria", "força", "floresta", "cura"],
        musica: 'caboclo_sete_flechas.mp3' // Aqui você adiciona o caminho para a música
       
    },

    {
        linha: "Pretos Velhos",
        nomePopular: "Pai Benedito",
        caracteristicas: "Sábio, paciente, conhecedor das ervas",
        historia: "Trabalhou nas plantações de café, usando seus conhecimentos para cuidar dos enfermos.",
        oferendas: "Fumo, mel, ervas medicinais",
        dominio: "Cura, aconselhamento espiritual",
        simbolos: "Cachimbo, bengala, livro de receitas",
        cores: "Marrom, verde",
        habilidades: "Cura, aconselhamento espiritual, preparo de banhos",
        manias: "Fumar cachimbo, contar histórias sobre a África",
        descricao: "A Linha dos Pretos Velhos é composta por espíritos de antigos escravizados que atuam no aconselhamento e na cura espiritual. Eles são conhecidos pela sabedoria, paciência e conhecimento das ervas medicinais.",
        link: "https://tendadeumbanda2caboclos.com.br/linha-das-almas/#:~:text=A%20Linha%20de%20Pretos%20velhos,da%20linha%20de%20outros%20Orix%C3%A1s.",
        imagem: "imagens/pretovelho02.jpg",
        _tags: ["sabedoria", "cura", "ancestralidade", "conselhos", "humildade", "paciência", "ervas"],
        musica: 'pai_joaquim_de_angola.mp3' // Aqui você adiciona o caminho para a música

          
    },
    
    
    {   
        linha: "Crianças (Erês)",
        nomePopular: "Ciço",
        caracteristicas: "Alegre, brincalhão, travesso",
        historia: "Era um menino que gostava muito de brincar e explorar a natureza.",
        oferendas: "Doces, brinquedos, guloseimas",
        dominio: "Alegria, proteção infantil",
        simbolos: "Pipa, bola",
        cores: "Branco, colorido",
        habilidades: "Alegria, proteção infantil",
        manias: "Brincar, pedir doces",
        descricao: "A Linha das Crianças é formada por espíritos de crianças que atuam trazendo alegria e proteção, especialmente para os mais jovens. Eles são conhecidos por sua leveza, doçura e habilidade de proteger e alegrar as crianças.",
        link: "https://www.terreirosdeumbanda.com.br/assets/entidades/eres.html#google_vignette",
        imagem: "imagens/eres02.jpg",
        _tags: ["alegria", "brincadeira", "inocência", "proteção infantil", "leveza", "doçura", "energia"],
        musica: 'ALEGRIA DE ERÊ - COSME E DAMIÃO - CORRENTE DAS CRIANÇAS - LIZ HERMANN.mp3' // Aqui você adiciona o caminho para a música

         


    },
    {
        linha: "Baianos",
        nomePopular: "Tranca-Ruas",
        caracteristicas: "Forte, protetor, justiceiro",
        historia: "Era um guerreiro que protegia os caminhos e as pessoas.",
        oferendas: "Cachaça, cigarros, pimenta",
        dominio: "Proteção, justiça",
        simbolos: "Chave, corrente",
        cores: "Vermelho, preto",
        habilidades: "Proteção, abertura de caminhos",
        manias: "Fumar charuto, beber cachaça",
        descricao: "A Linha dos Baianos é composta por espíritos de antigos guerreiros que atuam na proteção e na justiça. Eles são conhecidos pela sua força, capacidade de abrir caminhos e de proteger os necessitados.",
        link: "https://www.conversandosobreaumbanda.com/post/linha-dos-baianos-na-umbanda",
        imagem: "imagens/baianos01.jpg",
        _tags: ["proteção", "justiça", "força", "caminhos", "liderança", "superação", "espiritualidade"],
        musica: 'Baiano - Quando eu vim da Bahia.mp3' // Aqui você adiciona o caminho para a música


    },
    {

        linha: "Boiadeiros",
        nomePopular: "Zé Leôncio",
        caracteristicas: "Forte, protetor, trabalhador",
        historia: "Era um boiadeiro que percorria longas distâncias com sua boiada.",
        oferendas: "Cachaça, fumo, carne seca",
        dominio: "Proteção de animais, abertura de caminhos",
        simbolos: "Laço, chapéu de boiada",
        cores: "Marrom, amarelo",
        habilidades: "Proteção, abertura de caminhos",
        manias: "Montar a cavalo, cantar modinhas",
        descricao: "A Linha dos Boiadeiros é composta por espíritos de antigos trabalhadores que protegiam os animais e abriam caminhos. Eles são conhecidos pela sua força, trabalho árduo e dedicação à proteção dos animais e ao trabalho.",
        link: "https://www.astrocentro.com.br/blog/umbanda/boiadeiros-na-umbanda/",
        imagem: "imagens/boiadeiros02.jpg",
        _tags: ["proteção", "força", "trabalho", "caminhos", "natureza", "resiliência", "determinação"],
        musica: 'Pierrebraga2019-ponto-de-boiadeiro-95d706cf.mp3' // Aqui você adiciona o caminho para a música
        


    },
    {
        linha: "Marinheiros",
        nomePopular: "Mestre Jonas",
        caracteristicas: "Forte, protetor, aventureiro",
        historia: "Era um marinheiro que navegava pelos oceanos, enfrentando tempestades e perigos.",
        oferendas: "Cachaça, peixe, oferendas para Iemanjá",
        dominio: "Proteção de viajantes, abertura de caminhos",
        simbolos: "Âncora, bússola, navio",
        cores: "Azul, branco",
        habilidades: "Proteção, abertura de caminhos",
        manias: "Fumar cachimbo, contar histórias de viagens",
        descricao: "A Linha dos Marinheiros é formada por espíritos de antigos navegadores que protegiam os viajantes e abriam caminhos. Eles são conhecidos por sua coragem, proteção e habilidade em enfrentar tempestades e perigos do mar.",
        link: "https://www.diariodeumbanda.com.br/os-guias-espirituais/os-marinheiros",
        imagem: "imagens/marinheiros02.jpg",
        _tags: ["proteção", "mar", "aventura", "caminhos", "coragem", "navegação", "superação"],
        musica: 'erreirozemalandro-ponto-cantado-de-marinheiro-iemanja-umbandamp3-320k-518327f9.mp3' // Aqui você adiciona o caminho para a música

    },
    {
        linha: "Exus",
        nomePopular: "Exu Caveira",
        caracteristicas: "Astuto, protetor, justiceiro",
        historia: "É um espírito que atua na proteção e na justiça, especialmente nas encruzilhadas.",
        oferendas: "Cachaça, velas, cigarros",
        dominio: "Proteção, justiça, comunicação",
        simbolos: "Caveira, tridente, encruzilhadas",
        cores: "Preto, vermelho",
        habilidades: "Proteção, justiça, comunicação",
        manias: "Fumar, beber cachaça",
        descricao: "A Linha dos Exus é composta por espíritos que atuam na proteção, justiça e comunicação. Eles são conhecidos por sua astúcia, capacidade de lidar com situações complexas e sua atuação nas encruzilhadas da vida.",
        link: "https://www.diariodeumbanda.com.br/os-guias-espirituais/os-exus",
        imagem: "imagens/exus01.jpg",
        _tags: ["proteção", "justiça", "astúcia", "comunicação", "encruzilhadas", "força", "liberdade"],
        musica: 'algbedeode-a-sua-casa-nao-tem-parede-nao-873fd1.mp3' // Aqui você adiciona o caminho para a música

    },
    {
        linha: "Pombagiras",
        nomePopular: "Pombagira Cigana",
        caracteristicas: "Sensual, forte, independente",
        historia: "É uma entidade feminina associada à liberdade e aos prazeres da vida.",
        oferendas: "Rosas vermelhas, vinho, perfumes",
        dominio: "Amor, sedução, proteção",
        simbolos: "Rosas, velas, espelhos",
        cores: "Vermelho, preto",
        habilidades: "Sedução, proteção, magia",
        manias: "Usar perfumes, dançar",
        descricao: "A Linha das Pombagiras é composta por entidades femininas que atuam no campo da sedução, proteção e magia. Elas são conhecidas por sua força, sensualidade e capacidade de trazer mudanças significativas para a vida das pessoas.",
        link: "https://www.significados.com.br/pomba-gira/",
        imagem: "imagens/pombagiras01.jpg",
        _tags: ["sedução", "força", "proteção", "magia", "independência", "feminilidade", "mudanças"],
        musica: 'Pombo Gira 7 Saias - Mulher de sete maridos.mp3' // Aqui você adiciona o caminho para a música

    },
    {
        linha: "Ciganos",
        nomePopular: "Cigano Rei",
        caracteristicas: "Charmoso, misterioso, poderoso",
        historia: "Era um rei cigano que possuía grande sabedoria e poder.",
        oferendas: "Vinho tinto, moedas, frutas",
        dominio: "Riqueza, sorte, amor",
        simbolos: "Cartas de tarô, cavalos",
        cores: "Vermelho, dourado",
        habilidades: "Leitura de cartas, manipulação de energias",
        manias: "Tocar violão, jogar cartas",
        descricao:"A Linha de Ciganos é formada por espíritos que valorizam a liberdade e a prosperidade. Eles são conhecidos por sua sabedoria popular, habilidades em adivinhação e charme. Esses espíritos orientam e protegem, oferecendo conselhos sobre amor e sucesso. Sua presença é marcada pela busca constante de novas experiências e pela abertura de caminhos para novas oportunidades.",
        link: "https://sonhozodiaco.com/articles/3188#:~:text=A%20linha%20cigana%20%C3%A9%20uma,e%20energia%20para%20o%20terreiro.",
        imagem: "imagens/ciganos02.jpg",
        _tags: ["riqueza", "sorte", "amor", "sabedoria", "poder", "misticismo", "liberdade"], // Tags adicionadas para busca
        musica: '02_cigana.mp3' // Aqui você adiciona o caminho para a música

    
    },
    {
        linha: "Sereias",
        nomePopular: "Sereia do Mar",
        caracteristicas: "Encantadora, sedutora, misteriosa",
        historia: "Espírito feminino associado à sedução e aos mistérios do mar.",
        oferendas: "Flores, conchas, perfumes",
        dominio: "Mar, sedução, mistério",
        simbolos: "Conchas, pérolas, estrelas do mar",
        cores: "Azul, verde, prata",
        habilidades: "Sedução, encantamento, comunicação com o mar",
        manias: "Cantar, coletar conchas",
        descricao: "A Linha das Sereias é formada por espíritos femininos ligados à sedução e aos mistérios do mar. Elas atuam no campo da sedução, encantamento e proteção dos segredos marinhos.",
        link: "https://nuao.com.br/umbanda/guias/guia-de-direita/1351-2/#:~:text=A%20linha%20das%20sereias%20n%C3%A3o,no%20folclore%20ou%20na%20mitologia.",
        imagem: "imagens/sereia02.jpg",
        _tags: ["sedução", "mistério", "mar", "encantamento", "feminilidade", "natureza", "beleza"],
        musica: 'lindo_canto_de_iemanja.mp3' // Aqui você adiciona o caminho para a música

    },
    

];

