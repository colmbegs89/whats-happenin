import React, { Component } from 'react'
import TwitterTimeline from 'react-twitter-embedded-timeline'

//images
import councillogo from '../img/dcsdc.png'
import headerLogo1 from '../img/FMF-logo2018.png'
import headerLogo2 from '../img/Homecoming-v2.png'
import eventLogo1 from '../img/visit-derry.png'
import eventLogo2 from '../img/clipper18.png'
import pageImage from '../img/about.jpg'

export class About extends Component {

  //Place the body inside of the 'bodyDiv'
 getDefinedBody () {
   let breadcrumb = 'About Derry~Londonderry'
   return (
    <div className='bodyDiv'>
    <div className=' col-lg-1 col-md-1 col-sm-1'/>
      <div className='center-block col-lg-10 col-md-19 col-sm-10 col-xs-12'>
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li className="active">{breadcrumb}</li>
        </ol>
        <div className="row center-block">
          <div className="col-lg-12">
            <h2><img className="img-responsive center-block" src={pageImage} width="1000" height="666" alt="LegenDerry  Maritime Festival - Music  City" /></h2>
            <p><strong>Time Zone: </strong>GMT +1 <strong><br/>
              Currency: </strong>Pound Sterling<br/>
            </p>
            <p>The vibrant  city of Derry~Londonderry is set alongside the banks of the River Foyle in the  North West of Ireland. Close to Strabane, a large rural area dominated by the  heather-clad Sperrin Mountains, the area is a gateway to the famous Irish  coastal routes of the Wild Atlantic Way and the Causeway Coast.</p>
            <p>The area has strong sporting, music, political and cultural connections with two Nobel Prize  winners hailing from the region.&nbsp; <br/>
              Derry is the  only completely walled city in Ireland and the UK and stands at 400 years old.  A visit will encompass 1450 years of history including the Siege of Derry and  the Battle of the Bogside.
            </p>
            <p>Stroll across&nbsp;Peace Bridge&nbsp;which curves across the River Foyle&nbsp; and  leads to Ebrington Square to visit the emerging Waterside area of the city,  home to some of the newest restaurants and bars.Known for its warm hospitality,  a visit to Derry’s lively pubs for a Guinness, live music and plenty of craic  is a must.</p>
            <p>The Sperrin  Mountain range in Strabane&nbsp;is one of Ireland’s largest mountain ranges yet  one of the most unexplored on the Island. It is a designated area of  outstanding natural beauty and very appealing for hikers.</p>
            <p>The Derry  City and Strabane District is a hub of culture, optimism and creativity.&nbsp;  Famed for the kindness and generous spirit of its people, it has the confident  outlook of an area emerging from a troubled past.</p>
            <p>
            </p>
          </div>
        </div>
      </div>
      <div className=' col-lg-1 col-md-1 col-sm-1'/>
    </div>
   )
 }


  render () {
    //below are exmaple of the tags that can be used...edit or remove as neccessary

    let pageHeader = 'About Us'
    let bodyContent = this.getDefinedBody()
    let headerAlt1 = 'Foyle Maritime Festival 2018'
    let headerAlt2 = 'Join Homecoming July 2018'
    let eventAlt2 = 'Clipper 17-18'
    let eventAlt1 = 'Visit Derry'
    let socialHashtags = '#FoyleMaritime | #TeamDLD | #DerryClipper'
    let facebookUrl = 'https://www.facebook.com/foylemaritimefestival'
    let twitterUrl = 'https://twitter.com/foylemaritime'
    let youtubeUrl = 'https://www.youtube.com/channel/UCXxDAlu790v9MnTWyZfjSUQ'
    let instagramUrl = 'https://www.instagram.com/foylemaritime/'
    let twitterWidget = '395843229469270016'
    let mailToAddress = 'foylemaritime@derrystrabane.com'


    return (
      <div className='About'>
        <header>
        <div className='container-fluid'>
          <img id='headerLogo' src={headerLogo1} className='col-xs-6 col-sm-6 col-md-5 col-lg-5' alt={headerAlt1} />
          <img id='headerLogo' src={headerLogo2} className='col-xs-6 col-sm-6 col-md-6 col-lg-6' alt={headerAlt2} />
        </div>
        <div className='nav-wrapper' >
          <nav className='navbar ' >
            <div className='container'>
              <div className='collapse navbar-collapse' >
                <ul className='nav navbar-nav navbar-right'>
                  <li><a className='navText' href='/' >Home</a></li>
                  <li className='dropdown'>
                    <a className='dropdown-toggle navText' data-toggle='dropdown'>Our Story </a>
                    <ul className='dropdown-menu navText'>
                      <li><a className='navText' href='/about' >About</a></li>
                      <li className=' divider'></li>
                      <li><a className='navText' href='/accommodation' >Your Stay</a></li>
                    </ul>
                  </li>
                  <li><a className='navText' href='/contact' >Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="section-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">{pageHeader}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='section' id='recent-projects' >
          <div className='container'>
            <div className='row'>
                {bodyContent}
            </div>
          </div>
        </div>
    <div className='section-colored col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='container'>
            <div className='container clients logo-contain'>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'><img className='img-responsive' src={eventLogo1} alt={eventAlt1}/> </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'> <img className='img-responsive' src={councillogo} alt='Derry City and Strabane District Council'/> </div>
                <span className='col-lg-4 col-md-4 col-sm-4 col-xs-4'><img className='img-responsive' src={eventLogo2} alt={eventAlt2}/></span>
              </div>
            </div>
          </div>
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

export default About