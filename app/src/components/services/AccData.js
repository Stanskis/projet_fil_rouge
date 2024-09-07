export default class AccData {
    static data = [];

    static saveData() {
        localStorage.setItem('accounts', JSON.stringify(AccData.data));
    }

    static addAccount(account) {
        AccData.data.push(account);
        AccData.saveData();
    }

    static getAllAccounts() {
        return AccData.data;
    }

    static loadData() {
        const storedData = localStorage.getItem('accounts');
        if (storedData) {
            AccData.data = JSON.parse(storedData);
        }
    }
    
}