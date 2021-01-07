import firebase from 'firebase';


class fire {

    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCpf2U_sxmHBi4mWEsC5w81scSQgf7Fta4",
                authDomain: "allodoctor-aea81.firebaseio.com",
                databaseURL: "https://allodoctor-aea81.firebaseio.com",
                projectId: "allodoctor-aea81",
                storageBucket: "allodoctor-aea81.appspot.com",
                messagingSenderId: "36947740905",
                appId: "1:36947740905:android:e0a0dfaee33a30805f8878",
                //measurementId: "G-CC38GQ379L"

            });

        }

    }//constructor

    get db() {
        return firebase.database().ref('m2');
    }

    refOn = (callback) => {
        this.db
            .limitToLast(4)
            .on('child_added', snapshot => callback(this.parse(snapshot)));
    }//refon
   
    parse = (snapshot) => {
        const { user, text ,timestamp  } = snapshot.val();
        const { key: _id } = snapshot;
       const createdAt = new Date(timestamp);
       const { timestamp: numberStamp}= snapshot.val();
       var message="";
        message = {
            _id,
            createdAt,
            text,
            user
        };

       

        return message;

    };//parse
    refOff() {
        this.db.off();
       }
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
      } //get uid

      get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
      }
   

   
    send = m2 => {
        

    const url =
    'http://192.168.1.209:8082/checkifAvilabile3/' +
global.user2+'/'+global.username;
fetch(url, {method: 'GET', body: null})
.then((response) => response.json())
.then((json) => {
// alert('hell');
{
 if (json.result.length >= 1) {
   //alert('plase choose another user Name ');
 } else {
        
let SendURL =
   'http://192.168.1.209:8082/addContact/' +global.user2+'/'+global.username;

//this.state.emailadd

fetch(SendURL, {method: 'POST', body: null})
.then((response) => response.json)
.then((json) => {
 if (json.result === 'failed') {
   alert('Done');
 } else if (json.result == 'success') {
   alert('Done');
 }
});
 }
}
});




        var L;
        for (let i = 0; i < m2.length; i++) {
          const { text,user} = m2[i];
    L=user;
          // 4.
          const message = {
            text,
            user,
            timestamp: this.timestamp,
                 };
          this.append(message);
        // return message;// =============> try it
        }
    }//send messages

    append = message => this.db.push(message);
}//fire
const firebaseSvc = new fire();
export default firebaseSvc;