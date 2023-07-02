class BankAccount {
  //Privet Variable
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  //For access privet variable and get value
  getBalance() {
    return this.#balance;
  }
  
  //For access privet variable and set value
  setBalance(amount) {
    this.#balance = amount;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    let a = this.getBalance();
    a += amount;
    this.setBalance(a);
  }

  withdraw(amount) {
    let a = this.getBalance();
    a -= amount;
    this.setBalance(a);
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    let a = this.getBalance();
    a += amount;
    this.setBalance(a);
  }

  withdraw(amount) {
    let a = this.getBalance();
    if (a - amount >= 0) {
      a -= amount;
      this.setBalance(a);
    } else {
      console.log("Withdrawal failed. Insufficient funds.");
    }
  }
}

// Creating instances of each subclass
const checkingAcc = new CheckingAccount("123456", 1000, "John Doe");
const savingsAcc = new SavingsAccount("987654", 500, "Jane Smith");

// Calling methods on instances
checkingAcc.deposit(500);
checkingAcc.withdraw(200);
console.log("Checking Account Balance:", checkingAcc.getBalance());

savingsAcc.deposit(200);
savingsAcc.withdraw(800);
console.log("Savings Account Balance:", savingsAcc.getBalance());
