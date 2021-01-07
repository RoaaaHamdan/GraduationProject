import firebase from 'firebase';


class fire {

    constructor() {
        this.init();
        this.observeAuth();
    }//constructor

    init = () => {
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

    }//init

    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    // 3.
    onAuthStateChanged = user => {
        if (!user) {
            try {
                // 4.
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };


    get db() {
        return firebase.database().ref('messages');
    }

    refOn = (x,callback) => {
        this.db
            .limitToLast(2)
            .on('child_added', snapshot => callback(this.parse(snapshot,x)));
    }//refon

    parse = (snapshot, x) => {
        const { user,timestamp,text} = snapshot.val();
        const { key: _id } = snapshot;
         // const message = { _id,  text, user };
        // timestamp:firebase.database.ServerValue.TIMESTAMP,
        var message = "";
        if((user.user1==x && user.user2==global.username)||(user.user2==x && user.user1==global.username)){
            const createdAt = new Date(timestamp);
            const { timestamp: numberStamp } = snapshot.val();
    
          
            message = {
            _id,
            createdAt,
            text,
            user
        };
    }
    else{
        message={};
    }


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
            const { text, user } = messages[i];
            L = user;
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