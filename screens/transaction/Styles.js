import {StyleSheet, Dimensions,TextInput,Text,View} from 'react-native'
const { heigh, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    // justifyContent: 'center'
    flexDirection: 'column',
    paddingTop:100

  },
  appTitle: {
    color: 'black',
    fontSize: 40,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '450',
    textAlign: 'center'
  },
  tacCode: {
    color: '#fff',
    fontSize: 60,
    
    marginTop: 1,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center'
  },
  withdrawalOK:{
    color:'black',
    fontSize:30
  },
  card: {
    backgroundColor: '#fff',
    margin: 4,
    width: width - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  input: {
    textAlignVertical: 'top',
    padding: 15,
    fontSize: 25,
    },
  checkpw: {
    
  },
  inputDesc: {
    textAlignVertical: 'top',
    paddingTop: 20,
    padding: 20,
    fontSize: 18,
    color: "#505051"
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
    fontSize: 25,
    paddingLeft: 10
  },
  button: {
    fontSize: 20,
    padding: 30,
    textAlign: 'center',
    color: '#fff',
    
  },
  cardButton: {
    backgroundColor: '#4b49b2',
    margin: 6,
    width: width - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  cardButtonMain: {
    backgroundColor: '#4b49b2',
    margin: 6,
    width: (width/2) - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  cardButtonMainDelete: {
    backgroundColor: '#f44259',
    margin: 6,
    width: (width/2) - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
})