import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
      // Component for Navbar
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUVFRYhISIbGxsJCQkAAAADAwVHcEwMDAwICAgMDAwNDQ1dXV4NDQ4VFRUZGRkMDA0XFxdEREQqKioWFhcQEBHk83SFAAAAFXRSTlMpOF23//8A2y6n6wjLeEz+axMei5nCqppDAAABL0lEQVR4AXXThxbCMAhA0TQFOrLH/3+rBwOJ87nlarcxm91BQoSdEBG44yTO8NM157dzHpSECeKYQ4r8aYms4By/x0L0LqoAA88aSTcI2F+B30hzScUCyVZa1QQDnBPgTq+5A55FBb7RRw24TUHKOiimRP6wva9DIM0C8ho15Pml+yHFqqDrTuCcgqNP0GDOsdIE4XUfSBeRApMWIIM8PYKjBU7fzyU6Ax+qANlMWjlZhyOuf0iFXjpA8goqvXfdCIn/5xbwnf7R/g8UIytr/oDqI3kG/ScwljZDyMB/A5MwlUpUgLu/QE3jbC5+7IxPYBP4EApZ2Vu7gLJVR87kAxAbkdM52Cdw97gu+IEQtwtBgewHBBYaQ/2D32DOGw2QAd7E+j0Dd3aEVwFSd/zjB+xnGKjy39asAAAAAElFTkSuQmCC"
              alt="..."
              class="img-thumbnail"
            ></img>
            <Navbar.Brand>Stock Analytics Dashboard</Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
}

export default Header