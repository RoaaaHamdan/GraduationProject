import React from 'react';
import { FlatList,ScrollView, View ,Text} from 'react-native';
import { getNews } from '../src1/news';
import Article from '../src1/components/Article';

export default class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true,display1:'flex',display2:'none' };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
      //alert()
      if (global.flagA =='Arab'){
        this.setState({display1:'none',display2:'flex'})
      }
    //  this.getPosts();
    
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <ScrollView
      
      style={{
        backgroundColor:'lavender',
      width:'100%',
      height:'100%'
      }}
      >
      <View
      style={{
        width:'100%',
        height:70,
        backgroundColor:'midnightblue',
        marginBottom:50, 
        justifyContent:'center',
        alignItems:'center'
      }}
      >
      <Text
      style={{
        color:'white',
        fontSize:30,
        fontFamily:'Itim-Regular',
        display:this.state.display1
       
      }}>
Last News
      </Text>
      <Text
      style={{
        color:'white',
        fontSize:30,
        fontFamily:'Itim-Regular',
        display:this.state.display2
       
      }}>
آخر الأخبار      </Text>
      </View>
           <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </ScrollView>
   
    );
  }
}