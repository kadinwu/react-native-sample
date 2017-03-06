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
  Dimensions
} from 'react-native';
import { Container, Header, DeckSwiper, Card, Fab, CardItem, Left, Right, Body, Icon, Thumbnail, Text, Content, Item, Button, Input, Title, Grid, Col, Row, Footer, FooterTab } from 'native-base';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default class RNSample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "grey"}}>
        <Header>
          <Item>           
            <Input placeholder="Search"/>            
            <Icon name="search"/>                          
            <Button transparent>
              <Icon name="md-more"/>
            </Button>
          </Item>    
        </Header>          
        <Content>     
          <View>
            <Text>
              Good afternoon,
            </Text>
            <Text>
              tenant!
            </Text>
          </View>     
          <Swiper height={300} onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
              dot={<Content style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              activeDot={<Content style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              paginationStyle={{
                bottom: -23, left: null, right: 10
              }} loop>
            <Card>
              <CardItem header style={{backgroundColor: "black"}}>
                <Text style={{color: "white"}}>
                  Active Request
                </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    PC and laptop support                      
                  </Text>
                  <Text>
                    28253 . Opened for management tenant
                  </Text>
                  <Text>
                    xcvbdfygfg
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Grid>
                  <Col>
                    <Text>SUBMITTED</Text>
                  </Col>
                  <Col>                        
                    <Text>76 days ago</Text>                        
                  </Col>
                </Grid>                    
              </CardItem>
              <CardItem footer>
                <Grid>
                  <Col size={50}>                    
                    <Button iconLeft full>
                      <Icon style={{fontSize: 20}} name="ios-chatboxes-outline" />  
                      <Text>Comment</Text>
                      
                    </Button>                      
                  </Col>
                  <Col size={50}>
                     
                    <Button iconLeft full>
                      <Icon style={{fontSize: 40}} name="ios-checkmark" />
                      <Text>Mark as solved</Text>
                      
                    </Button>                     
                  </Col>                    
                </Grid>                    
              </CardItem>
            </Card>
            <Card>
              <CardItem header style={{backgroundColor: "black"}}>
                <Text style={{color: "white"}}>
                  Pending Request
                </Text>
              </CardItem>
            </Card>
            <Card>
              <CardItem header style={{backgroundColor: "black"}}>
                <Text style={{color: "white"}}>
                  Approved Request
                </Text>
              </CardItem>
            </Card>
          </Swiper>

          <Card>
            <CardItem header>
              <Text>Featured</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Row>
                  <Text>(DEMO) Repair my PC Hardware</Text>                      
                </Row>
                <Row>                      
                  <Button style={{marginTop: 10, height: 20}}>
                    <Text>IT SUPPORT OFFERING</Text>
                  </Button>
                </Row>
              </Grid>
            </CardItem>
            <CardItem footer>
              <Text>Featured</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Featured</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Row>
                  <Text>(DEMO) Repair my PC Hardware</Text>                      
                </Row>
                <Row>                      
                  <Button style={{marginTop: 10, height: 20}}>
                    <Text>IT SUPPORT OFFERING</Text>
                  </Button>
                </Row>
              </Grid>
            </CardItem>
            <CardItem footer>
              <Text>Featured</Text>
            </CardItem>
          </Card>
        </Content>



        <Fab>
          <Icon name="md-add" />
        </Fab>

        <Footer>
          <FooterTab style={{backgroundColor: "white", border: "5px solid red"}}>
            <Text>BROWSE CATEGORIES</Text>
          </FooterTab>
        </Footer>
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
