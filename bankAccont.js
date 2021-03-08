class Transaction {
    constructor(amount){
        this.amount = amount;
    }

}

class BankAccount {
    constructor(name){
        this.name = name;
        this.balance = 0;
        this.transactions = []; // array of Transaction objects
    }

    debit(transaction) { // Transaction class object
        this.balance = this.balance - transaction.amount; // int = int - int
        this.transactions.push(transaction);
    }

    credit(transaction){
        this.balance = this.balance + transaction.amount;
        this.transactions.push(transaction);
    }

    history(){
        this.transactions.forEach(transaction => {
            console.log(transaction.amount)
        });
    }
}

const account = new BankAccount('Krishna');
console.log(account.balance);
account.credit(new Transaction(100));
account.debit(new Transaction(25));
console.log(account.balance);
account.history();