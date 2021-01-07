import React , {Component}from 'react'
import {View ,
   TouchableOpacity
   ,Image
   ,Text,TextInput
  ,FlatList,ScrollView,StyleSheet} from 'react-native';
  import { SearchBar } from 'react-native-elements';

export default class addtoCart extends Component{
constructor(props){


    super(props);
    this.data=[];
    this.data2=[];
    this.total=0;
    this.uri='';
    this.state={
        products:[],
        name:global.username,
        cart:[],
        search: '', isLoading: true,
        display1:'flex',
        display2:'none'


    }
  this.arrayholder = [];  
  this.data=[];


}

componentDidMount(){
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  
    let url23 = 'http://192.168.1.209:8082/getPhe/' ;

    fetch(url23, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
            this.setState(
                {
                isLoading: false});
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              //  alert(json.result.length);
              this.data.push(json.result[t]);
             // alert(json.result[t])
            }
          }
          this.arrayholder = this.data;
         // this.dataSource = this.data;

          //dataSource
        this.setState({dataSource: this.data});
          // alert(this.state.posts[0].post);
        }
      })

.catch(error => { console.error(error);
});
}
search = text => { console.log(text);
};
clear = () => { this.search.clear();
};
SearchFilterFunction(text) {
const newData = this.arrayholder.filter(function(item) { const itemData = item.doctorname ? item.doctorname.toUpperCase() :
''.toUpperCase();
const textData = text.toUpperCase(); return itemData.indexOf(textData) > -1;
});
this.setState({ dataSource: newData, search: text,
});
}
ListViewItemSeparator = () => { 
  return (
<View

/>
);
};
   /* UNSAFE_componentWillMount =()=> {
        this.getProducts();
      }
      getProducts = async () => {
        let url23 = 'http://192.168.1.209:8082/getProducts'+'/'+this.state.name;
    
        fetch(url23, {method: 'GET', body: null})
          .then((response) => response.json())
          .then((json) => {
            {
              var t;
              for (t = 0; t < json.result.length; t++) {

                //  alert(  this.total)
                {
                  if (json.result[t].name =='Thermometer'){
                  this.uri='https://i.ibb.co/Y8zz3VX/rr.jpg';
                  this.data.push({name:json.result[t].name,
                    price:json.result[t].price,
                    uri:this.uri
                   });
                  }
                 else if (json.result[t].name =='Baby food'){
                    this.uri='https://i.ibb.co/R4GSwG8/ser.jpg';
                    this.data.push({name:json.result[t].name,
                      price:json.result[t].price,
                      uri:this.uri
                     });
                    }
                    else if (json.result[t].name =='Hypothermia'){
                      this.uri='https://i.ibb.co/wsD87vL/u.jpg';  
                       this.data.push({name:json.result[t].name,
                      price:json.result[t].price,
                      uri:this.uri
                     });
                      }
                      else if (json.result[t].name =='Baby_Cream'){
                        //  alert('dd');
                        this.uri='https://i.ibb.co/ZJwPVs6/o.jpg';
                        this.data.push({name:json.result[t].name,
                          price:json.result[t].price,
                          uri:this.uri
                         });
                        }
                        else if (json.result[t].name =='Baby_Powder'){
                          //  alert('dd');
                          this.uri='https://i.ibb.co/34cWpkq/s.jpg';
                          this.data.push({name:json.result[t].name,
                            price:json.result[t].price,
                            uri:this.uri
                           });
                          }
                        
                        
                        //https://i.ibb.co/34cWpkq/s.jpg
               
                }
              }
              this.setState({products: this.data});
            }
          });
    
           
      };
    */



render(){
    return(
        <ScrollView
        style={{
            backgroundColor:'white'
        }}
        >
        <View
        style={{
          width:'100%',
          height:70,
          backgroundColor:'midnightblue',
          justifyContent:'center',
          alignItems:'center',
          

        }}
        >
          <Text
          style={{
            color:'white',
            fontSize:20,
            fontFamily:'Grandstander-VariableFont_wght',
            fontWeight:'bold'
          }}>
            Pharmacies
          </Text>
 
        </View>
        <View
        style={{
     display:this.state.display1,
     width:'100%',height:60
   }}>
    <SearchBar

round
searchIcon={{ size: 25 }}
onChangeText={text => this.SearchFilterFunction(text)} onClear={text => this.SearchFilterFunction('')} placeholder="Type Here to Search..." value={this.state.search}


/>
  </View>
  <FlatList data={this.state.dataSource}
    ItemSeparatorComponent={this.ListViewItemSeparator} renderItem={({ item }) => (
        <TouchableOpacity
        style={{ 
    //  height: 0.4,
    width: '89%',
    borderBottomColor: '#141313',
    borderBottomWidth:.5,
    alignSelf:'center',
    height:60
    }}
        onPress={ ()=> 
                
                { 
                  global.Pher=item.name;
                  global.email1=item.email;

                 // alert( global.Pher);
                  if (global.type=='admin'){
                    this.props.navigation.navigate('addProd',{pher:item.name });
                  }
                  else {
                    this.props.navigation.navigate('showProduct',{pher:item.name });

                  }
             
                
}}
        >
    <Text style={styles.textStyle}>{item.name}</Text>

        </TouchableOpacity>
    )}
    enableEmptySections={true}
     style={{ marginTop: 30 }}
    keyExtractor={(item, index) => index.toString()}
    />
      
          <Text
          style={{
            marginTop:100
          }}>

          </Text>
        </ScrollView>
    )
}

}
/**
 *     <TouchableOpacity
          style={{
            backgroundColor:'midnightblue',
            width:150,
            height:55,
            borderRadius:20,alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            marginTop:50

          }}
          onPress={
()=> this.props.navigation.navigate('cart',{products:this.data2,total:this.total})  }
          >
            <Text 
            style={{
              color:'white',
              fontSize:25,
              fontFamily:'Amiri-Regular'


            }}>
              go to cart
            </Text>
          </TouchableOpacity>
         
         
         
 */
const styles = StyleSheet.create({
    itemP:{
    //  backgroundColor:'lightblue',
      //marginTop:20,
     // height:200,
   //   width:'100%',
      //marginLeft:40,
      color:'white',
      fontSize:15
        
    }

})