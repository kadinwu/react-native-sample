/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions, 
  Image
} from 'react-native';
import { Container, Header, DeckSwiper, ListItem, Card, Fab, CardItem, Left, Right, Body, Icon, Thumbnail, Text, Content, Item, Button, Input, Title, Grid, Col, Row, Footer, FooterTab } from 'native-base';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class RNSample extends Component {
  render() {
    return (      
      <Container style={{backgroundColor: "grey"}}>
        <Thumbnail style={{flex: 1, width: width, height: height}} source={require('./assets/img/category_BackgroundImage14.png')} square={false}>  
          <Item>
            <Input style={{width: width * 0.9}} placeholderTextColor='#c8bcb4' placeholder="Search"/>            
            <Icon style={{color: '#c8bcb4'}} name="search"/> 
            <Icon style={{color: 'white'}} name="md-more"/>
                                                                              
          </Item>           
          <Content>     
            <View style={{alignItems: "center", marginTop: 20, marginBottom: 20}}>
              <Text style={{color: 'white', opacity: 0.6}}>
                Good afternoon,
              </Text>
              <Text style={{color: 'white', opacity: 0.6}}>
                tenant!
              </Text>
            </View>     
            <Swiper height={330} activeDotColor="#626262">
              <Card style={{width: width * 0.9, marginLeft: width * 0.05}}>
                <CardItem header style={{backgroundColor: "black"}}>
                  <Text style={{color: "white"}}>
                    Active Request
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{fontSize: 20, lineHeight: 25, marginBottom: 10}}>
                      PC and laptop support                      
                    </Text>
                    <Text style={{opacity: 0.5}}>
                      28253 . Opened for management tenant
                    </Text>
                    <Text style={{marginTop: 15}}>
                      xcvbdfygfg
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={{marginTop: 20, marginBottom: -10}}>            
                  <Grid>
                    <Col>
                      <Text>SUBMITTED</Text>
                    </Col>
                    <Col>                        
                      <Text style={{textAlign: 'right'}}>76 days ago</Text>                        
                    </Col>
                  </Grid>                    
                </CardItem>
                <CardItem footer>
                  <Grid style={{paddingLeft: -30}}>
                    <Col>
                                     
                      <Button iconLeft transparent bordered full>
                        <Icon style={{fontSize: 18}} name="ios-chatboxes-outline" />  
                        <Text style={{fontSize: 18, color: '#38bfce'}}>Comment</Text>
                        
                      </Button>                                        
                    </Col>
                    <Col>                     
                      <Button iconLeft transparent bordered full>
                        <Icon style={{fontSize: 40}} name="ios-checkmark" />
                        <Text style={{fontSize: 18, color: '#38bfce'}}>Mark as solved</Text>
                        
                      </Button>                     
                    </Col>                    
                  </Grid>                    
                </CardItem>
              </Card>
              <Card style={{width: width * 0.9, marginLeft: width * 0.05}}>
                <CardItem header style={{backgroundColor: "black"}}>
                  <Text style={{color: "white"}}>
                    Pending Request
                  </Text>
                </CardItem>
              </Card>
              <Card style={{width: width * 0.9, marginLeft: width * 0.05}}>
                <CardItem header style={{backgroundColor: "black"}}>
                  <Text style={{color: "white"}}>
                    Approved Request
                  </Text>
                </CardItem>
              </Card>
            </Swiper>

            <Card style={{width: width * 0.96, marginLeft: width * 0.02}}>
              <CardItem header style={{height: 40, marginBottom: -10}}>
                <Text>Featured</Text>
              </CardItem>
              <CardItem>
                <Grid>
                  <Row>
                    <Icon name='ios-desktop' />
                    <Text>(DEMO) Repair my PC Hardware</Text>                      
                  </Row>
                  <Row>                      
                    <Button bordered style={{marginTop: 10, height: 20, backgroundColor: "white"}}>
                      <Text style={{color: "#c03adc"}}>IT SUPPORT OFFERING</Text>
                    </Button>
                  </Row>
                  <Row style={{marginTop: 15}}>
                    <Text>Overview</Text>                
                  </Row>                  
                  <Row>
                    <Text>For the following specific use cases only...</Text>
                  </Row>
                  
                  <Row style={{marginTop: 10}}>
                    <Icon name="ios-briefcase-outline"/>
                    <Text>Emil's new test offering 111</Text>                      
                  </Row>
                  <Row>                      
                    <Button bordered style={{marginTop: 10, height: 20, backgroundColor: "white"}}>
                      <Text style={{color: "#6fbbaa"}}>IT SERVICE OFFERING</Text>
                    </Button>
                  </Row>
                  <Row style={{marginTop: 15}}>
                    <Text>This is the offering for testing...</Text>
                  </Row>
                </Grid>
              </CardItem>             
            </Card>

            <Card style={{width: width * 0.96, marginLeft: width * 0.02}}>
              <CardItem header style={{height: 40, marginBottom: -10}}>
                <Text>Featured</Text>
              </CardItem>
              <CardItem>
                <Grid>
                  <Row>
                    <Icon name='ios-desktop' />
                    <Text>(DEMO) Repair my PC Hardware</Text>                      
                  </Row>
                  <Row>                      
                    <Button bordered style={{marginTop: 10, height: 20, backgroundColor: "white"}}>
                      <Text style={{color: "#c03adc"}}>IT SUPPORT OFFERING</Text>
                    </Button>
                  </Row>
                  <Row style={{marginTop: 15}}>
                    <Text>Overview</Text>                
                  </Row>                  
                  <Row>
                    <Text>For the following specific use cases only...</Text>
                  </Row>
                  
                  <Row style={{marginTop: 10}}>
                    <Icon name="ios-briefcase-outline"/>
                    <Text>Emil's new test offering 111</Text>                      
                  </Row>
                  <Row>                      
                    <Button bordered style={{marginTop: 10, height: 20, backgroundColor: "white"}}>
                      <Text style={{color: "#6fbbaa"}}>IT SERVICE OFFERING</Text>
                    </Button>
                  </Row>
                  <Row style={{marginTop: 15}}>
                    <Text>This is the offering for testing...</Text>
                  </Row>
                </Grid>
              </CardItem>             
            </Card>
          </Content>

          <Fab style={{backgroundColor: "#16a87b"}}>
            <Icon name="md-add" />
          </Fab>

          <Footer>
            <FooterTab style={{backgroundColor: "white"}}>
              <Text style={{marginLeft: 10}}>BROWSE CATEGORIES</Text>
            </FooterTab>
          </Footer>
        </Thumbnail>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: "center",
    color: "red"
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
});

AppRegistry.registerComponent('RNSample', () => RNSample);
