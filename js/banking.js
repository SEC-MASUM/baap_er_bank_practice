const previousDeposit = document.getElementById("deposit");
const previousWithdraw = document.getElementById("withdraw");
const previousBalance = document.getElementById("balance");
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");

function addMoney(previousAmount, currentAmount) {
  return Number.parseFloat(previousAmount) + Number.parseFloat(currentAmount);
}
function subMoney(previousAmount, currentAmount) {
  console.log(
    Number.parseFloat(previousAmount) - Number.parseFloat(currentAmount)
  );
  return Number.parseFloat(previousAmount) - Number.parseFloat(currentAmount);
}

function deposit() {
  if (Number.parseFloat(depositInput.value) > 0) {
    previousDeposit.innerText = addMoney(
      previousDeposit.innerText,
      depositInput.value
    );

    previousBalance.innerText = addMoney(
      previousBalance.innerText,
      depositInput.value
    );
  } else {
    alert("Please enter a positive number");
  }

  depositInput.value = "";
}

function withdraw() {
  if (Number.parseFloat(withdrawInput.value) > 0) {
    if (subMoney(previousBalance.innerText, withdrawInput.value) >= 0) {
      previousWithdraw.innerText = addMoney(
        previousWithdraw.innerText,
        withdrawInput.value
      );

      previousBalance.innerText = subMoney(
        previousBalance.innerText,
        withdrawInput.value
      );
    } else {
      alert("Don't have sufficient balance in your account");
    }
  } else {
    alert("Please enter a positive number");
  }

  withdrawInput.value = "";
}
