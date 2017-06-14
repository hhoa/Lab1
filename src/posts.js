import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions
} from 'react-native';

import Post from './post.js';

class Posts extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      const {height, width} = Dimensions.get('window');
      this.state = {
        isLoading:true,
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        height, width
      };
    }

    componentWillMount() {
      return fetch('https://api.tumblr.com/v2/blog/xkcn.info/posts/photo?api_key=Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseJson.response.posts),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }

      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <ListView
              contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap',}}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <View style={{ width: this.state.width / 2 - 10, height: this.state.height / 2, marginHorizontal: 5 }}><Post row={rowData}/></View>}
            />
        </View>
      );
    }
  }

  export default Posts;
