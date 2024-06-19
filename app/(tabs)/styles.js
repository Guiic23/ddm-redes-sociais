import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title:{
    top: -15,

  },
  titleContainer: {
   alignItems: 'center',
    gap: 8,
    
  },
  stepContainer: {
    gap: 0,
    marginBottom: 8,
   
    
    alignItems:'center',
  },
  reactLogo: {
    height: 290,
    width: 490,
   
  },
  step:{
    backgroundColor:'black',
    width:440,
    height:80,
    top:20,
    marginLeft: -26,
    borderRadius:50,

  },
  text:{
    fontFamily: 'sans-serif',
    color:'white',
    left:20,
    top:-10,
  },
  imageStyle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    top: -300,
   
   
    top: -30,
    left: 0,
    right: 0,
    bottom: 0,
   
    borderWidth: 1,       // Largura da borda
    borderStyle: 'solid', // Estilo da borda
  },
});

export default styles;
