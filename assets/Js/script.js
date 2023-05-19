// Obtém a referência para cada botão pelo ID
var Aspire = document.getElementById('Aspire');
var solar = document.getElementById('solar');
var transporte = document.getElementById('transporte');
var Edifícios = document.getElementById('Edifícios');
var Smart = document.getElementById('Smart');
var Eco = document.getElementById('Eco');





// Adiciona um ouvinte de eventos para cada botão
Aspire.addEventListener('click', function() {
  exibirAlerta('O Aspire Vero é projetado com ênfase na eficiência energética, minimizando o consumo de energia e, consequentemente, reduzindo as emissões de carbono. Isso não apenas beneficia o meio ambiente, mas também ajuda os usuários a economizar energia e reduzir seus custos operacionais.');
});

solar.addEventListener('click', function() {
  exibirAlerta('As tecnologias sustentáveis também estão em constante evolução, permitindo o desenvolvimento de sistemas fotovoltaicos mais eficientes e acessíveis. Além disso, a integração da energia solar com sistemas de armazenamento de energia, como baterias, possibilita o uso da eletricidade solar mesmo quando não há sol, aumentando a autossuficiência energética e a resiliência das redes elétricas.');
});

// Função para exibir o alerta
function exibirAlerta(mensagem) {
  alert(mensagem);
}


transporte.addEventListener('click', function() {
    exibirAlerta('O transporte público elétrico representa uma solução sustentável e eficiente para a mobilidade urbana. Ao utilizar veículos movidos por energia elétrica, como ônibus e trens, reduz-se significativamente as emissões de gases de efeito estufa e a poluição do ar nas cidades. Além disso, o transporte público elétrico contribui para diminuir o congestionamento nas vias, melhorando a fluidez do trânsito e proporcionando uma opção de deslocamento acessível e de qualidade para a população. Com investimentos nessa área, é possível criar sistemas de transporte público eficientes, silenciosos e ambientalmente responsáveis, impulsionando a transição para um futuro mais sustentável e resiliente.');
    }
);


Edifícios.addEventListener('click', function() {
    exibirAlerta('Edifícios sustentáveis são projetos arquitetônicos que priorizam a eficiência energética, a utilização de recursos renováveis e a redução do impacto ambiental. Por meio de estratégias como o uso de materiais eco-friendly, sistemas de captação e reutilização da água da chuva, iluminação natural, isolamento térmico e tecnologias de energia renovável, esses edifícios buscam minimizar o consumo de energia, as emissões de carbono e o desperdício de recursos');
    }

);

Smart.addEventListener('click', function() {
    exibirAlerta('Smart Grid, ou rede elétrica inteligente, é uma tecnologia avançada que integra sistemas de comunicação, automação e gerenciamento de energia. Essa rede inteligente permite monitorar, controlar e otimizar o fluxo de energia, tanto na geração quanto no consumo, de forma eficiente e sustentável.');
    }

);

Eco.addEventListener('click', function() {
    exibirAlerta('O eco design busca reduzir o impacto ambiental, promovendo o uso eficiente de recursos naturais, a minimização de resíduos, a escolha de materiais eco-friendly e a criação de soluções inovadoras que sejam socialmente responsáveis. Essa abordagem incorpora princípios como a economia circular, o design biomimético e a utilização de tecnologias limpas, visando a preservação do meio ambiente e o bem-estar das pessoas.');
    }

);


