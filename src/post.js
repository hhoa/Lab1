import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  WebView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      like: 'like'
    }

    this.stateLike = this.stateLike.bind(this);
  }

  stateLike() {
    this.setState({like: this.state.like === 'like' ? 'liked' : 'like'});
  }

  render()  {
    console.log(JSON.stringify(this.props.row.photos[0].original_size.url));
    return (

      <View>
        <Text style={{alignSelf: 'flex-end', marginBottom: 10, fontWeight: 'bold'}}>{moment(this.props.row.timestamp).fromNow()}</Text>
        <View style={{borderBottomWidth: 2, marginBottom: 5}}/>
        <TouchableOpacity onPress={this.stateLike}>
          <Image
            style={{width: 150, height: 150, alignSelf: 'center'}}
            source={{uri: this.props.row.photos[0].original_size.url }}
          />
        </TouchableOpacity>
        <Text style={{color: 'red'}}>{this.state.like}</Text>
        <Text>{this.props.row.summary}</Text>
        <View style={{borderBottomWidth: 2, marginHorizontal: 20}}/>
        <Text>{this.props.row.tags.map(item => `#${item} `)}</Text>

      </View>
    );
  }
}

export default Post;
