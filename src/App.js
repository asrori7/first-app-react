import React from "react";
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import 'bootstrap'
import('bootstrap/dist/css/bootstrap.css')

function App () {
  const description = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  const recents = [1, 2, 3, 4]
  const suggestions = [1, 2, 3]
  const emoticons = [
    { icon: '😄', text: 'laugh' },
    { icon: '👕', text: 'cloth' },
    { icon: '😀', text: 'smile' },
    { icon: '🐑', text: 'sheep' },
    { icon: '✨', text: 'star' },
    { icon: '👍', text: 'jempol' },
  ]

  return (
    <div className="wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li className="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li><a href="#Home1">Home 1</a></li>
              <li><a href="#Home2">Home 2</a></li>
              <li><a href="#Home3">Home 3</a></li>
            </ul>
          </li>
          <li>
            <a href="#abaout">About</a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li><a href="#page1">Page 1</a></li>
              <li><a href="#age2">Page 2</a></li>
              <li><a href="#page3">Page 3</a></li>
            </ul>
          </li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>

        <ul className="list-unstyled CTAs">
            <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
        </ul>
      </nav>

      <div id="content">
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
          <span className="navbar-brand">Rori React</span>
          <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</span>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <span className="dropdown-item">Action</span>
                  <span className="dropdown-item">Another action</span>
                  <span className="dropdown-item">Something else here</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav-scroller bg-white box-shadow">
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
          <marquee>
            <nav className="nav nav-underline">
            {
              emoticons.map((value, e) => {
                return <span
                  className="nav-link"
                  role="img"
                  aria-label="{value.text}"
                  key={e}>
                  { value.icon }
                </span>
              })
            }
            </nav>
          </marquee>
        </div>

        <main role="main" className="container-fluid no-padding">
          <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div className="lh-100">
              <h6 className="mb-0 text-white lh-100">Home</h6>
              <small>Since 2019</small>
            </div>
          </div>

          <div className="my-3 p-3 bg-white rounded box-shadow">
            <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
            {
              recents.map((value, r) => {
                return (
                  <div className="media text-muted pt-3" key={value}>
                    <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded" />
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                      <strong className="d-block text-gray-dark">@username</strong>
                      { description }
                    </p>
                  </div>
                )
              })
            }
            <small className="d-block text-right mt-3">
              <span>All updates</span>
            </small>
          </div>

          <div className="my-3 p-3 bg-white rounded box-shadow">
            <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
            {
              suggestions.map((value, s) => {
                return (
                  <div className="media text-muted pt-3" key={value}>
                    <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded" />
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">Full Name</strong>
                        <span>Follow</span>
                      </div>
                      <span className="d-block">@username</span>
                    </div>
                  </div>
                )
              })
            }
            <small className="d-block text-right mt-3">
              <span>All suggestions</span>
            </small>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
