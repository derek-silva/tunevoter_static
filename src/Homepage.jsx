import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Responsive,
  Segment,
  Button,
  Menu
} from "semantic-ui-react";
import whiteLogo from "./images/white.png";
import logo from "./images/dark.png";
import stage from "./images/stage.jpg";

const HomepageHeading = ({ mobile }) => (
  <div>
    <Image style={{ backgroundSize: "cover" }} responsive src={stage} />
    <Header
      as="h1"
      image={whiteLogo}
      inverted
      style={{
        fontSize: mobile ? "4em" : "6em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "0.5em" : "0.5em",
        position: "absolute",
        bottom: mobile ? "65%" : "65%",
        right: mobile ? "65%" : "65%"
      }}
    />
    <Header
      as="h2"
      content="Engage and Understand Your Audience"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
        position: "absolute",
        bottom: mobile ? "50%" : "60%",
        right: mobile ? "60%" : "65%"
      }}
    />
    <Button
      inverted
      color="green"
      onClick={() => (window.location.href = "http://app.tunevoter.com/signup")}
      style={{
        position: "absolute",
        bottom: mobile ? "40%" : "55%",
        right: mobile ? "65%" : "65%"
      }}
    >
      Get Started For Free
    </Button>
  </div>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 500, padding: "1em 0em" }}
          vertical
        >
          <Menu inverted size="small">
            <Menu.Item position="right">
              <Button
                onClick={() =>
                  (window.location.href = "http://app.tunevoter.com/login")
                }
                as="a"
                inverted
              >
                Log in
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = "http://app.tunevoter.com/signup")
                }
                as="a"
                style={{ marginLeft: "0.5em" }}
                color="green"
                inverted
              >
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
          <HomepageHeading />
        </Segment>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 300, padding: "1em 0em" }}
          vertical
        >
          <Menu inverted size="small">
            <Menu.Item position="right">
              <Button
                onClick={() =>
                  (window.location.href = "http://app.tunevoter.com/login")
                }
                as="a"
                inverted
              >
                Log in
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = "http://app.tunevoter.com/signup")
                }
                as="a"
                style={{ marginLeft: "0.5em" }}
                inverted
                color="green"
              >
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
          <HomepageHeading mobile />
        </Segment>
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Homepage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We help companies comprehend thier customers preferences through
              data analytics
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image rounded size="large" src={logo} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Links" />
              <List link inverted>
                <List.Item
                  as="a"
                  onClick={() =>
                    (window.location.href = "http://app.tunevoter.com/signup")
                  }
                >
                  Sign Up
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Homepage;
