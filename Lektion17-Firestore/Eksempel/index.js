// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//const express = require('express')
//eller:
import express from 'express';
import pug from 'pug';

const app = express()

app.set("view engine", "pug");


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("views", "C:\\Users\\Kasper\\DIP-Vscode\\Lektion17-Firestore\\Eksempel\\views");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC8ZiWH9aEOrvcZgoK2mPiqNyX6VXdviyc",
  authDomain: "dip-lektion17.firebaseapp.com",
  projectId: "dip-lektion17",
  storageBucket: "dip-lektion17.appspot.com",
  messagingSenderId: "47826620795",
  appId: "1:47826620795:web:616a40fc4941b94c172dde"
};


// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

async function getCars() {
    let carCol=collection(db, 'cars');
    let cars = await getDocs(carCol);

    let carList = cars.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return carList;
}
async function searchCars(maerke) {
    let carCol=collection(db, 'cars');
    let q = query(carCol, where('bilMaerke', '==', maerke));
    let cars = await getDocs(q);

    let carList = cars.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return carList;
}

async function addCar(car) {
    addDoc(collection(db, 'cars'), car);
}

async function deleteCar(id) {
    await deleteDoc(doc(db, 'cars', id));
}







//express endpoints

app.get('/cars', async (request, response) => {
    const cars = await getCars();
    response.render('index', {biler: cars});
  })

app.get('/searchcars', async (request, response) => {
    let maerke = request.query.maerke;
    const cars = await searchCars(maerke);
    response.render('index', {biler: cars});
  })

  app.get('/addCarPage', async(request, response) => {
    response.render('addCar');
  })
  app.post('/addCar', async (request, response) => {
    let {bilMaerke, alder} = request.body;
    console.log(request.body);
    await addCar({bilMaerke, alder});
    response.redirect('/cars');
  })
  app.delete('/deleteCar/:id', async (request, response) => {
    let id = request.params.id;
    await deleteCar(id);
    //response.status(200);
    // response.redirect('back');
    response.redirect('/cars');

  });

  app.listen(8080, ()=>console.log('Lytter nu på port 8080'));