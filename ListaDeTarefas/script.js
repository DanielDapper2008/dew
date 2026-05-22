const campoTarefa = document.getElementById("campoTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

const botaoHistorico = document.getElementById("botaoHistorico");
const historico = document.getElementById("historico");
const listaHistorico = document.getElementById("listaHistorico");

let tarefas = [];
let historicoTarefas = [];

botaoAdicionar.addEventListener("click", adicionarTarefa);

botaoHistorico.addEventListener("click", () => {
    historico.classList.toggle("oculto");
});

function adicionarTarefa(){

    const texto = campoTarefa.value.trim();

    if(texto === ""){
        alert("Digite uma tarefa.");
        return;
    }

    const tarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };

    tarefas.push(tarefa);

    historicoTarefas.push(`Tarefa adicionada: ${texto}`);

    campoTarefa.value = "";

    renderizarTarefas();
    renderizarHistorico();
}

function renderizarTarefas(){

    listaTarefas.innerHTML = "";

    tarefas.forEach(tarefa => {

        const item = document.createElement("li");
        item.classList.add("item-tarefa");

        const infoTarefa = document.createElement("div");
        infoTarefa.classList.add("info-tarefa");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        const textoTarefa = document.createElement("span");
        textoTarefa.innerText = tarefa.texto;

        if(tarefa.concluida){
            textoTarefa.classList.add("texto-concluido");
        }

        checkbox.addEventListener("change", () => {

            tarefa.concluida = checkbox.checked;

            if(tarefa.concluida){
                textoTarefa.classList.add("texto-concluido");

                historicoTarefas.push(
                    `Tarefa concluída: ${tarefa.texto}`
                );

            }else{
                textoTarefa.classList.remove("texto-concluido");
            }

            renderizarHistorico();
        });

        const containerAcoes = document.createElement("div");
        containerAcoes.classList.add("container-acoes");

        const botaoEditar = document.createElement("button");
        botaoEditar.innerText = "Editar";
        botaoEditar.classList.add("botao-editar");

        botaoEditar.addEventListener("click", () => {

            const novoTexto = prompt(
                "Editar tarefa:",
                tarefa.texto
            );

            if(novoTexto !== null && novoTexto.trim() !== ""){

                historicoTarefas.push(
                    `Tarefa editada: ${tarefa.texto} → ${novoTexto}`
                );

                tarefa.texto = novoTexto.trim();

                renderizarTarefas();
                renderizarHistorico();
            }
        });

        const botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.classList.add("botao-excluir");

        botaoExcluir.addEventListener("click", () => {

            historicoTarefas.push(
                `Tarefa removida: ${tarefa.texto}`
            );

            tarefas = tarefas.filter(
                t => t.id !== tarefa.id
            );

            renderizarTarefas();
            renderizarHistorico();
        });

        infoTarefa.appendChild(checkbox);
        infoTarefa.appendChild(textoTarefa);

        containerAcoes.appendChild(botaoEditar);
        containerAcoes.appendChild(botaoExcluir);

        item.appendChild(infoTarefa);
        item.appendChild(containerAcoes);

        listaTarefas.appendChild(item);
    });
}

function renderizarHistorico(){

    listaHistorico.innerHTML = "";

    historicoTarefas.forEach(itemHistorico => {

        const item = document.createElement("li");

        item.innerText = itemHistorico;

        listaHistorico.appendChild(item);
    });
}