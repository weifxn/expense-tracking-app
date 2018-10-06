import {StyleSheet, Dimensions} from 'react-native'

const { heigh, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7a77fb',
    // justifyContent: 'center'
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#fff',
    margin: 4,
    padding: 20,
    width: width - 40,
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
    padding: 20,
    fontSize: 24
  },
  inputDesc: {
    textAlignVertical: 'top',
    paddingTop: 20,
    padding: 20,
    fontSize: 18,
    color: "#505051"
  },
  button: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
    color: '#fff'
  },
  cardButton: {
    backgroundColor: '#4b49b2',
    margin: 6,
    width: width - 50,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  cardButtonSmall: {
    backgroundColor: 'black',
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
  cardButtonSmallDelete: {
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
  cardSmall: {
    backgroundColor: '#fff',
    margin: 4,
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
  mainModalFont: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  mainModalFontInput: {
    fontSize: 45,
    fontWeight: 'bold',
    color:'#3d6389'
  }
})