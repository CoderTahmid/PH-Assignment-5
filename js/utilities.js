function gettingValueFromInputFields (value) {
    const fieldValue = document.getElementById(value).value;
    return parseFloat(fieldValue);
};

function moneyAddingFunc(btnId, inputFieldId, totalDonatedMoneyId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const donationAmount = gettingValueFromInputFields(inputFieldId);
        const totalAccountMoney = parseFloat(document.getElementById('total-left-money').innerText);

        if (typeof donationAmount === 'number' && donationAmount >= 0 && donationAmount < totalAccountMoney) {
            const totalDonatedMoney = document.getElementById(totalDonatedMoneyId).innerText;

            document.getElementById(totalDonatedMoneyId).innerText = parseFloat(totalDonatedMoney) + donationAmount;

            const newTotalLeftMoney = totalAccountMoney - donationAmount;
            document.getElementById('total-left-money').innerText = newTotalLeftMoney;
        } else {
            alert('Invalid Donation Amount');
        };
    });
};

