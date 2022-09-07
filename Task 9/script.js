/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function titleConstr(title) {
  this.title = title;
  this.printName = function () {
    console.log(this.title);
  };
}

function directorConstr(director) {
  this.director = director;
  this.printDirector = function () {
    console.log(this.title);
  };
}

function budgetConstr(budget) {
  this.budget = budget;
  this.printBudget = function () {
    console.log(this.budget);
  };
}

const MovieTerminator = new titleConstr("Terminator");
const DirectorCameron = new directorConstr("Cameron");
const BudgetMln = new budgetConstr(100000000);

console.log(MovieTerminator.title);
console.log(DirectorCameron.director);
console.log(BudgetMln.budget);

const budget = 100000000;
function checkBudget(budget) {
  if (budget >= 100000000) {
    console.log("wasExpensive");
  }
}
