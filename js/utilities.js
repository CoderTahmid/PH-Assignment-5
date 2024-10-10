function gettingValueFromInputFields(value) {
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

            document.getElementById('congrats-msg').classList.remove('hidden');

            const todaysDate = new Date();
            if (btnId === 'noakhali-btn') {
                const div = document.createElement('div');
                div.classList.add('border-[1px]', 'border-[#1111111A]', 'w-[90%]', 'mx-auto', 'rounded-2xl', 'p-8');
                div.innerHTML = `
                <h3 class="text-xl font-bold">
                    ${donationAmount} Taka is Donated for flood victims at Noakhali, Bangladesh
                </h3>
                <p class="mt-4 font-light text-[#111111B3]">
                    Date : ${todaysDate}
                </p>
                `;
                document.getElementById('history-sec').appendChild(div);
            } else if (btnId === 'feni-btn') {
                const div = document.createElement('div');
                div.classList.add('border-[1px]', 'border-[#1111111A]', 'w-[90%]', 'mx-auto', 'rounded-2xl', 'p-8');
                div.innerHTML = `
                <h3 class="text-xl font-bold">
                    ${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh
                </h3>
                <p class="mt-4 font-light text-[#111111B3]">
                    Date : ${todaysDate}
                </p>
                `;
                document.getElementById('history-sec').appendChild(div);
            } else if (btnId === 'quota-btn') {
                const div = document.createElement('div');
                div.classList.add('border-[1px]', 'border-[#1111111A]', 'w-[90%]', 'mx-auto', 'rounded-2xl', 'p-8');
                div.innerHTML = `
                <h3 class="text-xl font-bold">
                    ${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
                </h3>
                <p class="mt-4 font-light text-[#111111B3]">
                    Date : ${todaysDate}
                </p>
                `;
                document.getElementById('history-sec').appendChild(div);
            };
        } else {
            alert('Invalid Donation Amount');
        };
    });
};

document.getElementById('congrats-msg-button').addEventListener('click', function () {
    document.getElementById('congrats-msg').classList.add('hidden');
});

document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-transparent');
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('history-sec').classList.remove('hidden');
});

document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-cards').classList.remove('hidden');
    document.getElementById('history-sec').classList.add('hidden');
});