
import Home from './Home.js'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Signup from './Signup/Signup'

import Forgot from './Forgot/Forgot'
import Post from './Post/Post'
import Faqs from './Faqs/Faqs'
import Contact from './Contact/Contact'
import Create from './Create/Create'
import Profile from './Profile/Profile'
import Edit_profile from './Edit_profile/Edit_profile'
import View_profile from './View_profile/View_profile'
import Change_password from './Change_password/Change_password'
import About from './About/About'
import Privacy_policy from './Privacy_policy/Privacy_policy'
import How_to from './How_to/How_to'
import Accessibility from './Accessibility/Accessibility'
import Terms from './Terms/Terms'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function App() {
  return (
    <div>
      <ScrollToTopOnMount />

      <Router>
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />

          <Route path="/about" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/social" component={Post} />
          <Route path="/post" component={Post} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/support" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/view_profile" component={View_profile} />
          <Route path="/edit_profile" component={Edit_profile} />
          <Route path="/edit_password" component={Change_password} />
          <Route path="/create_post" component={Create} />
          <Route path="/privacy_policy" component={Privacy_policy} />
          <Route path="/about-us" component={About} />
          <Route path="/how_to_use" component={How_to} />
          <Route path="/accessibility" component={Accessibility} />
          <Route path="/terms" component={Terms} />




        </Switch>
        <Footer />

      </Router>
    </div>

  )
}


