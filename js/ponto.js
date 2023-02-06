let pontos = [
    {
        nome: 'Praça da Matriz',
        rua: 'Duque de Caxias',
        bairro: 'Centro Histórico',
        ano: 1753,
        tipo: 'Praça',
        imagem: './img/praca-da-matriz.png'
    },
    {
        nome: 'Orla do Guaíba',
        rua:'Edvaldo Pereira Paiva',
        bairro: 'Praia de Belas',
        ano: 2011,
        tipo: 'Parque',
        imagem: './img/orla-do-guaiba.png'
    },
    {
        nome: 'Redenção',
        rua: 'João Pessoa',
        bairro: 'Farroupilha',
        ano: 1807,
        tipo: 'Parque',
        imagem: './img/redencao.png'
    },
    {
        nome: 'Harmonia',
        rua: 'Loureiro da Silva',
        bairro: 'Praia de Belas',
        ano: 1987,
        tipo: 'Parque',
        imagem: './img/harmonia.png'
    },
    {
        nome: 'Parcão',
        rua: 'Goethe',
        bairro: 'Moinhos de Vento',
        ano: 1972,
        tipo: 'Parque',
        imagem: './img/parcao.png'
    },
    {
        nome: 'Planetário',
        rua: 'Ipiranga',
        bairro: 'Santana',
        ano: 1972,
        tipo: 'Museu',
        imagem: './img/planetario.png'
    },
    {
        nome: 'Pista de Skate da Orla',
        rua: 'Edvaldo Pereira Paiva',
        bairro: 'Praia de Belas',
        ano: 2021,
        tipo: 'Parque',
        imagem: './img/pista-de-skate-da-orla.png'
    }, 
    {
        nome: 'Praça da Alfândega',
        rua: 'Siqueira Campos',
        bairro: 'Centro Histórico',
        ano: 1783,
        tipo: 'Praça',
        imagem: './img/praca-da-alfandega.png'
    },
    {
        nome: 'Praça dos Açorianos',
        rua: 'Borges de Medeiros',
        bairro: 'Centro Histórico',
        ano: 1848,
        tipo: 'Praça',
        imagem: './img/praca-dos-acorianos.png'
    },
    {
        nome: 'Ponte de Pedra',
        rua: 'Borges de Medeiros',
        bairro: 'Centro Histórico',
        ano: 1854,
        tipo: 'Construção',
        imagem: './img/ponte-de-pedra.png'
    },
    {
        nome: 'Viaduto Otávio Rocha',
        rua: 'Borges de Medeiros',
        bairro: 'Centro Histórico',
        ano: 1932,
        tipo: 'Construção',
        imagem: './img/viaduto-otavio-rocha.png'
    },
    {
        nome: 'Prefeitura de Porto Alegre',
        rua: 'Praça Montevidéu',
        bairro: 'Centro Histórico',
        ano: 1901,
        tipo: 'Construção',
        imagem: './img/prefeitura-de-porto-alegre.png'
    },
    {
        nome: 'Mercado Público',
        rua: 'Largo Glênio Peres',
        bairro: 'Centro Histórico',
        ano: 1869,
        tipo: 'Construção',
        imagem: './img/mercado-publico.png'
    },
    {
        nome: 'Usina do Gasômetro',
        rua: 'Cais do Porto',
        bairro: 'Cais do Porto',
        ano: 1928,
        tipo: 'Construção',
        imagem: './img/usina-do-gasometro.png'
    },
    {
        nome: 'Casa de Cultura Mário Quintana',
        rua: 'Andradas',
        bairro: 'Centro Histórico',
        ano: 1933,
        tipo: 'Construção',
        imagem: './img/casa-de-cultura-mario-quintana.png'
    },
    {
        nome: 'Catedral Metropolitana',
        rua: 'Duque de Caxias',
        bairro: 'Centro Histórico',
        ano: 1921,
        tipo: 'Igreja',
        imagem: './img/catedral-metropolitana.png'
    },
    {
        nome: 'Igreja das Dores',
        rua: 'Andradas',
        bairro: 'Centro Histórico',
        ano: 1807,
        tipo: 'Igreja',
        imagem: './img/igreja-das-dores.png'
    },
    {
        nome: 'Theatro São Pedro',
        rua: 'Pça Mal. Deodoro',
        bairro: 'Centro Histórico',
        ano: 1858,
        tipo: 'Construção',
        imagem: './img/theatro-sao-pedro.png'
    },
    {
        nome: 'Palácio Piratini',
        rua: 'Duque de Caxias',
        bairro: 'Centro Histórico',
        ano: 1921,
        tipo: 'Construção',
        imagem: './img/palacio-piratini.png'
    },
    {
        nome: 'Monumento dos Açorianos',
        rua: 'Borges de Medeiros',
        bairro: 'Centro Histórico',
        ano: 1974,
        tipo: 'Monumento',
        imagem: './img/monumento-dos-acorianos.png'
    },
    {
        nome: 'Memorial do Rio Grande do Sul',
        rua: 'Sete de Setembro',
        bairro: 'Centro Histórico',
        ano: 2000,
        tipo: 'Construção',
        imagem: './img/memorial-do-rio-grande-do-sul.png'
    },
    {
        nome: 'Margs',
        rua: 'Praça da Alfândega',
        bairro: 'Centro Histórico',
        ano: 1955,
        tipo: 'Museu',
        imagem: './img/margs.png'
    },
    {
        nome: 'Santander Cultural',
        rua: 'Sete de Setembro',
        bairro: 'Centro Histórico',
        ano: 2001,
        tipo: 'Museu',
        imagem: './img/santander-cultural.png'
    },
    {
        nome: 'Capitólio',
        rua: 'Borges de Medeiros',
        bairro: 'Centro Histórico',
        ano: 1928,
        tipo: 'Construção',
        imagem: './img/capitolio.png'
    },
    {
        nome: 'Museu Júlio de Castilhos',
        rua: 'Duque de Caxias',
        bairro: 'Centro Histórico',
        ano: 1903,
        tipo: 'Museu',
        imagem: './img/museu-julio-de-castilhos.png'
    },
    {
        nome: 'Fundação Iberê Camargo',
        rua: 'Padre Cacique',
        bairro: 'Cristal',
        ano: 1995,
        tipo: 'Museu',
        imagem: './img/fundacao-ibere-camargo.png'
    },
    {
        nome: 'Estádio Beira Rio',
        rua: 'Padre Cacique',
        bairro: 'Praia de Belas',
        ano: 1969,
        tipo: 'Estádio',
        imagem: './img/estadio-beira-rio.png'
    },
    {
        nome: 'Esquina Democrática',
        rua: 'Andradas, Borges de Medeiros',
        bairro: 'Centro Histórico',
        ano: 1997,
        tipo: 'Rua',
        imagem: './img/esquina-democratica.png'
    },
    {
        nome: 'Clube do Comércio',
        rua: 'Praça da Alfândega',
        bairro: 'Centro Histórico',
        ano: 1896,
        tipo: 'Construção',
        imagem: './img/clube-do-comercio.png'
    },
    {
        nome: 'Edifício Santa Cruz',
        rua: 'Andradas',
        bairro: 'Centro Histórico',
        ano: 1965,
        tipo: 'Construção',
        imagem: './img/edificio-santa-cruz.png'
    }
]