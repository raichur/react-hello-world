'use strict';

var React = require('react-native');

var { // Destructing assignment that lets you extract multiple object properties and assign them to variables using a single statement. No more React.StyleSheet, etc.
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 6,
    marginRight: 8,
    flex: 4,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

class SearchPage extends Component {
  render() {
    return ( // JSX is crazy ... awesome
      <View style={styles.container}>
          <Text style={styles.description}>
          Search for houses to buy!
          </Text>
          <Text style={styles.description}>
          Search by place-name, postcode, or search near your location.
          </Text>
          <View style={styles.flowRight}>
            <TextInput
            style={styles.searchInput}
            placeholder='Search via name or postcode'/>
            <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Location</Text>
          </TouchableHighlight>
          <Image source={require('image!house')} style={styles.image}/>
      </View>
    );
  }
}

module.exports = SearchPage;
