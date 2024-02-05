const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "София",
            "id_3": "Дарья",
            "id_4": "Мария",
            "id_5": "Александра",
            "id_6": "Алиса",
            "id_7": "Елизавета",
            "id_8": "Полина",
            "id_9": "Варвара",
            "id_10": "Екатерина"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        if (this.person.gender === this.GENDER_MALE)
        {
            return this.randomValue(this.firstNameMaleJson);
        }
        else
        {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },


    randomSurname: function() {

        let result = this.randomValue(this.surnameJson);

        if (this.person.gender === this.GENDER_FEMALE)
        {
            result = result + "а";
        }

        return result;

    },

    randomGender: function() {

        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomDate: function() {

        const year = this.randomIntNumber(110, 70) + 1900;
        const month = this.randomIntNumber(12, 1);

        const isEven = month % 2 === 0;

        let maxDay;

        if (month === 2) 
        {
            const isLeap = year % 4 === 0;
            maxDay = isLeap ? 29 : 28;
        }
        else if (month < 8) 
        {
            maxDay = isEven ? 30 : 31;
        }
        else 
        {
            maxDay = isEven ? 31 : 30;
        }

        const day = this.randomIntNumber(maxDay, 1);

        return `${day}.${month}.${year}`;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthday = this.randomDate();
        return this.person;
    }
};
