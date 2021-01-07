import * as React from 'react'; import {
    Text, View,
    StyleSheet, FlatList, ActivityIndicator, Platform,TouchableOpacity
    } from 'react-native';
    import { SearchBar } from 'react-native-elements';
    export default class contactList extends React.Component { constructor(props) {
    super(props);
    this.data=[];
    this.state = { search: '', isLoading: true,
    display1:'flex',
    display2:'none'
   };
     this.arrayholder = [];
    }
    componentDidMount() {
      if (global.flagA =='Arab'){
        this.setState({display1:'none',display2:'flex'})
      }
      
        let url23 = 'http://192.168.1.209:8082/getContactlist/' + global.username;

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
    render() {
    return (
    <View style={styles.viewStyle}>
    <View
    style={{
        width:'100%',
        height:70,
        backgroundColor:'lavender',
        justifyContent:'center',
        alignItems:'center',

    }}
    >
        <Text
        style={{
            fontSize:25,
            fontFamily:'Amiri-Regular',
            color:'midnightblue',
            display:this.state.display1

        }}
        >
        Contact List 
        </Text>
        <Text
        style={{
            fontSize:25,
            fontFamily:'Amiri-Regular',
            color:'midnightblue',  
            display:this.state.display2
                  }}
        >
قائمة الأطباء        </Text>
    </View>
  <View
        style={{
     display:this.state.display1
   }}>
    <SearchBar

round
searchIcon={{ size: 25 }}
onChangeText={text => this.SearchFilterFunction(text)} onClear={text => this.SearchFilterFunction('')} placeholder="Type Here to Search..." value={this.state.search}


/>
  </View>
<View
         style={{
     display:this.state.display2
   }}
>
     <SearchBar
 
 round
searchIcon={{ size: 25 }}
onChangeText={text => this.SearchFilterFunction(text)} onClear={text => this.SearchFilterFunction('')} placeholder="اكتب هنا للبحث  ..." value={this.state.search}


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
                  global.user2=item.doctorname;
                 this.props.navigation.navigate('chatfw',{chatee:item.doctorname
                  }
                  );
                
}}
        >
    <Text style={styles.textStyle}>{item.doctorname}</Text>

        </TouchableOpacity>
    )}
    enableEmptySections={true}
     style={{ marginTop: 30 }}
    keyExtractor={(item, index) => index.toString()}
    />
    </View>
    );
    }
    }
    const styles = StyleSheet.create({ 
      viewStyle: {
    justifyContent: 'center', flex: 1,
    backgroundColor: 'lavender',
    },
    textStyle: { padding: 11,
        color:'midnightblue'
    },
    });