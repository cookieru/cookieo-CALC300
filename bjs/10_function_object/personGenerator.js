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
    
    jobListJson: `{
        "count": 20,
        "list": {     
            "id_1": "Повар",
            "id_2": "[Ж]Кондитер",
            "id_3": "[М]Моряк",
            "id_4": "[Ж]Певица",
            "id_5": "Штукатур-маляр",
            "id_6": "Искусствовед",
            "id_7": "Программист",
            "id_8": "Переводчик",
            "id_9": "[М]Водитель",
            "id_10": "[М]Спортивный тренер",
            "id_11": "Психолог",
            "id_12": "Адвокат",
            "id_13": "[М]Сварщик",
            "id_14": "Маркетолог",
            "id_15": "Врач",
            "id_16": "Бухгалтер",
            "id_17": "[М]Шахтер",
            "id_18": "[Ж]Актриса",
            "id_19": "[М]Электрик",
            "id_20": "[М]Военнослужащий"
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

    randomValueJob: function () {
        //Список берется напрямую из объекта, а не через параметр функции
        const obj = JSON.parse(this.jobListJson);

        // В названии профессий может быть марка гендерной привязанности
        // Нам нужно определить, сколько профессий в списке можно причислить к текущему полу
        let genderMark = this.person.gender === this.GENDER_MALE? "[Ж]" : "[М]";

        let newCount = obj.count;
        for (let j = 1; j <= obj.count; j++) 
            if ( String(obj.list[`id_${j}`]).includes(genderMark)) newCount--;
       
        // Потом по полученному количеству генерируем случайное число
        // и сразу в цикле for определяем, можем ли мы привязать случайно выбранную профессию
        // Если нет, то переходим к следущему варианту в списке.
        // ========================================================
        // Цикл for позволяет сразу установить значение счетчику, проверить значение по счетчику и изменить счетчик
        // три зайца одним выстрелом (в одну строку), хоть и можно считать ниндзя-кодом
        // Такая конструкция нам позволяет из одного списка профессий выбрать только необходимые, если критерий содержится в значении
        let i;
        for (i = this.randomIntNumber(newCount, 1); String(obj.list[`id_${i}`]).includes(genderMark) ; i++) ;
        
        // Удаляем марку из названия
        genderMark = this.person.gender === this.GENDER_MALE? "[М]" : "[Ж]";

        // И выводим.
        return String(obj.list[`id_${i}`]).replace(genderMark, "");
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

    randomFathername: function() {

        let result = String(this.randomValue(this.firstNameMaleJson));

        switch (result[result.length - 1]) {
            case "й":
                result = result.substring(0, result.length - 1) + "ев"
                break;

            case "а":
                result = result.substring(0, result.length - 1);
        
            default:
                result = result + "ов";
                break;
        }

        if (this.person.gender === this.GENDER_MALE)
        {
            result = result + "ич";
        }
        else
        {
            result = result + "на";
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
        this.person.fathername = this.randomFathername()
        this.person.birthday = this.randomDate();
        this.person.job = this.randomValueJob();
        return this.person;
    }
};
