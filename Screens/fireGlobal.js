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
    
            });

        }

    }//constructor

    get db() {
        return firebase.database().ref('m33');
    }

    refOn = (callback) => {
        this.db
            .limitToLast(50)
            .on('child_added', snapshot => callback(this.parse(snapshot)));
    }//refon
    passwordReset= (email) => {
        return firebase.auth().sendPasswordResetEmail(email)
      }
    parse = (snapshot) => {
        const { user, text ,timestamp  } = snapshot.val();
        const { key: _id } = snapshot;
       // const message = { _id,  text, user };
       // timestamp:firebase.database.ServerValue.TIMESTAMP,
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
   

   
    send = messages => {
        var L;
        for (let i = 0; i < messages.length; i++) {
          const { text,user} = messages[i];
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