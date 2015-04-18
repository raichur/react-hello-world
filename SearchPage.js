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
      </View>
    );
  }
}

module.exports = SearchPage;
