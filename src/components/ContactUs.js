import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <a href={resumeData.socialLinks[0].url} target="_blank">
                  <i className="fa fa-linkedin" /> Linkedin {resumeData.linkedinId}
                </a>
              </h4>
              <h4>
                <a href={resumeData.socialLinks[4].url} target="_blank">
                  <i className="fa fa-envelope" /> Click here to mail me at michealakinbebije@gmail.com
                </a>
              </h4>
              <h4>
                <a href={resumeData.resumeLink} target="_blank">
                  <i className="fa fa-file" /> View or download my resume here
                </a>
              </h4>
              <h4>
                  <i className="fa fa-phone" /> Contact me via phone on +234 901 936 8526
              </h4>
            </div>
          </aside>
        </div>
      </section>;
  }
}