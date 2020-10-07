(function () {
  /**
   * Define que todas as variáveis devem ser declaradas, para não coincidir
   * e asumir/substituir com variáveis globais
   */
  "use strict";

  // 1º parâmetro: nome da aplicação (ng-app)
  // 2º parâmetro: array de depedência externas
  angular.module("todoList", []);

  // Criação do Controller
  angular
    .module("todoList")
    // 1º parâmetro: nome dado ao controller (ng-controller)
    // 2º uma função que injetará o $scope (escopo/contexto)
    .controller("todoListController", todoListController);

  todoListController.$inject = ["$scope"];

  function todoListController() {
    // Através da variável vm, podemos acessar o controller (esta função)
    // tendo acesso a todo escopo (contexto) do controller
    // este apelido "vm" é passando como aliase "as" no ng-contoller
    var vm = this;

    // Criação de um Array (variável tasks[])
    vm.tasks = [
      { name: "Estudar Angular ", done: true },
      { name: "Estudar NodeJS ", done: false },
      { name: "Estudar React ", done: true },
    ];

    vm.errorInput = { message: "", status: false };

    vm.addTask = addTask;
    vm.removeTask = removeTask;
    vm.pendingTask = pendingTask;

    function addTask() {
      if (vm.task === undefined) {
        vm.errorInput.message = "Campo obrigatório";
        vm.errorInput.status = true;
      } else {
        vm.tasks.push({ name: vm.task, done: false });
        vm.task = undefined; // Limpa o input
        vm.errorInput.message = ""; // Limpa o erro
        vm.errorInput.status = false;
      }
      console.log(vm.task);
    }

    function removeTask(index) {
      vm.tasks = vm.tasks.filter((item, key) => key !== index);
    }

    function pendingTask() {
      var count = 0;

      angular.forEach(vm.tasks, (task) => {
        if (!task.done) count++;
      });
      return count;
    }
  }
})();
