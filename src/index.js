import express from 'express';

const app = express();

const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.",
    "Não importa que você vá devagar, contanto que você não pare.",
    "A inspiração existe, porém temos que encontrá-la trabalhando.",
    "Coragem é saber o que não temer.",
    "Conhecer a si mesmo é o começo de toda sabedoria.",
    "AGORA EU SEU DE ONDE OS VÉIO DO ZAP PEGAM TANTA FRASE MOTIVACIONAL",
    "Acredite em milagres, mas não dependa deles.",
    "Não é a carga que o derruba, mas a maneira como você a carrega.",
    "Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.",
    "Se motive com as conquistas pessoais e não em bater os outros",
    "Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.",
    "Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.",
    "Cansei de pegar frase",
]

app.listen(3000, () =>
  console.log(frases),
);