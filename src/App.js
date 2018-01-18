import React, { Component } from 'react'
import './App.css'
import Carousel from './components/Carousel.js'
import Events from './components/Events.js'
// Images
import councillogo from './img/dcsdc.png'
import visitDerry from './img/visit-derry.png'
import TwitterTimeline from 'react-twitter-embedded-timeline'
import eventList from  './eventList.js'
import Calendar from './components/Calendar.js'
require('react-big-calendar/lib/css/react-big-calendar.css')


export class App extends Component {
  //Place the body inside of the 'bodyDiv'
  render () {
    //below are exmaple of the tags that can be used...edit or remove as neccessary

    let eventAlt1 = 'Visit Derry'
    let socialHashtags = '#VisitDerry | #YearOfYouth | #DerryClipper'
    let facebookUrl = 'https://en-gb.facebook.com/whatsonderrystrabane/'
    let twitterUrl = 'https://twitter.com/derryvisitor?lang=en'
    let youtubeUrl = 'https://www.youtube.com/channel/UCQyB3imZ6nAmiYOYTFqpyHw'
    let instagramUrl = 'https://www.instagram.com/visitderry/'
    let twitterWidget = '395843229469270016'
    let mailToAddress = 'event@derrystrabane.com'

    // const events = eventJSON
    return (
      <div className='App '>
        <header>
          <div className='container-fluid'>
            <h1>Whats on Derry & Strabane</h1>
          </div>
        </header>
        <div id='body' className='row'>
          <div className='container-fluid'>
            <Carousel />
          </div>
        </div>
        <br />
        <div className='bodyDiv col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <Calendar/>
        </div>
        <div className='section' id='recent-projects' >
          <div className='container'>
              <div className='bodyDiv col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <Events eventInformation={eventList()}/>
            </div>
          </div>
        </div>
        <div className='section-colored col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='container-fluid'>
            <div className='container clients logo-contain'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'> <img className='img-responsive' src={councillogo} alt='Derry City and Strabane District Council'/> </div>
                <span className='col-lg-6 col-md-6 col-sm-6 col-xs-6'><img className='img-responsive' src={visitDerry} alt={eventAlt1}/></span>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <footer>
          <div className='container'>
            <div className='row col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='col-lg-3 col-md-3'>
                <h3>GET SOCIAL</h3>
                <p>{socialHashtags}</p>
                <ul className='list-inline list-unstyled social-networks'>
                  <li>
                    <a href={facebookUrl}>
                      <div className='icon-social icon-social-facebook normal'>
                        <i className='fa fa-facebook'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-facebook'></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={twitterUrl}>
                      <div className='icon-social icon-social-twitter normal'>
                        <i className='fa fa-twitter'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-twitter'></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={youtubeUrl}>
                      <div className='icon-social icon-social-youtube normal'>
                        <i className='fa fa-youtube'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-youtube'></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={instagramUrl}>
                      <div className='icon-social icon-social-instagram normal'>
                        <i className='fa fa-instagram'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-instagram'></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-3'>
                <h3>CONTACT</h3>
                <address>
                  <i className='fa fa-map-marker'></i> Derry City and Strabane District Council<br/>
                  98 Strand Road<br/>
                  Derry, <br/>
                  BT48 7NN <br/>
                  <i className='fa fa-phone'></i> (028) 71 253 253<br/>
                  <a href={'mailto:' + mailToAddress}>{mailToAddress}</a>
                </address>
              </div>
              <div className='col-lg-3 col-md-3'>
                <h3>LATEST TWEETS</h3>
                <div id='tweeter' className='twitter-timeline twitter-timeline-rendered'>
                  <TwitterTimeline widgetId={twitterWidget} chrome='noborders noheader' height={300} />
                </div>
              </div>
              <div className='col-lg-3 col-md-3'>
                <h3>NEWSLETTER            </h3>
                <div className='input-group'>
                  <link href='//cdn-images.mailchimp.com/embedcode/slim-081711.css' rel='stylesheet' type='text/css'/>
                  <div id='mc_embed_signup'>
                    <form action='//derrycityandstrabanedistrict.us9.list-manage.com/subscribe/post?u=af21a5655b0fdf68785275e32&amp;id=4978b17613' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate=''>
                      <div id='mc_embed_signup_scroll'>
                        <label htmlFor='mce-EMAIL'>Subscribe to our mailing list</label>
                        <input type='email' name='EMAIL' className='email' id='mce-EMAIL' placeholder='email address' required=''/>
                        <div >  
                          <input type='text' name='b_af21a5655b0fdf68785275e32_4978b17613' tabIndex='-1' value='' hidden/>
                        </div>
                        <p></p>
                        <div className='clear'><input type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' className='button'/></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
