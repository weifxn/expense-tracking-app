import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableWithoutFeedback,
  Keyboard, ScrollView, Image} from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';
import ProgressBar from '../../components/ProgressBar';

export default class Main extends React.Component {
  render() {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ padding: 20 }} />
    
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Image 
     style={{width: 300, height: 300}}
          source={{uri: 'http://www.logodust.com/img/free/logo27.png'}}
       

    />
     <View style={{ padding: 10 }} />
      <Text style={{fontSize: 40, fontWeight: 'bold'}}> RM{(this.props.howMuch)} left for today! </Text>
      <View style={{ padding: 20 }} />
      <ProgressBar
          one={this.props.one}
          two={this.props.two}
          three={this.props.three}
          four={this.props.four}
          onPress={this.props.onPress}
        />
        <View style={{ padding: 20 }} />
      
    

      <CardButton
            name="Add"
            style={styles.cardButtonSmall}
            onPress={this.props.onPressDone}
          />
      
      <View style={{ padding: 10 }} />

    <Text style={{paddingTop: 50, paddingBottom: 10,fontSize: 20, fontWeight: 'bold'}}> 
    Scroll Down
    </Text>

<Image 
     style={{width: 30, height: 30}}
          source={{uri: 'https://static.thenounproject.com/png/10897-200.png'}}
    />
    {this.props.three ? (
      <View>

       <Text style={{textAlign:'center', paddingTop: 50, paddingBottom: 40,fontSize: 40, fontWeight: 'bold'}}> 
    
    </Text>
    <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 
      🎉🎉🎉
      </Text>
    <Text style={{color:'grey' ,textAlign:'center', paddingTop: 1, paddingBottom: 1, fontSize: 30, fontWeight: 'bold'}}> 
   Congratulations on saving
    </Text>
      <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 1,fontSize: 60, fontWeight: 'bold'}}> 
     RM{(this.props.howMuch)} 
      </Text>
      <Text style={{color:'grey' ,textAlign:'center', paddingTop: 1, paddingBottom: 50, fontSize: 30, fontWeight: 'bold'}}> 
      today! 
    </Text>
    <Text style={{color:'grey' ,textAlign:'center', paddingTop: 50, paddingBottom: 1,fontSize: 30, fontWeight: 'bold'}}> 
      You'll just have to
    </Text>
      
    <Text style={{color:'grey' ,textAlign:'center', paddingTop: 1, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
    stay consistent for another
    </Text>
      <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 

  {this.props.days} days

  </Text>
  <Text style={{color:'grey' , textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
    and you will have an extra of
    </Text>
  <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 

  RM{this.props.multiplyNew}

  </Text>
  <Text style={{color:'grey' , textAlign:'center', paddingTop: 10, paddingBottom: 120,fontSize: 30, fontWeight: 'bold'}}> 
    by the end of this month!
    </Text>

    </View>

      ):(
      <View>

       <Text style={{textAlign:'center', paddingTop: 50, paddingBottom: 40,fontSize: 40, fontWeight: 'bold'}}> 
    Here are some calculations
    </Text>
    <Text style={{color:'grey' ,textAlign:'center', paddingTop: 30, paddingBottom: 1, fontSize: 30, fontWeight: 'bold'}}> 
    if you spend only 
    </Text>
      <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 
     RM10
      </Text>
      <Text style={{color:'grey' ,textAlign:'center', paddingTop: 30, paddingBottom: 1, fontSize: 30, fontWeight: 'bold'}}> 
      on dinner and save
    </Text>
      <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 
     RM{(this.props.howMuch) - 10} 
      </Text>
    <Text style={{color:'grey' ,textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
    for the rest of the 
    </Text>
      <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 

  {this.props.days} days

  </Text>
  <Text style={{color:'grey' , textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
    you will have an extra of
    </Text>
  <Text style={{textAlign:'center', paddingTop: 10, paddingBottom: 10,fontSize: 60, fontWeight: 'bold'}}> 

  RM{this.props.multiply}

  </Text>
  <Text style={{color:'grey' , textAlign:'center', paddingTop: 10, paddingBottom: 120,fontSize: 30, fontWeight: 'bold'}}> 
    by the end of this month!
    </Text>

    <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 1,fontSize: 30, fontWeight: 'bold'}}> 
    Let's find some
    </Text>
    <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 1,fontSize: 30, fontWeight: 'bold'}}> 
    cheaper restaurants nearby
    </Text>
    <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 120,fontSize: 30, fontWeight: 'bold'}}> 
    for dinner later!
    </Text>

    <View style={styles.card}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Image 
       style={{width: 300, height: 300}}
            source={{uri: 'https://images.says.com/uploads/story_source/source_image/477476/a3e0.jpg'}}
         

      />
     

      <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
        Restaurant Yut Kee
      </Text>
       <CardButton
            name="Directions"
            style={styles.cardButtonSmall}
          />
         </View>
    </View>
     <View style={{ padding: 20 }} />


<View style={styles.card}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Image 
       style={{width: 300, height: 300}}
            source={{uri: 'https://images.says.com/uploads/story_source/source_image/478522/f9d6.jpg'}}
         

      />
     

      <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
        Sai Kee Coffee
      </Text>
       <CardButton
            name="Directions"
            style={styles.cardButtonSmall}
          />
         </View>
    </View>
     <View style={{ padding: 20 }} />

    <View style={styles.card}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Image 
       style={{width: 300, height: 300}}
            source={{uri: 'https://images.says.com/uploads/story_source/source_image/478569/a164.jpg'}}
         

      />
     

      <Text style={{textAlign:'center', paddingTop: 1, paddingBottom: 10,fontSize: 30, fontWeight: 'bold'}}> 
        Noodle Descendents
      </Text>
       <CardButton
            name="Directions"
            style={styles.cardButtonSmall}
          />
         </View>
    </View>
    </View>

      )}

   


      </View>


     </ScrollView>
    );
  }
}