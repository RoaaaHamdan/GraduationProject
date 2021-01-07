import firebase from 'firebase'; 
class Fire {
  constructor() {
    this.init();
    this.observeAuth();
    
  }
  // 2.
  init = () =>{
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
}

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
  get ref() {
    return firebase.database().ref('mass');
  }
  // 2.
  on = (x,callback) =>
      this.ref
        .on('child_added', snapshot => callback(this.parse(snapshot,x)));
       
  parse = snapshot => {
  }
  // 4.
  off() {
    this.ref.off();
  }
 
  parse = (
    snapshot,x
  ) => {
    console.debug(x,global.username);
    // 1.
    const { user} = snapshot.val();

    const { key: _id } = snapshot;
    // 2.
    // 3.
    var message="";
    if((user.user1==x && user.user2==global.username)||(user.user2==x && user.user1==global.username)){
            const timestamp = new Date(numberStamp);

        const { timestamp: numberStamp, text} = snapshot.val();

        message = {
            _id,
            timestamp,
            text,
            user,
          };   
    }else{ 
        
       
        message = {
          
          };   
}
   return message;
  };
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  // 2.
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  
  // 3.
  send = messages => {
    




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
    }
   var datah='';
if(L.name!=0)   {
  console.debug("k");
  datah="You recived new messages from "+L.name;
} else{datah="You recived new messages from "+global.username;}
     };
  // 5.
 append = message => this.ref.push(message);
}
Fire.shared = new Fire();
export default Fire;
