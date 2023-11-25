import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function saveNewUsers(newEmail, password) {
    firebase
    .database()
    .ref(`/users/` + newEmail.replace(/\./g, "-"))
    .set({
        email: newEmail,
        password: password,
        workoutsProgress: [
            [{name: "Приветствие солнца", progress: 0}], 
            [{name: "Наклон вперед", progress: 0}, {name: "Наклон назад", progress: 0}, {name: "Поднятие ног, согнутых в коленях", progress: 0}], 
            [{name: "Наклон к правой ноге", progress: 0}, {name: "Наклон к левой ноге", progress: 0}, {name: "Наклон к согнутой правой ноге", progress: 0}, {name: "Наклон к согнутой левой ноге", progress: 0}, {name: "Асана стоя", progress: 0}], 
            [{name: "Сесть на пятки с носками от себя", progress: 0}, {name: "Сесть на пятки с носками на себя", progress: 0}, {name: "Отпустить колено на пол из позы лотоса", progress: 0}, {name: "Отпустить колено на пол из позы лотоса с соединенными стопами", progress: 0}],
            [{name: "Округляем грудную клетку при выдохе", progress: 0}, {name: "Тянем левую руку в правую сторону", progress: 0}, {name: "Тянем правую руку в левую сторону (20 повторений)", progress: 0}], 
        ],
        workoutsDone: [
            {name: "Утренняя практика", done: false},
            {name: "Красота и здоровье", done: false},
            {name: "Асаны стоя", done: false},
            {name: "Растягиваем мышцы бедра", done: false},
            {name: "Гибкость спины", done: false},
        ]
    })
    console.log('saved');
}